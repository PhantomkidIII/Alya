import _0x124537 from 'node-fetch';
import _0x28dd7a from 'yt-search';
const Play = async (_0x17d818, _0x55f2e7) => {
  const _0x3abbe3 = _0x17d818.body.match(/^[\\/!#.]/);
  const _0x14f14c = _0x3abbe3 ? _0x3abbe3[0] : '/';
  const _0x5cdf8b = _0x17d818.body.startsWith(_0x14f14c) ? _0x17d818.body.slice(_0x14f14c.length).split(" ")[0].toLowerCase() : '';
  const _0x5b1902 = _0x17d818.body.slice(_0x14f14c.length + _0x5cdf8b.length).trim();
  const _0x5133b9 = ["song"];
  if (_0x5133b9.includes(_0x5cdf8b)) {
    if (!_0x5b1902) {
      await _0x17d818.reply("Hello _*" + _0x17d818.pushName + "*_ , Please provide the song name or YouTube URL, eg *.ytmp3 Spectre by Alan Walker* or *.ytmp3 https://www.youtube.com/watch?v=abc123*");
      return;
    }
    try {
      await _0x17d818.React('🕘');
      await _0x17d818.reply("A moment, *Queen_Alya* is Processing from Queen_Alya APi...");
      let _0x3cb59f = _0x5b1902;
      let _0x2dcc25 = [];
      let _0x18f89a = {};
      const _0x3c9524 = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(_0x5b1902);
      if (!_0x3c9524) {
        const _0x2571a2 = await _0x28dd7a(_0x5b1902);
        _0x2dcc25 = _0x2571a2.videos;
        if (_0x2dcc25 && _0x2dcc25.length > 0 && _0x2dcc25[0]) {
          _0x3cb59f = _0x2dcc25[0].url;
        } else {
          await _0x17d818.reply("No audios found.");
          return;
        }
      }
      const _0x424b39 = await _0x124537("https://api.giftedtechnexus.co.ke/api/download/ytmp3?url=" + encodeURIComponent(_0x3cb59f) + "&apikey=" + "gifteddevskk");
      const _0x23ec86 = await _0x424b39.json();
      if (_0x23ec86.status === 200 && _0x23ec86.success) {
        const _0x3c413c = _0x23ec86.result.download_url;
        const _0x24ac32 = await _0x124537(_0x3c413c);
        const _0x1332dc = await _0x24ac32.buffer();
        _0x18f89a = {
          'title': _0x23ec86.result.title,
          'quality': _0x23ec86.result.type
        };
        let _0x2c0849 = {
          'image': {
            'url': _0x3c9524 ? "https://telegra.ph/file/c2a4d8d65722553da4c89.jpg" : _0x2dcc25[0].thumbnail
          },
          'caption': "*𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x18f89a.title + "\n│⿻ *Quality:* " + _0x18f89a.quality + "\n" + (!_0x3c9524 ? "│⿻ *Duration:* " + _0x2dcc25[0].timestamp : '') + "\n" + (!_0x3c9524 ? "│⿻ *Viewers:* " + _0x2dcc25[0].views : '') + "\n" + (!_0x3c9524 ? "│⿻ *Uploaded:* " + _0x2dcc25[0].ago : '') + "\n" + (!_0x3c9524 ? "│⿻ *Artist:* " + _0x2dcc25[0].author.name : '') + "\n╰────────────────◆\n⦿ *Direct Yt Link:* " + _0x3cb59f + "\n\n╭────────────────◆\n│ *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀.*\n╰─────────────────◆"
        };
        await _0x55f2e7.sendMessage(_0x17d818.from, _0x2c0849, {
          'quoted': _0x17d818
        });
        await _0x55f2e7.sendMessage(_0x17d818.from, {
          'document': _0x1332dc,
          'mimetype': "audio/mp4",
          'fileName': _0x2dcc25[0].title + ".mp3",
          'caption': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀.*",
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': false,
              'title': _0x18f89a.title,
              'body': "Powered by star_king",
              'thumbnailUrl': "https://f.uguu.se/LJlkZhem.jpg",
              'sourceUrl': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D",
              'mediaType': 0x1,
              'renderLargerThumbnail': false
            }
          }
        }, {
          'quoted': _0x17d818
        });
        await _0x17d818.React('✅');
        await _0x17d818.reply("Download Success...\nSent Document Audio Format For: *" + _0x18f89a.title + "*\nUse *.play " + _0x5b1902 + "* to download it as normal audio format");
      } else {
        await _0x17d818.reply("Failed to download audio. Please try again later.");
      }
    } catch (_0x3b62a0) {
      console.error("Error from Alya API:", _0x3b62a0);
      await _0x55f2e7.sendMessage(_0x17d818.from, {
        'text': "Failed with error from Alya API. Please try again later."
      });
    }
  }
};
export default Play;