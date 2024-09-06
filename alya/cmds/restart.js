const restartBot = async _0x2e2154 => {
  const _0x1b7562 = _0x2e2154.body.match(/^[\\/!#.]/);
  const _0x4a4e6b = _0x1b7562 ? _0x1b7562[0x0] : '/';
  const _0x4271c5 = _0x2e2154.body.startsWith(_0x4a4e6b) ? _0x2e2154.body.slice(_0x4a4e6b.length).split(" ")[0x0].toLowerCase() : '';
  if (_0x4271c5 === "restart") {
    try {
      await _0x2e2154.reply("Hello *_" + _0x2e2154.pushName + "_,*\n *Queen Alya is Restarting....*");
      process.exit();
    } catch (_0xb94a85) {
      console.error(_0xb94a85);
      await _0x2e2154.React('❌');
      return _0x2e2154.reply("An error occurred while restarting the bot: " + _0xb94a85.message);
    }
  }
};
export default restartBot;