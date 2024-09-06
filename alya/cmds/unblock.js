import _0x18601b from '../../set.cjs';
const unblock = async (_0x173ca7, _0x5f0034) => {
  try {
    const _0x2b719f = await _0x5f0034.decodeJid(_0x5f0034.user.id);
    const _0x4fb989 = [_0x2b719f, _0x18601b.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x173ca7.sender);
    const _0x3942a0 = _0x173ca7.body.match(/^[\\/!#.]/);
    const _0xbb7b58 = _0x3942a0 ? _0x3942a0[0x0] : '/';
    const _0x387e73 = _0x173ca7.body.startsWith(_0xbb7b58) ? _0x173ca7.body.slice(_0xbb7b58.length).split(" ")[0x0].toLowerCase() : '';
    const _0x4b3afa = _0x173ca7.body.slice(_0xbb7b58.length + _0x387e73.length).trim();
    const _0x49ab9e = ['unblock'];
    if (!_0x49ab9e.includes(_0x387e73)) {
      return;
    }
    if (!_0x4fb989) {
      return _0x173ca7.reply("*📛 THIS IS AN OWNER COMMAND*");
    }
    let _0x1e969a = _0x173ca7.mentionedJid[0x0] ? _0x173ca7.mentionedJid[0x0] : _0x173ca7.quoted ? _0x173ca7.quoted.sender : _0x4b3afa.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x5f0034.updateBlockStatus(_0x1e969a, "unblock").then(_0x81bcda => _0x173ca7.reply("Unblocked " + _0x1e969a.split('@')[0x0] + " Successfully."))['catch'](_0x24656c => _0x173ca7.reply("Failed to unblock user: " + _0x24656c));
  } catch (_0x53ba93) {
    console.error("Error:", _0x53ba93);
    _0x173ca7.reply("An error occurred while processing the command.");
  }
};
export default unblock;