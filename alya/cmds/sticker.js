import _0xbc1f5f from 'fs/promises';
import _0x2795e5 from '../../set.cjs';
const StickerCmd = async (_0x5e991f, _0x1b1a96) => {
  const _0x1273db = _0x5e991f.body.match(/^[\\/!#.]/);
  const _0x351a9d = _0x1273db ? _0x1273db[0x0] : '/';
  const [_0x2c85b7, _0x44335f] = _0x5e991f.body.startsWith(_0x351a9d) ? _0x5e991f.body.slice(_0x351a9d.length).split(" ") : ['', ''];
  const _0x2ed5cb = global.packname || "𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀";
  const _0xa9cc65 = global.author || 'STAR KING';
  const _0x2d8c21 = ["sticker", 's', "autosticker"];
  if (_0x2c85b7 === 'autosticker') {
    if (_0x44335f === 'on') {
      _0x2795e5.AUTO_STICKER = true;
      await _0x5e991f.reply("Auto-sticker has been enabled.");
    } else if (_0x44335f === "off") {
      _0x2795e5.AUTO_STICKER = false;
      await _0x5e991f.reply("Auto-sticker has been disabled.");
    } else {
      await _0x5e991f.reply("Usage: .autosticker on|off");
    }
    return;
  }
  if (_0x2795e5.AUTO_STICKER && !_0x5e991f.key.fromMe) {
    if (_0x5e991f.type === "imageMessage") {
      let _0x3eca18 = await _0x5e991f.download();
      await _0x1b1a96.sendImageAsSticker(_0x5e991f.from, _0x3eca18, _0x5e991f, {
        'packname': _0x2ed5cb,
        'author': _0xa9cc65
      });
      console.log("Auto sticker detected");
      return;
    } else {
      if (_0x5e991f.type === "videoMessage" && _0x5e991f.msg.seconds <= 0xb) {
        let _0x52c98c = await _0x5e991f.download();
        await _0x1b1a96.sendVideoAsSticker(_0x5e991f.from, _0x52c98c, _0x5e991f, {
          'packname': _0x2ed5cb,
          'author': _0xa9cc65
        });
        return;
      }
    }
  }
  if (_0x2d8c21.includes(_0x2c85b7)) {
    const _0x5f3569 = _0x5e991f.quoted || {};
    if (!_0x5f3569 || _0x5f3569.mtype !== "imageMessage" && _0x5f3569.mtype !== "videoMessage") {
      return _0x5e991f.reply("Send/Reply with an image or video to convert into a sticker " + (_0x351a9d + _0x2c85b7));
    }
    const _0x4eeb78 = await _0x5f3569.download();
    if (!_0x4eeb78) {
      throw new Error("Failed to download media.");
    }
    const _0x15f339 = './' + Date.now() + '.' + (_0x5f3569.mtype === 'imageMessage' ? 'png' : "mp4");
    await _0xbc1f5f.writeFile(_0x15f339, _0x4eeb78);
    if (_0x5f3569.mtype === "imageMessage") {
      const _0x22e529 = await _0xbc1f5f.readFile(_0x15f339);
      await _0x1b1a96.sendImageAsSticker(_0x5e991f.from, _0x22e529, _0x5e991f, {
        'packname': _0x2ed5cb,
        'author': _0xa9cc65
      });
    } else if (_0x5f3569.mtype === "videoMessage") {
      await _0x1b1a96.sendVideoAsSticker(_0x5e991f.from, _0x15f339, _0x5e991f, {
        'packname': _0x2ed5cb,
        'author': _0xa9cc65
      });
    }
  }
};
export default StickerCmd;