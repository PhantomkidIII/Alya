import _0xafbe72 from '../../set.cjs';
const leaveGroup = async (_0x531a3a, _0x280b5c) => {
  try {
    const _0x249eb6 = await _0x280b5c.decodeJid(_0x280b5c.user.id);
    const _0x17a98a = [_0x249eb6, _0xafbe72.OWNER_NUMBER + '@s.whatsapp.net'].includes(_0x531a3a.sender);
    const _0x323c56 = _0x531a3a.body.match(/^[\\/!#.]/);
    const _0x3153de = _0x323c56 ? _0x323c56[0x0] : '/';
    const _0x1857cb = _0x531a3a.body.startsWith(_0x3153de) ? _0x531a3a.body.slice(_0x3153de.length).split(" ")[0x0].toLowerCase() : '';
    const _0x15c137 = ["leave", "exit", "left"];
    if (!_0x15c137.includes(_0x1857cb)) {
      return;
    }
    if (!_0x531a3a.isGroup) {
      return _0x531a3a.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }
    if (!_0x17a98a) {
      return _0x531a3a.reply("*📛 THIS IS AN OWNER COMMAND*");
    }
    await _0x280b5c.groupLeave(_0x531a3a.from);
  } catch (_0x1cca78) {
    console.error("Error:", _0x1cca78);
  }
};
export default leaveGroup;