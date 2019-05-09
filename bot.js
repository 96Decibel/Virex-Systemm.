const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} Ready !`);
});

client.on('message', msg => {
  if (msg.content === '$help') {
    msg.channel.send(':mega:  | `$bc`           `>`     ** Send Broadcast For All ** .');
    msg.channel.send(':bullettrain_front:  | `$clear`      `>`     ** Delete Chat Messages ** .');
    msg.channel.send(':space_invader:   | `$skin`           `>`     ** To See Your Skin In Minecraft ** .');
msg.react("😎")
  }
});



client.on("message", message => {
    const prefix = '$';
 
            var args = message.content.substring(prefix.length).split("$");
            if (message.content.startsWith(prefix + "clear")) {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No Permissions**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done !",
        color: 0x36393e,
        description: "تم حذف الرسائل",
        footer: {
          text: "Ghost Bot©."
        }
      }}).then(msg => {msg.delete(50)});
                          }

     
});

client.on("message", message => {
    var prefix = "$"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    }); 
	
  client.on('message', message => {
    if (message.content.split(' ')[0] == '%k')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   client.on("message", message => {
       var prefix = "$";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "bc")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":cyclone: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':cyclone: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});

client.login(process.env.BOT_TOKEN);
