import _0x21af7f from '../../set.cjs';
import _0x271210 from 'node-fetch';
const XvidsDl = async (_0x260570, _0x4451e6) => {
  const _0x54f1d8 = await _0x4451e6.decodeJid(_0x4451e6.user.id);
  const _0x39e565 = [_0x54f1d8, _0x21af7f.OWNER_NUMBER + "@s.whatsapp.net"].includes(_0x260570.sender);
  const _0x42ab30 = _0x260570.body.match(/^[\\/!#.]/);
  const _0x4fdcb3 = _0x42ab30 ? _0x42ab30[0x0] : '/';
  const _0x4f309b = _0x260570.body.startsWith(_0x4fdcb3) ? _0x260570.body.slice(_0x4fdcb3.length).split(" ")[0x0].toLowerCase() : '';
  const _0x5213e1 = _0x260570.body.slice(_0x4fdcb3.length + _0x4f309b.length).trim();
  const _0x56e504 = ["xvids", "xvidsdl", "xvideo", "xvideodl", "xvideos", "xvideosdl", "xvid", 'xviddl'];
  if (_0x56e504.includes(_0x4f309b)) {
    if (!_0x39e565) {
      return _0x260570.reply("*📛 THIS IS AN OWNER COMMAND*");
    }
    if (!_0x5213e1) {
      return _0x260570.reply("Hello _*" + _0x260570.pushName + "*_ Please insert a valid X-Video Link or Search Query!\nEg. .xvid https://www.xvideos.com/video.uphdukv604c/novinha_gulosa_pediu_pra_colocar_tudo_dentro_da_bucetinha_e_recebeu_enorme_gozada  or \n.xvid mom and son hot");
    }
    try {
      let _0x39d02e = '';
      if (/(https?:\/\/[^\s]+)/.test(_0x5213e1)) {
        _0x39d02e = _0x5213e1;
      } else {
        const _0x57dafa = await _0x271210("https://api.prabath-md.tech/api/xvideossearch?q=" + encodeURIComponent(_0x5213e1));
        const _0x529d79 = await _0x57dafa.json();
        if (_0x529d79.status === "success ✅" && _0x529d79.data && _0x529d79.data.data && _0x529d79.data.data.length > 0x0) {
          _0x39d02e = _0x529d79.data.data[0x0].url;
        } else {
          return _0x260570.reply("No results found for the query: " + _0x5213e1);
        }
      }
      const _0x50719d = await _0x271210("https://api.prabath-md.tech/api/xvdl?url=" + _0x39d02e);
      const _0x5c3496 = await _0x50719d.json();
      if (_0x5c3496 && _0x5c3496.data && _0x5c3496.data.download) {
        const _0x407524 = _0x5c3496.data.download;
        await _0x260570.reply("A moment, *Queen_Alya* is Downloading Your +18 video, Please Wait...");
        await _0x4451e6.sendMessage(_0x260570.from, {
          'video': {
            'url': _0x407524
          },
          'caption': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*",
          'gifPlayback': false
        }, {
          'quoted': _0x260570
        });
      } else {
        await _0x4451e6.sendMessage(_0x260570.from, {
          'text': "Failed to retrieve the video. Please try again later."
        }, {
          'quoted': _0x260570
        });
      }
    } catch (_0x53a670) {
      console.error("Error fetching video:", _0x53a670);
      await _0x4451e6.sendMessage(_0x260570.from, {
        'text': "Failed to retrieve the video. Please try again later."
      }, {
        'quoted': _0x260570
      });
    }
  }
};
export default XvidsDl;