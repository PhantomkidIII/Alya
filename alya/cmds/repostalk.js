import 'node-fetch';
import { writeFileSync } from 'fs';
const saveContact = async (_0x227cce, _0x2af8c7) => {
  try {
    const _0x1720cd = _0x227cce.body.match(/^[\\/!#.]/);
    const _0x51fe97 = _0x1720cd ? _0x1720cd[0x0] : '/';
    const _0x96df4 = _0x227cce.body.startsWith(_0x51fe97) ? _0x227cce.body.slice(_0x51fe97.length).split(" ")[0x0].toLowerCase() : '';
    const _0x566a8f = ["vcf", 'vcard', 'contacts', "savecontact"];
    if (!_0x566a8f.includes(_0x96df4)) {
      return;
    }
    await _0x227cce.React('🕘');
    if (_0x96df4 === 'vcard') {
      if (!_0x227cce.quoted) {
        return _0x227cce.reply("Please reply to a user message to save their contact.");
      }
      const _0x239bd7 = _0x227cce.quoted;
      const _0x32d652 = _0x239bd7.sender || _0x239bd7.id;
      const _0x6a245 = _0x239bd7.pushName || _0x239bd7.notify || "Unknown";
      const _0x5af556 = _0x32d652.split('@')[0x0];
      if (!_0x32d652) {
        return _0x227cce.reply("Could not retrieve contact information. Please try again.");
      }
      await _0x2af8c7.sendMessage(_0x227cce.from, {
        'contacts': {
          'displayName': _0x6a245,
          'contacts': [{
            'vcard': "\nBEGIN:VCARD\nVERSION:3.0\nFN:" + _0x6a245 + "\nTEL;TYPE=CELL:" + _0x5af556 + "\nEND:VCARD\n            "
          }]
        }
      }, {
        'quoted': _0x227cce
      });
      await _0x227cce.reply("Contact sent.");
      await _0x227cce.React('✅');
    } else {
      if (!_0x227cce.isGroup) {
        return _0x227cce.reply("This command can only be used in group chats.");
      }
      const _0x72c340 = await _0x2af8c7.groupMetadata(_0x227cce.from);
      const _0x5ecd87 = _0x72c340.participants;
      const _0xb9ba45 = _0x72c340.subject;
      if (!_0x5ecd87 || _0x5ecd87.length === 0x0) {
        return _0x227cce.reply("No participants found in this group.");
      }
      let _0x53bf65 = '';
      _0x5ecd87.forEach((_0xa27525, _0x45c7c8) => {
        const _0x5de958 = "Gifted " + (_0x45c7c8 + 0x1);
        const _0x3423cf = _0xa27525.id.split('@')[0x0];
        _0x53bf65 += "\nBEGIN:VCARD\nVERSION:3.0\nFN:" + _0x5de958 + "\nTEL;TYPE=CELL:" + _0x3423cf + "\nEND:VCARD\n        ";
      });
      writeFileSync('contacts.vcf', _0x53bf65);
      await _0x2af8c7.sendMessage(_0x227cce.from, {
        'document': {
          'url': "./contacts.vcf"
        },
        'mimetype': "text/x-vcard",
        'fileName': _0xb9ba45 + ".vcf",
        'caption': "VCF FOR " + _0xb9ba45 + "\nGroup contacts saved successfully. Feel free to import the vcf file."
      }, {
        'quoted': _0x227cce
      });
      const _0x558ff6 = _0x5ecd87.length;
      await _0x227cce.reply("Total number of contacts saved: " + _0x558ff6);
      await _0x227cce.React('✅');
    }
  } catch (_0x3d5ded) {
    console.error("Error saving contacts:", _0x3d5ded.message);
    await _0x227cce.reply("Error saving contacts: " + _0x3d5ded.message);
    await _0x227cce.React('❌');
  }
};
export default saveContact;