const discord = require("discord.js")

const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { Prefıx } = require("./config.json")


client.on("ready", () => {
  console.log('Ready TO play some soft songs')
  client.user.setActivity(" .play & .help ")
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

client.commands = new discord.Collection()
client.prefix = Prefıx
client.queue = new Map();


const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} 


client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(Prefıx)) {
    
    const args = message.content.slice(Prefıx.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { 
      client.commands.get(command).execute(client, message, args)
    } catch (err) { 
      console.log(err)
      message.reply(" Bu komutu kullanırken hata alıyorum ")
    }
    
  }
  
  
});

client.on("guildCreate", guild => {
  const embed = new discord.MessageEmbed()
    .setColor(`GREEN`)
    .setTitle(`YENİ BİR SUNUCUYA DAHA EKLENDİM!`)
    .setDescription(
      `Sunucu Adı: ${guild.name}\nSunucu Id: ${guild.id}\nSunucu Sahibi: ${guild.owner}\nSunucudaki Kişi Sayısı: ${guild.memberCount}\nSunucu Oluşturulma Zamanı: ${guild.createdAt}\nDoğrulama Seviyesi: ${guild.verificationLevel}`
    );
  client.channels.cache.get(`844607975069974575`).send(embed);
});
client.on("guildDelete", guild => {
const embed = new discord.MessageEmbed()
    .setColor(`RED`)
    .setTitle(`BİR SUNUCUDAN ATILDIM!`)
    .setDescription(
      `Sunucu Adı: ${guild.name}\nSunucu Id: ${guild.id}\nSunucu Sahibi: ${guild.owner}\nSunucudaki Kişi Sayısı: ${guild.memberCount}\nSunucu Oluşturulma Zamanı: ${guild.createdAt}\nDoğrulama Seviyesi: ${guild.verificationLevel}`
    );
  client.channels.cache.get(`844607949556940822`).send(embed);
});


client.login(process.env.Token)
