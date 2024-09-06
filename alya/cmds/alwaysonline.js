import _0x22bd78 from '../../set.cjs';
const alwaysonlineCommand = async (_0x3014a7, _0x2ab95d) => {
  const _0x197b8a = await _0x2ab95d.decodeJid(_0x2ab95d.user.id);
  const _0x1c993f = [_0x197b8a, _0x22bd78.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x3014a7.sender);
  const _0x35548f = _0x3014a7.body.match(/^[\\/!#.]/);
  const _0x21aac4 = _0x35548f ? _0x35548f[0] : '/';
  const _0x49e8f = _0x3014a7.body.startsWith(_0x21aac4) ? _0x3014a7.body.slice(_0x21aac4.length).split(" ")[0].toLowerCase() : '';
  const _0x371d8a = _0x3014a7.body.slice(_0x21aac4.length + _0x49e8f.length).trim().toLowerCase();
  if (_0x49e8f === "alwaysonline") {
    if (!_0x1c993f) {
      return _0x3014a7.reply("*📛 THIS IS AN OWNER COMMAND*");
    }
    let _0x4b86a8;
    if (_0x371d8a === 'on') {
      _0x22bd78.ALWAYS_ONLINE = true;
      _0x4b86a8 = "Always Online has been enabled.";
    } else if (_0x371d8a === "off") {
      _0x22bd78.ALWAYS_ONLINE = false;
      _0x4b86a8 = "Always Online has been disabled.";
    } else {
      _0x4b86a8 = "Usage:\n- `alwaysonline on`: Enable Always Online\n- `alwaysonline off`: Disable Always Online";
    }
    try {
      await _0x2ab95d.sendMessage(_0x3014a7.from, {
        'text': _0x4b86a8
      }, {
        'quoted': _0x3014a7
      });
    } catch (_0x4e4de3) {
      console.error("Error processing your request:", _0x4e4de3);
      await _0x2ab95d.sendMessage(_0x3014a7.from, {
        'text': "Error processing your request."
      }, {
        'quoted': _0x3014a7
      });
    }
  }
};
export default alwaysonlineCommand;