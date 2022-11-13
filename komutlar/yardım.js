const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(`${client.user.username} Yardım`,client.user.avatarURL())
.setDescription(`Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
.setTimestamp()
.addField('> <a:deiiktik:818223336562884689> - !avatar ',' Avatarınızı Atar')
.addField('> <a:deiiktik:818223336562884689> - !afk ',' Afk Olursunuz')
.addField('> <a:deiiktik:818223336562884689> - !everhereengel ',' Everyone-here atılmasını engeller')
.addField('> <a:deiiktik:818223336562884689> - !isim-değiştir ',' Etiketlediğiniz Kullanıcının İsmi Üzerinde oynama yapabilirsiniz')
.addField('> <a:deiiktik:818223336562884689> - !kullanıcı-bilgi ',' kullanıcı bilgilerinizi sıralar')
.addField('> <a:deiiktik:818223336562884689> - !küfür-engel aç/kapat ',' Küfür Engeli Açabilirsiniz/Kapatabilirsiniz)')
.addField('> <a:deiiktik:818223336562884689> - !ping ',' Botun Pingini Gönderir')
.addField('> <a:deiiktik:818223336562884689> - !reklam-engel aç/kapat ',' Reklam Engellersiniz')
.addField('> <a:deiiktik:818223336562884689> - !sa-as ',' Biri Sa yazdığında bot cevap verir')
.addField('> <a:deiiktik:818223336562884689> - !sunucu-bilgi ',' Bir sunucunun Bilgilerini atar')
.addField('> <a:deiiktik:818223336562884689> - !yavaş-mod ',' Slow Mode açar 10 saniye boyunca yazma engeli ekler')
.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.setTimestamp()
.setFooter("Voxic Code Moderasyon | Voxic CODE")
.setThumbnail("https://cdn.discordapp.com/attachments/814483180123193356/831248117826715689/vlogo.png")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['voxic'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};