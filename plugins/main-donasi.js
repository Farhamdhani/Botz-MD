const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
Hallo User FarhanBotz 👋
*Kalian Bisa Mendukung Saya Agar Bot Ini Tetap Up To Date Dengan Cra:*

╭─❏ *『 DONASI 』*
│ ➪ Dana : 089509381243
│ ➪ Gopay : "_"
│ ➪ Ovo : "_"
╰───────────────❏

BERAPAPUN DONASI KALIAN AKAN SANGAT BERARTI 👍
TERIMAKASIH  BUAT YANG SUDAH MAU BERDONASI😉
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(donasi)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '🔥 Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: 'My Youtube📸',
               url: 'https://youtube.com/channel/UCoHJ9D9Sy3TLp0mUHBrj1cg',
             }

           },
                {
               urlButton: {
               displayText: '😼Owner FarhanBotz',
               url: nomer
             }

           },
               {
             quickReplyButton: {
               displayText: 'sewa',
               id: '.sewadani',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Runtime',
               id: '.runtime',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(donasi|donate)$/i
handler.help = ['donasi']
module.exports = handler
