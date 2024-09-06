import _0x2b06cd from 'node-fetch';
import _0x1213a2 from 'path';
const MediaFireCommand = async (_0x25784a, _0x53380d) => {
  const _0x18f75b = _0x25784a.body.match(/^[\\/!#.]/);
  const _0x1c4e24 = _0x18f75b ? _0x18f75b[0x0] : '/';
  const _0x5da268 = _0x25784a.body.startsWith(_0x1c4e24) ? _0x25784a.body.slice(_0x1c4e24.length).split(" ")[0x0].toLowerCase() : '';
  const _0x19af86 = _0x25784a.body.slice(_0x1c4e24.length + _0x5da268.length).trim();
  const _0xe3fe26 = ["mediafire", "mfire", "mfiredl", "mediafiredl", 'mf'];
  if (_0xe3fe26.includes(_0x5da268)) {
    if (!_0x19af86) {
      return _0x25784a.reply("Hello *_" + _0x25784a.pushName + "_,*\nPlease provide a MediaFire URL after the command, e.g., *.mediafire https://www.mediafire.com/file/example*");
    }
    try {
      await _0x25784a.React('🕘');
      await _0x25784a.reply("A moment, *Queen_Alya* is fetching the MediaFire file...");
      const _0x94e5cb = "https://api.prabath-md.tech/api/mediafiredl?url=" + encodeURIComponent(_0x19af86);
      const _0x3fb012 = await _0x2b06cd(_0x94e5cb);
      const _0x5a1a13 = await _0x3fb012.json();
      console.log("API Response:", _0x5a1a13);
      if (!_0x3fb012.ok || _0x5a1a13.status !== "success ✅") {
        console.error("Error: API did not return success.");
        throw new Error("No results found or an error occurred.");
      }
      const {
        link_1: _0x784db1,
        name: _0x37abdb
      } = _0x5a1a13.data;
      if (!_0x784db1) {
        console.error("Error: link_1 is not available in the response.");
        throw new Error("No download link found.");
      }
      const _0x10a7f4 = _0x1213a2.extname(_0x37abdb).toLowerCase();
      let _0x269eeb = {
        'caption': "*File:* " + _0x37abdb + "\n*Direct Downloaded Link:* " + _0x784db1 + "\n\n> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*",
        'document': {
          'url': _0x784db1,
          'filename': _0x37abdb
        },
        'mimetype': "application/octet-stream"
      };
      if ([".jpg", ".jpeg", ".png", ".webp"].includes(_0x10a7f4)) {
        _0x269eeb = {
          'image': {
            'url': _0x784db1
          },
          'caption': _0x269eeb.caption
        };
      } else {
        if ([".mp4", ".mkv", ".webm"].includes(_0x10a7f4)) {
          _0x269eeb = {
            'video': {
              'url': _0x784db1
            },
            'caption': _0x269eeb.caption
          };
        } else {
          if (['.mp3', '.wav'].includes(_0x10a7f4)) {
            _0x269eeb = {
              'audio': {
                'url': _0x784db1
              },
              'caption': _0x269eeb.caption
            };
          } else {
            if (_0x10a7f4 === ".apk") {
              _0x269eeb.mimetype = 'application/vnd.android.package-archive';
              _0x269eeb.document.filename = _0x37abdb;
            } else if (_0x10a7f4 === ".zip") {
              _0x269eeb.mimetype = "application/zip";
              _0x269eeb.document.filename = _0x37abdb;
            } else {
              _0x269eeb.document.filename = _0x37abdb;
            }
          }
        }
      }
      await _0x53380d.sendMessage(_0x25784a.from, _0x269eeb, {
        'quoted': _0x25784a
      });
    } catch (_0x376810) {
      console.error("An error occurred:", _0x376810);
      await _0x25784a.reply("Sorry, an error occurred while fetching the file. Please try again later.");
    }
  }
};
export default MediaFireCommand;