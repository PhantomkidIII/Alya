import _0x3bfa16 from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x3bfa16;
import _0x6fe722 from 'node-fetch';
const tempMailCommand = async (_0x2034c1, _0x346f31) => {
  const _0x3d56ab = _0x2034c1.body.match(/^[\\/!#.]/);
  const _0x373705 = _0x3d56ab ? _0x3d56ab[0x0] : '/';
  const _0x4bca59 = _0x2034c1.body.startsWith(_0x373705) ? _0x2034c1.body.slice(_0x373705.length).split(" ")[0x0].toLowerCase() : '';
  let _0x3e0edc;
  const _0xa1dcf4 = _0x2034c1?.['message']?.["templateButtonReplyMessage"]?.["selectedId"];
  const _0x56b62a = _0x2034c1?.["message"]?.["interactiveResponseMessage"];
  if (_0x56b62a) {
    const _0x4ef08c = _0x56b62a.nativeFlowResponseMessage?.['paramsJson'];
    if (_0x4ef08c) {
      const _0x54da67 = JSON.parse(_0x4ef08c);
      _0x3e0edc = _0x54da67.id;
    }
  }
  const _0x2f0fd0 = _0x3e0edc || _0xa1dcf4;
  if (_0x4bca59 === 'tempmail') {
    try {
      await _0x2034c1.React('🕘');
      const _0x3fb7de = await _0x6fe722("https://tempmail.apinepdev.workers.dev/api/gen");
      const _0x2da140 = await _0x3fb7de.json();
      if (!_0x2da140.email) {
        _0x2034c1.reply("Failed to generate temporary email.");
        await _0x2034c1.React('❌');
        return;
      }
      await _0x2034c1.React('✅');
    } catch (_0x7b6175) {
      console.error("Error processing your request:", _0x7b6175);
      _0x2034c1.reply("Error processing your request.");
      await _0x2034c1.React('❌');
    }
  } else {
    if (_0x2f0fd0 && _0x2f0fd0.startsWith("check_inbox_")) {
      const _0x4f368d = _0x2f0fd0.slice("check_inbox_".length);
      try {
        await _0x2034c1.React('🕘');
        const _0x2a8bc9 = await _0x6fe722("https://tempmail.apinepdev.workers.dev/api/getmessage?email=" + _0x4f368d);
        const _0x286c8a = await _0x2a8bc9.json();
        let _0x27a378;
        let _0x505d25 = [];
        if (_0x286c8a.messages && _0x286c8a.messages.length > 0x0) {
          _0x27a378 = "*ɪɴʙᴏx ᴍᴇssᴀɢᴇs:*\n\n";
          _0x286c8a.messages.forEach((_0x5176f2, _0x142b43) => {
            const _0x43c179 = JSON.parse(_0x5176f2.message);
            _0x27a378 += _0x142b43 + 0x1 + ". *From:* " + _0x5176f2.sender + "\n*Subject:* " + _0x5176f2.subject + "\n*Date:* " + new Date(_0x43c179.date).toLocaleString() + "\n*Message:* " + _0x43c179.body + "\n\n";
            const _0x4f5660 = _0x43c179.textBody || '';
            const _0x21c469 = _0x4f5660.match(/\b\d{4,6}\b/);
            if (_0x21c469) {
              _0x505d25.push({
                'name': "cta_copy",
                'buttonParamsJson': JSON.stringify({
                  'display_text': "ᴄᴏᴘʏ ᴏᴛᴘ",
                  'id': "copy_otp",
                  'copy_code': _0x21c469[0x0]
                })
              });
            }
          });
        } else {
          _0x27a378 = "No messages found in the inbox.";
        }
        _0x505d25.push({
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ᴄʜᴇᴄᴋ ɪɴʙᴏx ᴀɢᴀɪɴ",
            'id': "check_inbox_" + _0x4f368d
          })
        });
        const _0x5729b3 = generateWAMessageFromContent(_0x2034c1.from, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x27a378
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀 𝐓𝐄𝐌𝐏𝐌𝐀𝐈𝐋 𝐈𝐍𝐁𝐎𝐗",
                  'gifPlayback': true,
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': _0x505d25
                }),
                'contextInfo': {
                  'mentionedJid': [_0x2034c1.sender],
                  'forwardingScore': 0x270f,
                  'isForwarded': false
                }
              })
            }
          }
        }, {});
        await _0x346f31.relayMessage(_0x5729b3.key.remoteJid, _0x5729b3.message, {
          'messageId': _0x5729b3.key.id
        });
        await _0x2034c1.React('✅');
      } catch (_0x51b864) {
        console.error("Error processing your request:", _0x51b864);
        _0x2034c1.reply("Error processing your request.");
        await _0x2034c1.React('❌');
      }
    } else {}
  }
};
export default tempMailCommand;