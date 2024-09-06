import _0x483c5d from 'node-fetch';
const Trivia = async (_0x9a4e5b, _0x16d9ac) => {
  const _0x113360 = _0x9a4e5b.body.match(/^[\\/!#.]/);
  const _0x141415 = _0x113360 ? _0x113360[0x0] : '/';
  const _0x2d46b9 = _0x9a4e5b.body.startsWith(_0x141415) ? _0x9a4e5b.body.slice(_0x141415.length).split(" ")[0x0].toLowerCase() : '';
  const _0x4c564e = ["trivia", 'triviaquiz'];
  if (_0x4c564e.includes(_0x2d46b9)) {
    try {
      await _0x9a4e5b.React('🕘');
      await _0x9a4e5b.reply("Fetching...");
      const _0x2e4786 = await _0x483c5d("https://opentdb.com/api.php?amount=1&type=multiple");
      if (_0x2e4786.status !== 0xc8) {
        return _0x9a4e5b.reply("Invalid response from the trivia API. Status code: " + _0x2e4786.status);
      }
      const _0x580cc5 = await _0x2e4786.json();
      if (_0x580cc5 && _0x580cc5.results && _0x580cc5.results[0x0]) {
        const _0xfeb2ba = _0x580cc5.results[0x0];
        const _0x29d7e7 = _0xfeb2ba.question;
        const _0x613d2c = _0xfeb2ba.correct_answer;
        const _0x21e4f7 = [..._0xfeb2ba.incorrect_answers, _0x613d2c].sort();
        const _0x32daed = _0x21e4f7.map((_0x3fc274, _0x5e797b) => _0x5e797b + 0x1 + ". " + _0x3fc274).join("\n");
        await _0x16d9ac.sendMessage(_0x9a4e5b.from, {
          'text': "Here's a trivia question for you: \n\n" + _0x29d7e7 + "\n\n" + _0x32daed + "\n\nI will send the correct answer in 10 seconds..."
        }, {
          'quoted': _0x9a4e5b
        });
        setTimeout(async () => {
          await _0x16d9ac.sendMessage(_0x9a4e5b.from, {
            'text': "The correct answer is: " + _0x613d2c
          }, {
            'quoted': _0x9a4e5b
          });
        }, 0x2710);
      } else {
        throw new Error("Invalid response format from the trivia API.");
      }
      await _0x9a4e5b.React('✅');
    } catch (_0x51ef5c) {
      console.error("Error from Gifted API:", _0x51ef5c);
      await _0x16d9ac.sendMessage(_0x9a4e5b.from, {
        'text': "Failed with error from Gifted API. Please try again later."
      });
    }
  }
};
export default Trivia;