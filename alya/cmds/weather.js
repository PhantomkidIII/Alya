import _0x2646d8 from 'axios';
import _0x51d635 from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x51d635;
const weatherCommand = async (_0x75b7ef, _0x269fee) => {
  const _0x597aad = _0x75b7ef.body.match(/^[\\/!#.]/);
  const _0x31bc5c = _0x597aad ? _0x597aad[0x0] : '/';
  const _0xf94c72 = _0x75b7ef.body.startsWith(_0x31bc5c) ? _0x75b7ef.body.slice(_0x31bc5c.length).split(" ")[0x0].toLowerCase() : '';
  const _0x52ae10 = _0x75b7ef.body.slice(_0x31bc5c.length + _0xf94c72.length).trim();
  const _0x302314 = ['weather'];
  if (_0x302314.includes(_0xf94c72)) {
    if (!_0x52ae10) {
      return _0x75b7ef.reply("Hello *_" + _0x75b7ef.pushName + "_,*\nPlease provide a city/location name after the command, e.g., *.weather Nairobi*");
    }
    try {
      await _0x75b7ef.React('🕘');
      await _0x75b7ef.reply("A moment, *Alya* is Generating Your Weather Search Request...");
      const _0x56b1f5 = 'https://widipe.com/weather?text=' + encodeURIComponent(_0x52ae10);
      const _0x59e481 = await _0x2646d8.get(_0x56b1f5);
      const _0x459758 = _0x59e481.data;
      if (_0x459758 && _0x459758.status && _0x459758.result) {
        const {
          location: _0x389e34,
          country: _0x92ad0d,
          weather: _0x32af7c,
          currentTemp: _0x5da21c,
          maxTemp: _0x4c8179,
          minTemp: _0x75f797,
          humidity: _0x286d67,
          windSpeed: _0x290a2d
        } = _0x459758.result;
        const _0xdd3f56 = "*Weather Search Results for " + _0x52ae10 + ":*\n\n*Location:* " + _0x389e34 + "\n*Country:* " + _0x92ad0d + "\n*Weather:* " + _0x32af7c + "\n*Current Temperature:* " + _0x5da21c + "\n*Maximum Temperature:* " + _0x4c8179 + "\n*Minimum Temperature:* " + _0x75f797 + "\n*Humidity:* " + _0x286d67 + "\n*Wind Speed:* " + _0x290a2d + "\n\n> 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀";
        await _0x269fee.sendMessage(_0x75b7ef.from, {
          'text': _0xdd3f56
        }, {
          'quoted': _0x75b7ef
        });
        await _0x75b7ef.React('✅');
      } else {
        throw new Error("Invalid response from the Alya API.");
      }
    } catch (_0x35add7) {
      console.error("Error getting Alya API response:", _0x35add7.message);
      await _0x75b7ef.reply("Error getting response from Alya API.");
      await _0x75b7ef.React('❌');
    }
  }
};
export default weatherCommand;