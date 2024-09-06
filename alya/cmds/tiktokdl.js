import _0x3d148c, { prepareWAMessageMedia } from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x3d148c;
import _0x4d271d from 'nayan-media-downloader';
const {
  tikdown
} = _0x4d271d;
const searchResultsMap = new Map();
let searchIndex = 0x1;
const tiktokCommand = async (_0x237fe8, _0x62f281) => {
  let _0x274f94;
  const _0x119720 = _0x237fe8?.["message"]?.["templateButtonReplyMessage"]?.["selectedId"];
  const _0x5ed6aa = _0x237fe8?.["message"]?.['interactiveResponseMessage'];
  if (_0x5ed6aa) {
    const _0xfb6e5d = _0x5ed6aa.nativeFlowResponseMessage?.["paramsJson"];
    if (_0xfb6e5d) {
      const _0x4b0bf5 = JSON.parse(_0xfb6e5d);
      _0x274f94 = _0x4b0bf5.id;
    }
  }
  const _0xbfb8cf = _0x274f94 || _0x119720;
  const _0x3173e0 = _0x237fe8.body.match(/^[\\/!#.]/);
  const _0x1e6d4e = _0x3173e0 ? _0x3173e0[0x0] : '/';
  const _0x2ab253 = _0x237fe8.body.startsWith(_0x1e6d4e) ? _0x237fe8.body.slice(_0x1e6d4e.length).split(" ")[0x0].toLowerCase() : '';
  const _0x36e078 = _0x237fe8.body.slice(_0x1e6d4e.length + _0x2ab253.length).trim();
  const _0x47bddf = ["tiktok", 'tt', "ttdl"];
  if (_0x47bddf.includes(_0x2ab253)) {
    if (!_0x36e078) {
      return _0x237fe8.reply("*Hello _" + _0x237fe8.pushName + "_*\nPlease provide a TikTok URL.");
    }
    try {
      await _0x237fe8.React('🕘');
      const _0x131ef8 = await tikdown(_0x36e078);
      if (!_0x131ef8.status) {
        await _0x237fe8.reply("No results found.");
        await _0x237fe8.React('❌');
        return;
      }
      searchResultsMap.set(searchIndex, _0x131ef8);
      const _0x4d8981 = searchResultsMap.get(searchIndex);
      const _0xd86d60 = [{
        'name': 'quick_reply',
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎦 ᴠɪᴅᴇᴏ",
          'id': "media_video_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎵 ᴀᴜᴅɪᴏ",
          'id': "media_audio_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎦 ᴠɪᴅᴇᴏ ᴅᴏᴄᴜᴍᴇɴᴛ",
          'id': "media_video2_" + searchIndex
        })
      }, {
        'name': 'quick_reply',
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎵 ᴀᴜᴅɪᴏ ᴅᴏᴄᴜᴍᴇɴᴛ",
          'id': "media_audio2_" + searchIndex
        })
      }];
      const _0x307427 = generateWAMessageFromContent(_0x237fe8.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': "𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐓𝐈𝐊𝐓𝐎𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑\n\n*ᴛɪᴛᴛʟᴇ:* " + _0x4d8981.data.title + "\n*ᴀᴜᴛʜᴏʀ:* " + _0x4d8981.data.author.nickname + "\n*ᴠɪᴇᴡs:* " + _0x4d8981.data.view + "\n*ᴅᴜʀᴀᴛɪᴏɴ:* " + _0x4d8981.data.duration + "s\nUser: *_" + _0x237fe8.pushName + "_*\n"
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({
                  'image': {
                    'url': 'https://f.uguu.se/LJlkZhem.jpg'
                  }
                }, {
                  'upload': _0x62f281.waUploadToServer
                })),
                'title': '',
                'gifPlayback': true,
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': _0xd86d60
              }),
              'contextInfo': {
                'mentionedJid': [_0x237fe8.sender],
                'forwardingScore': 0x270f,
                'isForwarded': false
              }
            })
          }
        }
      }, {});
      await _0x62f281.relayMessage(_0x307427.key.remoteJid, _0x307427.message, {
        'messageId': _0x307427.key.id
      });
      await _0x237fe8.React('✅');
      searchIndex += 0x1;
    } catch (_0x28a7c7) {
      console.error("Error processing your request:", _0x28a7c7);
      await _0x237fe8.reply("Error processing your request.");
      await _0x237fe8.React('❌');
    }
  } else {
    if (_0xbfb8cf) {
      if (_0xbfb8cf.startsWith("media_")) {
        const _0xca6fe9 = _0xbfb8cf.split('_');
        const _0x3d72e4 = _0xca6fe9[0x1];
        const _0x21b2d5 = parseInt(_0xca6fe9[0x2]);
        const _0x468b92 = searchResultsMap.get(_0x21b2d5);
        if (_0x468b92) {
          try {
            const _0x16a9ab = _0x468b92.data.video;
            const _0x20e9ec = _0x468b92.data.audio;
            let _0x205b7a;
            let _0x2b18d5;
            let _0x5c6964;
            if (_0x3d72e4 === "video") {
              _0x205b7a = await getStreamBuffer(_0x16a9ab);
              _0x2b18d5 = "video/mp4";
            } else {
              if (_0x3d72e4 === 'audio') {
                _0x205b7a = await getStreamBuffer(_0x20e9ec);
                _0x2b18d5 = "audio/mpeg";
              } else {
                if (_0x3d72e4 === "video2") {
                  _0x205b7a = await getStreamBuffer(_0x16a9ab);
                  _0x2b18d5 = "video/mp4";
                } else if (_0x3d72e4 === "audio2") {
                  _0x205b7a = await getStreamBuffer(_0x20e9ec);
                  _0x2b18d5 = "audio/mpeg";
                }
              }
            }
            const _0x686521 = _0x205b7a.length / 1048576;
            if (_0x3d72e4 === "video" && _0x686521 <= 0x12c) {
              _0x5c6964 = {
                'video': _0x205b7a,
                'mimetype': "video/mp4",
                'caption': "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
              };
            } else {
              if (_0x3d72e4 === "audio" && _0x686521 <= 0x12c) {
                _0x5c6964 = {
                  'audio': _0x205b7a,
                  'mimetype': "audio/mpeg",
                  'caption': "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
                };
              } else {
                if (_0x3d72e4 === 'video2' && _0x686521 <= 0x12c) {
                  _0x5c6964 = {
                    'document': _0x205b7a,
                    'mimetype': 'video/mp4',
                    'fileName': "Tiktok.mp4",
                    'caption': "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
                  };
                } else if (_0x3d72e4 === 'audio2' && _0x686521 <= 0x12c) {
                  _0x5c6964 = {
                    'document': _0x205b7a,
                    'mimetype': "audio/mpeg",
                    'fileName': 'Tiktok.mp3',
                    'caption': "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
                  };
                }
              }
            }
            await _0x62f281.sendMessage(_0x237fe8.from, _0x5c6964, {
              'quoted': _0x237fe8
            });
          } catch (_0x22b69a) {
            console.error("Error processing your request:", _0x22b69a);
            await _0x237fe8.reply("Error processing your request.");
            await _0x237fe8.React('❌');
          }
        }
      }
    }
  }
};
const getStreamBuffer = async _0xaa89f9 => {
  const _0x1eed90 = await fetch(_0xaa89f9);
  const _0x5f35c3 = await _0x1eed90.arrayBuffer();
  return Buffer.from(_0x5f35c3);
};
export default tiktokCommand;