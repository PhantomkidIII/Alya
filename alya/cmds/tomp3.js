import { toAudio } from '../../star_king/alayke.cjs';
const tomp3 = async (_0x2326fa, _0x30ba10) => {
  try {
    const _0x584d17 = _0x2326fa.body.match(/^[\\/!#.]/);
    const _0x2bcbb3 = _0x584d17 ? _0x584d17[0x0] : '/';
    const _0x41e998 = _0x2326fa.body.startsWith(_0x2bcbb3) ? _0x2326fa.body.slice(_0x2bcbb3.length).split(" ")[0x0].toLowerCase() : '';
    const _0x62d0b4 = ["tomp3", "tomusic", "mp3"];
    if (!_0x62d0b4.includes(_0x41e998)) {
      return;
    }
    if (!_0x2326fa.quoted || _0x2326fa.quoted.mtype !== "videoMessage") {
      return _0x2326fa.reply("Send/Reply with Video to convert into MP3 with caption " + (_0x2bcbb3 + _0x41e998));
    }
    _0x2326fa.reply("Converting to MP3, please wait...");
    const _0x58fdfe = await _0x2326fa.quoted.download();
    const _0xc09a5 = await toAudio(_0x58fdfe, "mp4");
    await _0x30ba10.sendMessage(_0x2326fa.from, {
      'document': _0xc09a5,
      'mimetype': 'audio/mpeg',
      'fileName': "Converted By " + _0x30ba10.user.name + ".mp3"
    }, {
      'quoted': _0x2326fa
    });
  } catch (_0x4dade5) {
    console.error("Error:", _0x4dade5);
    _0x2326fa.reply("An error occurred while processing the command.");
  }
};
export default tomp3;