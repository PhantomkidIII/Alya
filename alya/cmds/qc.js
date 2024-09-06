import _0x473388 from 'axios';
const quotedChat = async (_0x7f4489, _0x40227a) => {
  try {
    const _0x353cbd = _0x7f4489.body.match(/^[\\/!#.]/);
    const _0x312747 = _0x353cbd ? _0x353cbd[0x0] : '/';
    const _0x5ad207 = _0x7f4489.body.startsWith(_0x312747) ? _0x7f4489.body.slice(_0x312747.length).split(" ")[0x0].toLowerCase() : '';
    const _0x110b5b = _0x7f4489.body.slice(_0x312747.length + _0x5ad207.length).trim();
    const _0xdf453f = ['qc'];
    if (!_0xdf453f.includes(_0x5ad207)) {
      return;
    }
    if (!_0x110b5b) {
      return _0x7f4489.reply("Please provide text for the quote.");
    }
    if (_0x110b5b.length > 0x1e) {
      return _0x7f4489.reply("Please provide text with a maximum of 30 characters.");
    }
    let _0x32826c;
    try {
      _0x32826c = await _0x40227a.profilePictureUrl(_0x7f4489.quoted ? _0x7f4489.quoted.sender : _0x7f4489.sender, "image");
    } catch {
      _0x32826c = "https://srv.neoxr.tk/files/z8hI5T.jpg";
    }
    const _0x229ff5 = {
      'type': "quote",
      'format': 'png',
      'backgroundColor': '#FFFFFF',
      'width': 0x200,
      'height': 0x300,
      'scale': 0x2,
      'messages': [{
        'entities': [],
        'avatar': true,
        'from': {
          'id': 0x1,
          'name': _0x7f4489.quoted ? (await _0x40227a.getContact(_0x7f4489.quoted.sender)).notify || _0x7f4489.quoted.sender.split('@')[0x0] : _0x7f4489.pushName,
          'photo': {
            'url': _0x32826c
          }
        },
        'text': _0x110b5b,
        'replyMessage': {}
      }]
    };
    try {
      const _0x217707 = await _0x473388.post('https://bot.lyo.su/quote/generate', _0x229ff5, {
        'headers': {
          'Content-Type': "application/json"
        }
      });
      const _0x1aed04 = Buffer.from(_0x217707.data.result.image, "base64");
      await _0x40227a.sendImageAsSticker(_0x7f4489.from, _0x1aed04, _0x7f4489, {
        'packname': "Alya",
        'author': "> Alya"
      });
    } catch (_0x1f5fa7) {
      console.error("Error during HTTP request:", _0x1f5fa7);
      return _0x7f4489.reply("Error generating sticker. Please try again later.");
    }
  } catch (_0x4f8251) {
    console.error("Unexpected error in sticker case:", _0x4f8251);
    _0x7f4489.reply("An unexpected error occurred.");
  }
};
export default quotedChat;