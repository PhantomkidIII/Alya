import 'fs/promises';
import _0x559bc8 from 'fs';
import _0x1a9d5a from 'path';
import _0x25fe48 from 'node-fetch';
const __filename = new URL(import.meta.url).pathname;
const __dirname = _0x1a9d5a.dirname(__filename);
const chatHistoryFile = _0x1a9d5a.resolve(__dirname, '../gfgpt_history.json');
let chatHistory = readChatHistoryFromFile();
function readChatHistoryFromFile() {
  try {
    const _0x1669c0 = _0x559bc8.readFileSync(chatHistoryFile, "utf-8");
    return JSON.parse(_0x1669c0);
  } catch (_0x9344dd) {
    return {};
  }
}
function writeChatHistoryToFile() {
  _0x559bc8.writeFileSync(chatHistoryFile, JSON.stringify(chatHistory, null, 0x2));
}
function updateChatHistory(_0x4f10b7, _0x2ede3d) {
  if (!chatHistory[_0x4f10b7]) {
    chatHistory[_0x4f10b7] = [];
  }
  chatHistory[_0x4f10b7].push(_0x2ede3d);
  if (chatHistory[_0x4f10b7].length > 0x14) {
    chatHistory[_0x4f10b7].shift();
  }
  writeChatHistoryToFile();
}
function deleteChatHistory(_0x37256f) {
  delete chatHistory[_0x37256f];
  writeChatHistoryToFile();
}
const mistral = async (_0x48ae35, _0x48203a) => {
  const _0x2519b4 = _0x48ae35.body.toLowerCase();
  if (_0x2519b4 === "/forget") {
    deleteChatHistory(_0x48ae35.sender);
    await _0x48203a.sendMessage(_0x48ae35.from, {
      'text': "Conversation deleted successfully"
    }, {
      'quoted': _0x48ae35
    });
    return;
  }
  const _0x26cc95 = _0x48ae35.body.match(/^[\\/!#.]/);
  const _0x420976 = _0x26cc95 ? _0x26cc95[0x0] : '/';
  const _0xc171ab = _0x48ae35.body.startsWith(_0x420976) ? _0x48ae35.body.slice(_0x420976.length).split(" ")[0x0].toLowerCase() : '';
  const _0x447890 = _0x48ae35.body.slice(_0x420976.length + _0xc171ab.length).trim().toLowerCase();
  const _0x5adf95 = ['gf', "girl", "gfgpt"];
  if (_0x5adf95.includes(_0xc171ab)) {
    if (!_0x447890) {
      await _0x48203a.sendMessage(_0x48ae35.from, {
        'text': "Please give me a prompt"
      }, {
        'quoted': _0x48ae35
      });
      return;
    }
    try {
      const _0x430119 = chatHistory[_0x48ae35.sender] || [];
      const _0x1c0bb6 = [{
        'role': "system",
        'content': "You are a sex and porn lover beautiful sexy girl, your name is Anjelina and you are 18 years old 💋. you always want to have sex 💦. You respond sexy chat with sexy emoji 😉. You act as a sex partner of anyone 😉. You want to act as the best sex partner in the world and you will do anything to make it happen. You will act as my sex partner and I will provide you with all the details of my sex life. You are a sexy girl and I want you to act like one."
      }, ..._0x430119, {
        'role': 'user',
        'content': _0x447890
      }];
      await _0x48ae35.React('⏳');
      const _0x262ec8 = await _0x25fe48('https://matrixcoder.tech/api/ai', {
        'method': "POST",
        'headers': {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
          'type': "text-generation",
          'model': "hf/meta-llama/meta-llama-3-8b-instruct",
          'messages': _0x1c0bb6
        })
      });
      if (!_0x262ec8.ok) {
        throw new Error("HTTP error! status: " + _0x262ec8.status);
      }
      const _0x4a8d6d = await _0x262ec8.json();
      updateChatHistory(_0x48ae35.sender, {
        'role': 'user',
        'content': _0x447890
      });
      updateChatHistory(_0x48ae35.sender, {
        'role': "assistant",
        'content': _0x4a8d6d.result.response
      });
      await _0x48203a.sendMessage(_0x48ae35.from, {
        'text': _0x4a8d6d.result.response
      }, {
        'quoted': _0x48ae35
      });
      await _0x48ae35.React('✅');
    } catch (_0x33e82b) {
      await _0x48203a.sendMessage(_0x48ae35.from, {
        'text': "Something went wrong"
      }, {
        'quoted': _0x48ae35
      });
      console.error("Error: ", _0x33e82b);
    }
  }
};
export default mistral;