const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="sawinduumesha@gmail.com"
global.location="chilaw,srilanka "


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || ";
global.website=process.env.GURL || "https" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_20_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgODQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODksXG4gICAgICAgIDExNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NixcbiAgICAgICAgMjEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMixcbiAgICAgICAgMTk5LFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZiTXZlNy8zd1J2cENpb29JWVFpU1B5TGg2WXlVVExDc3VVeEgzcTJGRnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJkNWZIemZpUmEyVkNsX2wxZFhwQ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjI4OGM3YzEtOTNhNC00NGU4LTk0NjQtMmQzZGQ2MzczMmE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDc0LFxuICAgICAgODIsXG4gICAgICAyMyxcbiAgICAgIDIwOSxcbiAgICAgIDIyMyxcbiAgICAgIDIzNixcbiAgICAgIDc4LFxuICAgICAgOTQsXG4gICAgICAyMjcsXG4gICAgICAxNDMsXG4gICAgICAyMjMsXG4gICAgICA4NixcbiAgICAgIDIzMixcbiAgICAgIDEyNixcbiAgICAgIDEwMyxcbiAgICAgIDE1MSxcbiAgICAgIDI0LFxuICAgICAgNzAsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyMDIsXG4gICAgICAyNDAsXG4gICAgICAxOTEsXG4gICAgICAyNTEsXG4gICAgICAxNDIsXG4gICAgICAyMTQsXG4gICAgICAyMTgsXG4gICAgICAxODEsXG4gICAgICA5MSxcbiAgICAgIDQ4LFxuICAgICAgMTcxLFxuICAgICAgMjE2LFxuICAgICAgMTkwLFxuICAgICAgMjMsXG4gICAgICAxODAsXG4gICAgICA1LFxuICAgICAgMTMzLFxuICAgICAgMTIsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYS01OMkc1N1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Njc5NjkzNzQ6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYXdpbmR1XCIsXG4gICAgXCJsaWRcIjogXCIzNDYzMDUzOTQ0NDMwMzozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUEs5TUVCRU5hTnpic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJ5S2VBalFjbVd3VU1hYXdIdnV6Wndsbm1LOVdpbTFrZFBuUmx5dDFhSDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWDRFMkJYYlVLKzI0ellWNEpNdUdvMFFqZHV6OWppK2VoOFJ1c1VjbWRKc3hDM3hHVlBybERnMnU1NE1tZ05oUkNZVEVHUjV4d0M1YjlQd2ZuUjRJRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSGorTE40ZGhyL0Zwc0E1WXV1SEdJS204aGFDK2VpdVIyMlg3T0RxK1JJaHNkdnU2MUJMVEFTNGFZQXZteHJibXUvWUdJZFZhSGNCV3N5MDVRVFVGaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Njc5NjkzNzQ6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTYwODAyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB3RVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHdFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT2tMa1pXODNBYnhBejRLY0xnb1FaaFhGclBiZXJOUTFtN1MrdllLdi8yaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDY2NjAzODYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU2MDgwMDA4MzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sawi-XMD",
  ownername:process.env.OWNER_NAME|| "Dark Sawiya-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
