import _0x20f794 from 'node-fetch';
const WikimediaCommand = async (_0x5c18ca, _0x231c81) => {
  const _0x2f872c = _0x5c18ca.body.match(/^[\\/!#.]/);
  const _0x52648e = _0x2f872c ? _0x2f872c[0x0] : '/';
  const _0x852e79 = _0x5c18ca.body.startsWith(_0x52648e) ? _0x5c18ca.body.slice(_0x52648e.length).split(" ")[0x0].toLowerCase() : '';
  const _0x72271f = _0x5c18ca.body.slice(_0x52648e.length + _0x852e79.length).trim();
  const _0x34cc9b = ["wikimedia", 'wiki', "wikimediaimage"];
  if (_0x34cc9b.includes(_0x852e79)) {
    if (!_0x72271f) {
      return _0x5c18ca.reply("Hello *_" + _0x5c18ca.pushName + "_,*\nPlease provide a search term after the command, e.g., *.wikimedia elon musk*");
    }
    try {
      await _0x5c18ca.React('🕘');
      await _0x5c18ca.reply("A moment, *Alya* is fetching Wikimedia search results...");
      const _0x342cfb = 'https://api-smd.onrender.com/api/wikimedia?query=' + encodeURIComponent(_0x72271f);
      const _0xa913b3 = await _0x20f794(_0x342cfb);
      const _0x7ebc6a = await _0xa913b3.json();
      if (!_0xa913b3.ok || !_0x7ebc6a.status || !_0x7ebc6a.result.length) {
        throw new Error("No results found or an error occurred.");
      }
      const _0x6ed60f = _0x7ebc6a.result[0x0];
      const {
        title: _0x426496,
        source: _0x504a3a,
        image: _0x41d798
      } = _0x6ed60f;
      let _0x5aa683 = "*Title:* " + _0x426496 + "\n*Source:* [Link](" + _0x504a3a + ")\n\n";
      _0x7ebc6a.result.slice(0x1).forEach((_0x174608, _0x318539) => {
        _0x5aa683 += _0x318539 + 0x2 + ". " + _0x174608.title + "\n";
      });
      await _0x231c81.sendMessage(_0x5c18ca.from, {
        'image': {
          'url': _0x41d798
        },
        'caption': _0x5aa683
      }, {
        'quoted': _0x5c18ca
      });
    } catch (_0x21ee23) {
      console.error(_0x21ee23);
      await _0x5c18ca.reply("Sorry, an error occurred while fetching the data. Please try again later.");
    }
  }
};
export default WikimediaCommand;