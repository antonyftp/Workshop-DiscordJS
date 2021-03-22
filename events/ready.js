const config = require("../json/config.json")

module.exports = (client) => {
    console.log("Ready to go !");
    client.user.setPresence({
        status: "online",
        activity: {
            name: config.bot.status,
            type: "PLAYING",
        }
    })
};
