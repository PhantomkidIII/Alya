import _0x3c3b64 from 'node-fetch';
const fetchData = async (_0x4d64df, _0xc1f35a) => {
  const _0x4c1c4d = _0x4d64df.body.match(/^[\\/!#.]/);
  const _0x2e2911 = _0x4c1c4d ? _0x4c1c4d[0x0] : '/';
  const _0x266341 = _0x4d64df.body.startsWith(_0x2e2911) ? _0x4d64df.body.slice(_0x2e2911.length).split(" ")[0x0].toLowerCase() : '';
  const _0x17ca86 = _0x4d64df.body.slice(_0x2e2911.length + _0x266341.length).trim();
  const _0x158e1d = ['fetch', "get", "api"];
  if (_0x158e1d.includes(_0x266341)) {
    if (!/^https?:\/\//.test(_0x17ca86)) {
      return _0x4d64df.reply("Start the *URL* with http:// or https://");
    }
    try {
      const _0x42b8c7 = new URL(_0x17ca86);
      const _0x5db4d8 = '' + _0x42b8c7.origin + _0x42b8c7.pathname + '?' + _0x42b8c7.searchParams.toString();
      const _0xd319ee = await _0x3c3b64(_0x5db4d8);
      const _0x23f775 = _0xd319ee.headers.get("content-length");
      if (_0x23f775 && _0x23f775 > 107374182400) {
        return _0x4d64df.reply("Content-Length exceeds the limit: " + _0x23f775);
      }
      const _0x39f9b9 = _0xd319ee.headers.get("content-type");
      if (!/text|json/.test(_0x39f9b9)) {
        await _0xc1f35a.sendMedia(_0x4d64df.from, _0x5db4d8, "file", "> > *©𝟐𝟎𝟐𝟒 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*", _0x4d64df);
        return;
      }
      let _0x4ef855 = Buffer.from(await _0xd319ee.arrayBuffer());
      try {
        console.log("Parsed JSON:", JSON.parse(_0x4ef855));
        _0x4ef855 = JSON.stringify(JSON.parse(_0x4ef855));
      } catch (_0x49b47d) {
        console.error("Error parsing JSON:", _0x49b47d);
        _0x4ef855 = _0x4ef855.toString();
      } finally {
        _0x4d64df.reply(_0x4ef855.slice(0x0, 0x10000));
      }
    } catch (_0x5192c9) {
      console.error("Error fetching data:", _0x5192c9.message);
      _0x4d64df.reply("Error fetching data.");
    }
  }
};
export default fetchData;