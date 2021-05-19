const Discord = require('discord.js')
const {Prefıx} = require('../config.json')
module.exports = {
  name: "help",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
`   
  
**  🎧 | Lucian Keyifli Dinlemeler Diler. Beni Tercih Ettiğiniz İçin Teşekkürler **

  
 **<:luci_dev:844473248796114945> Merhaba <@${message.author.id}> kullanıcım.**
 **<:luci_dev:844473248796114945> Prefixim : .**
 **<:luci_dev:844473248796114945> Sahibim :** <@417030817940897802> **-** <@439132738302377985> **-** <@683023636122304537>
 
**<:luci_dev:844473248796114945> » .play <şarkı-adı> : Bir Şarkıyı Oynatır.
<:luci_dev:844473248796114945> » .skip : Sıradaki Şarkıyı atlar.
<:luci_dev:844473248796114945> » .loop : O Anki şarkıyı Hep tekrarlar.
<:luci_dev:844473248796114945> » .stop : O anki Şarkıyı Durur
<:luci_dev:844473248796114945> » .resume : Duran Şarkıyı Devam Ettirir.
<:luci_dev:844473248796114945> » .sıra : O Anki Sırayı Gösterir.
<:luci_dev:844473248796114945> » .np : O Anki Oynatılan Şarkıyı Söyler.**
**<:luci_dev:844473248796114945> » .invite : Botun Davet Komutlarını Gösterir.**
**Lucian Bot | 2021 © Tüm Hakları Saklıdır**

`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://cdn.discordapp.com/attachments/814483180123193356/829305068397264896/LH9PSj.gif")
.setImage("")       )                  
}
}