import _0x17b860 from '../../set.cjs';
import 'fs';
const handleGreeting = async (_0x597c1d, _0x2fe56b) => {
  const _0x285f97 = await _0x2fe56b.decodeJid(_0x2fe56b.user.id);
  const _0x4d63d1 = [_0x285f97, _0x17b860.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x597c1d.sender);
  try {
    const _0x29023f = _0x597c1d.body.toLowerCase();
    const _0x40069f = ["send", "statusdown", "take", "sent", "giv", "save", "upload", "send me", "sent me", 'oh', 'take', "get", 'do', 'mee'];
    if (_0x40069f.includes(_0x29023f)) {
      if (!_0x4d63d1) {
        return _0x597c1d.reply("*📛 THIS IS AN OWNER COMMAND*");
      }
      if (_0x597c1d.message && _0x597c1d.message.extendedTextMessage && _0x597c1d.message.extendedTextMessage.contextInfo) {
        const _0x58251e = _0x597c1d.message.extendedTextMessage.contextInfo.quotedMessage;
        const _0x324a60 = _0x597c1d.sender;
        if (_0x58251e) {
          if (_0x58251e.imageMessage) {
            const _0x284833 = _0x58251e.imageMessage.caption;
            const _0x3b4818 = await _0x2fe56b.downloadAndSaveMediaMessage(_0x58251e.imageMessage);
            await _0x2fe56b.sendMessage(_0x324a60, {
              'image': {
                'url': _0x3b4818
              },
              'caption': _0x284833,
              'contextInfo': {
                'mentionedJid': [_0x597c1d.sender],
                'forwardingScore': 0x270f,
                'isForwarded': false
              }
            });
          }
          if (_0x58251e.videoMessage) {
            const _0x6176d7 = _0x58251e.videoMessage.caption;
            const _0x5ad92a = await _0x2fe56b.downloadAndSaveMediaMessage(_0x58251e.videoMessage);
            await _0x2fe56b.sendMessage(_0x324a60, {
              'video': {
                'url': _0x5ad92a
              },
              'caption': _0x6176d7,
              'contextInfo': {
                'mentionedJid': [_0x597c1d.sender],
                'forwardingScore': 0x270f,
                'isForwarded': false
              }
            });
          }
        }
      }
    }
  } catch (_0x567342) {
    console.error("Error:", _0x567342);
  }
};
export default handleGreeting;