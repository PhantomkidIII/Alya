import _0x130775 from '../../set.cjs';
const anticallcommand = async (_0x4659cf, _0x4ab9f8) => {
  const _0x1771c5 = await _0x4ab9f8.decodeJid(_0x4ab9f8.user.id);
  const _0x4b5a7a = [_0x1771c5, _0x130775.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x4659cf.sender);
  const _0x1a2234 = _0x4659cf.body.match(/^[\\/!#.]/);
  const _0x4c02c8 = _0x1a2234 ? _0x1a2234[0] : '/';
  const _0x41210e = _0x4659cf.body.startsWith(_0x4c02c8) ? _0x4659cf.body.slice(_0x4c02c8.length).split(" ")[0].toLowerCase() : '';
  const _0x52793c = _0x4659cf.body.slice(_0x4c02c8.length + _0x41210e.length).trim().toLowerCase();
  if (_0x41210e === "anticall") {
    if (!_0x4b5a7a) {
      return _0x4659cf.reply("*Owner Only Command!*");
    }
    let _0x3496f2;
    if (_0x52793c === 'on') {
      _0x130775.AUTO_REJECT_CALLS = true;
      _0x3496f2 = "Anti-Call has been enabled.";
    } else if (_0x52793c === "off") {
      _0x130775.AUTO_REJECT_CALLS = false;
      _0x3496f2 = "Anti-Call has been disabled.";
    } else {
      _0x3496f2 = "Usage:\n- `anticall on`: Enable Anti-Call\n- `anticall off`: Disable Anti-Call";
    }
    try {
      await _0x4ab9f8.sendMessage(_0x4659cf.from, {
        'text': _0x3496f2
      }, {
        'quoted': _0x4659cf
      });
    } catch (_0x1634d7) {
      console.error("Error processing your request:", _0x1634d7);
      await _0x4ab9f8.sendMessage(_0x4659cf.from, {
        'text': "Error processing your request."
      }, {
        'quoted': _0x4659cf
      });
    }
  }
};
export default anticallcommand;