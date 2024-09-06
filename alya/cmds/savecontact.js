import { writeFileSync } from 'fs';
const saveContact = async (_0x5b6c60, _0x40d3c8) => {
  const _0x31b039 = _0x5b6c60.body.match(/^[\\/!#.]/);
  const _0x51ac93 = _0x31b039 ? _0x31b039[0x0] : '/';
  const _0x2efd18 = _0x5b6c60.body.startsWith(_0x51ac93) ? _0x5b6c60.body.slice(_0x51ac93.length).split(" ")[0x0].toLowerCase() : '';
  const _0x7514c5 = ["vcf", "contacts", "vcard", 'savecontact'];
  if (_0x7514c5.includes(_0x2efd18)) {
    try {
      await _0x5b6c60.React('🕘');
      await _0x5b6c60.reply("A Moment,*Gifted-Md* is Compiling Contacts, Please Wait...");
      if (!_0x5b6c60.isGroup) {
        return _0x5b6c60.reply("This command can only be used in group chats.");
      }
      const _0x4d40ad = await _0x40d3c8.groupMetadata(_0x5b6c60.from);
      const _0xe0dc4b = _0x4d40ad.participants;
      const _0x122498 = _0x4d40ad.subject;
      if (!_0xe0dc4b || _0xe0dc4b.length === 0x0) {
        return _0x5b6c60.reply("No participants found in this group.");
      }
      let _0x2f56f5 = '';
      _0xe0dc4b.forEach((_0x49048d, _0x5e618f) => {
        const _0x24e71a = "Gifted " + (_0x5e618f + 0x1) || "Gifted " + (_0x5e618f + 0x1);
        const _0x59c64a = _0x49048d.id.split('@')[0x0];
        _0x2f56f5 += "\nBEGIN:VCARD\nVERSION:3.0\nFN:" + _0x24e71a + "\nTEL;TYPE=CELL:" + _0x59c64a + "\nEND:VCARD\n";
      });
      writeFileSync("contacts.vcf", _0x2f56f5);
      await _0x40d3c8.sendMessage(_0x5b6c60.from, {
        'document': {
          'url': "./contacts.vcf"
        },
        'mimetype': "text/x-vcard",
        'fileName': _0x122498 + ".vcf",
        'caption': "VCF FOR: *" + _0x122498 + "*\nGroup contacts saved successfully. Feel free to import the vcf file."
      }, {
        'quoted': _0x5b6c60
      });
      const _0x59da12 = _0xe0dc4b.length;
      await _0x5b6c60.reply("Total number of contacts saved: *" + _0x59da12 + " Contacts*");
      await _0x5b6c60.React('✅');
      await _0x5b6c60.reply('Success...');
    } catch (_0x31de7d) {
      console.error("Error saving contacts:", _0x31de7d.message);
      await _0x5b6c60.reply("Error saving contacts: " + _0x31de7d.message);
      await _0x5b6c60.React('❌');
    }
  }
};
export default saveContact;