import _0x267de1 from 'axios';
const fancyText = async (_0x42e91f, _0x4b8728) => {
  const _0x4338d9 = _0x42e91f.body.match(/^[\\/!#.]/);
  const _0x2c9263 = _0x4338d9 ? _0x4338d9[0x0] : '/';
  const _0x2c1ce6 = _0x42e91f.body.startsWith(_0x2c9263) ? _0x42e91f.body.slice(_0x2c9263.length).split(" ")[0x0].toLowerCase() : '';
  const _0x1830d2 = _0x42e91f.body.slice(_0x2c9263.length + _0x2c1ce6.length).trim();
  const _0x2e3634 = ["fancy", "fancytext"];
  if (_0x2e3634.includes(_0x2c1ce6.split(/\d+/)[0x0])) {
    const _0x124944 = _0x2c1ce6.match(/\d+/);
    const _0xd926b7 = _0x124944 ? parseInt(_0x124944[0x0], 0xa) : null;
    if (!_0x1830d2) {
      await _0x42e91f.reply("Hello *_" + _0x42e91f.pushName + "_,*\n Queen_Alya Fancy Text Converter Here.\n Please use .fancy *_your_text_* or .fancy5 *_your_text_* to get a specific style.");
      return;
    }
    try {
      await _0x42e91f.React('🕘');
      await _0x42e91f.reply("A moment, *Queen_Alya* is Generating Your Fancy Text Styles Request...");
      const _0x4d46e8 = 'https://api-smd.onrender.com/api/styletext?url=' + encodeURIComponent(_0x1830d2);
      const _0x16881a = await _0x267de1.get(_0x4d46e8);
      const _0x1db0c5 = _0x16881a.data;
      if (_0x1db0c5 && _0x1db0c5.result) {
        const _0x341b7f = _0x1db0c5.result;
        if (_0xd926b7 !== null) {
          if (_0xd926b7 > 0x0 && _0xd926b7 <= _0x341b7f.length) {
            const _0x2dd618 = _0x341b7f[_0xd926b7 - 0x1].result;
            await _0x4b8728.sendMessage(_0x42e91f.from, {
              'text': "Fancy Text Style " + _0xd926b7 + ":\n\n" + _0x2dd618
            }, {
              'quoted': _0x42e91f
            });
          } else {
            await _0x42e91f.reply("Invalid style number. Please choose a number between 1 and " + _0x341b7f.length + '.');
          }
        } else {
          let _0x5a2e6c = "Fancy Text Styles:\n\n";
          _0x341b7f.forEach((_0x2766a0, _0x305689) => {
            if (_0x2766a0.result.trim()) {
              _0x5a2e6c += _0x305689 + 0x1 + ". " + _0x2766a0.result + "\n";
            }
          });
          if (_0x5a2e6c.trim() === "Fancy Text Styles:") {
            await _0x42e91f.reply("No valid fancy text styles were generated.");
          } else {
            await _0x4b8728.sendMessage(_0x42e91f.from, {
              'text': _0x5a2e6c.trim()
            }, {
              'quoted': _0x42e91f
            });
          }
        }
        await _0x42e91f.React('✅');
      } else {
        throw new Error("Invalid response from Queen_Alya API.");
      }
    } catch (_0x42b5df) {
      console.error("Error getting Queen_Alya API response:", _0x42b5df.message);
      await _0x42e91f.reply("Error getting response from Queen_Alya API.");
      await _0x42e91f.React('❌');
    }
  }
};
export default fancyText;