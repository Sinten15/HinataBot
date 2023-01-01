import { Emoji } from 'emoji-api' 
let emoji = Emoji
let handler = async (m, { conn, args, text, usedPrefix, command, isPrems }) => {
let name = await conn.getName(m.sender)
throw 'Wait'
const sections = [
   {
	title: `${htki} List Options ${htka}`,
	rows: [
	{title: `${htjava} API`, rowId: `${usedPrefix + command} ${args[0]} a`},
	{title: `${htjava} MODULE`, rowId: `${usedPrefix + command} ${args[0]} m`}
	]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "Click Here!",
  sections
}
if (!args[0] || !args[1]) return conn.sendMessage(m.chat, listMessage, { quoted: fakes })

if (args[1] == 'm') {
throw 'Wait'
let mmo = await emoji.get(`${args[0]}`)
let emom = mmo.images
	let row = Object.values(emom).map((v, index) => ({
		title: v.index + ' Emoji Api ' + v.vendor,
		description: '\nName: ' + mmo.name + '\nEmoji: ' + mmo.emoji + '\nUnicode: ' + mmo.unicode + '\nDescription: ' + mmo.description,
		rowId: usedPrefix + 'fetchsticker ' + v.url + ' wsf'
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	}
if (args[1] == 'a') {
throw 'Wait'
  let amo = ["apple",
"facebook",
"google",
"microsoft",
"samsung",
"skype",
"twitter",
"whatsapp"]
	let row = Object.keys(amo).map((v, index) => ({
		title: '📌 Emoji ' + amo[v],
		description: '\nBy: ' + wm,
		rowId: usedPrefix + 'fetchsticker ' + 'https://botcahx-rest-api.herokuapp.com/api/emoji/' + amo[v] + '?emoji=' + args[0] + ' wsf'
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	}
}
handler.help = ['emoji']
handler.tags = ['sticker'] 
handler.command = /^(emo(jis|(ji)?)|se?moji)$/i
export default handler