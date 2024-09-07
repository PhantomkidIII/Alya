import _0x1704a2 from 'axios';
import _0x541df1 from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x541df1;
const DEbase = async (_0x2c016c, _0x19fcaf) => {
  const _0x351fa7 = _0x2c016c.body.match(/^[\\/!#.]/);
  const _0x2710e7 = _0x351fa7 ? _0x351fa7[0] : '/';
  const _0x1b2a2b = _0x2c016c.body.startsWith(_0x2710e7) ? _0x2c016c.body.slice(_0x2710e7.length).split(" ")[0].toLowerCase() : '';
  const _0x1ed349 = _0x2c016c.body.slice(_0x2710e7.length + _0x1b2a2b.length).trim();
  const _0x2fbe78 = ["debase"];
  if (_0x2fbe78.includes(_0x1b2a2b)) {
    if (!_0x1ed349) {
      return _0x2c016c.reply("Hello *_" + _0x2c016c.pushName + "_,*\n Provide Me an encrypted text to decrypt.");
    }
    try {
      await _0x2c016c.React('🕘');
      await _0x2c016c.reply("A moment,...");
      const _0x237caf = "https://api.maskser.me/api/tools/debase64?text=" + encodeURIComponent(_0x1ed349);
      const _0x25a1a0 = await _0x1704a2.get(_0x237caf);
      const _0x557239 = _0x25a1a0.data;
      if (_0x557239 && _0x557239.result) {
        const _0x4c36ab = _0x557239.result;
        const _0x8f42aa = _0x4c36ab.match(/```([\s\S]*?)```/);
        if (_0x8f42aa) {
          const _0x5d3897 = _0x8f42aa[1];
          let _0x99ed84 = generateWAMessageFromContent(_0x2c016c.from, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x4c36ab
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"
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
                        'copy_code': _0x5d3897
                      })
                    }]
                  })
                })
              }
            }
          }, {});
          await _0x19fcaf.relayMessage(_0x99ed84.key.remoteJid, _0x99ed84.message, {
            'messageId': _0x99ed84.key.id
          });
        } else {
          await _0x19fcaf.sendMessage(_0x2c016c.from, {
            'text': _0x4c36ab
          }, {
            'quoted': _0x2c016c
          });
        }
        await _0x2c016c.React('✅');
      } else {
        throw new Error("Invalid response from the GPT API.");
      }
    } catch (_0xe8e735) {
      console.error("Error getting GPT response:", _0xe8e735.message);
      _0x2c016c.reply("Error getting response from GPT.");
      await _0x2c016c.React('❌');
    }
  }
};
export default DEbase;