import _0x2357a3 from 'node-fetch';
import _0x1c79cf from '@whiskeysockets/baileys';
const {
  MessageType
} = _0x1c79cf;
const sendStickersFromTelegram = async (_0x2bdf09, _0x1de762) => {
  const _0x394fc7 = _0x2bdf09.body.match(/^[\\/!#.]/);
  const _0x15c19b = _0x394fc7 ? _0x394fc7[0x0] : '/';
  const _0x19946a = _0x2bdf09.body.startsWith(_0x15c19b) ? _0x2bdf09.body.slice(_0x15c19b.length).split(" ")[0x0].toLowerCase() : '';
  const _0x4c022e = _0x2bdf09.body.slice(_0x15c19b.length + _0x19946a.length).trim();
  const _0x3f868f = ["tgs", "tgstickers"];
  if (_0x19946a === 'take' && _0x2bdf09.quoted && _0x2bdf09.quoted.type === MessageType.sticker) {
    try {
      const _0x242525 = await _0x2bdf09.quoted.download();
      if (!_0x242525) {
        await _0x2bdf09.reply("No sticker found to resend.");
        return;
      }
      await _0x1de762.sendMessage(_0x2bdf09.from, {
        'sticker': _0x242525
      }, {
        'quoted': _0x2bdf09
      });
      await _0x2bdf09.reply("Sticker has been taken.");
    } catch (_0x43f8f0) {
      console.error("Error resending sticker:", _0x43f8f0.message);
      await _0x2bdf09.reply("Error resending sticker: " + _0x43f8f0.message);
    }
  } else {
    if (_0x3f868f.includes(_0x19946a)) {
      if (!_0x4c022e) {
        await _0x2bdf09.reply("Please provide a valid Telegram stickers URL.");
        return;
      }
      try {
        await _0x2bdf09.reply("A moment, *QUEEN_ALYA* is downloading stickers. Please wait...");
        const _0x187b9d = await _0x2357a3('https://api.maskser.me/api/dowloader/telesticker?url=' + encodeURIComponent(_0x4c022e));
        const _0x28c283 = await _0x187b9d.json();
        if (!_0x28c283.status) {
          await _0x2bdf09.reply("Failed to retrieve stickers. Please check the Telegram URL and try again.");
          return;
        }
        const _0x45f901 = _0x28c283.result;
        if (_0x45f901.length === 0x0) {
          await _0x2bdf09.reply("No stickers found in the provided URL.");
          return;
        }
        for (const _0x25ee0e of _0x45f901) {
          const _0x1abf11 = _0x25ee0e.url;
          await _0x1de762.sendMessage(_0x2bdf09.from, {
            'sticker': {
              'url': _0x1abf11
            }
          }, {
            'quoted': _0x2bdf09
          });
        }
        await _0x2bdf09.reply("Success...\nSent " + _0x45f901.length + " stickers.\nPause for a moment so that your bot/WhatsApp account is not banned.");
      } catch (_0x3fa783) {
        console.error("Error sending stickers:", _0x3fa783.message);
        await _0x2bdf09.reply("Error sending stickers: " + _0x3fa783.message);
      }
    }
  }
};
export default sendStickersFromTelegram;