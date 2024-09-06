import { GiftedGpt } from 'gifted-gpt';
const gpt4 = new GiftedGpt();
import _0x250301 from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x250301;
const gptResponse = async (_0x335120, _0x3739f0) => {
  const _0x13cfc2 = _0x335120.body.match(/^[\\/!#.]/);
  const _0x2445e9 = _0x13cfc2 ? _0x13cfc2[0] : '/';
  const _0x44f470 = _0x335120.body.startsWith(_0x2445e9) ? _0x335120.body.slice(_0x2445e9.length).split(" ")[0].toLowerCase() : '';
  const _0x1fe06d = _0x335120.body.slice(_0x2445e9.length + _0x44f470.length).trim();
  const _0xa64866 = ["chatgpt4", "gpt", "chatgpt", "gpt4", "gpt4ai"];
  if (_0xa64866.includes(_0x44f470)) {
    if (!_0x1fe06d) {
      return _0x335120.reply("Hello *_" + _0x335120.pushName + "_,*\n I am Gifted Premium ChatGpt4.\n Please Ask a Question.");
    }
    try {
      await _0x335120.React('🕘');
      await _0x335120.reply("A moment, *Gifted-Md* is Generating Your GPT4 Request...");
      const _0x51de4c = [{
        'role': "system",
        'content': "You're a WhatsApp bot called Gifted-Md that processes users text and accepts commands. You work courtesy of Bing from Microsoft."
      }, {
        'role': "user",
        'content': _0x1fe06d
      }];
      const _0x4ca3e3 = {
        'provider': gpt4.providers.GPT,
        'model': "gpt-4",
        'debug': true,
        'proxy': ''
      };
      const _0x4e532d = await gpt4.chatCompletion(_0x51de4c, _0x4ca3e3);
      const _0x3bb024 = _0x4e532d.match(/```([\s\S]*?)```/);
      let _0x3da489 = [];
      if (_0x3bb024) {
        const _0x1e6dc0 = _0x3bb024[1];
        _0x3da489.push({
          'name': "cta_copy",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 ᴄᴏᴘʏ ɢᴇɴᴇʀᴀᴛᴇᴅ ᴄᴏᴅᴇ",
            'id': "copy_code",
            'copy_code': _0x1e6dc0
          })
        });
      }
      _0x3da489.push({
        'name': "cta_copy",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📋 ᴄᴏᴘʏ ᴡʜᴏʟᴇ ᴛᴇxᴛ",
          'id': "copy_code",
          'copy_code': _0x4e532d
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
      let _0x285cd9 = generateWAMessageFromContent(_0x335120.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': _0x4e532d
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
                'buttons': _0x3da489
              })
            })
          }
        }
      }, {});
      await _0x3739f0.relayMessage(_0x285cd9.key.remoteJid, _0x285cd9.message, {
        'messageId': _0x285cd9.key.id
      });
      await _0x335120.React('✅');
    } catch (_0x19202c) {
      console.error("Error getting GPT response:", _0x19202c.message);
      _0x335120.reply("Error getting response from GPT.");
      await _0x335120.React('❌');
    }
  }
};
export default gptResponse;