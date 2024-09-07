import { downloadContentFromMessage } from '@whiskeysockets/baileys';
import 'fs';
const vv2 = async (_0x3a927e, _0x1480d6) => {
  try {
    console.log("Quoted message:", _0x3a927e.quoted);
    const _0x620e0 = _0x3a927e.body.match(/^[\\/!#.]/);
    const _0x462778 = _0x620e0 ? _0x620e0[0x0] : '/';
    const _0x167e7b = _0x3a927e.body.startsWith(_0x462778) ? _0x3a927e.body.slice(_0x462778.length).split(" ")[0x0].toLowerCase() : '';
    const _0x1e54a7 = ["rvo2", "vv2", 'reveal2', "antiviewonce2", "viewonce2"];
    if (!_0x1e54a7.includes(_0x167e7b)) {
      return;
    }
    if (!_0x3a927e.quoted || _0x3a927e.quoted.type !== 'view_once' || _0x3a927e.quoted.mtype !== "imageMessage" && _0x3a927e.quoted.mtype !== 'videoMessage' && _0x3a927e.quoted.mtype !== "audioMessage") {
      return _0x3a927e.reply("This is not a view once message");
    }
    const _0x3de9fe = _0x3a927e.quoted.message;
    const _0x17fa56 = Object.keys(_0x3de9fe)[0x0];
    const _0x4dffeb = _0x3de9fe[_0x17fa56].caption || '';
    const _0x58260f = _0x4dffeb + "\n\n> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*";
    const _0x11c1a2 = await downloadContentFromMessage(_0x3de9fe[_0x17fa56], _0x17fa56 === 'imageMessage' ? "image" : "video");
    let _0x15848d = Buffer.from([]);
    for await (const _0x56920d of _0x11c1a2) {
      _0x15848d = Buffer.concat([_0x15848d, _0x56920d]);
    }
    if (/video/.test(_0x17fa56)) {
      await _0x1480d6.sendMessage(_0x3a927e.from, {
        'video': _0x15848d,
        'caption': _0x58260f,
        'contextInfo': {
          'mentionedJid': [_0x3a927e.sender],
          'forwardingScore': 0x270f,
          'isForwarded': false
        }
      }, {
        'quoted': _0x3a927e
      });
    } else {
      if (/image/.test(_0x17fa56)) {
        await _0x1480d6.sendMessage(_0x3a927e.from, {
          'image': _0x15848d,
          'caption': _0x58260f,
          'contextInfo': {
            'mentionedJid': [_0x3a927e.sender],
            'forwardingScore': 0x270f,
            'isForwarded': false
          }
        }, {
          'quoted': _0x3a927e
        });
      } else if (/audio/.test(_0x17fa56)) {
        await _0x1480d6.sendMessage(botUser, {
          'audio': _0x15848d,
          'caption': _0x58260f,
          'contextInfo': {
            'mentionedJid': [_0x3a927e.sender],
            'forwardingScore': 0x270f,
            'isForwarded': false
          }
        }, {
          'quoted': _0x3a927e
        });
      }
    }
  } catch (_0x5145ec) {
    console.error("Error:", _0x5145ec);
    _0x3a927e.reply("An error occurred while processing the command.");
  }
};
export default vv2;