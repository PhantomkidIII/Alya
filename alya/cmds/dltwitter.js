import _0x32d662 from 'node-fetch';
const TwitterDl = async (_0x34a9c7, _0x10abab) => {
  const _0x217d25 = _0x34a9c7.body.match(/^[\\/!#.]/);
  const _0x36d754 = _0x217d25 ? _0x217d25[0] : '/';
  const _0x4c7f8b = _0x34a9c7.body.startsWith(_0x36d754) ? _0x34a9c7.body.slice(_0x36d754.length).split(" ")[0].toLowerCase() : '';
  const _0x31ff09 = _0x34a9c7.body.slice(_0x36d754.length + _0x4c7f8b.length).trim();
  const _0x10972d = ["twitter", "twitterdl", 'tw', "twdl"];
  if (_0x10972d.includes(_0x4c7f8b)) {
    try {
      if (!_0x31ff09[0]) {
        return _0x34a9c7.reply("Hello _*" + _0x34a9c7.pushName + "*_ Please Insert a valid Twitter Video Link!");
      }
      const _0x4b29fd = await _0x32d662("https://api.maher-zubair.tech/download/twitter?url=" + _0x31ff09);
      const _0x4d78c4 = await _0x4b29fd.json();
      await _0x34a9c7.reply("A moment, *Queen_Alya* is Downloading...");
      if (_0x4d78c4 && _0x4d78c4.data && _0x4d78c4.data.HD) {
        const _0x4c29b9 = _0x4d78c4.data.HD;
        await _0x10abab.sendMessage(_0x34a9c7.from, {
          'video': {
            'url': _0x4c29b9
          },
          'caption': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*",
          'gifPlayback': false
        }, {
          'quoted': _0x34a9c7
        });
      }
    } catch (_0x981d9c) {
      console.error("Error fetching video:", _0x981d9c);
      await _0x10abab.sendMessage(_0x34a9c7.from, {
        'text': "Failed to retrieve the video. Please try again later."
      }, {
        'quoted': _0x34a9c7
      });
    }
  }
};
export default TwitterDl;