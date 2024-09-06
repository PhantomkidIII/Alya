import _0x39f2dd from '../../set.cjs';
import _0x5c6f84 from 'node-fetch';
const XnxxvidsDl = async (_0x21fe22, _0x1acb80) => {
  const _0x1f9ce9 = await _0x1acb80.decodeJid(_0x1acb80.user.id);
  const _0x13e857 = [_0x1f9ce9, _0x39f2dd.OWNER_NUMBER + '@s.whatsapp.net'].includes(_0x21fe22.sender);
  const _0x116d36 = _0x21fe22.body.match(/^[\\/!#.]/);
  const _0x4d9735 = _0x116d36 ? _0x116d36[0x0] : '/';
  const _0x85a548 = _0x21fe22.body.startsWith(_0x4d9735) ? _0x21fe22.body.slice(_0x4d9735.length).split(" ")[0x0].toLowerCase() : '';
  const _0x220f3a = _0x21fe22.body.slice(_0x4d9735.length + _0x85a548.length).trim();
  const _0x44244c = ['xnxxvids', "xnxxvidsdl", "xnxxvideo", "xnxxvideodl", "xnxxvideos", "xnxxvideosdl", "xnxx", 'xnxxviddl'];
  if (_0x44244c.includes(_0x85a548)) {
    if (!_0x13e857) {
      return _0x21fe22.reply("*📛 THIS IS AN OWNER COMMAND*");
    }
    if (!_0x220f3a) {
      return _0x21fe22.reply("Hello _*" + _0x21fe22.pushName + "*_ Please insert a valid Xnxx-Video Link or Search Query! \nEg. .xnxx https://www.xnxx.com/video-x2uttb2/fucking_with_the_neighbor or \n.xnxx mom and son hot");
    }
    try {
      let _0x36f4f6 = '';
      if (/(https?:\/\/[^\s]+)/.test(_0x220f3a)) {
        _0x36f4f6 = _0x220f3a;
      } else {
        const _0x372c72 = await _0x5c6f84('https://api.prabath-md.tech/api/xnxxsearch?q=' + encodeURIComponent(_0x220f3a));
        const _0x5011a2 = await _0x372c72.json();
        if (_0x5011a2.status === "success ✅" && _0x5011a2.data && _0x5011a2.data.datax && _0x5011a2.data.datax.length > 0x0) {
          _0x36f4f6 = _0x5011a2.data.datax[0x0].link;
        } else {
          return _0x21fe22.reply("No results found for the query: " + _0x220f3a);
        }
      }
      const _0x330e53 = await _0x5c6f84('https://api.prabath-md.tech/api/xnxxdl?url=' + _0x36f4f6);
      const _0x2c9fd4 = await _0x330e53.json();
      if (_0x2c9fd4 && _0x2c9fd4.data && _0x2c9fd4.data.download) {
        const _0x242e39 = _0x2c9fd4.data.download;
        await _0x21fe22.reply("A moment, *Queen_Alya* is Downloading Your +18 video, Please Wait...");
        await _0x1acb80.sendMessage(_0x21fe22.from, {
          'video': {
            'url': _0x242e39
          },
          'caption': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*",
          'gifPlayback': false
        }, {
          'quoted': _0x21fe22
        });
      } else {
        await _0x1acb80.sendMessage(_0x21fe22.from, {
          'text': "Failed to retrieve the video. Please try again later."
        }, {
          'quoted': _0x21fe22
        });
      }
    } catch (_0x1724c) {
      console.error("Error fetching video:", _0x1724c);
      await _0x1acb80.sendMessage(_0x21fe22.from, {
        'text': "Failed to retrieve the video. Please try again later."
      }, {
        'quoted': _0x21fe22
      });
    }
  }
};
export default XnxxvidsDl;