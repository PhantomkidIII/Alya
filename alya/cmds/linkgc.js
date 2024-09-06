const linkgc = async (_0x4367d6, _0x3ef85e) => {
  try {
    const _0x840fb9 = _0x4367d6.body.match(/^[\\/!#.]/);
    const _0x19b905 = _0x840fb9 ? _0x840fb9[0x0] : '/';
    const _0x340f9f = _0x4367d6.body.startsWith(_0x19b905) ? _0x4367d6.body.slice(_0x19b905.length).split(" ")[0x0].toLowerCase() : '';
    const _0x274839 = ["linkgc", 'invite', "link", 'grouplink'];
    if (!_0x274839.includes(_0x340f9f)) {
      return;
    }
    if (!_0x4367d6.isGroup) {
      return _0x4367d6.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS.*");
    }
    const _0x42194a = await _0x3ef85e.groupMetadata(_0x4367d6.from);
    const _0x1e56bd = await _0x3ef85e.decodeJid(_0x3ef85e.user.id);
    const _0x37cb72 = _0x42194a.participants.find(_0x3f6354 => _0x3f6354.id === _0x1e56bd)?.["admin"];
    if (!_0x37cb72) {
      return _0x4367d6.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND.*");
    }
    const _0x56e724 = await _0x3ef85e.groupInviteCode(_0x4367d6.from);
    await _0x3ef85e.sendMessage(_0x4367d6.from, {
      'text': "https://chat.whatsapp.com/" + _0x56e724 + "\n\nGroup Link: " + _0x42194a.subject,
      'detectLink': true
    });
  } catch (_0x40c568) {
    console.error('Error:', _0x40c568);
    _0x4367d6.reply("An error occurred while processing the command.");
  }
};
export default linkgc;