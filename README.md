# 📧 NGL.link Message Bot

This is a simple JavaScript code that allows users to send messages to NGL.link users using their API. The bot works by sending a POST request to the NGL.link API with the specified message and the user's username.


## 🚀 Installation

To use this message bot, simply download the ngl-message-bot.js file and include it in your project. You will also need to have the crypto module installed. You can install it using the following command:

```
npm install crypto
```


## 🎉 Usage

To use this message bot, simply call the sendMessage function with the desired username and message as arguments. For example:

```
const { sendMessage } = require("./ngl-message-bot.js");

sendMessage("example_user", "Example Message");
```



⚠️ Please note that sending messages to NGL.link users without their consent is not recommended and may be illegal in some jurisdictions. Use this code at your own risk.
