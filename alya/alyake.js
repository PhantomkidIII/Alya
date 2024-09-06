import _0x810e4a from 'fs';
import _0x1a6054 from 'path';
import _0x1a223a from 'axios';
const __filename = new URL(import.meta.url).pathname;
const __dirname = _0x1a6054.dirname(__filename);
const envFilePath = _0x1a6054.resolve(__dirname, '../.env');
const updateEnvFile = (_0x474e6d, _0x340fa8) => {
  const _0x376beb = _0x474e6d.toUpperCase() + '=' + _0x340fa8;
  _0x810e4a.appendFileSync(envFilePath, _0x376beb + "\n");
};
const updateHerokuEnv = async (_0x5c6ca1, _0x102443) => {
  const _0x3aca11 = process.env.HEROKU_API_TOKEN;
  const _0x128b95 = process.env.HEROKU_APP_NAME;
  if (!_0x3aca11 || !_0x128b95) {
    throw new Error("Heroku API token or app name is not set.");
  }
  await _0x1a223a.patch("https://api.heroku.com/apps/" + _0x128b95 + '/config-vars', {
    [_0x5c6ca1]: _0x102443
  }, {
    'headers': {
      'Content-Type': "application/json",
      'Authorization': "Bearer " + _0x3aca11,
      'Accept': "application/vnd.heroku+json; version=3"
    }
  });
  await _0x1a223a["delete"]("https://api.heroku.com/apps/" + _0x128b95 + "/dynos", {
    'headers': {
      'Content-Type': "application/json",
      'Authorization': "Bearer " + _0x3aca11,
      'Accept': "application/vnd.heroku+json; version=3"
    }
  });
};
const updateKoyebEnv = async (_0x343d64, _0x231c49) => {
  const _0x5a770d = process.env.KOYEB_API_TOKEN;
  const _0x2d7927 = process.env.KOYEB_APP_NAME;
  if (!_0x5a770d || !_0x2d7927) {
    throw new Error("Koyeb API token or app name is not set.");
  }
  const _0x5c0c67 = await _0x1a223a.get('https://app.koyeb.com/v1/services', {
    'headers': {
      'Authorization': "Bearer " + _0x5a770d
    }
  });
  const _0x61acc9 = _0x5c0c67.data.services.find(_0x3f0b01 => _0x3f0b01.name === _0x2d7927).id;
  await _0x1a223a.patch("https://app.koyeb.com/v1/services/" + _0x61acc9 + '/env', {
    [_0x343d64]: _0x231c49
  }, {
    'headers': {
      'Authorization': "Bearer " + _0x5a770d
    }
  });
  await _0x1a223a.post('https://app.koyeb.com/v1/services/' + _0x61acc9 + "/deploy", {}, {
    'headers': {
      'Authorization': "Bearer " + _0x5a770d
    }
  });
};
const setEnvCommand = async (_0x3da67f, _0x36cb74) => {
  if (_0x36cb74.length !== 0x1) {
    _0x3da67f.reply("*Usage: .setvar OWNER_NUMBER=2347XXXXXXXX*");
    return;
  }
  const [_0x37704e] = _0x36cb74;
  const [_0x40470e, _0x543bc0] = _0x37704e.split('=');
  if (!_0x40470e || !_0x543bc0) {
    _0x3da67f.reply("*Invalid format. Usage: .setvar OWNER_NUMBER=2347XXXXXXX");
    return;
  }
  try {
    updateEnvFile(_0x40470e, _0x543bc0);
    _0x3da67f.reply("The environmental variable " + _0x40470e + " has been set to " + _0x543bc0 + ". Pleass restart bot for changes to take effect.");
    const _0x4cb00e = process.env.DEPLOYMENT_PLATFORM;
    if (!_0x4cb00e) {
      throw new Error("Deployment platform is not set.");
    }
    switch (_0x4cb00e.toLowerCase()) {
      case 'heroku':
        await updateHerokuEnv(_0x40470e, _0x543bc0);
        break;
      case "koyeb":
        await updateKoyebEnv(_0x40470e, _0x543bc0);
        break;
      default:
        throw new Error("Unsupported deployment platform: " + _0x4cb00e);
    }
    _0x3da67f.reply("Environment variable " + _0x40470e + " updated on " + _0x4cb00e + '.');
    _0x3da67f.reply(_0x4cb00e + " service restarted successfully.");
  } catch (_0x122f9f) {
    console.error("Error:", _0x122f9f.response ? _0x122f9f.response.data : _0x122f9f.message);
    _0x3da67f.reply("Failed to update environment variable or restart the service on " + platform + '.');
  }
};
export default setEnvCommand;