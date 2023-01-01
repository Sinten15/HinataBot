
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let krtu = htki + 'Yᴏᴜʀ Cᴀʀᴅ Iɴᴛʀᴏ' htka + '\n' + dmenub + '*Nama:*\n' + dmenub + '*Umur:*\n' + dmenub + '*Alamat:*\n' + dmenub + '*Hobi:*\n' + dmenub + '*Pasangan:*\n' + dmenuf
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, adReply) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

