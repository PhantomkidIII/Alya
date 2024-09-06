import _0x86d9ff from 'node-fetch';
const tikdown2 = async (_0x3943ef, _0x3e6ff6) => {
  const _0x4332b2 = _0x3943ef.body.match(/^[\\/!#.]/);
  const _0x35a2ba = _0x4332b2 ? _0x4332b2[0x0] : '/';
  const _0x33fb55 = _0x3943ef.body.startsWith(_0x35a2ba) ? _0x3943ef.body.slice(_0x35a2ba.length).split(" ")[0x0].toLowerCase() : '';
  const _0x1f14eb = _0x3943ef.body.slice(_0x35a2ba.length + _0x33fb55.length).trim();
  const _0x5e4b37 = ["tiktok2", "tt2", 'tiktokdl2', "tiktokdown2", "tikdown2"];
  if (_0x5e4b37.includes(_0x33fb55)) {
    try {
      if (!_0x1f14eb[0x0]) {
        return _0x3943ef.reply("insert a tiktok video link!");
      }
      const _0x1d4756 = await _0x86d9ff('https://api.prabath-md.tech/api/tiktokdl?url=' + _0x1f14eb);
      const _0xe20e1d = await _0x1d4756.json();
      await _0x3943ef.reply("A moment, *Queen_Nikka* is Downloading...");
      const _0x5f50a6 = _0xe20e1d.data.no_wm;
      await _0x3e6ff6.sendMessage(_0x3943ef.from, {
        'video': {
          'url': _0x5f50a6
        },
        'caption': "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*",
        'gifPlayback': false
      }, {
        'quoted': _0x3943ef
      });
    } catch (_0x5dbf28) {
      console.error("Error fetching video:", _0x5dbf28);
      await _0x3e6ff6.sendMessage(_0x3943ef.from, {
        'text': "Failed to retrieve the video. Please try again later."
      }, {
        'quoted': _0x3943ef
      });
    }
  }
};
export default tikdown2;