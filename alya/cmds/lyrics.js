import _0x5bdab8 from 'axios';
import _0x10c25e from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x10c25e;
const Lyrics = async (_0xf2c3e5, _0x8a65d1) => {
  const _0xb45983 = _0xf2c3e5.body.match(/^[\\/!#.]/);
  const _0x5e9f2c = _0xb45983 ? _0xb45983[0x0] : '/';
  const _0x4ef267 = _0xf2c3e5.body.startsWith(_0x5e9f2c) ? _0xf2c3e5.body.slice(_0x5e9f2c.length).split(" ")[0x0].toLowerCase() : '';
  const _0x195201 = _0xf2c3e5.body.slice(_0x5e9f2c.length + _0x4ef267.length).trim();
  const _0x587a44 = ["lyrics", "lyric"];
  if (_0x587a44.includes(_0x4ef267)) {
    if (!_0x195201) {
      return _0xf2c3e5.reply("Hello *_" + _0xf2c3e5.pushName + "_,*\n Here's Example Usage: _.lyrics Spectre|Alan Walker._");
    }
    try {
      await _0xf2c3e5.React('🕘');
      await _0xf2c3e5.reply("A moment, *Queen_Alya* is generating your lyrics request...");
      if (!_0x195201.includes('|')) {
        return _0xf2c3e5.reply("Please provide the song name and artist name separated by a \"|\", for example: Spectre|Alan Walker.");
      }
      const [_0x18d93c, _0x4f8857] = _0x195201.split('|').map(_0x447520 => _0x447520.trim());
      if (!_0x18d93c || !_0x4f8857) {
        return _0xf2c3e5.reply("Both song name and artist name are required. Please provide them in the format: song name|artist name.");
      }
      const _0x42b04d = 'https://api.lyrics.ovh/v1/' + encodeURIComponent(_0x4f8857) + '/' + encodeURIComponent(_0x18d93c);
      const _0x15d447 = await _0x5bdab8.get(_0x42b04d);
      const _0x207e64 = _0x15d447.data;
      if (_0x207e64 && _0x207e64.lyrics) {
        const _0x378e3a = _0x207e64.lyrics;
        let _0x530c5b = [{
          'name': "cta_copy",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 ᴄᴏᴘʏ ʟʏʀɪᴄs",
            'id': "copy_code",
            'copy_code': _0x378e3a
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "sʜᴏᴡ 💜 ғᴏʀ ALYA",
            'url': "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l"
          })
        }, {
          'name': 'quick_reply',
          'buttonParamsJson': JSON.stringify({
            'display_text': "ᴍᴀɪɴ ᴍᴇɴᴜ",
            'id': '.menu'
          })
        }];
        let _0x4eb2d5 = generateWAMessageFromContent(_0xf2c3e5.from, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x378e3a
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
                  'buttons': _0x530c5b
                })
              })
            }
          }
        }, {});
        await _0x8a65d1.relayMessage(_0x4eb2d5.key.remoteJid, _0x4eb2d5.message, {
          'messageId': _0x4eb2d5.key.id
        });
        await _0xf2c3e5.React('✅');
      } else {
        throw new Error("Invalid response from the Lyrics API.");
      }
    } catch (_0x2636c2) {
      console.error("Error getting lyrics:", _0x2636c2.message);
      _0xf2c3e5.reply("Error getting lyrics.");
      await _0xf2c3e5.React('❌');
    }
  }
};
export default Lyrics;