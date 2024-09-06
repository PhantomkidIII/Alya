import _0xb96ed3 from 'axios';
import _0x55c086 from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x55c086;
const geminiResponse = async (_0x101949, _0x130da8) => {
  const _0x446fbf = _0x101949.body.match(/^[\\/!#.]/);
  const _0x3b4285 = _0x446fbf ? _0x446fbf[0x0] : '/';
  const _0x30f8be = _0x101949.body.startsWith(_0x3b4285) ? _0x101949.body.slice(_0x3b4285.length).split(" ")[0x0].toLowerCase() : '';
  const _0x330433 = _0x101949.body.slice(_0x3b4285.length + _0x30f8be.length).trim();
  const _0x5271d8 = ["gemini", "geminiai"];
  if (_0x5271d8.includes(_0x30f8be)) {
    if (!_0x330433) {
      return _0x101949.reply("Hello *_" + _0x101949.pushName + "_,*\n Queen_Alya Gemini Ai Here.\n Please Ask Me a Question.");
    }
    try {
      await _0x101949.React('🕘');
      await _0x101949.reply("A moment, *Queen_Alya* is Generating Your Gemini Request...");
      const _0x2da2b6 = "https://widipe.com/gemini?text=" + encodeURIComponent(_0x330433);
      const _0x40702d = await _0xb96ed3.get(_0x2da2b6);
      const _0x4f2122 = _0x40702d.data;
      if (_0x4f2122 && _0x4f2122.result) {
        const _0x1a4895 = _0x4f2122.result;
        const _0x264a40 = _0x1a4895 + "\n\n";
        const _0x332693 = _0x1a4895.match(/```([\s\S]*?)```/);
        let _0x296bb0 = [];
        if (_0x332693) {
          const _0x7c0af4 = _0x332693[0x1];
          _0x296bb0.push({
            'name': "cta_copy",
            'buttonParamsJson': JSON.stringify({
              'display_text': "📋 ᴄᴏᴘʏ ɢᴇɴᴇʀᴀᴛᴇᴅ ᴄᴏᴅᴇ",
              'id': "copy_code",
              'copy_code': _0x7c0af4
            })
          });
        }
        _0x296bb0.push({
          'name': "cta_copy",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 ᴄᴏᴘʏ ᴡʜᴏʟᴇ ᴛᴇxᴛ",
            'id': "copy_code",
            'copy_code': _0x264a40
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Queen_Alya 💓",
            'url': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D"
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ᴍᴀɪɴ ᴍᴇɴᴜ",
            'id': ".menu"
          })
        });
        let _0x8485d5 = generateWAMessageFromContent(_0x101949.from, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x1a4895
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
                  'buttons': _0x296bb0
                })
              })
            }
          }
        }, {});
        await _0x130da8.relayMessage(_0x8485d5.key.remoteJid, _0x8485d5.message, {
          'messageId': _0x8485d5.key.id
        });
        await _0x101949.React('✅');
      } else {
        throw new Error("Invalid response from the GPT API.");
      }
    } catch (_0x170203) {
      console.error("Error getting GPT response:", _0x170203.message);
      _0x101949.reply("Error getting response from GPT.");
      await _0x101949.React('❌');
    }
  }
};
export default geminiResponse;