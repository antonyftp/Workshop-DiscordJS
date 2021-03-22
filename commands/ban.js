const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    // Créer une commande de ban qui prends en arguments le @ de la personne que vous voulez ban ainsi que la raison du ban.
    // La commande aura cette structure : !ban @user reason

    // Si l'utilisateur mentionné n'est pas sur le discord ou n'existe pas, la fonction doit être arrêtée et un message d'erreur affiché.
    // Si l'utilisateur n'a pas la permission de bannir, la fonction doit être arrêtée et un message d'erreur affiché.
    // Si l'utilisateur essaye de bannir une personne ayant un meilleur grade hiérarchique (modo essaye de ban admin), la fonction doit être arrêtée et un message d'erreur affiché.
    // Si aucune raison n'est donnée, la fonction doit être arrêtée et un message d'erreur affiché.

    // Un embed (man google -> embed discord) doit être affiché avec les informations suivantes :
    // - Une thumbnail avec l'avatar de la personne bannie
    // - L'utilisateur ban et son ID
    // - La personne qui est à l'origine du ban et son ID
    // - Le channel dans laquelle la personne a été bannie
    // - La date du ban
    // - La raison du ban
};
