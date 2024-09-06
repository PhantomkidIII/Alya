import _0xa361fc from 'axios';
const TinyUrl = async (_0x2c5c90, _0x53e8b4) => {
  const _0x17438a = _0x2c5c90.body.match(/^[\\/!#.]/);
  const _0x337670 = _0x17438a ? _0x17438a[0x0] : '/';
  const _0xf024e6 = _0x2c5c90.body.startsWith(_0x337670) ? _0x2c5c90.body.slice(_0x337670.length).split(" ")[0x0].toLowerCase() : '';
  const _0x4d40ce = _0x2c5c90.body.slice(_0x337670.length + _0xf024e6.length).trim();
  const _0x26ed55 = ['bittly', "bitly"];
  if (_0x26ed55.includes(_0xf024e6)) {
    if (!_0x4d40ce) {
      return _0x2c5c90.reply("Hello *_" + _0x2c5c90.pushName + "_,*\n Alya Bitly Url Shortener Here.\n Please Provide a URL to shorten.\n*Usage:*\n.bitly https://web.giftedtechnexus.co.ke/sessions");
    }
    try {
      await _0x2c5c90.React('🕘');
      const _0x5794fa = "https://api.maskser.me/api/linkshort/bitly?link=" + encodeURIComponent(_0x4d40ce);
      const _0x35b7dc = await _0xa361fc.get(_0x5794fa);
      const _0x5d75b9 = _0x35b7dc.data.result;
      await _0x53e8b4.sendMessage(_0x2c5c90.from, {
        'text': _0x5d75b9
      }, {
        'quoted': _0x2c5c90
      });
      await _0x2c5c90.React('✅');
    } catch (_0x2ea384) {
      console.error("Error shortening URL:", _0x2ea384.message);
      _0x2c5c90.reply("Error shortening URL.");
      await _0x2c5c90.React('❌');
    }
  }
};
export default TinyUrl;