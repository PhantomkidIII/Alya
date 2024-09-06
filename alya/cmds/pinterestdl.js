import _0x2673e7 from 'axios';
const sleep = _0x774e34 => new Promise(_0x3587f1 => setTimeout(_0x3587f1, _0x774e34));
const imageCommand = async (_0x214f85, _0x53bda1) => {
  const _0x299964 = _0x214f85.body.match(/^[\\/!#.]/);
  const _0x216ac9 = _0x299964 ? _0x299964[0x0] : '/';
  const _0xcb9911 = _0x214f85.body.startsWith(_0x216ac9) ? _0x214f85.body.slice(_0x216ac9.length).split(" ")[0x0].toLowerCase() : '';
  const _0x313178 = _0x214f85.body.slice(_0x216ac9.length + _0xcb9911.length).trim();
  const _0x3826f4 = ["pintrest", "pint", "pintdl", 'pintrestdl'];
  if (_0x3826f4.includes(_0xcb9911)) {
    if (!_0x313178) {
      return _0x53bda1.sendMessage(_0x214f85.from, {
        'text': "Usage: " + (_0x216ac9 + _0xcb9911) + " <search query>"
      });
    }
    try {
      await _0x214f85.React('📥');
      const _0x3e8357 = await _0x2673e7.get("https://api.maskser.me/api/search/pinterest?text=" + encodeURIComponent(_0x313178));
      const _0x48a517 = _0x3e8357.data.result.slice(0x0, 0xa);
      if (_0x48a517.length === 0x0) {
        return _0x53bda1.sendMessage(_0x214f85.from, {
          'text': "No images found for your search query."
        });
      }
      for (const _0x496794 of _0x48a517) {
        await sleep(0x1f4);
        const _0x12cc43 = await _0x2673e7.get(_0x496794, {
          'responseType': "arraybuffer"
        });
        const _0x4c2e0c = Buffer.from(_0x12cc43.data, "binary");
        await _0x53bda1.sendMessage(_0x214f85.from, {
          'image': _0x4c2e0c
        }, {
          'quoted': _0x214f85
        });
        await _0x214f85.React('✅');
      }
    } catch (_0x3edcf1) {
      console.error("Error fetching images:", _0x3edcf1);
      await _0x53bda1.sendMessage(_0x214f85.from, {
        'text': "Error fetching images."
      });
    }
  }
};
export default imageCommand;