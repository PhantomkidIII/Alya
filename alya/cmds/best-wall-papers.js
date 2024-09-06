import _0x1bf7af from 'node-fetch';
const BestWallPapers = async (_0x4e7105, _0x227031) => {
  const _0x500d1d = _0x4e7105.body.match(/^[\\/!#.]/);
  const _0x10d033 = _0x500d1d ? _0x500d1d[0] : '/';
  const _0x341bf4 = _0x4e7105.body.startsWith(_0x10d033) ? _0x4e7105.body.slice(_0x10d033.length).split(" ")[0].toLowerCase() : '';
  const _0xc8f762 = ["bestwallp", "best-wall-paper", "best-wallp", "random", "random-wallp", "random-wall-paper", "nature", "nature-wallp", "nature-wall-paper", "best-wallpaper"];
  if (_0xc8f762.includes(_0x341bf4)) {
    try {
      await _0x4e7105.reply("A moment, *Queen_Alya* is Generating Your BestWallPaper Search Request...");
      const _0xf577fb = await _0x1bf7af("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
      const _0x116407 = await _0xf577fb.json();
      const _0x2baa86 = _0x116407.urls.regular;
      let _0x4e28fd = {
        'image': {
          'url': _0x2baa86
        },
        'caption': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
      };
      return await _0x227031.sendMessage(_0x4e7105.from, _0x4e28fd, {
        'quoted': _0x4e7105
      });
    } catch (_0xcc8674) {
      console.error("Error from Alya APi:", _0xcc8674);
      await _0x227031.sendMessage(_0x4e7105.from, {
        'text': "Error from alyaAPi. Please try again later."
      }, {
        'quoted': _0x4e7105
      });
    }
  }
};
export default BestWallPapers;