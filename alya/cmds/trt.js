import _0x550f22 from 'tesseract.js';
import _0x27d083 from 'translate-google-api';
import { writeFile } from 'fs/promises';
const translateCommand = async (_0x4bfc82, _0x4607af, _0x5943c0) => {
  const _0x284e33 = _0x4bfc82.body.match(/^[\\/!#.]/);
  const _0x29e2c7 = _0x284e33 ? _0x284e33[0x0] : '/';
  const _0x735168 = _0x4bfc82.body.startsWith(_0x29e2c7) ? _0x4bfc82.body.slice(_0x29e2c7.length).split(" ")[0x0].toLowerCase() : '';
  const _0x4b39f6 = _0x4bfc82.body.slice(_0x29e2c7.length + _0x735168.length).trim().split(" ");
  const _0x1bc61d = ["translate", 'trans', "transl", "trt"];
  if (_0x1bc61d.includes(_0x735168)) {
    const _0x1b15e4 = _0x4b39f6[0x0];
    const _0xecd3f7 = _0x4b39f6.slice(0x1).join(" ");
    if (_0x4bfc82.quoted) {
      if (_0x4bfc82.quoted.mtype === 'imageMessage') {
        try {
          const _0x3cd425 = await _0x4bfc82.quoted.download();
          if (!_0x3cd425) {
            throw new Error("Failed to download media.");
          }
          const _0x551337 = './' + Date.now() + '.png';
          await writeFile(_0x551337, _0x3cd425);
          const {
            data: {
              text: _0xc28328
            }
          } = await _0x550f22.recognize(_0x551337, "eng", {
            'logger': _0x257c89 => console.log(_0x257c89)
          });
          const _0xf3b736 = await _0x27d083(_0xc28328, {
            'to': _0x1b15e4
          });
          const _0x280fec = _0xf3b736[0x0];
          const _0xc3792a = _0x1b15e4 + ":\n\n" + _0x280fec;
          await _0x4607af.sendMessage(_0x4bfc82.from, {
            'text': _0xc3792a
          }, {
            'quoted': _0x4bfc82
          });
        } catch (_0x64fe4d) {
          console.error("Error extracting and translating text from image:", _0x64fe4d);
          await _0x4607af.sendMessage(_0x4bfc82.from, {
            'text': "Error extracting and translating text from image."
          }, {
            'quoted': _0x4bfc82
          });
        }
      } else {
        if (_0x4bfc82.quoted.text) {
          try {
            const _0x276b95 = _0x4bfc82.quoted.text;
            const _0x4a76d9 = await _0x27d083(_0x276b95, {
              'to': _0x1b15e4
            });
            const _0x452a2a = _0x4a76d9[0x0];
            const _0xd603be = _0x1b15e4 + ":\n\n" + _0x452a2a;
            await _0x4607af.sendMessage(_0x4bfc82.from, {
              'text': _0xd603be
            }, {
              'quoted': _0x4bfc82
            });
          } catch (_0x4d6e13) {
            console.error("Error translating quoted text:", _0x4d6e13);
            await _0x4607af.sendMessage(_0x4bfc82.from, {
              'text': "Error translating quoted text."
            }, {
              'quoted': _0x4bfc82
            });
          }
        }
      }
    } else {
      if (_0xecd3f7 && _0x1b15e4) {
        try {
          const _0x3d60d0 = await _0x27d083(_0xecd3f7, {
            'to': _0x1b15e4
          });
          const _0x372df1 = _0x3d60d0[0x0];
          const _0x13551c = _0x1b15e4 + ":\n\n" + _0x372df1;
          await _0x4607af.sendMessage(_0x4bfc82.from, {
            'text': _0x13551c
          }, {
            'quoted': _0x4bfc82
          });
        } catch (_0x360c24) {
          console.error("Error translating text:", _0x360c24);
          await _0x4607af.sendMessage(_0x4bfc82.from, {
            'text': "Error translating text."
          }, {
            'quoted': _0x4bfc82
          });
        }
      } else {
        await _0x4607af.sendMessage(_0x4bfc82.from, {
          'text': "Usage: .translate <target_lang> <text>\nExample: .trt sw I am Queen_Alya Whatsapp Bot\nOr reply to an image/text message with .translate <target_lang>"
        }, {
          'quoted': _0x4bfc82
        });
      }
    }
  }
};
export default translateCommand;