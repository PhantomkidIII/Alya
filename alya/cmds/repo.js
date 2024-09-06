import _0x433dbd, { prepareWAMessageMedia } from 'gifted-baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x433dbd;
import _0x263fc3 from 'axios';
const handleRepoCommand = async (_0x505a2b, _0x45bbfa) => {
  try {
    const _0x2a32d4 = await _0x263fc3.get('https://api.github.com/repos/mouricedevs/gifted');
    const _0x26a457 = _0x2a32d4.data;
    const {
      full_name: _0x323833,
      name: _0x164e2d,
      forks_count: _0x1cb774,
      stargazers_count: _0x128b76,
      created_at: _0x8189f6,
      updated_at: _0x1854d9,
      owner: _0x57e1ec
    } = _0x26a457;
    const _0x6cf242 = "Hello *_" + _0x505a2b.pushName + "_,*\nThis is *Gifted-Md,* A Whatsapp Bot Built by *QUEEN ALYA,* Enhanced with Amazing Features to Make Your Whatsapp Communication and Interaction Experience Amazing\nUse Below Buttons to Navigate to Bot's Repo and Other Areas.\n\n*❲❒❳ ɴᴀᴍᴇ:* " + _0x164e2d + "\n*❲❒❳ sᴛᴀʀs:* " + _0x128b76 + "\n*❲❒❳ ғᴏʀᴋs:* " + _0x1cb774 + "\n*❲❒❳ ᴄʀᴇᴀᴛᴇᴅ ᴏɴ:* " + new Date(_0x8189f6).toLocaleDateString() + "\n*❲❒❳ ʟᴀsᴛ ᴜᴘᴅᴀᴛᴇᴅ:* " + new Date(_0x1854d9).toLocaleDateString() + "\n*❲❒❳ ᴏᴡɴᴇʀ:* STAR KING";
    const _0x5a3330 = generateWAMessageFromContent(_0x505a2b.from, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': _0x6cf242
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "*𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀*"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({
                'image': {
                  'url': 'https://f.uguu.se/LJlkZhem.jpg'
                }
              }, {
                'upload': _0x45bbfa.waUploadToServer
              })),
              'title': '',
              'gifPlayback': true,
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "quick_reply",
                'buttonParamsJson': JSON.stringify({
                  'display_text': "ᴠɪᴇᴡ ᴍᴇɴᴜ",
                  'id': ".menu"
                })
              }, {
                'name': "cta_url",
                'buttonParamsJson': JSON.stringify({
                  'display_text': "sʜᴏᴡ 💜 ғᴏʀ Alya",
                  'url': 'https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D'
                })
              }, {
                'name': "cta_url",
                'buttonParamsJson': JSON.stringify({
                  'display_text': "ᴠɪsɪᴛ, ғᴏʀᴋ & sᴛᴀʀ ʀᴇᴘᴏ",
                  'url': "https://github.com/STAR-KING0/Queen_Alya"
                })
              }]
            }),
            'contextInfo': {
              'mentionedJid': [_0x505a2b.sender],
              'forwardingScore': 0x270f,
              'isForwarded': false
            }
          })
        }
      }
    }, {});
    await _0x45bbfa.relayMessage(_0x5a3330.key.remoteJid, _0x5a3330.message, {
      'messageId': _0x5a3330.key.id
    });
    await _0x505a2b.React('✅');
  } catch (_0x3d9cad) {
    console.error("Error processing your request:", _0x3d9cad);
    _0x505a2b.reply("Error processing your request.");
    await _0x505a2b.React('❌');
  }
};
const searchRepo = async (_0x2e47c8, _0x180732) => {
  const _0x421bda = _0x2e47c8.body.match(/^[\\/!#.]/);
  const _0x538b96 = _0x421bda ? _0x421bda[0x0] : '/';
  const _0x17ce3b = _0x2e47c8.body.startsWith(_0x538b96) ? _0x2e47c8.body.slice(_0x538b96.length).split(" ")[0x0].toLowerCase() : '';
  const _0x1c444d = ["repo", 'sc', 'script'];
  if (_0x1c444d.includes(_0x17ce3b)) {
    await handleRepoCommand(_0x2e47c8, _0x180732);
  }
};
export default searchRepo;