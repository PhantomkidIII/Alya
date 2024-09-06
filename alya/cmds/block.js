import _0x4074bf from '../../set.cjs';
const block = async (_0x96d36, _0x4bb161) => {
  try {
    const _0xbd2b84 = await _0x4bb161.decodeJid(_0x4bb161.user.id);
    const _0x1d0a07 = [_0xbd2b84, _0x4074bf.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x96d36.sender);
    const _0x5d662e = _0x96d36.body.match(/^[\\/!#.]/);
    const _0x1b09ac = _0x5d662e ? _0x5d662e[0] : '/';
    const _0x35b136 = _0x96d36.body.startsWith(_0x1b09ac) ? _0x96d36.body.slice(_0x1b09ac.length).split(" ")[0].toLowerCase() : '';
    const _0x57e7d4 = _0x96d36.body.slice(_0x1b09ac.length + _0x35b136.length).trim();
    const _0x1bd55d = ["block"];
    if (!_0x1bd55d.includes(_0x35b136)) {
      return;
    }
    if (!_0x1d0a07) {
      return _0x96d36.reply("*📛 THIS IS AN OWNER COMMAND*");
    }
    let _0x285828 = _0x96d36.mentionedJid[0] ? _0x96d36.mentionedJid[0] : _0x96d36.quoted ? _0x96d36.quoted.sender : _0x57e7d4.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x4bb161.updateBlockStatus(_0x285828, "block").then(_0x1d8c39 => _0x96d36.reply("Blocked " + _0x285828.split('@')[0] + " successfully."))["catch"](_0xb51541 => _0x96d36.reply("Failed to block user: " + _0xb51541));
  } catch (_0x5f09b9) {
    console.error("Error:", _0x5f09b9);
    _0x96d36.reply("An error occurred while processing the command.");
  }
};
export default block;