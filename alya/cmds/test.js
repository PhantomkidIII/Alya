import _0x3b5359 from 'node-fetch';
import _0x11a7b1 from 'yt-search';
const test = async (_0x419a78, _0x462427) => {
  try {
    const _0x54c93f = _0x419a78.body.match(/^[\\/!#.]/);
    const _0x9f4a1a = _0x54c93f ? _0x54c93f[0x0] : '/';
    const _0xad99c5 = _0x419a78.body.startsWith(_0x9f4a1a) ? _0x419a78.body.slice(_0x9f4a1a.length).split(" ")[0x0].toLowerCase() : '';
    const _0x2475ed = ["test"];
    if (_0x2475ed.includes(_0xad99c5)) {
      await _0x419a78.React('🕘');
      await _0x419a78.reply("Hello _*" + _0x419a78.pushName + ",*_\n *Queen_Alya* is Sending a Random Test Audio...");
      const _0x2c8b43 = ["AlanWalker-OnMyWay(Clean-Lyrics)ft.SabrinaCarpenter&Farruko", "AlanWalker-Spectre", "OtileBrownft.Prezzo-Ndagukunda", "AlanWalker-Play(Tiktok-EDM)", 'Ride+or+Die-Lexnour', "AlanWalker-Play(TiktokVersion)-SpeedUp"];
      const _0x461e7e = _0x2c8b43[Math.floor(Math.random() * _0x2c8b43.length)];
      const _0x493660 = await _0x11a7b1(_0x461e7e);
      const _0x2fecee = _0x493660.videos[0x0];
      if (!_0x2fecee) {
        await _0x419a78.reply("Audio not found.");
        await _0x419a78.React('❌');
        return;
      }
      const _0x27d1a2 = _0x2fecee.url;
      const _0x45d591 = await _0x3b5359("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x27d1a2) + "&apikey=" + "giftedtechk");
      const _0x84ecbf = await _0x45d591.json();
      if (_0x84ecbf.status === 0xc8 && _0x84ecbf.success) {
        const _0x36d25b = _0x84ecbf.result.download_url;
        const _0x3d7ae3 = await _0x3b5359(_0x36d25b);
        const _0x145879 = await _0x3d7ae3.buffer();
        const _0xaca259 = {
          'audio': _0x145879,
          'mimetype': "audio/mpeg",
          'ptt': true,
          'waveform': [0x3e8, 0x0, 0x3e8, 0x0, 0x3e8, 0x0, 0x3e8],
          'contextInfo': {
            'mentionedJid': [_0x419a78.sender],
            'externalAdReply': {
              'title': "𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐕𝟓 𝐈𝐒 𝐀𝐂𝐓𝐈𝐕𝐄",
              'body': "Powered by Star King",
              'thumbnailUrl': 'https://f.uguu.se/LJlkZhem.jpg',
              'sourceUrl': 'https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D',
              'mediaType': 0x5,
              'renderLargerThumbnail': false
            }
          }
        };
        await _0x462427.sendMessage(_0x419a78.from, _0xaca259, {
          'quoted': _0x419a78
        });
        await _0x419a78.React('✅');
        await _0x419a78.reply("Test Successful, Bot is Active...");
      } else {
        await _0x419a78.reply("Failed to download audio. Please try again later.");
      }
    }
  } catch (_0x22d83a) {
    console.error("Error generating response:", _0x22d83a);
    await _0x419a78.reply("Error processing your request.");
    await _0x419a78.React('❌');
  }
};
export default test;