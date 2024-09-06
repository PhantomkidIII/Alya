import _0x4a6a2a from '../../set.cjs';
const deleteMessage = async (_0x4dbc1c, _0x56f24b) => {
  try {
    const _0x310c2e = await _0x56f24b.decodeJid(_0x56f24b.user.id);
    const _0x2386f4 = [_0x310c2e, _0x4a6a2a.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x4dbc1c.sender);
    const _0x3a74e0 = _0x4dbc1c.body.match(/^[\\/!#.]/);
    const _0x34cdf2 = _0x3a74e0 ? _0x3a74e0[0] : '/';
    const _0x4426a5 = _0x4dbc1c.body.startsWith(_0x34cdf2) ? _0x4dbc1c.body.slice(_0x34cdf2.length).split(" ")[0].toLowerCase() : '';
    const _0x527369 = ["del", "wipe", "delete"];
    if (_0x527369.includes(_0x4426a5)) {
      if (!_0x2386f4) {
        return _0x4dbc1c.reply("*📛 THIS IS AN OWNER COMMAND*");
      }
      if (!_0x4dbc1c.quoted) {
        return _0x4dbc1c.reply("✳️ Reply to the message you want to delete");
      }
      const _0x366611 = {
        'remoteJid': _0x4dbc1c.from,
        'id': _0x4dbc1c.quoted.key.id,
        'participant': _0x4dbc1c.quoted.key.participant || _0x4dbc1c.quoted.key.remoteJid
      };
      await _0x56f24b.sendMessage(_0x4dbc1c.from, {
        'delete': _0x366611
      });
    }
  } catch (_0x301e56) {
    console.error("Error deleting message:", _0x301e56);
    _0x4dbc1c.reply("An error occurred while trying to delete the Message.");
  }
};
export default deleteMessage;