import _0x143c6b from '../alyake.js';
import _0x5cb684 from '../../set.cjs';
const ownerContact = async (_0x244417, _0x313411) => {
  const _0x34c06d = _0x5cb684.OWNER_NUMBER;
  const _0x23ff83 = _0x244417.body.match(/^[\\/!#.]/);
  const _0x84391a = _0x23ff83 ? _0x23ff83[0x0] : '/';
  const _0xab7961 = _0x244417.body.startsWith(_0x84391a) ? _0x244417.body.slice(_0x84391a.length).split(" ")[0x0].toLowerCase() : '';
  const _0x5afc93 = _0x244417.body.slice(_0x84391a.length + _0xab7961.length).trim();
  if (_0xab7961 === 'owner') {
    try {
      await _0x313411.sendContact(_0x244417.from, [_0x34c06d], _0x244417);
      await _0x244417.React('✅');
    } catch (_0xcdb850) {
      console.error("Error sending owner contact:", _0xcdb850);
      _0x244417.reply("Error sending owner contact.");
      await _0x244417.React('❌');
    }
  } else {
    if (_0xab7961 === "setvar") {
      const _0x18ae98 = _0x5afc93.split(" ");
      await _0x143c6b(_0x244417, _0x18ae98);
    }
  }
};
export default ownerContact;