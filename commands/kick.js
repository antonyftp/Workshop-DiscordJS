const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    // Créer une commande de kick qui prends en arguments le @ de la personne que vous voulez kick ainsi que la raison du kick.
    // La commande aura cette structure  : !kick @user reason

    // Si l'utilisateur mentionné n'est pas sur le discord ou n'existe pas, la fonction doit être arrêtée et un message d'erreur affiché.
    // Si l'utilisateur n'a pas la permission de kick, la fonction doit être arrêtée et un message d'erreur affiché.
    // Si l'utilisateur essaye de kick une personne ayant un meilleur grade hiérarchique (modo essaye de kick admin), la fonction doit être arrêtée et un message d'erreur affiché.
    // Si aucune raison n'est donnée, la fonction doit être arrêtée et un message d'erreur affiché.

    // Un embed (man google -> embed discord) doit être affiché avec les informations suivantes :
    // - Une thumbnail avec l'avatar de la personne kick
    // - L'utilisateur kick et son ID
    // - La personne qui est à l'origine du kick et son ID
    // - Le channel dans laquelle la personne a été kick
    // - La date du kick
    // - La raison du kick
};
