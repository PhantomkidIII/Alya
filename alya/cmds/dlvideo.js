import _0x162e60 from 'node-fetch';
import _0x13e85d from 'yt-search';
const VideoDl = async (_0x17ca10, _0x4053d8) => {
  const _0x5612b9 = _0x17ca10.body.match(/^[\\/!#.]/);
  const _0x30dc2f = _0x5612b9 ? _0x5612b9[0] : '/';
  const _0xf15b27 = _0x17ca10.body.startsWith(_0x30dc2f) ? _0x17ca10.body.slice(_0x30dc2f.length).split(" ")[0].toLowerCase() : '';
  const _0x448846 = _0x17ca10.body.slice(_0x30dc2f.length + _0xf15b27.length).trim();
  const _0xfc4cac = ["video", "ytmp4"];
  if (_0xfc4cac.includes(_0xf15b27)) {
    if (!_0x448846) {
      await _0x17ca10.reply("Hello _*" + _0x17ca10.pushName + "*_ ,\nPlease provide the video name or YouTube URL, \nEg *.video Spectre by Alan Walker* or \n.video https://youtube.com/watch?v=wdJrTQJh1ZQ");
      return;
    }
    try {
      await _0x17ca10.React('🕘');
      await _0x17ca10.reply("A moment, *Queen_Alya* is Processing from Alya APi...");
      let _0x34931b = _0x448846;
      let _0x5e12e0 = [];
      const _0x844b5d = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(_0x448846);
      if (!_0x844b5d) {
        const _0x4e5aa0 = await _0x13e85d(_0x448846);
        _0x5e12e0 = _0x4e5aa0.videos;
        if (_0x5e12e0 && _0x5e12e0.length > 0 && _0x5e12e0[0]) {
          _0x34931b = _0x5e12e0[0].url;
        } else {
          await _0x17ca10.reply("No videos found.");
          return;
        }
      }
      const _0x5d07bb = await _0x162e60("https://api.giftedtechnexus.co.ke/api/download/ytmp4?url=" + encodeURIComponent(_0x34931b) + "&apikey=" + "gifteddevskk");
      const _0x1fc7bc = await _0x5d07bb.json();
      if (_0x1fc7bc.status === 200 && _0x1fc7bc.success) {
        const _0x5a0d7d = _0x1fc7bc.result.download_url;
        const _0x3bbcab = await _0x162e60(_0x5a0d7d);
        const _0x576a99 = await _0x3bbcab.buffer();
        let _0x1d23ed = {
          'image': {
            'url': _0x844b5d ? "https://f.uguu.se/LJlkZhem.jpg" : _0x5e12e0[0].thumbnail
          },
          'caption': "*𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n\n╭───────────────◆\n│★⃝• *Title:* " + _0x5e12e0[0].title + "\n" + (!_0x844b5d ? "│★⃝• *Duration:* " + _0x5e12e0[0].timestamp : '') + "\n" + (!_0x844b5d ? "│★⃝• *Viewers:* " + _0x5e12e0[0].views : '') + "\n" + (!_0x844b5d ? "│★⃝• *Uploaded:* " + _0x5e12e0[0].ago : '') + "\n" + (!_0x844b5d ? "│★⃝• *Artist:* " + _0x5e12e0[0].author.name : '') + "\n╰────────────────◆\n⦿ *Direct Yt Link:* " + _0x34931b + "\n\n╭────────────────◆\n│ *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*\n╰─────────────────◆"
        };
        await _0x4053d8.sendMessage(_0x17ca10.from, _0x1d23ed, {
          'quoted': _0x17ca10
        });
        await _0x4053d8.sendMessage(_0x17ca10.from, {
          'video': _0x576a99,
          'mimetype': "video/mp4",
          'caption': "NORMAL VIDEO FORMAT\n\n> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*",
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': false,
              'title': _0x5e12e0[0].title,
              'body': "Powered by Queen_Alya",
              'thumbnailUrl': "https://f.uguu.se/LJlkZhem.jpg",
              'sourceUrl': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D",
              'mediaType': 0x1,
              'renderLargerThumbnail': false
            }
          }
        }, {
          'quoted': _0x17ca10
        });
        await _0x17ca10.React('✅');
        await _0x17ca10.reply("Download Success...\nSent Normal Video Type For: *" + _0x5e12e0[0].title + "*\nUse *.videodoc " + _0x448846 + "* to download it as document video format");
      } else {
        await _0x17ca10.reply("Failed to download video. Please try again later.");
      }
    } catch (_0x476233) {
      console.error("Error from Alya API:", _0x476233);
      await _0x4053d8.sendMessage(_0x17ca10.from, {
        'text': "Failed with error from Alya API. Please try again later."
      });
    }
  }
};
export default VideoDl;