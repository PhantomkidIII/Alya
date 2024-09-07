import _0x303f2a, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x303f2a;
import _0x37df3d from 'nayan-media-downloader';
const {
  ndown
} = _0x37df3d;
const fbSearchResultsMap = new Map();
let fbSearchIndex = 0x1;
const facebookCommand = async (_0xdeeda5, _0x3175e5) => {
  let _0x35b9e5;
  const _0x10bc00 = _0xdeeda5?.["message"]?.["templateButtonReplyMessage"]?.['selectedId'];
  const _0x4e2f22 = _0xdeeda5?.["message"]?.["interactiveResponseMessage"];
  if (_0x4e2f22) {
    const _0x91abb8 = _0x4e2f22.nativeFlowResponseMessage?.['paramsJson'];
    if (_0x91abb8) {
      const _0x461e1d = JSON.parse(_0x91abb8);
      _0x35b9e5 = _0x461e1d.id;
    }
  }
  const _0x55cac7 = _0x35b9e5 || _0x10bc00;
  const _0x5817e9 = _0xdeeda5.body.match(/^[\\/!#.]/);
  const _0x26647d = _0x5817e9 ? _0x5817e9[0x0] : '/';
  const _0x1ac46b = _0xdeeda5.body.startsWith(_0x26647d) ? _0xdeeda5.body.slice(_0x26647d.length).split(" ")[0x0].toLowerCase() : '';
  const _0x32bada = _0xdeeda5.body.slice(_0x26647d.length + _0x1ac46b.length).trim();
  const _0x190b40 = ["facebook", 'fb', "fbdl"];
  if (_0x190b40.includes(_0x1ac46b)) {
    if (!_0x32bada) {
      return _0xdeeda5.reply("Please provide a Facebook video URL.");
    }
    try {
      await _0xdeeda5.React('🕘');
      await _0xdeeda5.reply("A Moment,*Gifted-Md* is Generating Download Buttons, Please Wait...");
      const _0x2feda4 = await ndown(_0x32bada);
      if (!_0x2feda4.status) {
        await _0xdeeda5.reply("No results found.");
        await _0xdeeda5.React('❌');
        return;
      }
      fbSearchResultsMap.set(fbSearchIndex, _0x2feda4);
      const _0x517e5a = _0x2feda4.data.map((_0x3ee18d, _0x4d4e47) => ({
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📥 ᴅᴏᴡɴʟᴏᴀᴅ " + _0x3ee18d.resolution,
          'id': "media_" + _0x4d4e47 + '_' + fbSearchIndex
        })
      }));
      const _0x137193 = generateWAMessageFromContent(_0xdeeda5.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': "*𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐅𝐁 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n\n*Tittle*: " + _0x2feda4.title + "\n*Size*: " + (_0x2feda4.size / 1048576).toFixed(0x2) + " MB"
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({
                  'image': {
                    'url': "https://f.uguu.se/LJlkZhem.jpg"
                  }
                }, {
                  'upload': _0x3175e5.waUploadToServer
                })),
                'title': '',
                'gifPlayback': true,
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': _0x517e5a
              }),
              'contextInfo': {
                'mentionedJid': [_0xdeeda5.sender],
                'forwardingScore': 0x270f,
                'isForwarded': false
              }
            })
          }
        }
      }, {});
      await _0x3175e5.relayMessage(_0x137193.key.remoteJid, _0x137193.message, {
        'messageId': _0x137193.key.id
      });
      await _0xdeeda5.React('✅');
      await _0xdeeda5.reply('Success...');
      fbSearchIndex += 0x1;
    } catch (_0x3c28e6) {
      console.error("Error processing your request:", _0x3c28e6);
      await _0xdeeda5.reply("Error processing your request.");
      await _0xdeeda5.React('❌');
    }
  } else {
    if (_0x55cac7) {
      if (_0x55cac7.startsWith("media_")) {
        const _0x51c507 = _0x55cac7.split('_');
        const _0x49ed3b = parseInt(_0x51c507[0x1]);
        const _0x3d1e8c = parseInt(_0x51c507[0x2]);
        const _0x513c5e = fbSearchResultsMap.get(_0x3d1e8c);
        if (_0x513c5e) {
          try {
            const _0x516e6c = _0x513c5e.data[_0x49ed3b].url;
            let _0x50cd58;
            let _0x47fb83;
            _0x50cd58 = await getStreamBuffer(_0x516e6c);
            'video/mp4';
            const _0x3aba90 = _0x50cd58.length / 1048576;
            if (_0x3aba90 <= 0x12c) {
              _0x47fb83 = {
                'video': _0x50cd58,
                'mimetype': "video/mp4",
                'caption': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
              };
              await _0x3175e5.sendMessage(_0xdeeda5.from, _0x47fb83, {
                'quoted': _0xdeeda5
              });
            } else {
              await _0xdeeda5.reply("The video file size exceeds 300MB.");
            }
          } catch (_0x5a12e5) {
            console.error("Error processing your request:", _0x5a12e5);
            await _0xdeeda5.reply("Error processing your request.");
            await _0xdeeda5.React('❌');
          }
        }
      }
    }
  }
};
const getStreamBuffer = async _0x575ea4 => {
  const _0x1aee37 = await fetch(_0x575ea4);
  const _0x5aa733 = await _0x1aee37.arrayBuffer();
  return Buffer.from(_0x5aa733);
};
export default facebookCommand;