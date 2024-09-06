import _0x2d99aa from '../../set.cjs';
const modeCommand = async (_0xacbf94, _0x1b8a57) => {
  const _0x35abd3 = await _0x1b8a57.decodeJid(_0x1b8a57.user.id);
  const _0x47e5a0 = [_0x35abd3, _0x2d99aa.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0xacbf94.sender);
  const _0x18fa17 = _0xacbf94.body.match(/^[\\/!#.]/);
  const _0x407d78 = _0x18fa17 ? _0x18fa17[0x0] : '/';
  const _0x4823e5 = _0xacbf94.body.startsWith(_0x407d78) ? _0xacbf94.body.slice(_0x407d78.length).split(" ")[0x0].toLowerCase() : '';
  const _0x512d48 = _0xacbf94.body.slice(_0x407d78.length + _0x4823e5.length).trim().toLowerCase();
  if (_0x4823e5 === "mode") {
    if (!_0x47e5a0) {
      return _0xacbf94.reply("*ᴛʜɪs ɪs ᴏᴡɴᴇʀ ᴏɴʟʏ ᴄᴏᴍᴍᴀɴᴅ*");
    }
    let _0xa9562;
    if (_0x512d48 === "public") {
      _0x2d99aa.MODE = "public";
      _0xa9562 = "Mode has been set to public.";
    } else if (_0x512d48 === "private") {
      _0x2d99aa.MODE = "private";
      _0xa9562 = "Mode has been set to private.";
    } else {
      _0xa9562 = "Usage:\n- `mode public`: Set mode to public\n- `mode private`: Set mode to private";
    }
    try {
      await _0x1b8a57.sendMessage(_0xacbf94.from, {
        'text': _0xa9562
      }, {
        'quoted': _0xacbf94
      });
    } catch (_0x41ca0b) {
      console.error("Error processing your request:", _0x41ca0b);
      await _0x1b8a57.sendMessage(_0xacbf94.from, {
        'text': "Error processing your request."
      }, {
        'quoted': _0xacbf94
      });
    }
  }
};
export default modeCommand;