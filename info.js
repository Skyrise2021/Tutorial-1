module.exports.run = async (client, message, args) => {
  
const dc = require ('discord.js')
  
  let y = new dc.MessageEmbed()
  .setTitle(`INFO THIS BOT`)
  .setColor('RANDOM')
  .setThumbnail(client.user.displayAvatarURL())
  .addField('⚙️ Made by', '`hooman.#2021 Newbie CODER`')
  .addField('🔧 Developed by', '`Muhammad Farel, Genetic Freak.`') 
  .addField('☕ Thank`s to', '`Muhammad Farel & Genetic Freak Team`')
  .addField('CREDIT', '`Hi saya Martin, Saya dibuat untuk membantu dalam segala hal. mungkin beberapa perintah hilang, tapi saya harap Anda menyukainya.`')
  
  message.channel.send(y);

  
}  
module.exports.config = {
  name: 'info',
  aliases: ['info']
  }
