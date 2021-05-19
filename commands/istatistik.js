const Discord = require('discord.js');
const ayarlar = require('../config.json');
const moment = require('moment')
require('moment-duration-format');

module.exports = {
  name: "i",
  description: "bot",
  execute(client, message, args) {
    let duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setDescription(`<:melody_bot_developer:839307628780716032> **- Geliştiricilerim**
:white_small_square: <@417030817940897802> - <@439132738302377985> - <@683023636122304537>
:white_small_square: Kuruluş: **14/10/2020 - 16:52:04**`)
.addField('<:bilgi:839311240189968435> - Bilgiler', `:white_small_square: <:melody_tabs:839307628852150302> Sunucu Sayısı:  **${client.guilds.cache.size}**
:white_small_square: <:melody_kullanc:839307628693553173> Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**
:white_small_square: <:melody_hastag:839307628676251658> Kanal Sayısı: **${client.channels.cache.size}**
:white_small_square: :satellite: Ping: **${client.ws.ping}ms**
:white_small_square: <:melody_ses:839651739359903764> Kaç Sunucuda Seste: **${client.voice.connections.size}**`, true)
        .setThumbnail(client.user.avatarURL())
        .setFooter(`Request by ${message.author.username}`, message.author.avatarURL())
        .setColor(message.guild.me.displayHexColor)
    return message.channel.send(embed);
  
  }
}