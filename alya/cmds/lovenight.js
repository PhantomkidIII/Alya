import _0x4b21cb from 'node-fetch';
const LoveNight = async (_0x5f18b0, _0x1a1100) => {
  const _0x1a9e1a = _0x5f18b0.body.match(/^[\\/!#.]/);
  const _0x2f5b7c = _0x1a9e1a ? _0x1a9e1a[0x0] : '/';
  const _0x11c9bd = _0x5f18b0.body.startsWith(_0x2f5b7c) ? _0x5f18b0.body.slice(_0x2f5b7c.length).split(" ")[0x0].toLowerCase() : '';
  const _0x59f46e = ["night", "nightlove", 'lovenight', "night-love", "love-night"];
  if (_0x59f46e.includes(_0x11c9bd)) {
    try {
      await _0x5f18b0.react('🕘');
      await _0x5f18b0.reply("A moment, *Queen_Alya* is generating your LoveNight message...");
      const _0x2cd989 = await _0x4b21cb("https://shizoapi.onrender.com/api/texts/lovenight?apikey=shizo");
      if (!_0x2cd989.ok) {
        throw new Error(await _0x2cd989.text());
      }
      const _0x3cefe8 = await _0x2cd989.json();
      if (!_0x3cefe8.result) {
        throw new Error("Invalid response format");
      }
      const _0x5e3eab = _0x3cefe8.result;
      await _0x1a1100.sendMessage(_0x5f18b0.from, {
        'text': _0x5e3eab,
        'mentions': [_0x5f18b0.sender]
      }, {
        'quoted': _0x5f18b0
      });
      await _0x5f18b0.react('✅');
    } catch (_0x280af8) {
      console.error("Error fetching LoveNight message:", _0x280af8.message);
      console.error("Error details:", _0x280af8);
      await _0x1a1100.sendMessage(_0x5f18b0.from, {
        'text': "Failed to retrieve message."
      });
    }
  }
};
export default LoveNight;