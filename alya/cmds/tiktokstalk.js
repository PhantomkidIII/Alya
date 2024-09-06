import _0x34c60d from 'api-dylux';
import _0x4fea1f from 'node-fetch';
const TiktokStalk = async (_0x34d1ad, _0x5d6630) => {
  const _0x35aefa = _0x34d1ad.body.match(/^[\\/!#.]/);
  const _0x277609 = _0x35aefa ? _0x35aefa[0x0] : '/';
  const _0x32fbc1 = _0x34d1ad.body.startsWith(_0x277609) ? _0x34d1ad.body.slice(_0x277609.length).split(" ")[0x0].toLowerCase() : '';
  const _0x23d391 = _0x34d1ad.body.slice(_0x277609.length + _0x32fbc1.length).trim();
  const _0x43da94 = ["tikstalk", 'tik-stalk', "tiktok-stalk", "tiktokstalk"];
  if (_0x43da94.includes(_0x32fbc1)) {
    if (!_0x23d391) {
      return _0x34d1ad.reply("Hello *_" + _0x34d1ad.pushName + "_,*\nPlease provide a TikTok Username for stalking after the command, e.g., *.tiktokstalk giftedtechke*");
    }
    try {
      await _0x34d1ad.React('🕘');
      await _0x34d1ad.reply("A moment, *Gifted-Md* is Generating Your TiktokStalk Request...");
      let _0x1c7b96 = await _0x34c60d.ttStalk(_0x23d391);
      if (_0x1c7b96 && _0x1c7b96.name && _0x1c7b96.username && _0x1c7b96.followers && _0x1c7b96.following) {
        let _0x1b6380 = "\n┌──「 *TIKTOK STALK* 」\n▢ *🔖 Name:* " + _0x1c7b96.name + "\n▢ *🔖 Username:* " + _0x1c7b96.username + "\n▢ *👥 Followers:* " + _0x1c7b96.followers + "\n▢ *🫂 Following:* " + _0x1c7b96.following + "\n▢ *📌 Desc:* " + (_0x1c7b96.desc || "No description available") + "\n\n▢ *🔗 Link* : https://tiktok.com/" + _0x1c7b96.username + "\n└────────────\n\n> *𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*";
        const _0x1c6b62 = await _0x4fea1f(_0x1c7b96.profile);
        if (!_0x1c6b62.ok) {
          throw new Error("Failed to fetch profile image.");
        }
        const _0x3fbee1 = await _0x1c6b62.buffer();
        await _0x5d6630.sendMessage(_0x34d1ad.from, {
          'image': _0x3fbee1,
          'caption': _0x1b6380
        }, {
          'quoted': _0x34d1ad
        });
        await _0x34d1ad.React('✅');
      } else {
        throw new Error("Incomplete data received from the TikTok API.");
      }
    } catch (_0x4e7d5c) {
      console.error("Error getting TikTok data:", _0x4e7d5c.message);
      await _0x34d1ad.reply("Error getting response: " + _0x4e7d5c.message);
      await _0x34d1ad.React('❌');
    }
  }
};
export default TiktokStalk;