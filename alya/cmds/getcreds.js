import _0x2ea827 from 'axios';
import _0x11cc61 from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x11cc61;
const GetCreds = async (_0x2fcbb, _0x4ff8f0) => {
  const _0x56f370 = _0x2fcbb.body.match(/^[\\/!#.]/);
  const _0x37cf22 = _0x56f370 ? _0x56f370[0x0] : '/';
  const _0x304cc6 = _0x2fcbb.body.startsWith(_0x37cf22) ? _0x2fcbb.body.slice(_0x37cf22.length).split(" ")[0x0].toLowerCase() : '';
  const _0x9c1e5 = _0x2fcbb.body.slice(_0x37cf22.length + _0x304cc6.length).trim();
  const _0x450d70 = ["credspair", "getcreds", "credssession"];
  if (_0x450d70.includes(_0x304cc6)) {
    if (!_0x9c1e5) {
      return _0x2fcbb.reply("Hello *_" + _0x2fcbb.pushName + "_,*\nPlease Provide Phone Number in International Format Without (+) Sign\nEg .credspair 234711111111");
    }
    try {
      await _0x2fcbb.React('🕘');
      await _0x2fcbb.reply("A moment, *Queen_Alya* is Generating Your Pairing Code...");
      const _0x3ec1a5 = "https://gifted-creds-main.onrender.com/code?number=" + encodeURIComponent(_0x9c1e5);
      const _0x1655cd = await _0x2ea827.get(_0x3ec1a5);
      const _0x3fad1b = _0x1655cd.data;
      if (_0x3fad1b && _0x3fad1b.code) {
        const _0x1c8134 = _0x3fad1b.code;
        const _0x2a5ae9 = "Dear *_" + _0x2fcbb.pushName + "_*,\nYour Queen_Alya PairingCode is: *" + _0x1c8134 + "*\nUse it to Link Your WhatsApp Within 1 Minute Before it Expires\nThereafter, Obtain Your Creds.json Deployment File.\nHappy Bot Deployment!!!";
        const _0x138595 = _0x2a5ae9.match(/```([\s\S]*?)```/);
        let _0x1e6e6e = [];
        if (_0x138595) {
          _0x1e6e6e.push({
            'name': "cta_copy",
            'buttonParamsJson': JSON.stringify({
              'display_text': "📋 ᴄᴏᴘʏ ʏᴏᴜʀ ᴄᴏᴅᴇ",
              'id': 'copy_code',
              'copy_code': _0x1c8134
            })
          });
        }
        _0x1e6e6e.push({
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ᴍᴀɪɴ ᴍᴇɴᴜ",
            'id': '.menu'
          })
        }, {
          'name': "cta_copy",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 ᴄᴏᴘʏ ᴘᴀɪʀɪɴɢ ᴄᴏᴅᴇ",
            'id': "copy_code",
            'copy_code': _0x1c8134
          })
        }, {
          'name': 'cta_url',
          'buttonParamsJson': JSON.stringify({
            'display_text': "Queen_Alya 💓",
            'url': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D"
          })
        });
        let _0x126881 = generateWAMessageFromContent(_0x2fcbb.from, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x2a5ae9
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': _0x1e6e6e
                })
              })
            }
          }
        }, {});
        await _0x4ff8f0.relayMessage(_0x126881.key.remoteJid, _0x126881.message, {
          'messageId': _0x126881.key.id
        });
        await _0x2fcbb.React('✅');
      } else {
        throw new Error("Invalid response from alya API.");
      }
    } catch (_0x293e51) {
      console.error("Error getting alya APi response:", _0x293e51.message);
      _0x2fcbb.reply("Error getting response from alya Api.");
      await _0x2fcbb.React('❌');
    }
  }
};
export default GetCreds;