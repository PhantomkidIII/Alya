import 'node-fetch';
const DalleImg = async (_0x47ef57, _0x15bcb3) => {
  const _0x4532f3 = _0x47ef57.body.match(/^[\\/!#.]/);
  const _0x1f47dd = _0x4532f3 ? _0x4532f3[0] : '/';
  const _0x1071d4 = _0x47ef57.body.startsWith(_0x1f47dd) ? _0x47ef57.body.slice(_0x1f47dd.length).split(" ")[0].toLowerCase() : '';
  const _0x29eba8 = _0x47ef57.body.slice(_0x1f47dd.length + _0x1071d4.length).trim();
  const _0x4ea510 = ["dalle", "dalleimg", "dalle-img", "dalleai"];
  if (_0x4ea510.includes(_0x1071d4)) {
    try {
      if (!_0x29eba8[0]) {
        return _0x47ef57.reply("Hello _*" + _0x47ef57.pushName + "*_ Please Insert a text for Dalle to Generate an Image!");
      }
      await _0x47ef57.reply("A moment, *Queen_Alya* is Generating Your Image Request...");
      const _0x37e561 = "https://widipe.com/dalle?text=" + _0x29eba8;
      _0x15bcb3.sendMessage(_0x47ef57.from, {
        'image': {
          'url': _0x37e561
        },
        'caption': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
      }, {
        'quoted': _0x47ef57
      });
    } catch (_0xd7fd10) {
      console.error("Error from Alya APi:", _0xd7fd10);
      await _0x15bcb3.sendMessage(_0x47ef57.from, {
        'text': "Error from Alya APi. Please try again later."
      }, {
        'quoted': _0x47ef57
      });
    }
  }
};
export default DalleImg;