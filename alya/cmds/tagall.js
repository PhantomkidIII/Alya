const tagAll = async (_0xade7da, _0x4a5974) => {
  try {
    const _0x3ae19f = await _0x4a5974.decodeJid(_0x4a5974.user.id);
    const _0x57dfae = _0xade7da.body.match(/^[\\/!#.]/);
    const _0x5a1b43 = _0x57dfae ? _0x57dfae[0x0] : '/';
    const _0x401739 = _0xade7da.body.startsWith(_0x5a1b43) ? _0xade7da.body.slice(_0x5a1b43.length).split(" ")[0x0].toLowerCase() : '';
    const _0x26f11b = ["tagall"];
    if (!_0x26f11b.includes(_0x401739)) {
      return;
    }
    const _0x49718a = await _0x4a5974.groupMetadata(_0xade7da.from);
    const _0xa8196a = _0x49718a.participants;
    const _0x1184ed = _0xa8196a.find(_0x5bc54c => _0x5bc54c.id === _0x3ae19f)?.["admin"];
    const _0x10271c = _0xa8196a.find(_0x3ff052 => _0x3ff052.id === _0xade7da.sender)?.["admin"];
    if (!_0xade7da.isGroup) {
      return _0xade7da.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }
    if (!_0x1184ed) {
      return _0xade7da.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x10271c) {
      return _0xade7da.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    let _0xa419a1 = "● *Attention Everyone* ●\n\n*Message:* " + (_0xade7da.body.slice(_0x5a1b43.length + _0x401739.length).trim() || "no message") + "\n\n";
    for (let _0x590563 of _0xa8196a) {
      _0xa419a1 += "❒ @" + _0x590563.id.split('@')[0x0] + "\n";
    }
    await _0x4a5974.sendMessage(_0xade7da.from, {
      'text': _0xa419a1,
      'mentions': _0xa8196a.map(_0x4f1f9f => _0x4f1f9f.id)
    }, {
      'quoted': _0xade7da
    });
  } catch (_0x3db61c) {
    console.error("Error:", _0x3db61c);
    await _0xade7da.reply("An error occurred while processing the command.");
  }
};
export default tagAll;