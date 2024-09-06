const setDescription = async (_0x2f448a, _0x1fd78c) => {
  try {
    const _0x48a012 = await _0x1fd78c.decodeJid(_0x1fd78c.user.id);
    const _0x18a109 = _0x2f448a.body.match(/^[\\/!#.]/);
    const _0xd6cd4a = _0x18a109 ? _0x18a109[0x0] : '/';
    const _0x37f77 = _0x2f448a.body.startsWith(_0xd6cd4a) ? _0x2f448a.body.slice(_0xd6cd4a.length).split(" ")[0x0].toLowerCase() : '';
    const _0x2d3413 = _0x2f448a.body.slice(_0xd6cd4a.length + _0x37f77.length).trim();
    const _0x353b17 = ["setdescription", "setdesc", 'gdesc', "setgroupbio"];
    if (!_0x353b17.includes(_0x37f77)) {
      return;
    }
    if (!_0x2f448a.isGroup) {
      return _0x2f448a.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }
    const _0x2b7e4a = await _0x1fd78c.groupMetadata(_0x2f448a.from);
    const _0x5b0e83 = _0x2b7e4a.participants;
    const _0x27b909 = _0x5b0e83.find(_0x51149d => _0x51149d.id === _0x48a012)?.["admin"];
    const _0x543443 = _0x5b0e83.find(_0x433eed => _0x433eed.id === _0x2f448a.sender)?.['admin'];
    if (!_0x27b909) {
      return _0x2f448a.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x543443) {
      return _0x2f448a.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x2d3413) {
      return _0x2f448a.reply("*📛 PLEASE PROVIDE A DESCRIPTION TO SET*");
    }
    await _0x1fd78c.groupUpdateDescription(_0x2f448a.from, _0x2d3413);
    _0x2f448a.reply("Group Description Has Been Set To: " + _0x2d3413);
  } catch (_0x7348c6) {
    console.error("Error:", _0x7348c6);
    _0x2f448a.reply("An error occurred while processing the command.");
  }
};
export default setDescription;