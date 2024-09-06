const promote = async (_0x39354a, _0x27e2d2) => {
  try {
    const _0x28ed80 = await _0x27e2d2.decodeJid(_0x27e2d2.user.id);
    const _0x515d78 = _0x39354a.body.match(/^[\\/!#.]/);
    const _0x3346a9 = _0x515d78 ? _0x515d78[0x0] : '/';
    const _0x2e247e = _0x39354a.body.startsWith(_0x3346a9) ? _0x39354a.body.slice(_0x3346a9.length).split(" ")[0x0].toLowerCase() : '';
    const _0x4007be = _0x39354a.body.slice(_0x3346a9.length + _0x2e247e.length).trim();
    const _0x2c73a8 = ["promote", "admin", "toadmin"];
    if (!_0x2c73a8.includes(_0x2e247e)) {
      return;
    }
    if (!_0x39354a.isGroup) {
      return _0x39354a.reply("*🚫 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }
    const _0x29770f = await _0x27e2d2.groupMetadata(_0x39354a.from);
    const _0x2530a4 = _0x29770f.participants;
    const _0x2d8c48 = _0x2530a4.find(_0x5b9b9f => _0x5b9b9f.id === _0x28ed80)?.["admin"];
    const _0x5d913e = _0x2530a4.find(_0x34178d => _0x34178d.id === _0x39354a.sender)?.["admin"];
    if (!_0x2d8c48) {
      return _0x39354a.reply("*🚫 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x5d913e) {
      return _0x39354a.reply("*🚫 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x39354a.mentionedJid) {
      _0x39354a.mentionedJid = [];
    }
    if (_0x39354a.quoted?.["participant"]) {
      _0x39354a.mentionedJid.push(_0x39354a.quoted.participant);
    }
    const _0x4690b8 = _0x39354a.mentionedJid.length > 0x0 ? _0x39354a.mentionedJid : _0x4007be.replace(/[^0-9]/g, '').length > 0x0 ? [_0x4007be.replace(/[^0-9]/g, '') + "@s.whatsapp.net"] : [];
    if (_0x4690b8.length === 0x0) {
      return _0x39354a.reply("*🚫 PLEASE MENTION OR QUOTE A USER TO PROMOTE*");
    }
    console.log("users: ", _0x4690b8);
    const _0x259f28 = _0x4690b8.filter(Boolean);
    const _0x26e31e = await Promise.all(_0x259f28.map(async _0x3911e2 => {
      console.log("user: ", _0x3911e2);
      try {
        const _0x523543 = await _0x27e2d2.getContact(_0x3911e2);
        console.log("contact: ", _0x523543);
        return _0x523543.notify || _0x523543.pushname || _0x3911e2.split('@')[0x0];
      } catch (_0x54a9fa) {
        return _0x3911e2.split('@')[0x0];
      }
    }));
    console.log("usernames: ", _0x26e31e);
    await _0x27e2d2.groupParticipantsUpdate(_0x39354a.from, _0x259f28, "promote").then(() => {
      const _0x5ac2a1 = _0x26e31e.map(_0x42e5a9 => '@' + _0x42e5a9).join(", ");
      _0x39354a.reply("*Users " + _0x5ac2a1 + " promoted successfully in the group " + _0x29770f.subject + '.*');
    })["catch"](() => _0x39354a.reply("Failed to promote user(s) in the group."));
  } catch (_0x347969) {
    console.error('Error:', _0x347969);
    _0x39354a.reply("An error occurred while processing the command.");
  }
};
export default promote;