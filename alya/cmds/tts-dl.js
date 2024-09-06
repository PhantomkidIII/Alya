import _0x1fe59e from 'node-fetch';
const TtsDl = async (_0x385044, _0x217a72) => {
  const _0x5eb65c = _0x385044.body.match(/^[\\/!#.]/);
  const _0x311177 = _0x5eb65c ? _0x5eb65c[0x0] : '/';
  const _0x10e352 = _0x385044.body.startsWith(_0x311177) ? _0x385044.body.slice(_0x311177.length).split(" ")[0x0].toLowerCase() : '';
  const _0x2ebbcd = _0x385044.body.slice(_0x311177.length + _0x10e352.length).trim();
  const _0x4f39d1 = ["tts", "tospeech", "to-speech", "text-to-speech"];
  if (_0x4f39d1.includes(_0x10e352)) {
    try {
      if (!_0x2ebbcd[0x0]) {
        return _0x385044.reply("Hello _*" + _0x385044.pushName + "*_ Please insert text to be converted to speech!\n Usage: .tts I am Queen_Alya Whatsapp Bot");
      }
      const _0x1197e8 = await _0x1fe59e("https://api.maskser.me/api/soundoftext?text=" + _0x2ebbcd + "&lang=en-US");
      const _0x596fb6 = await _0x1197e8.json();
      const _0x440714 = _0x596fb6.result;
      _0x217a72.sendMessage(_0x385044.from, {
        'audio': {
          'url': _0x440714
        },
        'mimetype': 'audio/mpeg'
      }, {
        'quoted': _0x385044
      });
    } catch (_0x16d9f9) {
      console.error("Error from Alya APi:", _0x16d9f9);
      await _0x217a72.sendMessage(_0x385044.from, {
        'text': "Error from Alya APi. Please try again later."
      }, {
        'quoted': _0x385044
      });
    }
  }
};
export default TtsDl;