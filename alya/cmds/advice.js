import _0x3edd81 from 'node-fetch';
const Advice = async (_0x117221, _0x4e5d82) => {
  const _0x3d7bfa = _0x117221.body.match(/^[\\/!#.]/);
  const _0xc72130 = _0x3d7bfa ? _0x3d7bfa[0] : '/';
  const _0x4a64c6 = _0x117221.body.startsWith(_0xc72130) ? _0x117221.body.slice(_0xc72130.length).split(" ")[0].toLowerCase() : '';
  const _0x1d841b = ["advice"];
  if (_0x1d841b.includes(_0x4a64c6)) {
    try {
      await _0x117221.React('🕘');
      await _0x117221.reply("Fetching...");
      const _0x23902f = await _0x3edd81("https://api.adviceslip.com/advice");
      const _0xcba7c7 = await _0x23902f.json();
      const _0x125d8f = _0xcba7c7.slip.advice;
      await _0x117221.reply("*Here is an advice for you:* \n" + _0x125d8f);
      await _0x117221.React('✅');
    } catch (_0x117410) {
      console.error("Error from Alya API:", _0x117410);
      await _0x4e5d82.sendMessage(_0x117221.from, {
        'text': "Failed with error from Alya API. Please try again later."
      });
    }
  }
};
export default Advice;