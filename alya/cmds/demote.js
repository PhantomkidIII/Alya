const demote = async (_0x319984, _0x391cc6) => {
  try {
    const _0x6754b6 = _0x319984.body.match(/^[\\/!#.]/);
    const _0x4e9e17 = _0x6754b6 ? _0x6754b6[0] : '/';
    const _0x410419 = _0x319984.body.startsWith(_0x4e9e17) ? _0x319984.body.slice(_0x4e9e17.length).split(" ")[0].toLowerCase() : '';
    const _0x3c2bfc = _0x319984.body.slice(_0x4e9e17.length + _0x410419.length).trim();
    const _0x17099a = ["demote", "unadmin", "dismiss"];
    if (!_0x17099a.includes(_0x410419)) {
      return;
    }
    if (!_0x319984.isGroup) {
      return _0x319984.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }
    const _0x1c0584 = await _0x391cc6.groupMetadata(_0x319984.from);
    const _0x4a836f = _0x1c0584.participants;
    const _0x2569c7 = await _0x391cc6.decodeJid(_0x391cc6.user.id);
    const _0x4d8f5e = _0x4a836f.find(_0x5be1b0 => _0x5be1b0.id === _0x2569c7)?.["admin"];
    const _0x21849c = _0x4a836f.find(_0xfe0b04 => _0xfe0b04.id === _0x319984.sender)?.["admin"];
    if (!_0x4d8f5e) {
      return _0x319984.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x21849c) {
      return _0x319984.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x319984.mentionedJid) {
      _0x319984.mentionedJid = [];
    }
    if (_0x319984.quoted?.["participant"]) {
      _0x319984.mentionedJid.push(_0x319984.quoted.participant);
    }
    const _0x4bf1cd = _0x319984.mentionedJid.length > 0 ? _0x319984.mentionedJid : _0x3c2bfc.replace(/[^0-9]/g, '').length > 0 ? [_0x3c2bfc.replace(/[^0-9]/g, '') + "@s.whatsapp.net"] : [];
    if (_0x4bf1cd.length === 0) {
      return _0x319984.reply("*📛 PLEASE MENTION OR QUOTE A USER TO DEMOTE*");
    }
    const _0x353885 = _0x4bf1cd.filter(Boolean);
    await _0x391cc6.groupParticipantsUpdate(_0x319984.from, _0x353885, "demote").then(() => {
      const _0x4fdc11 = _0x353885.map(_0x37aef7 => '@' + _0x37aef7.split('@')[0]);
      _0x319984.reply("*USERS " + _0x4fdc11 + " DEMOTED SUCCESSFULLY IN THE GROUP " + _0x1c0584.subject + '*');
    })["catch"](() => _0x319984.reply("Failed to demote user(s) in the group."));
  } catch (_0xaf07b9) {
    console.error("Error:", _0xaf07b9);
    _0x319984.reply("An error Occurred while processing the command.");
  }
};
export default demote;