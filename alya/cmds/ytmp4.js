import _0x519b5e from 'node-fetch';
import _0x2a9803 from 'yt-search';
const VideoDl = async (_0x726b20, _0x2dadc7) => {
  const _0x4e29c2 = _0x726b20.body.match(/^[\\/!#.]/);
  const _0x37a10b = _0x4e29c2 ? _0x4e29c2[0] : '/';
  const _0x384f2c = _0x726b20.body.startsWith(_0x37a10b) ? _0x726b20.body.slice(_0x37a10b.length).split(" ")[0].toLowerCase() : '';
  const _0x50fdf4 = _0x726b20.body.slice(_0x37a10b.length + _0x384f2c.length).trim();
  const _0x4191ff = ["videodoc", "ytmp4doc"];
  if (_0x4191ff.includes(_0x384f2c)) {
    if (!_0x50fdf4) {
      await _0x726b20.reply("Hello _*" + _0x726b20.pushName + "*_ ,\nPlease provide the video name or YouTube URL, \nEg *.videodoc Spectre by Alan Walker* or \n.videodoc https://youtube.com/watch?v=wdJrTQJh1ZQ");
      return;
    }
    try {
      await _0x726b20.React('🕘');
      await _0x726b20.reply("A moment, *Gifted-Md* is Processing from GiftedAPi...");
      let _0x1b02b2 = _0x50fdf4;
      let _0x28738d = [];
      const _0x3e71bd = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(_0x50fdf4);
      if (!_0x3e71bd) {
        const _0x58a6a0 = await _0x2a9803(_0x50fdf4);
        _0x28738d = _0x58a6a0.videos;
        if (_0x28738d && _0x28738d.length > 0 && _0x28738d[0]) {
          _0x1b02b2 = _0x28738d[0].url;
        } else {
          await _0x726b20.reply("No videos found.");
          return;
        }
      }
      const _0x690d6f = await _0x519b5e("https://api.giftedtechnexus.co.ke/api/download/ytmp4?url=" + encodeURIComponent(_0x1b02b2) + "&apikey=" + "gifteddevskk");
      const _0x3c0cba = await _0x690d6f.json();
      if (_0x3c0cba.status === 200 && _0x3c0cba.success) {
        const _0x17f5bf = _0x3c0cba.result.download_url;
        const _0x593f26 = await _0x519b5e(_0x17f5bf);
        const _0x5ae067 = await _0x593f26.buffer();
        let _0x471784 = {
          'image': {
            'url': _0x3e71bd ? "https://telegra.ph/file/c2a4d8d65722553da4c89.jpg" : _0x28738d[0].thumbnail
          },
          'caption': "*𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x28738d[0].title + "\n" + (!_0x3e71bd ? "│⿻ *Duration:* " + _0x28738d[0].timestamp : '') + "\n" + (!_0x3e71bd ? "│⿻ *Viewers:* " + _0x28738d[0].views : '') + "\n" + (!_0x3e71bd ? "│⿻ *Uploaded:* " + _0x28738d[0].ago : '') + "\n" + (!_0x3e71bd ? "│⿻ *Artist:* " + _0x28738d[0].author.name : '') + "\n╰────────────────◆\n⦿ *Direct Yt Link:* " + _0x1b02b2 + "\n\n╭────────────────◆\n│ *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐕𝟓*\n╰─────────────────◆"
        };
        await _0x2dadc7.sendMessage(_0x726b20.from, _0x471784, {
          'quoted': _0x726b20
        });
        await _0x2dadc7.sendMessage(_0x726b20.from, {
          'document': _0x5ae067,
          'mimetype': "video/mp4",
          'fileName': _0x28738d[0].title + ".mp4",
          'caption': "DOCUMENT VIDEO FORMAT\n\n> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*",
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': false,
              'title': _0x28738d[0].title,
              'body': "Powered By Gifted Tech",
              'thumbnailUrl': "https://f.uguu.se/LJlkZhem.jpg",
              'sourceUrl': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D",
              'mediaType': 0x1,
              'renderLargerThumbnail': false
            }
          }
        }, {
          'quoted': _0x726b20
        });
        await _0x726b20.React('✅');
        await _0x726b20.reply("Download Success...\nSent Document Video Type For: *" + _0x28738d[0].title + "*\nUse *.video " + _0x50fdf4 + "* to download it as normal video format");
      } else {
        await _0x726b20.reply("Failed to download video. Please try again later.");
      }
    } catch (_0xa96bf2) {
      console.error("Error from alya apiI:", _0xa96bf2);
      await _0x2dadc7.sendMessage(_0x726b20.from, {
        'text': "Failed with error from Alya API. Please try again later."
      });
    }
  }
};
export default VideoDl;