import _0x2a7e16 from 'axios';
const RandomAnime = async (_0x2960d8, _0x5f273b) => {
  const _0x38bade = _0x2960d8.body.match(/^[\\/!#.]/);
  const _0x24eb05 = _0x38bade ? _0x38bade[0x0] : '/';
  const _0x29352a = _0x2960d8.body.startsWith(_0x24eb05) ? _0x2960d8.body.slice(_0x24eb05.length).split(" ")[0x0].toLowerCase() : '';
  const _0x22094c = ["ranime", "randomanime", "random-anime", 'anime'];
  if (_0x22094c.includes(_0x29352a)) {
    try {
      await _0x2960d8.reply("A moment, *Alya* is Generating Your Random Anime Search Request...");
      const _0x5d055f = await _0x2a7e16.get("https://api.jikan.moe/v4/random/anime");
      const _0x40b612 = _0x5d055f.data.data;
      const _0x201bcf = _0x40b612.title;
      const _0x424ff4 = _0x40b612.synopsis;
      const _0x4a6175 = _0x40b612.images.jpg.image_url;
      const _0x3cc742 = _0x40b612.episodes;
      const _0x40c115 = _0x40b612.status;
      const _0x1791c7 = "📺 Tittle: " + _0x201bcf + "\n🎬 Episodes: " + _0x3cc742 + "\n📡 Status: " + _0x40c115 + "\n📝 Synopsis: " + _0x424ff4 + "\n🔗 URL: " + _0x40b612.url;
      _0x5f273b.sendMessage(_0x2960d8.from, {
        'image': {
          'url': _0x4a6175
        },
        'caption': _0x1791c7
      }, {
        'quoted': _0x2960d8
      });
    } catch (_0xeb5912) {
      console.error("Error from Alya APi:", _0xeb5912);
      await _0x5f273b.sendMessage(_0x2960d8.from, {
        'text': "Error from Alya api Please try again later."
      }, {
        'quoted': _0x2960d8
      });
    }
  }
};
export default RandomAnime;