import _0x28a5df from 'node-fetch';
import _0x1cd8cf from 'fs';
const emojimix = async (_0x16f7d1, _0x2e48db) => {
  try {
    const _0x5de561 = _0x16f7d1.body.match(/^[\\/!#.]/);
    const _0x19d261 = _0x5de561 ? _0x5de561[0x0] : '/';
    const _0xe48b6b = _0x16f7d1.body.startsWith(_0x19d261) ? _0x16f7d1.body.slice(_0x19d261.length).split(" ")[0x0].toLowerCase() : '';
    const _0x5923e5 = _0x16f7d1.body.slice(_0x19d261.length + _0xe48b6b.length).trim();
    const _0x5898ee = ['emojimix', 'emix'];
    if (!_0x5898ee.includes(_0xe48b6b)) {
      return;
    }
    let [_0x4616d8, _0x1a58d4] = _0x5923e5.split('+');
    if (!_0x4616d8 || !_0x1a58d4) {
      return _0x16f7d1.reply("Example: " + (_0x19d261 + _0xe48b6b) + " 😅+🤔");
    }
    const _0x1cce32 = "https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x4616d8) + '_' + encodeURIComponent(_0x1a58d4);
    const _0x207802 = await _0x28a5df(_0x1cce32);
    const _0x41bf02 = await _0x207802.json();
    if (!_0x41bf02.results || _0x41bf02.results.length === 0x0) {
      return _0x16f7d1.reply("No emoji mix found for the provided emojis.");
    }
    for (let _0x1e3faa of _0x41bf02.results) {
      const _0x957187 = await _0x2e48db.sendImageAsSticker(_0x16f7d1.from, _0x1e3faa.url, _0x16f7d1, {
        'packname': "Queen_Alya",
        'author': "Queen_Alya",
        'categories': _0x1e3faa.tags
      });
      await _0x1cd8cf.unlinkSync(_0x957187);
    }
  } catch (_0x2d502d) {
    console.error("Error:", _0x2d502d);
    _0x16f7d1.reply("An error occurred while processing the command.");
  }
};
export default emojimix;