import _0x47b820 from 'node-fetch';
import _0x204a93 from 'yt-search';
const Play = async (_0x1407c9, _0x3d9481) => {
  const _0x50dafc = _0x1407c9.body.match(/^[\\/!#.]/);
  const _0x490be5 = _0x50dafc ? _0x50dafc[0] : '/';
  const _0x2e2db3 = _0x1407c9.body.startsWith(_0x490be5) ? _0x1407c9.body.slice(_0x490be5.length).split(" ")[0].toLowerCase() : '';
  const _0x515dd4 = _0x1407c9.body.slice(_0x490be5.length + _0x2e2db3.length).trim();
  const _0x2e7704 = ["play", "ytmp3", "yta"];
  if (_0x2e7704.includes(_0x2e2db3)) {
    if (!_0x515dd4) {
      await _0x1407c9.reply("Hello _*" + _0x1407c9.pushName + "*_ , Please provide the song name or YouTube URL, eg *.ytmp3 Spectre by Alan Walker* or *.ytmp3 https://www.youtube.com/watch?v=abc123*");
      return;
    }
    try {
      await _0x1407c9.React('🕘');
      await _0x1407c9.reply("A moment, *Gifted-Md* is Processing from GiftedAPi...");
      let _0x887539 = _0x515dd4;
      let _0x3b835b = [];
      let _0x5c22c0 = {};
      const _0x44a71b = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(_0x515dd4);
      if (!_0x44a71b) {
        const _0x43aca7 = await _0x204a93(_0x515dd4);
        _0x3b835b = _0x43aca7.videos;
        if (_0x3b835b && _0x3b835b.length > 0 && _0x3b835b[0]) {
          _0x887539 = _0x3b835b[0].url;
        } else {
          await _0x1407c9.reply("No audios found.");
          return;
        }
      }
      const _0x5ae955 = await _0x47b820("https://api.giftedtechnexus.co.ke/api/download/ytmp3?url=" + encodeURIComponent(_0x887539) + "&apikey=" + "gifteddevskk");
      const _0x5b406f = await _0x5ae955.json();
      if (_0x5b406f.status === 200 && _0x5b406f.success) {
        const _0x3e3e9f = _0x5b406f.result.download_url;
        const _0xad879 = await _0x47b820(_0x3e3e9f);
        const _0x28533a = await _0xad879.buffer();
        _0x5c22c0 = {
          'title': _0x5b406f.result.title,
          'quality': _0x5b406f.result.type
        };
        let _0x5b9263 = {
          'image': {
            'url': _0x44a71b ? "https://f.uguu.se/LJlkZhem.jpg" : _0x3b835b[0].thumbnail
          },
          'caption': "*𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n\n╭───────────────◆\n│★⃝• *Title:* " + _0x5c22c0.title + "\n│★⃝• *Quality:* " + _0x5c22c0.quality + "\n" + (!_0x44a71b ? "│★⃝• *Duration:* " + _0x3b835b[0].timestamp : '') + "\n" + (!_0x44a71b ? "│★⃝• *Viewers:* " + _0x3b835b[0].views : '') + "\n" + (!_0x44a71b ? "│★⃝• *Uploaded:* " + _0x3b835b[0].ago : '') + "\n" + (!_0x44a71b ? "│★⃝• *Artist:* " + _0x3b835b[0].author.name : '') + "\n╰────────────────◆\n⦿ *Direct Yt Link:* " + _0x887539 + "\n\n╭────────────────◆\n│ *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*\n╰─────────────────◆"
        };
        await _0x3d9481.sendMessage(_0x1407c9.from, _0x5b9263, {
          'quoted': _0x1407c9
        });
        await _0x3d9481.sendMessage(_0x1407c9.from, {
          'audio': _0x28533a,
          'mimetype': "audio/mp4",
          'caption': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*",
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': false,
              'title': _0x5c22c0.title,
              'body': "Powered by Queen_Alya",
              'thumbnailUrl': "https://f.uguu.se/LJlkZhem.jpg",
              'sourceUrl': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D",
              'mediaType': 0x1,
              'renderLargerThumbnail': false
            }
          }
        }, {
          'quoted': _0x1407c9
        });
        await _0x1407c9.React('✅');
        await _0x1407c9.reply("Download Success...\nSent Normal Audio Format For: *" + _0x5c22c0.title + "*\nUse *.song " + _0x515dd4 + "* to download it as document audio format");
      } else {
        await _0x1407c9.reply("Failed to download audio. Please try again later.");
      }
    } catch (_0x3b802b) {
      console.error("Error from Alya API:", _0x3b802b);
      await _0x3d9481.sendMessage(_0x1407c9.from, {
        'text': "Failed with error from Alya API. Please try again later."
      });
    }
  }
};
export default Play;