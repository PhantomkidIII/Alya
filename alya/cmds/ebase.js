import _0x45cd31 from 'axios';
import _0x5539b5 from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x5539b5;
const Ebase = async (_0x1da64c, _0x179c56) => {
  const _0x153d65 = _0x1da64c.body.match(/^[\\/!#.]/);
  const _0x22a676 = _0x153d65 ? _0x153d65[0x0] : '/';
  const _0x4e28b4 = _0x1da64c.body.startsWith(_0x22a676) ? _0x1da64c.body.slice(_0x22a676.length).split(" ")[0x0].toLowerCase() : '';
  const _0x30b4b1 = _0x1da64c.body.slice(_0x22a676.length + _0x4e28b4.length).trim();
  const _0x426b4c = ["ebase"];
  if (_0x426b4c.includes(_0x4e28b4)) {
    if (!_0x30b4b1) {
      return _0x1da64c.reply("Hello *_" + _0x1da64c.pushName + "_,*\nPlease Provide Me a text to Encrypt.");
    }
    try {
      await _0x1da64c.React('🕘');
      await _0x1da64c.reply("A moment,...");
      const _0x511274 = "https://api.maskser.me/api/tools/ebase64?text=" + encodeURIComponent(_0x30b4b1);
      const _0x392267 = await _0x45cd31.get(_0x511274);
      const _0x27152d = _0x392267.data;
      if (_0x27152d && _0x27152d.result) {
        const _0x7466ad = _0x27152d.result;
        const _0x2bc8f8 = _0x7466ad.match(/```([\s\S]*?)```/);
        if (_0x2bc8f8) {
          const _0x3d2627 = _0x2bc8f8[0x1];
          let _0x4cfccf = generateWAMessageFromContent(_0x1da64c.from, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x7466ad
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
                    'buttons': [{
                      'name': "cta_copy",
                      'buttonParamsJson': JSON.stringify({
                        'display_text': "Copy Your Code",
                        'id': 'copy_code',
                        'copy_code': _0x3d2627
                      })
                    }]
                  })
                })
              }
            }
          }, {});
          await _0x179c56.relayMessage(_0x4cfccf.key.remoteJid, _0x4cfccf.message, {
            'messageId': _0x4cfccf.key.id
          });
        } else {
          await _0x179c56.sendMessage(_0x1da64c.from, {
            'text': _0x7466ad
          }, {
            'quoted': _0x1da64c
          });
        }
        await _0x1da64c.React('✅');
      } else {
        throw new Error("Invalid response from the GPT API.");
      }
    } catch (_0x13c914) {
      console.error("Error getting GPT response:", _0x13c914.message);
      _0x1da64c.reply("Error getting response from GPT.");
      await _0x1da64c.React('❌');
    }
  }
};
export default Ebase;