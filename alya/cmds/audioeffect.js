import { exec } from 'child_process';
import _0x2a3dd5 from 'fs';
import { getRandom } from '../../star_king/alyad.cjs';
const audioEffects = async (_0x226857, _0x32eec1) => {
  try {
    const _0x354338 = _0x226857.body.match(/^[\\/!#.]/);
    const _0x5445fb = _0x354338 ? _0x354338[0] : '/';
    const _0x173fe0 = _0x226857.body.startsWith(_0x5445fb) ? _0x226857.body.slice(_0x5445fb.length).split(" ")[0].toLowerCase() : '';
    const _0xeea320 = ["bass", "blown", "deep", "earrape", "fast", "fat", "nightcore", "reverse", "robot", "slow", "smooth", "tupai"];
    if (!_0xeea320.includes(_0x173fe0)) {
      return;
    }
    let _0x46e8f7;
    if (_0x173fe0 === "bass") {
      _0x46e8f7 = "-af equalizer=f=54:width_type=o:width=2:g=20";
    } else {
      if (_0x173fe0 === "blown") {
        _0x46e8f7 = "-af acrusher=.1:1:64:0:log";
      } else {
        if (_0x173fe0 === "deep") {
          _0x46e8f7 = "-af atempo=4/4,asetrate=44500*2/3";
        } else {
          if (_0x173fe0 === "earrape") {
            _0x46e8f7 = "-af volume=12";
          } else {
            if (_0x173fe0 === "fast") {
              _0x46e8f7 = "-filter:a \"atempo=1.63,asetrate=44100\"";
            } else {
              if (_0x173fe0 === "fat") {
                _0x46e8f7 = "-filter:a \"atempo=1.6,asetrate=22100\"";
              } else {
                if (_0x173fe0 === "nightcore") {
                  _0x46e8f7 = "-filter:a atempo=1.06,asetrate=44100*1.25";
                } else {
                  if (_0x173fe0 === "reverse") {
                    _0x46e8f7 = "-filter_complex \"areverse\"";
                  } else {
                    if (_0x173fe0 === "robot") {
                      _0x46e8f7 = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
                    } else {
                      if (_0x173fe0 === "slow") {
                        _0x46e8f7 = "-filter:a \"atempo=0.7,asetrate=44100\"";
                      } else {
                        if (_0x173fe0 === "smooth") {
                          _0x46e8f7 = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
                        } else if (_0x173fe0 === "tupai") {
                          _0x46e8f7 = "-filter:a \"atempo=0.5,asetrate=65100\"";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (!_0x226857.quoted || _0x226857.quoted.mtype !== "audioMessage") {
      return _0x226857.reply("Reply to the audio you want to change with a caption *" + (_0x5445fb + _0x173fe0) + '*');
    }
    _0x226857.reply("Please wait...");
    const _0x385d3c = await _0x226857.quoted.download();
    const _0x606d5 = './' + getRandom(".webm");
    _0x2a3dd5.writeFileSync(_0x606d5, _0x385d3c);
    const _0x5163a6 = './' + getRandom(".mp3");
    exec("ffmpeg -i " + _0x606d5 + " " + _0x46e8f7 + " " + _0x5163a6, (_0x6d4e79, _0x11bb7b, _0x5d1965) => {
      _0x2a3dd5.unlinkSync(_0x606d5);
      if (_0x6d4e79) {
        console.error("Error:", _0x6d4e79);
        return _0x226857.reply("An error occurred while processing the audio.");
      }
      const _0x593db2 = _0x2a3dd5.readFileSync(_0x5163a6);
      _0x32eec1.sendMessage(_0x226857.from, {
        'audio': _0x593db2,
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x226857
      });
      _0x2a3dd5.unlinkSync(_0x5163a6);
    });
  } catch (_0x3f642b) {
    console.error("Error:", _0x3f642b);
    _0x226857.reply("An error occurred while processing the command.");
  }
};
export default audioEffects;