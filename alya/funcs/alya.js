import _0x35252a from 'moment-timezone';
import _0x5e15c5 from '../../set.cjs';
export default async function GroupParticipants(_0xda8ab3, {
  id: _0x50625a,
  participants: _0x4de223,
  action: _0x1c173f
}) {
  try {
    const _0x464d74 = await _0xda8ab3.groupMetadata(_0x50625a);
    for (const _0xa9fa0d of _0x4de223) {
      let _0x1a9421;
      try {
        _0x1a9421 = await _0xda8ab3.profilePictureUrl(_0xa9fa0d, "image");
      } catch {
        _0x1a9421 = "https://lh3.googleusercontent.com/proxy/esjjzRYoXlhgNYXqU8Gf_3lu6V-eONTnymkLzdwQ6F6z0MWAqIwIpqgq_lk4caRIZF_0Uqb5U8NWNrJcaeTuCjp7xZlpL48JDx-qzAXSTh00AVVqBoT7MJ0259pik9mnQ1LldFLfHZUGDGY=w1200-h630-p-k-no-nu";
      }
      if (_0x1c173f == "add" && _0x5e15c5.WELCOME) {
        const _0x10003a = _0xa9fa0d.split('@')[0];
        const _0x16dde0 = _0x35252a.tz("Africa/Nigeria").format("HH:mm:ss");
        const _0x4d06cc = _0x35252a.tz("Africa/Nigeria").format("DD/MM/YYYY");
        const _0x410ee3 = _0x464d74.participants.length;
        _0xda8ab3.sendMessage(_0x50625a, {
          'text': "> Hello @" + _0x10003a + "! Welcome to *" + _0x464d74.subject + "*.\n> You are the " + _0x410ee3 + "th member.\n> Joined at: " + _0x16dde0 + " on " + _0x4d06cc + "\n\"",
          'contextInfo': {
            'mentionedJid': [_0xa9fa0d],
            'externalAdReply': {
              'title': "Member Joined",
              'mediaType': 0x1,
              'previewType': 0x0,
              'renderLargerThumbnail': true,
              'thumbnailUrl': _0x464d74.subject,
              'sourceUrl': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D"
            }
          }
        });
      } else {
        if (_0x1c173f == "remove" && _0x5e15c5.WELCOME) {
          const _0x16c3e6 = _0xa9fa0d.split('@')[0];
          const _0x45b2b3 = _0x35252a.tz("Africa/Nigeria").format("HH:mm:ss");
          const _0x1c24c4 = _0x35252a.tz("Africa/Nigeria").format("DD/MM/YYYY");
          const _0x199513 = _0x464d74.participants.length;
          _0xda8ab3.sendMessage(_0x50625a, {
            'text': "> Goodbye @" + _0x16c3e6 + " from " + _0x464d74.subject + ".\n> We are now " + _0x199513 + " in the group.\n> Left at: " + _0x45b2b3 + " on " + _0x1c24c4 + "\"",
            'contextInfo': {
              'mentionedJid': [_0xa9fa0d],
              'externalAdReply': {
                'title': "Member Left",
                'mediaType': 0x1,
                'previewType': 0x0,
                'renderLargerThumbnail': true,
                'thumbnailUrl': _0x1a9421,
                'sourceUrl': "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D"
              }
            }
          });
        }
      }
    }
  } catch (_0x212ff7) {
    throw _0x212ff7;
  }
}