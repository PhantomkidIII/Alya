const report = async (_0x2daad0, _0x3b7149) => {
  try {
    const _0xd9985e = _0x2daad0.body.match(/^[\\/!#.]/);
    const _0x3c322e = _0xd9985e ? _0xd9985e[0] : '/';
    const _0x37dd59 = _0x2daad0.body.startsWith(_0x3c322e) ? _0x2daad0.body.slice(_0x3c322e.length).split(" ")[0].toLowerCase() : '';
    const _0x37b50b = _0x2daad0.body.slice(_0x3c322e.length + _0x37dd59.length).trim();
    const _0x7435bf = ["calculate", "calc", "math", "maths", "calculator", "cal"];
    if (_0x7435bf.includes(_0x37dd59)) {
      let _0x1d770b = _0x2daad0.from;
      _0x3b7149.math = _0x3b7149.math ? _0x3b7149.math : {};
      if (_0x1d770b in _0x3b7149.math) {
        clearTimeout(_0x3b7149.math[_0x1d770b][3]);
        delete _0x3b7149.math[_0x1d770b];
        return _0x2daad0.reply("...");
      }
      let _0x6482e9 = _0x37b50b.replace(/[^0-9\-\/+*×÷πEe()piPI.]/g, '').replace(/×/g, '*').replace(/÷/g, '/').replace(/π|pi/gi, "Math.PI").replace(/e/gi, "Math.E").replace(/\/+/g, '/').replace(/\++/g, '+').replace(/-+/g, '-');
      let _0x57fe8d = _0x6482e9.replace(/Math\.PI/g, 'π').replace(/Math\.E/g, 'e').replace(/\//g, '÷').replace(/\*/g, '×');
      let _0x3a08e8 = new Function("return " + _0x6482e9)();
      if (isNaN(_0x3a08e8)) {
        throw new Error("example: .calc 500+500");
      }
      _0x2daad0.reply('*' + _0x57fe8d + "* = _" + _0x3a08e8 + '_');
    }
  } catch (_0x4453b7) {
    if (_0x4453b7 instanceof SyntaxError) {
      return _0x2daad0.reply("Invalid syntax. Please check your expression.");
    } else {
      if (_0x4453b7 instanceof Error) {
        return _0x2daad0.reply(_0x4453b7.message);
      } else {}
    }
  }
};
export default report;