const ping = async (_0x3629aa, _0x186edc) => {
  const _0x7a500d = /^[\\/!#.]/gi.test(_0x3629aa.body) ? _0x3629aa.body.match(/^[\\/!#.]/gi)[0x0] : '/';
  const _0x5be6ba = _0x3629aa.body.startsWith(_0x7a500d) ? _0x3629aa.body.slice(_0x7a500d.length).toLowerCase() : '';
  if (_0x5be6ba === "ping") {
    const _0x325a34 = new Date();
    const {
      key: _0x2eacfa
    } = await _0x186edc.sendMessage(_0x3629aa.from, {
      'text': "*_ᴘɪɴɢɪɴɢ ᴛᴏ sᴇʀᴠᴇʀ..._*"
    }, {
      'quoted': _0x3629aa
    });
    await _0x3629aa.React('🚀');
    const _0x5242a1 = "*_ALYA sᴘᴇᴇᴅ: " + (new Date() - _0x325a34) + " ms_*";
    await _0x3629aa.React('⚡');
    return _0x3629aa.reply('' + _0x5242a1, {
      'quoted': _0x2eacfa
    });
  }
};
export default ping;