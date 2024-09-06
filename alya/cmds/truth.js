import _0x4964c7 from 'node-fetch';
const truth = async (_0x2b1dc1, _0x2216b0) => {
  const _0x55956c = _0x2b1dc1.body.match(/^[\\/!#.]/);
  const _0x28228a = _0x55956c ? _0x55956c[0x0] : '/';
  const _0xee46b4 = _0x2b1dc1.body.startsWith(_0x28228a) ? _0x2b1dc1.body.slice(_0x28228a.length).split(" ")[0x0].toLowerCase() : '';
  const _0x4f9a08 = ["truth", "truths"];
  if (_0x4f9a08.includes(_0xee46b4)) {
    try {
      const _0x1aeb2a = await _0x4964c7("https://shizoapi.onrender.com/api/texts/truth?apikey=shizo");
      if (!_0x1aeb2a.ok) {
        throw new Error("Failed to fetch quotes: " + (await _0x1aeb2a.text()));
      }
      const _0x73dffe = await _0x1aeb2a.json();
      const _0x4ca74f = _0x73dffe.result;
      await _0x2216b0.sendMessage(_0x2b1dc1.from, {
        'text': _0x4ca74f,
        'mentions': [_0x2b1dc1.sender]
      }, {
        'quoted': _0x2b1dc1
      });
    } catch (_0x46be6c) {
      console.error("Error fetching quotes:", _0x46be6c);
      await _0x2216b0.sendMessage(_0x2b1dc1.from, {
        'text': "Failed to retrieve quotes. Please try again later."
      });
    }
  }
};
export default truth;