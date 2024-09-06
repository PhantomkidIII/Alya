const kick = async (_0x184cd3, _0x393983) => {
  try {
    const _0x5e4eb0 = await _0x393983.decodeJid(_0x393983.user.id);
    const _0x1fe37c = _0x184cd3.body.match(/^[\\/!#.]/);
    const _0x34e5d1 = _0x1fe37c ? _0x1fe37c[0x0] : '/';
    const _0x28f591 = _0x184cd3.body.startsWith(_0x34e5d1) ? _0x184cd3.body.slice(_0x34e5d1.length).split(" ")[0x0].toLowerCase() : '';
    const _0x5e5697 = _0x184cd3.body.slice(_0x34e5d1.length + _0x28f591.length).trim();
    const _0x47eb59 = ["kick", "remove"];
    if (!_0x47eb59.includes(_0x28f591)) {
      return;
    }
    if (!_0x184cd3.isGroup) {
      return _0x184cd3.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }
    const _0x22d5f4 = await _0x393983.groupMetadata(_0x184cd3.from);
    const _0x4a83be = _0x22d5f4.participants;
    const _0x347a16 = _0x4a83be.find(_0x5958f0 => _0x5958f0.id === _0x5e4eb0)?.["admin"];
    const _0x246015 = _0x4a83be.find(_0x5a0262 => _0x5a0262.id === _0x184cd3.sender)?.["admin"];
    if (!_0x347a16) {
      return _0x184cd3.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x246015) {
      return _0x184cd3.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x184cd3.mentionedJid) {
      _0x184cd3.mentionedJid = [];
    }
    if (_0x184cd3.quoted?.["participant"]) {
      _0x184cd3.mentionedJid.push(_0x184cd3.quoted.participant);
    }
    const _0x307b23 = _0x184cd3.mentionedJid.length > 0x0 ? _0x184cd3.mentionedJid : _0x5e5697.replace(/[^0-9]/g, '').length > 0x0 ? [_0x5e5697.replace(/[^0-9]/g, '') + "@s.whatsapp.net"] : [];
    if (_0x307b23.length === 0x0) {
      return _0x184cd3.reply("*📛 PLEASE MENTION OR QUOTE A USER TO KICK*");
    }
    const _0x39e000 = _0x307b23.filter(Boolean);
    await _0x393983.groupParticipantsUpdate(_0x184cd3.from, _0x39e000, 'remove').then(() => {
      const _0x32a9b2 = _0x39e000.map(_0x4c38ac => '@' + _0x4c38ac.split('@')[0x0]);
      _0x184cd3.reply("*USERS " + _0x32a9b2 + " KICKED SUCCESSFULLY FROM THE GROUP " + _0x22d5f4.subject + '*');
    })["catch"](() => _0x184cd3.reply("Failed to kick user(s) from the group."));
  } catch (_0x2186aa) {
    console.error("Error:", _0x2186aa);
    _0x184cd3.reply("An error occurred while processing the command.");
  }
};
export default kick;