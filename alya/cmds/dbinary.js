import { dBinary } from '../../star_king/alyatech.cjs';
const dbinary = async (_0x352566, _0x14b27e) => {
  const _0x2abe10 = _0x352566.body.match(/^[\\/!#.]/);
  const _0x15ec15 = _0x2abe10 ? _0x2abe10[0] : '/';
  const _0x2c91b9 = _0x352566.body.startsWith(_0x15ec15) ? _0x352566.body.slice(_0x15ec15.length).split(" ")[0].toLowerCase() : '';
  const _0x1f18a5 = _0x352566.body.slice(_0x15ec15.length + _0x2c91b9.length).trim();
  const _0x26e82d = ["decode", "dbinary"];
  if (_0x26e82d.includes(_0x2c91b9)) {
    if (!_0x1f18a5) {
      return _0x352566.reply("Please provide a text to decode.");
    }
    let _0x5f4a18 = await dBinary(_0x1f18a5);
    _0x352566.reply(_0x5f4a18);
  }
};
export default dbinary;