import _0x38c682 from 'node-fetch';
const GDriveDownloader = async (_0x1d6381, _0x2e21fc) => {
  const _0x23c24b = _0x1d6381.body.match(/^[\\/!#.]/);
  const _0x4ef165 = _0x23c24b ? _0x23c24b[0x0] : '/';
  const _0x572e4d = _0x1d6381.body.startsWith(_0x4ef165) ? _0x1d6381.body.slice(_0x4ef165.length).split(" ")[0x0].toLowerCase() : '';
  const _0x47af2c = _0x1d6381.body.slice(_0x4ef165.length + _0x572e4d.length).trim();
  const _0x220c28 = ["gdrive", "drive", 'drivedl', 'googledrive', 'gdrivedl', "gdrivedownloader"];
  if (_0x220c28.includes(_0x572e4d)) {
    try {
      await _0x1d6381.React('🕘');
      if (!_0x47af2c) {
        return _0x1d6381.reply("Hello _*" + _0x1d6381.pushName + "*_ Please insert a valid Google Drive link!");
      }
      await _0x1d6381.reply("Downloading media from Google Drive. Please wait...");
      const _0x139ae1 = await _0x38c682("https://api-smd.onrender.com/api/gdrive?url=" + _0x47af2c);
      const _0x5eac88 = await _0x139ae1.json();
      if (_0x5eac88 && _0x5eac88.downloadUrl) {
        const _0xd36f4e = _0x5eac88.downloadUrl;
        const _0x3d91b3 = _0x5eac88.mimetype.split('/')[0x0];
        if (_0x3d91b3 === "audio" || _0x3d91b3 === "video" || _0x3d91b3 === "image") {
          await _0x2e21fc.sendMessage(_0x1d6381.from, {
            [_0x3d91b3]: {
              'url': _0xd36f4e
            },
            'caption': "Downloaded media: *" + _0x5eac88.fileName + "*\n\n> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
          }, {
            'quoted': _0x1d6381
          });
        } else {
          const _0x284fb8 = _0x5eac88.fileName.split('.').pop();
          await _0x2e21fc.sendMessage(_0x1d6381.from, {
            'document': {
              'url': _0xd36f4e,
              'filename': _0x5eac88.fileName
            },
            'caption': "Downloaded " + _0x284fb8.toUpperCase() + ": *" + _0x5eac88.fileName + "*\n\n> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
          }, {
            'quoted': _0x1d6381
          });
        }
      } else {
        await _0x2e21fc.sendMessage(_0x1d6381.from, {
          'text': "Failed to retrieve the media. Please try again later."
        }, {
          'quoted': _0x1d6381
        });
      }
      await _0x1d6381.React('💓');
    } catch (_0x1be9a5) {
      console.error("Error fetching media:", _0x1be9a5);
      await _0x2e21fc.sendMessage(_0x1d6381.from, {
        'text': "Failed to retrieve the media. Please try again later."
      }, {
        'quoted': _0x1d6381
      });
    }
  }
};
export default GDriveDownloader;