const setGroupName = async (_0x135545, _0x2c9f91) => {
  try {
    const _0x550dd8 = await _0x2c9f91.decodeJid(_0x2c9f91.user.id);
    const _0x12a8e5 = _0x135545.body.match(/^[\\/!#.]/);
    const _0x321918 = _0x12a8e5 ? _0x12a8e5[0x0] : '/';
    const _0x14344a = _0x135545.body.startsWith(_0x321918) ? _0x135545.body.slice(_0x321918.length).split(" ")[0x0].toLowerCase() : '';
    const _0x33399e = _0x135545.body.slice(_0x321918.length + _0x14344a.length).trim();
    const _0x3921d3 = ["setgroupname", "gname", "setname"];
    if (!_0x3921d3.includes(_0x14344a)) {
      return;
    }
    if (!_0x135545.isGroup) {
      return _0x135545.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }
    const _0x3f78d6 = await _0x2c9f91.groupMetadata(_0x135545.from);
    const _0x1a010c = _0x3f78d6.participants;
    const _0x46dfc8 = _0x1a010c.find(_0x27fb18 => _0x27fb18.id === _0x550dd8)?.['admin'];
    const _0xc22adc = _0x1a010c.find(_0xd47531 => _0xd47531.id === _0x135545.sender)?.["admin"];
    if (!_0x46dfc8) {
      return _0x135545.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0xc22adc) {
      return _0x135545.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x33399e) {
      return _0x135545.reply("*📛 PLEASE PROVIDE A NAME TO SET*");
    }
    await _0x2c9f91.groupUpdateSubject(_0x135545.from, _0x33399e);
    _0x135545.reply("Group Name Has Been Set To: " + _0x33399e);
  } catch (_0xe30fde) {
    console.error('Error:', _0xe30fde);
    _0x135545.reply("An error occurred while processing the command.");
  }
};
export default setGroupName;