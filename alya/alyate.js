import _0x13851f from 'axios';
import _0x48d89c from 'form-data';
import _0x3e593a from 'node-fetch';
import _0x427d6e from 'fs';
import * as _0x5abc27 from 'cheerio';
import _0x3c34d8 from 'mime';
export const TelegraPh = async _0xb979c2 => {
  return new Promise(async (_0x32da8d, _0x5d5f58) => {
    if (!_0x427d6e.existsSync(_0xb979c2)) {
      return _0x5d5f58(new Error("File not Found"));
    }
    try {
      const _0x3bcaac = new _0x48d89c();
      _0x3bcaac.append("file", _0x427d6e.createReadStream(_0xb979c2));
      const _0x28a74c = await _0x13851f({
        'url': "https://telegra.ph/upload",
        'method': "POST",
        'headers': {
          ..._0x3bcaac.getHeaders()
        },
        'data': _0x3bcaac
      });
      const _0x2d7e35 = _0x28a74c.data;
      _0x32da8d("https://telegra.ph" + _0x2d7e35[0].src);
    } catch (_0x3a3229) {
      _0x5d5f58(new Error(String(_0x3a3229)));
    }
  });
};
export const UploadFileUgu = async _0x20acbf => {
  return new Promise(async (_0x446433, _0x235d3a) => {
    try {
      const _0x6363da = new _0x48d89c();
      _0x6363da.append("files[]", _0x427d6e.createReadStream(_0x20acbf));
      const _0x188303 = await _0x13851f({
        'url': "https://uguu.se/upload.php",
        'method': "POST",
        'headers': {
          'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          ..._0x6363da.getHeaders()
        },
        'data': _0x6363da
      });
      _0x446433(_0x188303.data.files[0]);
    } catch (_0x59bc57) {
      _0x235d3a(_0x59bc57);
    }
  });
};
export const webp2mp4File = async _0x380f33 => {
  return new Promise(async (_0x2354ef, _0x49af5f) => {
    try {
      const _0x349d85 = new _0x48d89c();
      _0x349d85.append("new-image-url", '');
      _0x349d85.append("new-image", _0x427d6e.createReadStream(_0x380f33));
      const _0x44d8f3 = await _0x13851f({
        'method': "post",
        'url': "https://s6.ezgif.com/webp-to-mp4",
        'data': _0x349d85,
        'headers': _0x349d85.getHeaders()
      });
      const _0x298fc2 = _0x44d8f3.data;
      const _0x191185 = _0x5abc27.load(_0x298fc2);
      const _0x32432e = _0x191185("input[name=\"file\"]").val();
      const _0x4fe59e = new _0x48d89c();
      _0x4fe59e.append("file", _0x32432e);
      _0x4fe59e.append("convert", "Convert WebP to MP4!");
      const _0x160e6b = await _0x13851f({
        'method': "post",
        'url': "https://ezgif.com/webp-to-mp4/" + _0x32432e,
        'data': _0x4fe59e,
        'headers': _0x4fe59e.getHeaders()
      });
      const _0x3ef94d = _0x160e6b.data;
      const _0x1191f0 = _0x5abc27.load(_0x3ef94d);
      const _0x18a80c = "https:" + _0x1191f0("div#output > p.outfile > video > source").attr("src");
      _0x2354ef({
        'status': true,
        'message': "Created By Queen_Alya",
        'result': _0x18a80c
      });
    } catch (_0x91352c) {
      _0x49af5f(_0x91352c);
    }
  });
};
export const floNime = async (_0x22e8e2, _0x541bdf = {}) => {
  const _0x44721e = _0x3c34d8.getType(_0x22e8e2);
  if (!_0x44721e) {
    throw new Error("Unknown file type");
  }
  const _0x1e3251 = new _0x48d89c();
  _0x1e3251.append("file", _0x427d6e.createReadStream(_0x22e8e2), "tmp." + _0x44721e);
  const _0x2758c1 = await _0x3e593a("https://flonime.my.id/upload", {
    'method': "POST",
    'body': _0x1e3251,
    'headers': _0x1e3251.getHeaders()
  });
  const _0x36bc2e = await _0x2758c1.json();
  return _0x36bc2e;
};
export default {
  'TelegraPh': TelegraPh,
  'UploadFileUgu': UploadFileUgu,
  'webp2mp4File': webp2mp4File,
  'floNime': floNime
};