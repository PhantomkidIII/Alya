import _0x8877b6 from 'node-fetch';
const quotes = async (_0x8e15d2, _0x14aa6b) => {
  const _0x1fad15 = _0x8e15d2.body.match(/^[\\/!#.]/);
  const _0x43b037 = _0x1fad15 ? _0x1fad15[0x0] : '/';
  const _0x42ae94 = _0x8e15d2.body.startsWith(_0x43b037) ? _0x8e15d2.body.slice(_0x43b037.length).split(" ")[0x0].toLowerCase() : '';
  const _0x473fde = ["quote", "quotes"];
  if (_0x473fde.includes(_0x42ae94)) {
    try {
      const _0x1c53d2 = await _0x8877b6("https://shizoapi.onrender.com/api/texts/quotes?apikey=shizo");
      if (!_0x1c53d2.ok) {
        throw new Error("Failed to fetch quotes: " + (await _0x1c53d2.text()));
      }
      const _0x3a5dbf = await _0x1c53d2.json();
      const _0x77f2a3 = _0x3a5dbf.result;
      await _0x14aa6b.sendMessage(_0x8e15d2.from, {
        'text': _0x77f2a3,
        'mentions': [_0x8e15d2.sender]
      }, {
        'quoted': _0x8e15d2
      });
    } catch (_0x29794a) {
      console.error("Error fetching quotes:", _0x29794a);
      await _0x14aa6b.sendMessage(_0x8e15d2.from, {
        'text': "Failed to retrieve quotes. Please try again later."
      });
    }
  }
};
export default quotes;