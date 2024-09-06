import _0x1867fa from 'node-fetch';
const flirting = async (_0x518d64, _0x22d31e) => {
  const _0xcbc455 = _0x518d64.body.match(/^[\\/!#.]/);
  const _0x3a8375 = _0xcbc455 ? _0xcbc455[0x0] : '/';
  const _0x1b04e9 = _0x518d64.body.startsWith(_0x3a8375) ? _0x518d64.body.slice(_0x3a8375.length).split(" ")[0x0].toLowerCase() : '';
  const _0x18b608 = ["flirt"];
  if (_0x18b608.includes(_0x1b04e9)) {
    try {
      const _0x370516 = await _0x1867fa("https://shizoapi.onrender.com/api/texts/flirt?apikey=shizo");
      if (!_0x370516.ok) {
        throw new Error("Failed to fetch flirting Message: " + (await _0x370516.text()));
      }
      const _0x5708a0 = await _0x370516.json();
      const _0x2c72b5 = _0x5708a0.result;
      await _0x22d31e.sendMessage(_0x518d64.from, {
        'text': _0x2c72b5,
        'mentions': [_0x518d64.sender]
      }, {
        'quoted': _0x518d64
      });
    } catch (_0x25e6b5) {
      console.error("Error fetching flirt message:", _0x25e6b5);
      await _0x22d31e.sendMessage(_0x518d64.from, {
        'text': "Failed to retrieve flirt message. Please try again later."
      });
    }
  }
};
export default flirting;