const rebootBot = async _0x5a36c4 => {
  const _0x316700 = _0x5a36c4.body.match(/^[\\/!#.]/);
  const _0x5cff47 = _0x316700 ? _0x316700[0x0] : '/';
  const _0x3cad8d = _0x5a36c4.body.startsWith(_0x5cff47) ? _0x5a36c4.body.slice(_0x5cff47.length).split(" ")[0x0].toLowerCase() : '';
  if (_0x3cad8d === 'reboot') {
    try {
      await _0x5a36c4.reply("Hello *_" + _0x5a36c4.pushName + "_,*\n *Alya is Rebooting....*");
      process.exit();
    } catch (_0xf3a360) {
      console.error(_0xf3a360);
      await _0x5a36c4.React('❌');
      return _0x5a36c4.reply("An error occurred while restarting the bot: " + _0xf3a360.message);
    }
  }
};
export default rebootBot;