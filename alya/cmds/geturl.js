import { UploadFileUgu, TelegraPh } from '../alyate.js';
import { writeFile, unlink } from 'fs/promises';
const tourl = async (_0x1d2d83, _0x1963ac) => {
  const _0x212ef2 = _0x1d2d83.body.match(/^[\\/!#.]/);
  const _0x49dc84 = _0x212ef2 ? _0x212ef2[0] : '/';
  const _0x53ece0 = _0x1d2d83.body.startsWith(_0x49dc84) ? _0x1d2d83.body.slice(_0x49dc84.length).split(" ")[0].toLowerCase() : '';
  const _0x3f10fb = ["tourl", "geturl", "url"];
  if (_0x3f10fb.includes(_0x53ece0)) {
    if (!_0x1d2d83.quoted || !["imageMessage", "videoMessage", "audioMessage"].includes(_0x1d2d83.quoted.mtype)) {
      return _0x1d2d83.reply("Send/Reply with an image, video, or audio to upload " + (_0x49dc84 + _0x53ece0));
    }
    try {
      const _0x403ecf = ["*「▰▰▰▱▱▱▱▱▱▱」*", "*「▰▰▰▰▱▱▱▱▱▱」*", "*「▰▰▰▰▰▱▱▱▱▱」*", "*「▰▰▰▰▰▰▱▱▱▱」*", "*「▰▰▰▰▰▰▰▱▱▱」*", "*「▰▰▰▰▰▰▰▰▱▱」*", "*「▰▰▰▰▰▰▰▰▰▱」*", "*「▰▰▰▰▰▰▰▰▰▰」*"];
      const _0x4e6b5a = _0x403ecf.length;
      let _0x51ba7f = 0;
      const {
        key: _0x53205a
      } = await _0x1963ac.sendMessage(_0x1d2d83.from, {
        'text': _0x403ecf[_0x51ba7f]
      }, {
        'quoted': _0x1d2d83
      });
      const _0x444649 = setInterval(() => {
        _0x51ba7f = (_0x51ba7f + 1) % _0x4e6b5a;
        _0x1963ac.sendMessage(_0x1d2d83.from, {
          'text': _0x403ecf[_0x51ba7f]
        }, {
          'quoted': _0x1d2d83,
          'messageId': _0x53205a
        });
      }, 500);
      const _0x3ed35f = await _0x1d2d83.quoted.download();
      if (!_0x3ed35f) {
        throw new Error("Failed to download media.");
      }
      const _0x22dd73 = _0x3ed35f.length / 1048576;
      if (_0x22dd73 > 20) {
        clearInterval(_0x444649);
        return _0x1d2d83.reply("File size exceeds the limit of 20MB.");
      }
      const _0x35d599 = getFileExtension(_0x1d2d83.quoted.mtype);
      if (!_0x35d599) {
        throw new Error("Unknown media type.");
      }
      const _0xf2b3a9 = './' + Date.now() + '.' + _0x35d599;
      await writeFile(_0xf2b3a9, _0x3ed35f);
      let _0x20e9ee;
      if (_0x1d2d83.quoted.mtype === "imageMessage") {
        _0x20e9ee = await TelegraPh(_0xf2b3a9);
      } else {
        _0x20e9ee = await UploadFileUgu(_0xf2b3a9);
      }
      clearInterval(_0x444649);
      await _0x1963ac.sendMessage(_0x1d2d83.from, {
        'text': "✅ Loading complete."
      }, {
        'quoted': _0x1d2d83
      });
      const _0xdaea32 = getMediaType(_0x1d2d83.quoted.mtype);
      const _0x2cdf34 = _0x20e9ee.url || _0x20e9ee;
      const _0x401e88 = {
        [_0xdaea32]: {
          'url': _0x2cdf34
        },
        'caption': "*Hey " + _0x1d2d83.pushName + " Here Is Your Media*\n*url:* " + _0x2cdf34
      };
      await _0x1963ac.sendMessage(_0x1d2d83.from, _0x401e88, {
        'quoted': _0x1d2d83
      });
      await unlink(_0xf2b3a9);
    } catch (_0x5c88f1) {
      console.error("Error processing media:", _0x5c88f1);
      _0x1d2d83.reply("Error processing media.");
    }
  }
};
const getFileExtension = _0x180fef => {
  switch (_0x180fef) {
    case "imageMessage":
      return "jpg";
    case "videoMessage":
      return "mp4";
    case "audioMessage":
      return "mp3";
    default:
      return null;
  }
};
const getMediaType = _0x17f056 => {
  switch (_0x17f056) {
    case "imageMessage":
      return "image";
    case "videoMessage":
      return "video";
    case "audioMessage":
      return "audio";
    default:
      return null;
  }
};
export default tourl;