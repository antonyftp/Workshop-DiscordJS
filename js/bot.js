const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("../json/token.json")
const config = require("../json/config.json")

client.on('ready', () => {
    console.log("Ready to go !");
    client.user.setPresence({
        status: "online",
        activity: {
            name: config.status,
            type: "PLAYING",
        }
    });
});

client.on('message', message => {
    if (message.author.bot) return;
    // Ex 0 : Le bot ne doit traiter que les messages comprennant le prefix '!'

    // Ex 1 : Afficher la commande que l'on a écrit dans la console

    // Ex 2 : Quand l'utilisateur envoi la commande !ping, on répond pong

    // Ex 3 : Quand la commande est au format !kick @user, kicker l'utilisateur mentionné

    // Ex 4 : Quand la commande est au format !ban @user, bannir l'utilisateur mentionné

})

// Ex 5 : Quand un channel est créé, afficher un message dans la console avec le nom du channel créé.

// Ex 6 : Quand un utilisateur est kick, afficher un message dans la console le nom de la personne kick

// Ex 7 : Quand un utilisateur est banni, afficher un message dans la console le nom de la personne banni

// Ex 8 : Quand un utilisateur est dé-banni, afficher un message dans la console avec le nom de la personne dé-banni


client.login(token.token);
