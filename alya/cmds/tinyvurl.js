import _0x1f4334 from 'axios';
import _0x18ac58 from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x18ac58;
const TinyVurl = async (_0x11092e, _0x3e1432) => {
  const _0x4b73a8 = _0x11092e.body.match(/^[\\/!#.]/);
  const _0x3b9b65 = _0x4b73a8 ? _0x4b73a8[0x0] : '/';
  const _0x1245ad = _0x11092e.body.startsWith(_0x3b9b65) ? _0x11092e.body.slice(_0x3b9b65.length).split(" ")[0x0].toLowerCase() : '';
  const _0xf090c9 = _0x11092e.body.slice(_0x3b9b65.length + _0x1245ad.length).trim();
  const _0x59cb46 = ["vurl"];
  if (_0x59cb46.includes(_0x1245ad)) {
    if (!_0xf090c9) {
      return _0x11092e.reply("Hello *_" + _0x11092e.pushName + "_,*\n Alya Vurl Shortener Here.\n Please Provide a Url to Shorten.");
    }
    try {
      await _0x11092e.React('🕘');
      const _0x41f2da = "https://widipe.com/short/vurl?link=" + encodeURIComponent(_0xf090c9);
      const _0x453bd = await _0x1f4334.get(_0x41f2da);
      const _0x288b32 = _0x453bd.data;
      if (_0x288b32 && _0x288b32.result) {
        const _0x23d6e6 = _0x288b32.result;
        const _0x2d4515 = _0x23d6e6.match(/```([\s\S]*?)```/);
        if (_0x2d4515) {
          const _0x193bfd = _0x2d4515[0x1];
          let _0x322085 = generateWAMessageFromContent(_0x11092e.from, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x23d6e6
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "> > *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'title': '',
                    'subtitle': '',
                    'hasMediaAttachment': false
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "cta_copy",
                      'buttonParamsJson': JSON.stringify({
                        'display_text': "Copy Your Code",
                        'id': "copy_code",
                        'copy_code': _0x193bfd
                      })
                    }]
                  })
                })
              }
            }
          }, {});
          await _0x3e1432.relayMessage(_0x322085.key.remoteJid, _0x322085.message, {
            'messageId': _0x322085.key.id
          });
        } else {
          await _0x3e1432.sendMessage(_0x11092e.from, {
            'text': _0x23d6e6
          }, {
            'quoted': _0x11092e
          });
        }
        await _0x11092e.React('✅');
      } else {
        throw new Error("Invalid response from the GPT API.");
      }
    } catch (_0x56e573) {
      console.error("Error getting GPT response:", _0x56e573.message);
      _0x11092e.reply("Error getting response from GPT.");
      await _0x11092e.React('❌');
    }
  }
};
export default TinyVurl;