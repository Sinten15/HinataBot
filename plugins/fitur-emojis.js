// ESM
import emoji from 'emoji-api'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

let handler = async (m, { conn, args, text, usedPrefix, command, isPrems }) => {
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
          try {
let mmo = await emoji.get(args[0]).twemoji()
const stek = new Sticker(encodeURI(mmo), { pack: packname, author: author, type: StickerTypes.FULL })
				const buffer = await stek.toBuffer()
				conn.sendFile(m.chat, buffer, 'sticker.webp', '', fakes, adReply, { asSticker: true })
				} catch (e) {
				throw eror
				}
}
handler.help = ['emoji']
handler.tags = ['sticker'] 
handler.command = /^(emo(jis|(ji)?)|se?moji)$/i
export default handler