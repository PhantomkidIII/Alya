import _0x5d7e22 from 'axios';
import _0xcc8f9 from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0xcc8f9;
const time = async (_0x4c3b69, _0x57a35e) => {
  const _0x1a422b = _0x4c3b69.body.match(/^[\\/!#.]/);
  const _0x15868d = _0x1a422b ? _0x1a422b[0x0] : '/';
  const _0x17e11d = _0x4c3b69.body.startsWith(_0x15868d) ? _0x4c3b69.body.slice(_0x15868d.length).split(" ")[0x0].toLowerCase() : '';
  const _0x3a29a3 = _0x4c3b69.body.slice(_0x15868d.length + _0x17e11d.length).trim();
  const _0x1ed0c6 = ["time", "timenow"];
  if (_0x1ed0c6.includes(_0x17e11d)) {
    if (!_0x3a29a3) {
      return _0x4c3b69.reply("Hello *_" + _0x4c3b69.pushName + "_,*\n Please provide a Country code after the command ie *.time KE*");
    }
    try {
      await _0x4c3b69.React('🕘');
      const _0x499eb0 = "https://levanter.onrender.com/time?code=" + encodeURIComponent(_0x3a29a3);
      const _0x101be4 = await _0x5d7e22.get(_0x499eb0);
      const _0x307a28 = _0x101be4.data;
      if (_0x307a28 && _0x307a28.result) {
        const _0x2dd2c4 = _0x307a28.result[0x0].name;
        const _0x5c5109 = _0x307a28.result[0x0].timeZone;
        const _0x4110bf = _0x307a28.result[0x0].time;
        const _0x533fdf = _0x4110bf.match(/```([\s\S]*?)```/);
        if (_0x533fdf) {
          const _0x379ee8 = _0x533fdf[0x1];
          let _0x1c32fe = generateWAMessageFromContent(_0x4c3b69.from, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x4110bf
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
                      'name': 'cta_copy',
                      'buttonParamsJson': JSON.stringify({
                        'display_text': "Copy Your Code",
                        'id': 'copy_code',
                        'copy_code': _0x379ee8
                      })
                    }]
                  })
                })
              }
            }
          }, {});
          await _0x57a35e.relayMessage(_0x1c32fe.key.remoteJid, _0x1c32fe.message, {
            'messageId': _0x1c32fe.key.id
          });
        } else {
          await _0x57a35e.sendMessage(_0x4c3b69.from, {
            'text': " Hello *_" + _0x4c3b69.pushName + "_,*\n Here are Current Time In *" + _0x2dd2c4 + "* Stats...\n *Date & Time:* " + _0x4110bf + "\n *Timezone:* " + _0x5c5109 + "\n\n> 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀"
          }, {
            'quoted': _0x4c3b69
          });
        }
        await _0x4c3b69.React('✅');
      } else {
        throw new Error("Invalid response from the Gifted API.");
      }
    } catch (_0x587086) {
      console.error("Error getting Gifted APi response:", _0x587086.message);
      _0x4c3b69.reply("Error getting response from Gifted APi.");
      await _0x4c3b69.React('❌');
    }
  }
};
export default time;