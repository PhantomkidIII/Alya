import _0x31c45f from 'qrcode';
import _0x46ca45 from 'fs';
import _0x213151 from 'path';
const toqr = async (_0x472384, _0x47f9c8) => {
  try {
    const _0x1477ec = _0x472384.body.match(/^[\\/!#.]/);
    const _0x4aa163 = _0x1477ec ? _0x1477ec[0x0] : '/';
    const _0x318aaa = _0x472384.body.startsWith(_0x4aa163) ? _0x472384.body.slice(_0x4aa163.length).split(" ")[0x0].toLowerCase() : '';
    const _0x996734 = _0x472384.body.slice(_0x4aa163.length + _0x318aaa.length).trim();
    const _0x1e8fa6 = ["toqr", 'qr'];
    if (!_0x1e8fa6.includes(_0x318aaa)) {
      return;
    }
    if (!_0x996734) {
      return _0x472384.reply("Please include link or text!");
    }
    let _0x26c57d = await _0x31c45f.toDataURL(_0x996734, {
      'scale': 0x23
    });
    let _0x2edc92 = Buffer.from(_0x26c57d.replace("data:image/png;base64,", ''), 'base64');
    let _0x1e264e = Date.now() + '.jpg';
    await _0x46ca45.writeFileSync(_0x213151.join('./', _0x1e264e), _0x2edc92);
    let _0x4aa1a1 = _0x46ca45.readFileSync(_0x213151.join('./', _0x1e264e));
    await _0x47f9c8.sendMessage(_0x472384.from, {
      'image': _0x4aa1a1,
      'caption': "QR code generated successfully!\n\n> *©𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
    }, {
      'quoted': _0x472384
    });
    setTimeout(() => {
      _0x46ca45.unlinkSync(_0x213151.join('./', _0x1e264e));
    }, 0x2710);
  } catch (_0x34674b) {
    console.error('Error:', _0x34674b);
    _0x472384.reply("An error occurred while generating the QR code.");
  }
};
export default toqr;