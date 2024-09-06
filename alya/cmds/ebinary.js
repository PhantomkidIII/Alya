import { eBinary } from '../../star_king/alyatech.cjs';
const ebinary = async (_0x3c0206, _0x44657a) => {
  const _0x5de9a3 = _0x3c0206.body.match(/^[\\/!#.]/);
  const _0x270a83 = _0x5de9a3 ? _0x5de9a3[0x0] : '/';
  const _0x4a709e = _0x3c0206.body.startsWith(_0x270a83) ? _0x3c0206.body.slice(_0x270a83.length).split(" ")[0x0].toLowerCase() : '';
  const _0x2715e8 = _0x3c0206.body.slice(_0x270a83.length + _0x4a709e.length).trim();
  const _0x492bf7 = ["encode", "ebinary"];
  if (_0x492bf7.includes(_0x4a709e)) {
    if (!_0x2715e8) {
      return _0x3c0206.reply("Please provide a text to encode");
    }
    let _0x1964f2 = await eBinary(_0x2715e8);
    _0x3c0206.reply(_0x1964f2);
  }
};
export default ebinary;