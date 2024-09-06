import _0x37e671 from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x37e671;
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const alive = async (_0x5e2f54, _0x304ace) => {
  const _0x176af0 = process.uptime();
  const _0x5c0e31 = Math.floor(_0x176af0 / 86400);
  const _0x10063a = Math.floor(_0x176af0 % 86400 / 3600);
  const _0x518bef = Math.floor(_0x176af0 % 3600 / 60);
  const _0x2f74aa = Math.floor(_0x176af0 % 60);
  const _0x35cc6f = /^[\\/!#.]/gi.test(_0x5e2f54.body) ? _0x5e2f54.body.match(/^[\\/!#.]/gi)[0] : '/';
  const _0x30a775 = _0x5e2f54.body.startsWith(_0x35cc6f) ? _0x5e2f54.body.slice(_0x35cc6f.length).toLowerCase() : '';
  if (["uptime", "alive"].includes(_0x30a775)) {
    const _0x364ba5 = "\n*Hello _" + _0x5e2f54.pushName + "_*\n\n*Queen Alya IS RUNNING!!*\n*BOT UPTIME INFO:* " + readmore + "\n*╭═════════════════⊷*\n*┃🌸 " + _0x5c0e31 + " Day(s)*\n*┃🌸 " + _0x10063a + " Hour(s)*\n*┃🌸 " + _0x518bef + " Minute(s)*\n*┃🌸 " + _0x2f74aa + " Second(s)*\n*╰═════════════════⊷*\n";
    const _0x5abd33 = [{
      'name': "quick_reply",
      'buttonParamsJson': JSON.stringify({
        'display_text': "ʙᴏᴛ sᴄʀɪᴘᴛ",
        'id': ".repo"
      })
    }, {
      'name': "quick_reply",
      'buttonParamsJson': JSON.stringify({
        'display_text': "ᴍᴀɪɴ ᴍᴇɴᴜ",
        'id': ".menu"
      })
    }, {
      'name': "quick_reply",
      'buttonParamsJson': JSON.stringify({
        'display_text': "ᴛᴇsᴛ ᴍᴇssᴀɢᴇ",
        'id': ".test"
      })
    }, {
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify({
        'display_text': "Maker's Channel 🗨️",
        'url': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D"
      })
    }];
    const _0x5d3811 = generateWAMessageFromContent(_0x5e2f54.from, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': _0x364ba5
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'gifPlayback': true,
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': _0x5abd33
            }),
            'contextInfo': {
              'mentionedJid': [_0x5e2f54.sender],
              'forwardingScore': 0x3e7,
              'isForwarded': false,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D",
                'newsletterName': "Queen_Alya",
                'serverMessageId': 0x8f
              }
            }
          })
        }
      }
    }, {});
    await _0x304ace.relayMessage(_0x5d3811.key.remoteJid, _0x5d3811.message, {
      'messageId': _0x5d3811.key.id
    });
  }
};
export default alive;