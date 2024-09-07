const _0x119760 = function () {
  let _0x176dad = true;
  return function (_0x3b9f30, _0x15b53f) {
    const _0x2f2230 = {
      MsdTK: 'Tcgmx'
    };
    _0x2f2230.mdvMy = "XxNfz";
    const _0x50581e = _0x176dad ? function () {
      if ('Tcgmx' === _0x2f2230.mdvMy) {
        if (_0x5716c2) {
          const _0x26d8e8 = _0x2102b8.apply(_0x3ba019, arguments);
          _0x858d94 = null;
          return _0x26d8e8;
        }
      } else {
        if (_0x15b53f) {
          const _0x38640d = _0x15b53f.apply(_0x3b9f30, arguments);
          _0x15b53f = null;
          return _0x38640d;
        }
      }
    } : function () {};
    _0x176dad = false;
    return _0x50581e;
  };
}();
const _0x2cee9d = _0x119760(this, function () {
  const _0x4dc24d = function () {
    let _0x3f2167;
    try {
      _0x3f2167 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x1c6048) {
      _0x3f2167 = window;
    }
    return _0x3f2167;
  };
  const _0x221b36 = _0x4dc24d();
  const _0x3ecaa6 = _0x221b36.console = _0x221b36.console || {};
  const _0x3116aa = ["log", "warn", "info", "error", 'exception', "table", "trace"];
  for (let _0x416278 = 0; _0x416278 < _0x3116aa.length; _0x416278++) {
    const _0x260488 = _0x119760.constructor.prototype.bind(_0x119760);
    const _0x584a42 = _0x3116aa[_0x416278];
    const _0x51f5e7 = _0x3ecaa6[_0x584a42] || _0x260488;
    _0x260488.__proto__ = _0x119760.bind(_0x119760);
    _0x260488.toString = _0x51f5e7.toString.bind(_0x51f5e7);
    _0x3ecaa6[_0x584a42] = _0x260488;
  }
});
_0x2cee9d();
import _0x2720b5 from 'javascript-obfuscator';
import _0x377b17 from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x377b17;
const JsObfuscation = async (_0x2a9702, _0x4b3e8a) => {
  try {
    const _0x271c0d = _0x2a9702.body.match(/^[\\/!#.]/);
    const _0x363292 = _0x271c0d ? _0x271c0d[0] : '/';
    const _0x5550da = _0x2a9702.body.startsWith(_0x363292) ? _0x2a9702.body.slice(_0x363292.length).split(" ")[0].toLowerCase() : '';
    const _0x2a6381 = _0x2a9702.body.slice(_0x363292.length + _0x5550da.length).trim();
    console.log("Command received: " + _0x5550da);
    console.log("Text received: " + _0x2a6381);
    const _0x1adcf2 = ["enc", "encrypt", "obfus", "obfuscate", "js-confuse", "confuse", "jsconfuse", 'jsenc'];
    if (_0x1adcf2.includes(_0x5550da)) {
      if (!_0x2a6381) {
        console.log("No text provided");
        return _0x2a9702.reply("Hello _*" + _0x2a9702.pushName + "*_ Please provide a valid js code after the cmd to Encrypt!.\nUsage: .enc console.log(\"Gifted-Tech\");");
      }
      await _0x2a9702.React('🕘');
      await _0x2a9702.reply("A moment, *Queen_Alya* is Encrypting...");
      const _0x5dee78 = {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0x1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 0x1
      };
      const _0x5729f5 = _0x2720b5.obfuscate(_0x2a6381, _0x5dee78);
      const _0x288512 = _0x5729f5.getObfuscatedCode();
      const _0x4d81a6 = {
        display_text: "📋 ᴄᴏᴘʏ ᴇɴᴄʀʏᴘᴛᴇᴅ ᴄᴏᴅᴇ",
        id: "copy_code",
        copy_code: _0x288512
      };
      const _0x530a4e = {
        display_text: "sʜᴏᴡ 💜 ғᴏʀ Alya",
        url: "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D"
      };
      const _0x6f4a2 = [{
        'name': "cta_copy",
        'buttonParamsJson': JSON.stringify(_0x4d81a6)
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x530a4e)
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "ᴍᴀɪɴ ᴍᴇɴᴜ",
          'id': '.menu'
        })
      }];
      const _0x3b2d92 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0x5077a0 = {
        text: _0x288512
      };
      const _0x482a36 = {
        text: "> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
      };
      const _0xfdf849 = {
        title: '',
        subtitle: '',
        hasMediaAttachment: false
      };
      const _0xee7a0d = {
        'buttons': _0x6f4a2
      };
      const _0xf82d11 = generateWAMessageFromContent(_0x2a9702.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x3b2d92,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0x5077a0),
              'footer': proto.Message.InteractiveMessage.Footer.create(_0x482a36),
              'header': proto.Message.InteractiveMessage.Header.create(_0xfdf849),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0xee7a0d)
            })
          }
        }
      }, {});
      await _0x4b3e8a.relayMessage(_0xf82d11.key.remoteJid, _0xf82d11.message, {
        'messageId': _0xf82d11.key.id
      });
      await _0x2a9702.React('✅');
      await _0x2a9702.reply("Code Successfully Encrypted✅");
    } else {
      console.log("Invalid command");
    }
  } catch (_0x4d1f2f) {
    console.error("Error from Alya API:", _0x4d1f2f);
    const _0x3b9c61 = {
      text: "Failed to Encrypt Your JsCode. Please try again later."
    };
    await _0x4b3e8a.sendMessage(_0x2a9702.from, _0x3b9c61, {
      'quoted': _0x2a9702
    });
  }
};
export default JsObfuscation;