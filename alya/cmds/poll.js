const Poll = async (_0x1a5a06, _0x4d4e40) => {
  const _0x2160ec = _0x1a5a06.body.match(/^[\\/!#.]/);
  const _0x179ac4 = _0x2160ec ? _0x2160ec[0x0] : '/';
  const _0x3c5a70 = _0x1a5a06.body.startsWith(_0x179ac4) ? _0x1a5a06.body.slice(_0x179ac4.length).split(" ")[0x0].toLowerCase() : '';
  const _0x2741ad = _0x1a5a06.body.slice(_0x179ac4.length + _0x3c5a70.length).trim();
  const _0x2647a3 = ['poll', "polll", "vote", "votes", "polls"];
  if (_0x2647a3.includes(_0x3c5a70)) {
    if (!_0x2741ad) {
      await _0x1a5a06.reply("Hello _*" + _0x1a5a06.pushName + "*_ , Please use the example: *.poll Do you love star king?:Yes, No, Not Sure*");
      return;
    }
    try {
      await _0x1a5a06.React('🕘');
      await _0x1a5a06.reply("A moment, *Alya* is generating your poll...");
      let [_0x4540b9, _0x2994f7] = _0x2741ad.split(':');
      if (_0x2741ad.split(':').length < 0x2) {
        return _0x1a5a06.reply("Incorrect format.\nExample: *.poll Do you love Gifted-Md:Yes, No, Not Sure*");
      }
      let _0x3661ae = _0x2994f7.split(',').map(_0x489313 => _0x489313.trim());
      await _0x4d4e40.sendMessage(_0x1a5a06.from, {
        'poll': {
          'name': _0x4540b9.trim(),
          'values': _0x3661ae
        }
      }, {
        'quoted': _0x1a5a06
      });
      await _0x1a5a06.React('✅');
    } catch (_0x4e9666) {
      console.error("Error from Alya API:", _0x4e9666);
      await _0x1a5a06.React('❌');
      await _0x4d4e40.sendMessage(_0x1a5a06.from, {
        'text': "Failed with an error from Alya API. Please try again later."
      }, {
        'quoted': _0x1a5a06
      });
    }
  }
};
export default Poll;