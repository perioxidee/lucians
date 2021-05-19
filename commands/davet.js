const Discord = require('discord.js');
const ayarlar = require('../config.json');

module.exports = {
  name: "invite",
  description: "bot invite",
  execute(client, message, args) {
    const embed = new Discord.MessageEmbed()
        
        .setTitle(`${client.user.username} DAVET SİSTEMİ `)
        .setDescription(`<a:luci_davet:844521385656975380> Botun Davet Linki İçin** [TIKLA](https://discord.com/api/oauth2/authorize?client_id=765934959088893952&permissions=0&scope=bot)
<a:luci_davet:844521385656975380> **Destek Sunucusu İçin [TIKLA](https://discord.gg/U6wreK345E)`)
        .setThumbnail(client.user.avatarURL())
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL())
    .setColor(`BLUE`)
    return message.channel.send(embed);
  
  }
}