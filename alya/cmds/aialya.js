import 'gifted-gpt';
const gpt4 = new AlyaGpt();
const AiAlya = async (_0x3c99ab, _0x2a2231) => {
  const _0x55d76e = _0x3c99ab.body.match(/^[\\/!#.]/);
  const _0x5c738a = _0x55d76e ? _0x55d76e[0] : '/';
  const _0xc33afa = _0x3c99ab.body.startsWith(_0x5c738a) ? _0x3c99ab.body.slice(_0x5c738a.length).split(" ")[0].toLowerCase() : '';
  const _0x15f1f4 = _0x3c99ab.body.slice(_0x5c738a.length + _0xc33afa.length).trim();
  const _0x442cf7 = ["gifted", 'ai', "chatgptv2", "chatgpt4v2", "gptv2", "gpt4v2"];
  if (_0x442cf7.includes(_0xc33afa)) {
    if (!_0x15f1f4) {
      await _0x3c99ab.reply("Hello _*" + _0x3c99ab.pushName + "*_ , Please provide your query, e.g., *.ai What is the meaning of Gifted*");
    }
    try {
      await _0x3c99ab.React('🕘');
      await _0x3c99ab.reply("A moment, Connecting to Alya-Api...");
      const _0x25cc50 = [{
        'role': "system",
        'content': "You're a WhatsApp bot called Gifted-Md that processes users text and accepts commands. You work courtesy of Bing from Microsoft."
      }, {
        'role': "user",
        'content': _0x15f1f4
      }];
      const _0x55777a = {
        'provider': gpt4.providers.GPT,
        'model': "davinci",
        'debug': true,
        'proxy': ''
      };
      const _0x194c9d = await gpt4.chatCompletion(_0x25cc50, _0x55777a);
      await _0x2a2231.sendMessage(_0x3c99ab.from, {
        'text': _0x194c9d
      }, {
        'quoted': _0x3c99ab
      });
      await _0x3c99ab.React('✅');
    } catch (_0x1f4653) {
      console.error("Error fetching Api data:", _0x1f4653);
      await _0x2a2231.sendMessage(_0x3c99ab.from, {
        'text': "Failed to retrieve Api data. Please try again later."
      });
    }
  }
};
export default AiAlya;