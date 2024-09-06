const report = async (_0x15b3fd, _0x11ca7e) => {
  const _0x1165e4 = {};
  const _0x47c010 = _0x15b3fd.body.match(/^[\\/!#.]/);
  const _0x4b0604 = _0x47c010 ? _0x47c010[0x0] : '/';
  const _0x26d121 = _0x15b3fd.body.startsWith(_0x4b0604) ? _0x15b3fd.body.slice(_0x4b0604.length).split(" ")[0x0].toLowerCase() : '';
  const _0x2d4ff0 = _0x15b3fd.body.slice(_0x4b0604.length + _0x26d121.length).trim();
  const _0x238ece = ["report", 'request'];
  if (_0x238ece.includes(_0x26d121)) {
    if (!_0x2d4ff0) {
      return _0x15b3fd.reply("*Hello _" + _0x15b3fd.pushName + "_*\nUsage Example: " + (_0x4b0604 + _0x26d121) + " hi dev play command is not working");
    }
    const _0x32fddf = _0x15b3fd.key.id;
    if (_0x1165e4[_0x32fddf]) {
      return _0x15b3fd.reply("This report has already been forwarded to the owner. Please wait for a response.");
    }
    _0x1165e4[_0x32fddf] = true;
    const _0x19e1f0 = "\n\n*User*: @" + _0x15b3fd.sender.split('@')[0x0] + "\n*Request/Bug*: " + _0x2d4ff0;
    _0x11ca7e.sendMessage("2348100835767@s.whatsapp.net", {
      'text': "*| REQUEST/BUG |*" + _0x19e1f0,
      'mentions': [_0x15b3fd.sender]
    }, {
      'quoted': _0x15b3fd
    });
    _0x15b3fd.reply("*Hello _" + _0x15b3fd.pushName + "_*\nTʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ.\nIᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ.\nPʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.");
  }
};
export default report;