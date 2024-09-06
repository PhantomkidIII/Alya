import 'fs';
const getUptime = () => {
  const _0x3a7af6 = process.uptime();
  const _0x2a95a7 = Math.floor(_0x3a7af6 / 86400);
  const _0x37fc82 = Math.floor(_0x3a7af6 % 86400 / 0xe10);
  const _0x1037af = Math.floor(_0x3a7af6 % 0xe10 / 0x3c);
  const _0x1a9071 = Math.floor(_0x3a7af6 % 0x3c);
  return _0x2a95a7 + "d " + _0x37fc82 + "h " + _0x1037af + "m " + _0x1a9071 + 's';
};
const typeWriterEffect = async (_0x1cd970, _0x394c12, _0x37352c, _0xfb2a80) => {
  let _0x29e90d = 0x0;
  const _0x51fdb5 = setInterval(async () => {
    if (_0x29e90d < _0xfb2a80.length) {
      const _0x2f301e = _0xfb2a80.slice(0x0, _0x29e90d + 0x1);
      await _0x394c12.relayMessage(_0x1cd970.from, {
        'protocolMessage': {
          'key': _0x37352c,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x2f301e
          }
        }
      }, {});
      _0x29e90d++;
    } else {
      clearInterval(_0x51fdb5);
    }
  }, 0x96);
};
const serverStatusCommand = async (_0x3bbe4b, _0x44059b) => {
  const _0x30ec04 = _0x3bbe4b.body.match(/^[\\/!#.]/);
  const _0x46d8f2 = _0x30ec04 ? _0x30ec04[0x0] : '/';
  const _0x510555 = _0x3bbe4b.body.startsWith(_0x46d8f2) ? _0x3bbe4b.body.slice(_0x46d8f2.length).split(" ")[0x0].toLowerCase() : '';
  if (["runtime"].includes(_0x510555)) {
    const _0x1c9b8f = getUptime();
    try {
      const _0x10934a = ["*ʟᴏᴀᴅɪɴɢ*", "*ʟᴏᴀᴅɪɴɢ.*", "*ʟᴏᴀᴅɪɴɢ..*", "*ʟᴏᴀᴅɪɴɢ...*"];
      const _0x53c70a = _0x10934a.length;
      let _0x59834f = 0x0;
      const {
        key: _0x560e9d
      } = await _0x44059b.sendMessage(_0x3bbe4b.from, {
        'text': _0x10934a[_0x59834f]
      }, {
        'quoted': _0x3bbe4b
      });
      const _0xf71625 = setInterval(() => {
        _0x59834f = (_0x59834f + 0x1) % _0x53c70a;
        _0x44059b.relayMessage(_0x3bbe4b.from, {
          'protocolMessage': {
            'key': _0x560e9d,
            'type': 0xe,
            'editedMessage': {
              'conversation': _0x10934a[_0x59834f]
            }
          }
        }, {});
      }, 0x1f4);
      await new Promise(_0x21ff4c => setTimeout(_0x21ff4c, 0xfa0));
      clearInterval(_0xf71625);
      const _0x575673 = "*Hello _" + _0x3bbe4b.pushName + "_*\n*Gifted-Md* is Active 24/7\n\n*Uptime:* " + _0x1c9b8f + "\n*Database:* CPanel\n*Platform:* Whatsapp\n\n> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*";
      await typeWriterEffect(_0x3bbe4b, _0x44059b, _0x560e9d, _0x575673);
    } catch (_0x5ae00d) {
      console.error("Error processing your request:", _0x5ae00d);
      await _0x44059b.sendMessage(_0x3bbe4b.from, {
        'text': "Error processing your request."
      }, {
        'quoted': _0x3bbe4b
      });
    }
  }
};
export default serverStatusCommand;