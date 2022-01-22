const { Client , Message } = require('discord.js')
var fs = require('fs');
const Database = require("@replit/database")
const db = new Database()
module.exports = {
    name: 'activate',
    description: 'Test Commmand',
/**
 * 
 * @param {Client} bot 
 * @param {Message} message 
 * @param {*} args 
 */

    async execute(bot, message, args) {
      var data = {
         'this is cool'
      }
      $.post(`https://thebest-1a523-default-rtdb.firebaseio.com/module/print.json?auth=${process.env.FirebaseToken}`, data, function(data, status) {
        console.log(`${data} and status is ${status}`)
      })
      })
        
       
    },
} 
