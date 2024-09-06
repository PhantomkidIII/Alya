import _0x3581dd from 'axios';
const cricketScore = async (_0x5d05db, _0x66d988) => {
  const _0x537702 = _0x5d05db.body.match(/^[\\/!#.]/);
  const _0x5539a9 = _0x537702 ? _0x537702[0] : '/';
  const _0x5567d3 = _0x5d05db.body.startsWith(_0x5539a9) ? _0x5d05db.body.slice(_0x5539a9.length).split(" ")[0].toLowerCase() : '';
  const _0x545909 = _0x5d05db.body.slice(_0x5539a9.length + _0x5567d3.length).trim();
  const _0x366952 = ["score", "crick", "crickterscore", "cricket"];
  if (_0x366952.includes(_0x5567d3)) {
    if (!_0x545909) {
      await _0x5d05db.React('❌');
      return _0x5d05db.reply("*Provide a match ID for cricket score.*\nExample: " + _0x5539a9 + "cricketscore 12345");
    }
    const _0x2b09b1 = encodeURIComponent(_0x545909);
    try {
      const _0x1ca05f = "https://iol.apinepdev.workers.dev/" + _0x2b09b1;
      const _0x54ce48 = await _0x3581dd.get(_0x1ca05f);
      if (!_0x54ce48.status === 200) {
        await _0x5d05db.React('❌');
        return _0x5d05db.reply("Invalid response from the cricket score API. Status code: " + _0x54ce48.status);
      }
      const _0x343299 = _0x54ce48.data;
      let _0x40d726 = "╭══════════════•∞•══╮\n";
      _0x40d726 += "│★⃝•   > *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*\n";
      _0x40d726 += "│★⃝•   *LIVE MATCH INFO* ✨\n";
      _0x40d726 += "│★⃝•\n";
      if (_0x343299.code === 200) {
        _0x40d726 += "│★⃝•   *" + _0x343299.data.title + "*\n";
        _0x40d726 += "│★⃝•   *" + _0x343299.data.update + "*\n";
        _0x40d726 += "│★⃝• \n";
      } else {
        await _0x5d05db.reply("*Update:* Data not found for the specified match ID.");
        await _0x5d05db.React('❌');
        return;
      }
      if (_0x343299.data.liveScore && _0x343299.data.liveScore.toLowerCase() !== "data not found") {
        _0x40d726 += "│★⃝•   *Live Score:* " + _0x343299.data.liveScore + "\n";
        _0x40d726 += "│★⃝•   *Run Rate:* " + _0x343299.data.runRate + "\n";
        _0x40d726 += "│★⃝•\n";
        _0x40d726 += "│★⃝•   *Batter 1:* " + _0x343299.data.batsmanOne + "\n";
        _0x40d726 += "│★⃝•   *" + _0x343299.data.batsmanOneRun + " (" + _0x343299.data.batsmanOneBall + ")* SR: " + _0x343299.data.batsmanOneSR + "\n";
        _0x40d726 += "│★⃝•\n";
        _0x40d726 += "│★⃝•   *Batter 2:* " + _0x343299.data.batsmanTwo + "\n";
        _0x40d726 += "│★⃝•   *" + _0x343299.data.batsmanTwoRun + " (" + _0x343299.data.batsmanTwoBall + ")* SR: " + _0x343299.data.batsmanTwoSR + "\n";
        _0x40d726 += "│★⃝•\n";
        _0x40d726 += "│★⃝•   *Bowler 1:* " + _0x343299.data.bowlerOne + "\n";
        _0x40d726 += "│★⃝•   *" + _0x343299.data.bowlerOneOver + " overs, " + _0x343299.data.bowlerOneRun + '/' + _0x343299.data.bowlerOneWickets + ", Econ:* " + _0x343299.data.bowlerOneEconomy + "\n";
        _0x40d726 += "│★⃝•\n";
        _0x40d726 += "│★⃝•   *Bowler 2:* " + _0x343299.data.bowlerTwo + "\n";
        _0x40d726 += "│★⃝•   *" + _0x343299.data.bowlerTwoOver + " overs, " + _0x343299.data.bowlerTwoRun + '/' + _0x343299.data.bowlerTwoWicket + ", Econ:* " + _0x343299.data.bowlerTwoEconomy + "\n";
      }
      _0x40d726 += "╰══•∞•═══════════════╯ ";
      await _0x5d05db.reply(_0x40d726);
      await _0x5d05db.React('✅');
    } catch (_0x4f0534) {
      console.error(_0x4f0534);
      await _0x5d05db.React('❌');
      return _0x5d05db.reply("An error occurred while processing the cricket score request. " + _0x4f0534.message);
    }
  }
};
export default cricketScore;