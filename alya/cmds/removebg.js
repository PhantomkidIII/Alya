import 'path';
import _0x26c331 from 'fs';
import { v4 as _0x511eaa } from 'uuid';
import { removeBackgroundFromImageFile } from 'remove.bg';
const tourl = async (_0x42fec6, _0x23ba1e) => {
  const _0x5a0153 = _0x42fec6.body.match(/^[\\/!#.]/);
  const _0x45b678 = _0x5a0153 ? _0x5a0153[0x0] : '/';
  const _0x288f1f = _0x42fec6.body.startsWith(_0x45b678) ? _0x42fec6.body.slice(_0x45b678.length).split(" ")[0x0].toLowerCase() : '';
  const _0x228baf = ["removebg", "rmbg", "nobg"];
  if (_0x228baf.includes(_0x288f1f)) {
    const _0x4020a5 = ["q61faXzzR5zNU6cvcrwtUkRU", "S258diZhcuFJooAtHTaPEn4T", '5LjfCVAp4vVNYiTjq9mXJWHF', "aT7ibfUsGSwFyjaPZ9eoJc61", "BY63t7Vx2tS68YZFY6AJ4HHF", "5Gdq1sSWSeyZzPMHqz7ENfi8", "86h6d6u4AXrst4BVMD9dzdGZ", "xp8pSDavAgfE5XScqXo9UKHF", "dWbCoCb3TacCP93imNEcPxcL"];
    const _0x451a77 = _0x4020a5[Math.floor(Math.random() * _0x4020a5.length)];
    if (!_0x42fec6.quoted || _0x42fec6.quoted.mtype !== 'imageMessage') {
      return _0x42fec6.reply("> Send/Reply with an image for remove you picture backgroud\n*Example " + (_0x45b678 + _0x288f1f) + '*');
    }
    const _0x413ff1 = "./gifted/remobg-" + _0x511eaa();
    const _0x370240 = "./gifted/hremo-" + _0x511eaa() + ".png";
    const _0x3f4d84 = await _0x42fec6.quoted.download();
    _0x26c331.writeFileSync(_0x413ff1, _0x3f4d84);
    _0x42fec6.reply("*Please Wait, Processing...*");
    removeBackgroundFromImageFile({
      'path': _0x413ff1,
      'apiKey': _0x451a77,
      'size': "regular",
      'type': "auto",
      'scale': "100%",
      'outputFile': _0x370240
    }).then(async () => {
      _0x23ba1e.sendMessage(_0x42fec6.from, {
        'image': _0x26c331.readFileSync(_0x370240),
        'caption': "> Hey " + _0x42fec6.pushName + " Your picture Background Romoved Sucessfully"
      }, {
        'quoted': _0x42fec6
      });
      _0x26c331.unlinkSync(_0x413ff1);
      _0x26c331.unlinkSync(_0x370240);
    })["catch"](_0x52ecdd => {
      console.error("Error processing image:", _0x52ecdd);
      _0x42fec6.reply("There was an error processing the image.");
      _0x26c331.unlinkSync(_0x413ff1);
    });
  }
};
export default tourl;