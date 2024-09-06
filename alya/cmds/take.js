import 'fs/promises';
const handleTakeCommand = async (_0x58d130, _0x43b3e3) => {
  const _0x19c234 = _0x58d130.body.match(/^[\\/!#.]/);
  const _0x6e3517 = _0x19c234 ? _0x19c234[0x0] : '/';
  const [_0x4ab58d, ..._0xa57536] = _0x58d130.body.startsWith(_0x6e3517) ? _0x58d130.body.slice(_0x6e3517.length).split(" ") : ['', ''];
  if (_0x4ab58d !== 'take') {
    return;
  }
  const [_0x43cc65, _0x2ee5e5] = _0xa57536.join(" ").split('|');
  if (!_0x43cc65 || !_0x2ee5e5) {
    return _0x58d130.reply("Use: .take packname|author");
  }
  global.packname = _0x43cc65;
  global.author = _0x2ee5e5;
  const _0x5322c3 = _0x58d130.quoted || {};
  if (!['imageMessage', 'videoMessage', 'stickerMessage'].includes(_0x5322c3.mtype)) {
    return _0x58d130.reply("Send/Reply with an image or video to use " + (_0x6e3517 + _0x4ab58d));
  }
  const _0x7262b2 = await _0x5322c3.download();
  if (!_0x7262b2) {
    throw new Error("Failed to download media.");
  }
  await _0x43b3e3.sendImageAsSticker(_0x58d130.from, _0x7262b2, _0x58d130, {
    'packname': global.packname,
    'author': global.author
  });
};
export default handleTakeCommand;