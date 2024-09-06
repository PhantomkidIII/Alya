import _0x1a5cbf from 'yt-search';
import _0x41c730 from 'axios';
import _0x400074, { prepareWAMessageMedia } from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x400074;
const videoMap = new Map();
let videoIndex = 1;
let audioIndex = 1001;
const song = async (_0x273f7b, _0x51f934) => {
  let _0x100cba;
  const _0x4de779 = _0x273f7b?.["message"]?.["templateButtonReplyMessage"]?.["selectedId"];
  const _0x394a6d = _0x273f7b?.["message"]?.["interactiveResponseMessage"];
  if (_0x394a6d) {
    const _0x53a413 = _0x394a6d.nativeFlowResponseMessage?.["paramsJson"];
    if (_0x53a413) {
      const _0x339bbc = JSON.parse(_0x53a413);
      _0x100cba = _0x339bbc.id;
    }
  }
  const _0x3d1c4e = _0x100cba || _0x4de779;
  const _0x1f0214 = _0x273f7b.body.match(/^[\\/!#.]/);
  const _0x42f6d9 = _0x1f0214 ? _0x1f0214[0] : '/';
  const _0x50ed77 = _0x273f7b.body.startsWith(_0x42f6d9) ? _0x273f7b.body.slice(_0x42f6d9.length).split(" ")[0].toLowerCase() : '';
  const _0x43c584 = _0x273f7b.body.slice(_0x42f6d9.length + _0x50ed77.length).trim();
  const _0x365f69 = ["yts", "ytsearch"];
  if (_0x365f69.includes(_0x50ed77)) {
    if (!_0x43c584) {
      return _0x273f7b.reply("Please provide a YouTube URL or search query");
    }
    try {
      await _0x273f7b.React('🕘');
      await _0x273f7b.reply("A moment, *Gifted-Md* is Generating Download Buttons...");
      const _0x5b1c9a = await _0x1a5cbf(_0x43c584);
      const _0x409f3d = _0x5b1c9a.videos.slice(0, 50);
      if (_0x409f3d.length === 0) {
        _0x273f7b.reply("No results found.");
        await _0x273f7b.React('❌');
        return;
      }
      const _0x368f5d = _0x409f3d.map((_0x305bc2, _0x17bdf8) => {
        const _0x54a2d3 = videoIndex + _0x17bdf8;
        videoMap.set(_0x54a2d3, {
          ..._0x305bc2,
          'isAudio': false
        });
        return {
          'header': '',
          'title': _0x305bc2.title,
          'description': '',
          'id': "🎦video_" + _0x54a2d3
        };
      });
      const _0x25fc27 = _0x409f3d.map((_0x1fe504, _0xdc2882) => {
        const _0x24bebf = audioIndex + _0xdc2882;
        videoMap.set(_0x24bebf, {
          ..._0x1fe504,
          'isAudio': true
        });
        return {
          'header': '',
          'title': _0x1fe504.title,
          'description': '',
          'id': "🎵audio_" + _0x24bebf
        };
      });
      const _0x3248a9 = _0x409f3d[0];
      const _0x35bdc6 = _0x3248a9.title;
      const _0x393647 = _0x3248a9.author.name;
      const _0x7e2a5d = _0x3248a9.duration.seconds;
      const _0x957846 = _0x3248a9.views;
      const _0x5005bb = "https://www.youtube.com/watch?v=" + _0x3248a9.videoId;
      const _0x521685 = _0x3248a9.thumbnail;
      const _0x5ddb62 = generateWAMessageFromContent(_0x273f7b.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n\n*Tittle:* _" + _0x35bdc6 + "_\n*Artist:* _" + _0x393647 + "_\n*Duration:* _" + _0x7e2a5d + "s_\n*Views:* _" + _0x957846 + "_\n*Link:* _" + _0x5005bb + '_'
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({
                  'image': {
                    'url': _0x521685
                  }
                }, {
                  'upload': _0x51f934.waUploadToServer
                })),
                'title': '',
                'gifPlayback': true,
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': JSON.stringify({
                    'title': "🎥 sᴇʟᴇᴄᴛ ᴀ ᴠɪᴅᴇᴏ",
                    'sections': [{
                      'title': "😎 Top 50 YouTube Results - Videos",
                      'highlight_label': "🤩 Top 50",
                      'rows': _0x368f5d
                    }]
                  })
                }, {
                  'name': "single_select",
                  'buttonParamsJson': JSON.stringify({
                    'title': "🎧 sᴇʟᴇᴄᴛ ᴀɴ ᴀᴜᴅɪᴏ",
                    'sections': [{
                      'title': "🎶 Top 50 YouTube Results - Audios",
                      'highlight_label': "🤩 Top 50",
                      'rows': _0x25fc27
                    }]
                  })
                }, {
                  'name': "cta_url",
                  'buttonParamsJson': JSON.stringify({
                    'display_text': "Queen_Alya 💓",
                    'url': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D"
                  })
                }]
              }),
              'contextInfo': {
                'mentionedJid': [_0x273f7b.sender],
                'forwardingScore': 0x270f,
                'isForwarded': false
              }
            })
          }
        }
      }, {});
      await _0x51f934.relayMessage(_0x5ddb62.key.remoteJid, _0x5ddb62.message, {
        'messageId': _0x5ddb62.key.id
      });
      await _0x273f7b.React('✅');
      videoIndex += _0x409f3d.length;
      audioIndex += _0x409f3d.length;
    } catch (_0x544715) {
      console.error("Error processing your request:", _0x544715);
      _0x273f7b.reply("Error processing your request.");
      await _0x273f7b.React('❌');
    }
  } else {
    if (_0x3d1c4e) {
      const _0x3f7a87 = _0x3d1c4e.startsWith("🎵audio_");
      const _0x5af217 = parseInt(_0x3d1c4e.replace(_0x3f7a87 ? "🎵audio_" : "🎦video_", ''));
      const _0x3f5aef = videoMap.get(_0x5af217);
      if (_0x3f5aef) {
        try {
          const _0x234972 = _0x3f7a87 ? "https://api.giftedtechnexus.co.ke/api/download/ytmp3?url=https://www.youtube.com/watch?v=" + _0x3f5aef.videoId + "&apikey=" + "gifteddevskk" : "https://api.giftedtechnexus.co.ke/api/download/ytmp4?url=https://www.youtube.com/watch?v=" + _0x3f5aef.videoId + "&apikey=" + "gifteddevskk";
          const _0x1fad62 = await _0x41c730.get(_0x234972);
          const _0x29a1ed = _0x1fad62.data;
          if (_0x29a1ed && _0x29a1ed.result && _0x29a1ed.result.download_url) {
            const _0x4ff252 = _0x29a1ed.result.download_url;
            const _0x3631e9 = _0x29a1ed.result.title;
            const _0x411156 = '' + _0x3631e9 + (_0x3f7a87 ? ".mp3" : ".mp4");
            await _0x51f934.sendMessage(_0x273f7b.from, _0x3f7a87 ? {
              'audio': {
                'url': _0x4ff252
              },
              'mimetype': "audio/mpeg",
              'ptt': false,
              'fileName': _0x411156,
              'contextInfo': {
                'mentionedJid': [_0x273f7b.sender],
                'externalAdReply': {
                  'title': "𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑",
                  'body': "Powered by Queen_Alya",
                  'thumbnailUrl': _0x3f5aef.thumbnail,
                  'sourceUrl': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D",
                  'mediaType': 0x1,
                  'renderLargerThumbnail': false
                }
              }
            } : {
              'video': {
                'url': _0x4ff252
              },
              'mimetype': "video/mp4",
              'caption': "*Tittle:* " + _0x3631e9 + "\n*Artist:* " + _0x3f5aef.author.name + "\n*Duration:* " + _0x3f5aef.duration.seconds + "s\n\n> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
            }, {
              'quoted': _0x273f7b
            });
          } else {
            throw new Error("Invalid response from the API.");
          }
        } catch (_0x30585a) {
          console.error("Error fetching video details:", _0x30585a);
          _0x273f7b.reply("Error processing your request.");
          await _0x273f7b.React('❌');
        }
      }
    }
  }
};
export default song;