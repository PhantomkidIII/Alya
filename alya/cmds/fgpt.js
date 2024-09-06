import 'fs/promises';
import _0x25ffc3 from 'fs';
import _0x3d1f88 from 'path';
import _0x4c7200 from 'node-fetch';
const __filename = new URL(import.meta.url).pathname;
const __dirname = _0x3d1f88.dirname(__filename);
const chatHistoryFile = _0x3d1f88.resolve(__dirname, "../gfgpt_history.json");
let chatHistory = readChatHistoryFromFile();
function readChatHistoryFromFile() {
  try {
    const _0xa81ea = _0x25ffc3.readFileSync(chatHistoryFile, "utf-8");
    return JSON.parse(_0xa81ea);
  } catch (_0x2dc233) {
    return {};
  }
}
function writeChatHistoryToFile() {
  _0x25ffc3.writeFileSync(chatHistoryFile, JSON.stringify(chatHistory, null, 0x2));
}
function updateChatHistory(_0x69a9ea, _0x4ae6f5) {
  if (!chatHistory[_0x69a9ea]) {
    chatHistory[_0x69a9ea] = [];
  }
  chatHistory[_0x69a9ea].push(_0x4ae6f5);
  if (chatHistory[_0x69a9ea].length > 0x14) {
    chatHistory[_0x69a9ea].shift();
  }
  writeChatHistoryToFile();
}
function deleteChatHistory(_0x2a693c) {
  delete chatHistory[_0x2a693c];
  writeChatHistoryToFile();
}
const mistral = async (_0x5d0b5e, _0x3b5b1e) => {
  const _0x574302 = _0x5d0b5e.body.toLowerCase();
  if (_0x574302 === "/forget") {
    deleteChatHistory(_0x5d0b5e.sender);
    await _0x3b5b1e.sendMessage(_0x5d0b5e.from, {
      'text': "Conversation deleted successfully"
    }, {
      'quoted': _0x5d0b5e
    });
    return;
  }
  const _0x11c617 = _0x5d0b5e.body.match(/^[\\/!#.]/);
  const _0x23f1c7 = _0x11c617 ? _0x11c617[0x0] : '/';
  const _0x593fb4 = _0x5d0b5e.body.startsWith(_0x23f1c7) ? _0x5d0b5e.body.slice(_0x23f1c7.length).split(" ")[0x0].toLowerCase() : '';
  const _0x56dccb = _0x5d0b5e.body.slice(_0x23f1c7.length + _0x593fb4.length).trim().toLowerCase();
  const _0x4dd802 = ['gf', "girl", 'gfgpt'];
  if (_0x4dd802.includes(_0x593fb4)) {
    if (!_0x56dccb) {
      await _0x3b5b1e.sendMessage(_0x5d0b5e.from, {
        'text': "Please give me a prompt"
      }, {
        'quoted': _0x5d0b5e
      });
      return;
    }
    try {
      const _0x324312 = chatHistory[_0x5d0b5e.sender] || [];
      const _0x264918 = [{
        'role': 'system',
        'content': "You are a sex and porn lover beautiful sexy girl, your name is Anjelina and you are 18 years old 💋. you always want to have sex 💦. You respond sexy chat with sexy emoji 😉. You act as a sex partner of anyone 😉. You want to act as the best sex partner in the world and you will do anything to make it happen. You will act as my sex partner and I will provide you with all the details of my sex life. You are a sexy girl and I want you to act like one."
      }, ..._0x324312, {
        'role': "user",
        'content': _0x56dccb
      }];
      await _0x5d0b5e.React('⏳');
      const _0x2ae41b = await _0x4c7200("https://matrixcoder.tech/api/ai", {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
          'type': "text-generation",
          'model': "hf/meta-llama/meta-llama-3-8b-instruct",
          'messages': _0x264918
        })
      });
      if (!_0x2ae41b.ok) {
        throw new Error("HTTP error! status: " + _0x2ae41b.status);
      }
      const _0x5e3a94 = await _0x2ae41b.json();
      updateChatHistory(_0x5d0b5e.sender, {
        'role': "user",
        'content': _0x56dccb
      });
      updateChatHistory(_0x5d0b5e.sender, {
        'role': "assistant",
        'content': _0x5e3a94.result.response
      });
      await _0x3b5b1e.sendMessage(_0x5d0b5e.from, {
        'text': _0x5e3a94.result.response
      }, {
        'quoted': _0x5d0b5e
      });
      await _0x5d0b5e.React('✅');
    } catch (_0x150539) {
      await _0x3b5b1e.sendMessage(_0x5d0b5e.from, {
        'text': "Something went wrong"
      }, {
        'quoted': _0x5d0b5e
      });
      console.error("Error: ", _0x150539);
    }
  }
};
export default mistral;