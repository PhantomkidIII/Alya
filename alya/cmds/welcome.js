import _0x47348e from '../../set.cjs';
const gcEvent = async (_0x2c201f, _0x12e807) => {
  const _0x589c97 = _0x2c201f.body.match(/^[\\/!#.]/);
  const _0x41d50d = _0x589c97 ? _0x589c97[0x0] : '/';
  const _0x12621b = _0x2c201f.body.startsWith(_0x41d50d) ? _0x2c201f.body.slice(_0x41d50d.length).split(" ")[0x0].toLowerCase() : '';
  const _0x448367 = _0x2c201f.body.slice(_0x41d50d.length + _0x12621b.length).trim().toLowerCase();
  if (_0x12621b === "welcome") {
    if (!_0x2c201f.isGroup) {
      return _0x2c201f.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }
    const _0x3cada3 = await _0x12e807.groupMetadata(_0x2c201f.from);
    const _0x3f9ba9 = _0x3cada3.participants;
    const _0x3bc268 = await _0x12e807.decodeJid(_0x12e807.user.id);
    const _0xbc87e6 = _0x3f9ba9.find(_0x5a7151 => _0x5a7151.id === _0x3bc268)?.["admin"];
    const _0x17cb4b = _0x3f9ba9.find(_0x8c92b5 => _0x8c92b5.id === _0x2c201f.sender)?.["admin"];
    if (!_0xbc87e6) {
      return _0x2c201f.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x17cb4b) {
      return _0x2c201f.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    let _0x79f3bc;
    if (_0x448367 === 'on') {
      _0x47348e.WELCOME = true;
      _0x79f3bc = "WELCOME & LEFT message has been Enabled.";
    } else if (_0x448367 === "off") {
      _0x47348e.WELCOME = false;
      _0x79f3bc = "WELCOME & LEFT message has been Disabled.";
    } else {
      _0x79f3bc = "Usage:\n- `WELCOME on`: Enable WELCOME & LEFT message\n- `WELCOME off`: Disable WELCOME & LEFT message";
    }
    try {
      await _0x12e807.sendMessage(_0x2c201f.from, {
        'text': _0x79f3bc
      }, {
        'quoted': _0x2c201f
      });
    } catch (_0x26e0dd) {
      console.error("Error processing your request:", _0x26e0dd);
      await _0x12e807.sendMessage(_0x2c201f.from, {
        'text': "Error processing your request."
      }, {
        'quoted': _0x2c201f
      });
    }
  }
};
export default gcEvent;