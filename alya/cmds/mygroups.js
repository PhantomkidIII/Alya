const MyGrps = async (_0x2ed4a6, _0x497772) => {
  const _0x5e24c2 = _0x2ed4a6.body.match(/^[\\/!#.]/);
  const _0x4a0deb = _0x5e24c2 ? _0x5e24c2[0x0] : '/';
  const _0x1d3ef0 = _0x2ed4a6.body.startsWith(_0x4a0deb) ? _0x2ed4a6.body.slice(_0x4a0deb.length).split(" ")[0x0].toLowerCase() : '';
  const _0x1c6499 = ["groups", "grps", "mygroups", "mygrps", "my-groups"];
  if (_0x1c6499.includes(_0x1d3ef0)) {
    try {
      await _0x2ed4a6.React('🕘');
      let _0xcea843 = await _0x497772.groupFetchAllParticipating();
      if (!_0xcea843) {
        throw new Error("Failed to fetch groups");
      }
      let _0x4f8648 = Object.entries(_0xcea843).slice(0x0).map(_0x1cd427 => _0x1cd427[0x1]);
      let _0x68c456 = _0x4f8648.map(_0x1d9a82 => _0x1d9a82.id);
      let _0x87a4c8 = '*' + _0x2ed4a6.pushName + " GROUPS:*\n\n";
      await _0x2ed4a6.reply("Hello _*" + _0x2ed4a6.pushName + ",*_ You are currently in " + _0x68c456.length + " groups. Queen_Alya will send that list in a moment...");
      for (let _0x5505f1 of _0x68c456) {
        try {
          let _0x31ccef = await _0x497772.groupMetadata(_0x5505f1);
          _0x87a4c8 += "*GROUP NAME:*- " + _0x31ccef.subject + "\n";
          _0x87a4c8 += "*MEMBERS:*- " + _0x31ccef.participants.length + "\n";
          _0x87a4c8 += "*GROUP ID:*- " + _0x5505f1 + "\n\n";
        } catch (_0x1fac36) {
          console.error("Failed to fetch metadata for group " + _0x5505f1 + ':', _0x1fac36);
          _0x87a4c8 += "*GROUP ID:*- " + _0x5505f1 + " (Failed to fetch metadata)\n\n";
        }
      }
      await _0x2ed4a6.reply(_0x87a4c8);
      await _0x2ed4a6.React('✅');
    } catch (_0x4a0d72) {
      console.error("Error from Alya API:", _0x4a0d72);
      await _0x497772.sendMessage(_0x2ed4a6.from, {
        'text': "Failed with error from Gifted API. Please try again later."
      });
    }
  }
};
export default MyGrps;