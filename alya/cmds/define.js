import _0x543735 from 'node-fetch';
const DefineCommand = async (_0x28d4da, _0x2a0457) => {
  const _0x28fbf4 = _0x28d4da.body.match(/^[\\/!#.]/);
  const _0x1c2926 = _0x28fbf4 ? _0x28fbf4[0] : '/';
  const _0xf56a13 = _0x28d4da.body.startsWith(_0x1c2926) ? _0x28d4da.body.slice(_0x1c2926.length).split(" ")[0].toLowerCase() : '';
  const _0x124861 = _0x28d4da.body.slice(_0x1c2926.length + _0xf56a13.length).trim();
  const _0x35394d = ["define", "difine", "defin", "difin", "definition", "defination", "difinition", "difination"];
  if (_0x35394d.includes(_0xf56a13)) {
    if (!_0x124861) {
      return _0x28d4da.reply("Hello *_" + _0x28d4da.pushName + "_,*\nPlease provide a word for definition after the command, e.g., *.define cow*");
    }
    try {
      await _0x28d4da.React('🕘');
      await _0x28d4da.reply("A moment, *Queen_Alya* is Generating Your Definition Search Request...");
      const _0x2f13b1 = "https://api.urbandictionary.com/v0/define?term=" + encodeURIComponent(_0x124861);
      const _0x49cff4 = await _0x543735(_0x2f13b1);
      const _0x26d006 = await _0x49cff4.json();
      if (!_0x49cff4.ok) {
        throw new Error("An error occurred: " + _0x26d006.message);
      }
      if (!_0x26d006.list.length) {
        throw new Error("Word not found in the dictionary.");
      }
      const _0x49fdf4 = _0x26d006.list[0];
      const _0x2f813c = _0x49fdf4.definition;
      const _0x12763c = _0x49fdf4.example ? "\n*Example:* " + _0x49fdf4.example : '';
      const _0x414043 = "*Word:* " + _0x124861 + "\n*Definition:* " + _0x2f813c + _0x12763c;
      await _0x2a0457.sendMessage(_0x28d4da.from, {
        'text': _0x414043
      }, {
        'quoted': _0x28d4da
      });
      await _0x28d4da.React('✅');
    } catch (_0x5e2e63) {
      console.error("Error getting Urban Dictionary response:", _0x5e2e63.message);
      await _0x28d4da.reply("Error getting response: " + _0x5e2e63.message);
      await _0x28d4da.React('❌');
    }
  }
};
export default DefineCommand;