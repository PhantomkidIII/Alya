import _0x213809 from '../alyatech.js';
import { writeFile, unlink } from 'fs/promises';
import _0x2e3138 from '../../set.cjs';
const setProfilePicture = async (_0x33c208, _0x2ff1fa) => {
  const _0xf92c9e = await _0x2ff1fa.decodeJid(_0x2ff1fa.user.id);
  const _0x1aea35 = [_0xf92c9e, _0x2e3138.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x33c208.sender);
  const _0x38b83f = _0x33c208.body.match(/^[\\/!#.]/);
  const _0x250c25 = _0x38b83f ? _0x38b83f[0x0] : '/';
  const _0x406c84 = _0x33c208.body.startsWith(_0x250c25) ? _0x33c208.body.slice(_0x250c25.length).split(" ")[0x0].toLowerCase() : '';
  const _0x2aa0c9 = ["setppfull", 'setfullprofilepic', "fullpp", 'setppbot'];
  if (_0x2aa0c9.includes(_0x406c84)) {
    if (!_0x1aea35) {
      return _0x33c208.reply("*📛 THIS IS AN OWNER COMMAND*");
    }
    if (!_0x33c208.quoted || _0x33c208.quoted.mtype !== 'imageMessage') {
      return _0x33c208.reply("Send/Reply with an image to set your profile picture " + (_0x250c25 + _0x406c84));
    }
    try {
      const _0x15d630 = await _0x33c208.quoted.download();
      if (!_0x15d630) {
        throw new Error("Failed to download Media.");
      }
      const _0xb03da7 = './' + Date.now() + '.png';
      await writeFile(_0xb03da7, _0x15d630);
      try {
        const {
          img: _0x29d3ce
        } = await _0x213809(_0x15d630);
        await _0x2ff1fa.query({
          'tag': 'iq',
          'attrs': {
            'to': _0xf92c9e,
            'type': 'set',
            'xmlns': "w:profile:picture"
          },
          'content': [{
            'tag': "picture",
            'attrs': {
              'type': "image"
            },
            'content': _0x29d3ce
          }]
        });
        _0x33c208.reply("Profile picture Updated Successfully.");
      } catch (_0x588ada) {
        throw _0x588ada;
      } finally {
        await unlink(_0xb03da7);
      }
    } catch (_0x33e463) {
      console.error("Error setting profile picture:", _0x33e463);
      _0x33c208.reply("Error setting profile picture.");
    }
  }
};
export default setProfilePicture;