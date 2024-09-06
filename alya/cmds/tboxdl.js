import _0x3f5853 from 'axios';
const teraboxDownload = async (_0x8fdcaf, _0x5e5ff0) => {
  const _0x578613 = _0x8fdcaf.body.match(/^[\\/!#.]/);
  const _0x1a167a = _0x578613 ? _0x578613[0x0] : '/';
  const _0x174073 = _0x8fdcaf.body.startsWith(_0x1a167a) ? _0x8fdcaf.body.slice(_0x1a167a.length).split(" ")[0x0].toLowerCase() : '';
  const _0x1eb574 = _0x8fdcaf.body.slice(_0x1a167a.length + _0x174073.length).trim();
  const _0x571ccd = ["terabox", 'tb', "tbdl", "teraboxdl"];
  if (_0x571ccd.includes(_0x174073)) {
    if (!_0x1eb574) {
      return _0x8fdcaf.reply("Please provide a Terabox URL.");
    }
    try {
      await _0x8fdcaf.React('🕘');
      await _0x8fdcaf.reply("A Moment,*Queen_Alya* is Downloading, Please Wait...");
      const _0xc12965 = "https://teraboxvideodownloader.nepcoderdevs.workers.dev/?url=" + encodeURIComponent(_0x1eb574);
      const _0x12cd2a = await _0x3f5853.get(_0xc12965);
      const _0x3245e6 = _0x12cd2a.data;
      if (_0x3245e6.response && _0x3245e6.response.length > 0x0) {
        const _0x5cfeba = _0x3245e6.response[0x0];
        const _0x3ab249 = _0x5cfeba.resolutions["Fast Download"];
        if (_0x3ab249) {
          const _0x147755 = {
            'video': {
              'url': _0x3ab249
            },
            'caption': "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
          };
          await _0x5e5ff0.sendMessage(_0x8fdcaf.from, _0x147755, {
            'quoted': _0x8fdcaf
          });
          await _0x8fdcaf.React('✅');
          await _0x8fdcaf.reply("Download Success...");
        } else {
          throw new Error("Fast Download URL not found.");
        }
      } else {
        throw new Error("Invalid response from the downloader.");
      }
    } catch (_0x3295fb) {
      console.error("Error downloading Terabox media:", _0x3295fb.message);
      _0x8fdcaf.reply("Error downloading Terabox media.");
      await _0x8fdcaf.React('❌');
    }
  }
};
export default teraboxDownload;