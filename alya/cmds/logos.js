import _0x472111 from 'node-fetch';
const LogoCommand = async (_0x5c50db, _0x3facd2) => {
  const _0x3db4c4 = _0x5c50db.body.match(/^[\\/!#.]/);
  const _0x262621 = _0x3db4c4 ? _0x3db4c4[0x0] : '/';
  const _0x2c433e = _0x5c50db.body.startsWith(_0x262621) ? _0x5c50db.body.slice(_0x262621.length).split(" ")[0x0].toLowerCase() : '';
  const _0x2a5f70 = _0x5c50db.body.slice(_0x262621.length + _0x2c433e.length).trim();
  const _0x5921d0 = ['avenger', 'glow', "blackink", "blood", "breakwall", 'cake', "captain", "clouds", 'deadpool', "eraser", "flames", "glasses", "glitch", "gradient", "grass", "joker", 'lifebuoys', "matrix", "marvel", "multicolor", 'naruto', "neon", "papercut", "pig", "pornhub", 'puppy', 'sand', "slice", 'sunset', "typography"];
  if (_0x5921d0.includes(_0x2c433e)) {
    let _0x1c4548 = '';
    if (_0x2c433e === "avenger") {
      if (!_0x2a5f70.includes('|')) {
        await _0x5c50db.reply("*Example Usage:* .avenger Star|King");
        return;
      }
      const [_0x282941, _0x4c842b] = _0x2a5f70.split('|');
      if (!_0x282941 || !_0x4c842b) {
        await _0x5c50db.reply("Both text1 and text2 are required for the avenger command.");
        return;
      }
      _0x1c4548 = 'https://api.neoxr.eu/api/avenger?text1=' + encodeURIComponent(_0x282941) + "&text2=" + encodeURIComponent(_0x4c842b) + "&apikey=" + "mcandy";
    } else {
      if (_0x2c433e === "glow") {
        if (!_0x2a5f70) {
          await _0x5c50db.reply("*Example Usage*: .glow star king");
          return;
        }
        _0x1c4548 = 'https://api.neoxr.eu/api/glow?text=' + encodeURIComponent(_0x2a5f70) + '&apikey=' + "mcandy";
      } else {
        if (_0x2c433e === "deadpool") {
          if (!_0x2a5f70.includes('|')) {
            await _0x5c50db.reply("*Example Usage:* .deadpool Star|King");
            return;
          }
          const [_0x56f2a4, _0x190185] = _0x2a5f70.split('|');
          if (!_0x56f2a4 || !_0x190185) {
            await _0x5c50db.reply("Both text1 and text2 are required for the deadpool command.");
            return;
          }
          _0x1c4548 = 'https://api.neoxr.eu/api/deadpool?text1=' + encodeURIComponent(_0x56f2a4) + "&text2=" + encodeURIComponent(_0x190185) + "&apikey=" + "mcandy";
        } else {
          if (_0x2c433e === "lifebuoys") {
            if (!_0x2a5f70.includes('|')) {
              await _0x5c50db.reply("*Example Usage:* .lifebuoys Star|King");
              return;
            }
            const [_0x50bc15, _0x26b041] = _0x2a5f70.split('|');
            if (!_0x50bc15 || !_0x26b041) {
              await _0x5c50db.reply("Both text1 and text2 are required for the lifebuoys command.");
              return;
            }
            _0x1c4548 = "https://api.neoxr.eu/api/lifebuoys?text1=" + encodeURIComponent(_0x50bc15) + "&text2=" + encodeURIComponent(_0x26b041) + "&apikey=" + "mcandy";
          } else {
            if (_0x2c433e === "marvel") {
              if (!_0x2a5f70.includes('|')) {
                await _0x5c50db.reply("*Example Usage:* .marvel Star|King");
                return;
              }
              const [_0xe9dd89, _0x5680d3] = _0x2a5f70.split('|');
              if (!_0xe9dd89 || !_0x5680d3) {
                await _0x5c50db.reply("Both text1 and text2 are required for the marvel command.");
                return;
              }
              _0x1c4548 = "https://api.neoxr.eu/api/marvel?text1=" + encodeURIComponent(_0xe9dd89) + "&text2=" + encodeURIComponent(_0x5680d3) + '&apikey=' + "mcandy";
            } else {
              if (_0x2c433e === 'pornhub') {
                if (!_0x2a5f70.includes('|')) {
                  await _0x5c50db.reply("*Example Usage:* .pornhub Star|King");
                  return;
                }
                const [_0x8aa263, _0xa2fe3e] = _0x2a5f70.split('|');
                if (!_0x8aa263 || !_0xa2fe3e) {
                  await _0x5c50db.reply("Both text1 and text2 are required for the pornhub command.");
                  return;
                }
                _0x1c4548 = "https://api.neoxr.eu/api/pornhub?text1=" + encodeURIComponent(_0x8aa263) + '&text2=' + encodeURIComponent(_0xa2fe3e) + "&apikey=" + "mcandy";
              } else {
                if (!_0x2a5f70) {
                  await _0x5c50db.reply("*Example Usage:* ." + _0x2c433e + " Gifted Tech");
                  return;
                }
                _0x1c4548 = "https://api.neoxr.eu/api/" + _0x2c433e + "?text=" + encodeURIComponent(_0x2a5f70) + "&apikey=" + "mcandy";
              }
            }
          }
        }
      }
    }
    try {
      await _0x5c50db.React('🕘');
      await _0x5c50db.reply("A Moment,  *Gifted-Md* is Generating Your Logo...");
      const _0x327fb9 = await _0x472111(_0x1c4548);
      const _0x25ac9e = await _0x327fb9.json();
      if (_0x25ac9e.status && _0x25ac9e.data && _0x25ac9e.data.url) {
        const _0x1ca4a1 = _0x25ac9e.data.url;
        await _0x5c50db.reply("Here's your " + _0x2c433e + " logo:");
        await _0x3facd2.sendMessage(_0x5c50db.from, {
          'image': {
            'url': _0x1ca4a1
          },
          'caption': "> *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
        });
      } else {
        throw new Error("Invalid response from the API.");
      }
      await _0x5c50db.React('✅');
    } catch (_0x257305) {
      console.error("Error from Alya API:", _0x257305);
      await _0x3facd2.sendMessage(_0x5c50db.from, {
        'text': "Failed with error from Gifted API. Please try again later."
      });
    }
  }
};
export default LogoCommand;