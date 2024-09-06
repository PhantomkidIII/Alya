import _0x4e183d from 'axios';
const TinyUrl = async (_0x561ed9, _0x5677f1) => {
  const _0x3483fd = _0x561ed9.body.match(/^[\\/!#.]/);
  const _0x13fed9 = _0x3483fd ? _0x3483fd[0x0] : '/';
  const _0x1e5e41 = _0x561ed9.body.startsWith(_0x13fed9) ? _0x561ed9.body.slice(_0x13fed9.length).split(" ")[0x0].toLowerCase() : '';
  const _0x453d58 = _0x561ed9.body.slice(_0x13fed9.length + _0x1e5e41.length).trim();
  const _0x2931ac = ['cuttly', "cutly"];
  if (_0x2931ac.includes(_0x1e5e41)) {
    if (!_0x453d58) {
      return _0x561ed9.reply("Hello *_" + _0x561ed9.pushName + "_,*\n Alya Cuttly Url Shortener Here.\n Please Provide a URL to shorten.\n*Usage:*\n.cuttly https://web.giftedtechnexus.co.ke/sessions");
    }
    try {
      await _0x561ed9.React('🕘');
      const _0x4988ac = 'https://api.maskser.me/api/linkshort/cuttly?link=' + encodeURIComponent(_0x453d58);
      const _0x273093 = await _0x4e183d.get(_0x4988ac);
      const _0x54a85c = _0x273093.data.result;
      await _0x5677f1.sendMessage(_0x561ed9.from, {
        'text': _0x54a85c
      }, {
        'quoted': _0x561ed9
      });
      await _0x561ed9.React('✅');
    } catch (_0x32cc9c) {
      console.error("Error shortening URL:", _0x32cc9c.message);
      _0x561ed9.reply("Error shortening URL.");
      await _0x561ed9.React('❌');
    }
  }
};
export default TinyUrl;