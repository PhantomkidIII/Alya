import _0x591281 from 'node-fetch';
const dare = async (_0x539afb, _0x42828e) => {
  const _0x5dc7e2 = _0x539afb.body.match(/^[\\/!#.]/);
  const _0x813351 = _0x5dc7e2 ? _0x5dc7e2[0] : '/';
  const _0x2e2f63 = _0x539afb.body.startsWith(_0x813351) ? _0x539afb.body.slice(_0x813351.length).split(" ")[0].toLowerCase() : '';
  const _0x3699c7 = ["dare", "dares"];
  if (_0x3699c7.includes(_0x2e2f63)) {
    try {
      const _0x45e88a = await _0x591281("https://shizoapi.onrender.com/api/texts/dare?apikey=shizo");
      if (!_0x45e88a.ok) {
        throw new Error("Failed to fetch dares: " + (await _0x45e88a.text()));
      }
      const _0x526d5d = await _0x45e88a.json();
      const _0x1d8fe7 = _0x526d5d.result;
      await _0x42828e.sendMessage(_0x539afb.from, {
        'text': _0x1d8fe7,
        'mentions': [_0x539afb.sender]
      }, {
        'quoted': _0x539afb
      });
    } catch (_0xb30408) {
      console.error("Error fetching dares:", _0xb30408);
      await _0x42828e.sendMessage(_0x539afb.from, {
        'text': "Failed to retrieve dares. Please try again later."
      });
    }
  }
};
export default dare;