let handler = async (m, { conn }) => {
let info = `
*${htki} MENU ${htka}*

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█ 
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
`
const sections = [
   {
	title: `✃ Mau make Menu apa?`,
	rows: [
	    {title: "∫ 🧿» Simpel «", rowId: '.mw', description: '╰► Menu simpel FANGZ BOT' },
	    {title: "∫ 🍭» Simpel 2 «", rowId: '.lmenu5', description: '╰► Menu simpel 2 FANGZ BOT' },
	    {title: "∫ 🌸» List Menu «", rowId: '.?', description: '╰► Menu Keceh FANGZ BOT' },
	    {title: "∫ ⚠️» Fake Menu «", rowId: '.menu4', description: '╰► Menu palsu FANGZ BOT' },
        ]
        }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "LIST MENU ☁︎",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.command = /^(listmenu)$/i
handler.private = false

export default handler
