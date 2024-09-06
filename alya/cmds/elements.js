import _0x31acff from 'node-fetch';
const Element = async (_0x468fbf, _0x41f3ee) => {
  const _0x265755 = _0x468fbf.body.match(/^[\\/!#.]/);
  const _0x459644 = _0x265755 ? _0x265755[0x0] : '/';
  const _0x48a00c = _0x468fbf.body.startsWith(_0x459644) ? _0x468fbf.body.slice(_0x459644.length).split(" ")[0x0].toLowerCase() : '';
  const _0x4e0b68 = _0x468fbf.body.slice(_0x459644.length + _0x48a00c.length).trim();
  const _0xf3200 = ["element", 'elements', 'ele'];
  if (_0xf3200.includes(_0x48a00c)) {
    if (!_0x4e0b68) {
      await _0x468fbf.reply("Hello _*" + _0x468fbf.pushName + "*_ , Please use the example:\n*.element Sodium* or\n*.element Na*");
      return;
    }
    try {
      await _0x468fbf.React('🕘');
      await _0x468fbf.reply("A moment, *Queen_Alya* is Connecting With Alya API...");
      const _0x79b32b = "https://api.popcat.xyz/periodic-table?element=" + encodeURIComponent(_0x4e0b68);
      const _0x4adc09 = await _0x31acff(_0x79b32b);
      const _0x6761aa = await _0x4adc09.json();
      if (_0x6761aa && !_0x6761aa.error) {
        const _0x168a42 = ("\nElement Name: " + _0x6761aa.name + "\nElement Symbol: " + _0x6761aa.symbol + "\nAtomic Number: " + _0x6761aa.atomic_number + "\nAtomic Mass: " + _0x6761aa.atomic_mass + "\nPeriod: " + _0x6761aa.period + "\nPhase: " + _0x6761aa.phase + "\nDiscovered By: " + _0x6761aa.discovered_by + "\n        ").trim();
        if (_0x6761aa.image) {
          await _0x41f3ee.sendMessage(_0x468fbf.from, {
            'image': {
              'url': _0x6761aa.image
            },
            'caption': _0x168a42
          }, {
            'quoted': _0x468fbf
          });
        } else {
          await _0x41f3ee.sendMessage(_0x468fbf.from, {
            'text': _0x168a42
          }, {
            'quoted': _0x468fbf
          });
        }
        await _0x468fbf.React('✅');
      } else {
        await _0x468fbf.React('❌');
        await _0x41f3ee.sendMessage(_0x468fbf.from, {
          'text': "Could not find the element. Please check your input and try again."
        }, {
          'quoted': _0x468fbf
        });
      }
    } catch (_0xa9675a) {
      console.error("Error from Alya API:", _0xa9675a);
      await _0x468fbf.React('❌');
      await _0x41f3ee.sendMessage(_0x468fbf.from, {
        'text': "Failed with an error from Alya API. Please try again later."
      }, {
        'quoted': _0x468fbf
      });
    }
  }
};
export default Element;