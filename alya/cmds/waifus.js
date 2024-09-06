import _0x7c6e62 from 'axios';
const stickerCommand = async (_0x3dccef, _0x3ead23) => {
  const _0xede95b = _0x3dccef.body.match(/^[\\/!#.]/);
  const _0x16d597 = _0xede95b ? _0xede95b[0x0] : '/';
  const _0x128021 = _0x3dccef.body.startsWith(_0x16d597) ? _0x3dccef.body.slice(_0x16d597.length).split(" ")[0x0].toLowerCase() : '';
  const _0x45b704 = ["cry", 'kiss', "kill", "kick", "hug", "pat", 'lick', "bite", 'yeet', "bully", "bonk", "wink", "poke", "nom", "slap", "smile", "wave", 'awoo', "blush", "smug", "dance", 'happy', 'sad', "cringe", "cuddle", "shinobu", "handhold", 'glomp', "highfive"];
  if (_0x45b704.includes(_0x128021)) {
    try {
      const {
        data: _0x27a1ca
      } = await _0x7c6e62.get('https://api.waifu.pics/sfw/' + _0x128021);
      if (_0x27a1ca && _0x27a1ca.url) {
        _0x3ead23.sendImageAsSticker(_0x3dccef.from, _0x27a1ca.url, _0x3dccef, {
          'packname': "𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀",
          'author': "Gifted Tech"
        });
      } else {
        _0x3dccef.reply("Error fetching sticker.");
      }
    } catch (_0x3da13c) {
      console.error("Error fetching sticker:", _0x3da13c);
      _0x3dccef.reply("Error fetching sticker.");
    }
  }
};
export default stickerCommand;