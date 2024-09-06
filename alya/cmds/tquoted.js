const quotedMessage = async (_0x345c7e, _0x31e7f8) => {
  try {
    const _0x139977 = _0x345c7e.body.match(/^[/!#.]/);
    const _0xdb58a5 = _0x139977 ? _0x139977[0x0] : '/';
    const _0x4bd4da = _0x345c7e.body.startsWith(_0xdb58a5) ? _0x345c7e.body.slice(_0xdb58a5.length).trim().toLowerCase() : '';
    const _0x59dfcf = ['q', "quoted"];
    if (_0x59dfcf.includes(_0x4bd4da)) {
      if (!_0x345c7e.quoted) {
        return _0x345c7e.reply("Please reply to a message!");
      }
      if (!_0x345c7e.quoted || !_0x345c7e.quoted.quoted) {
        return _0x345c7e.reply("The replied message does not contain a reply");
      }
      const _0x41c481 = await _0x345c7e.getQuotedMsg();
      if (!_0x41c481) {
        return _0x345c7e.reply("The replied message does not contain a reply");
      }
      await _0x41c481.copyForward(_0x345c7e.from, true);
    }
  } catch (_0x1aa125) {
    console.error(_0x1aa125);
  }
};
export default quotedMessage;