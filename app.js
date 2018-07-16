const 
  dotenv = require('dotenv').load()
  tmi = require('tmi.js');
  apikey = process.env.Botalaka_Password

var options ={
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "ChaChaBotalaka",
    password: `${apikey}`
  },
  channels: [`#TrevPerson`,"#ChaChaShakalaka", "#ChaChaBotalaka" ]
  // channels: ["#ChaChaShakalaka", "#ChaChaBotalaka", "#legacies15", "#sumikoyamasaki" ]
}

// function wait(ms){
//   var start = new Date().getTime();
//   while (new Date().getTime() < start + ms);
// }

var client = new tmi.client(options)

client.connect();

var trevWait = false;
var chaWait = false;
var legWait = false;
var samWait = false;
var powerOn = true;
var xenoguys = false;

function toggleWait(){
  trevWait = !trevWait
  // console.log(trevWait)

  setTimeout(function(){
    trevWait = !trevWait}, 3000);
}

function togglechaWait(){
  chaWait = !chaWait
  // console.log(trevWait)

  setTimeout(function(){
    chaWait = !chaWait}, 3000);
}
function togglelegWait(){
  legWait = !legWait
  // console.log(trevWait)

  setTimeout(function(){
    legWait = !legWait}, 3000);
}
function togglesamWait(){
  samWait = !samWait
  // console.log(trevWait)

  setTimeout(function(){
    samWait = !samWait}, 3000);
}

function togglePower(){
  powerOn = !powerOn;
}



//Chat commands. Takes 4 arguments
//The channel it's from
//The user sending the message
//The message itself
//And the bot itself
client.on('chat', (channel, user, message, self) =>{
  //console.log(`Channel: ${channel} || User: ${user}`)
  if(self) return
  if (channel == `#chachashakalaka` && powerOn){
    if(message == '!twitter' && !chaWait){
      client.say('#chachashakalaka', "twitter.com/chachashakalaka")
      
      togglechaWait()
    }
    // if(message == `!multistream` && !chaWait){
    //   client.say(`#chachashakalaka`,`http://kadgar.net/live/chachashakalaka/legacies15/sumikoyamasaki`)
    //   togglechaWait()
    // }
    //http://kadgar.net/live/chachashakalaka/legacies15/sumikoyamasaki

    if(message == `!on` && (user.mod || user.badges.broadcaster)){
      togglePower()
    }   
    if(message == `!off` && (user.mod || user.badges.broadcaster)){
      togglePower()
    }  
    //message response template
    // if(message == `!`){
    //   client.say(`#chachashakalaka`,``)
    // }
  }
  // if (channel == `#legacies15` && powerOn){
  //   if(message == `!multistream` && !legWait){
  //     client.say(`#legacies15`,`http://kadgar.net/live/chachashakalaka/legacies15/sumikoyamasaki`)
  //     togglelegWait()    
  //   }
  // }


  // if (channel == `#sumikoyamasaki` && powerOn){
  //   if(message == `!multistream` && !samWait){
  //     client.say(`#sumikoyamasaki`,`http://kadgar.net/live/chachashakalaka/legacies15/sumikoyamasaki`)
  //     togglesamWait()    
  //   }
  // }


  if (channel == `#trevperson` && powerOn){

    if(message == `!info` && !trevWait){
      client.say(`#trevperson`,`!twitter !discord !youtube !spoilers !bingo !faq !worldrecord !zsrmm`)    
      toggleWait()
    }

    if(message == `!twitter` && !trevWait){
      client.say(`#trevperson`, `twitter.com/trevperson`)
      toggleWait()
    }
    if(message == `!discord` && !trevWait){
      client.say(`#trevperson`, `https://discord.gg/0122Af3hNP8pA1kYE`)
      toggleWait()
    }
    if(message == `!youtube` && !trevWait){
      client.say(`#trevperson`, `https://www.youtube.com/trevperson`)
      toggleWait()
    }
    if(message == `!randomizer` && !trevWait){
      client.say(`#trevperson`,`Info about the MM Randomizer mod and Viewer Bingo: https://pastebin.com/quXkHjL5`)
      toggleWait()
    }
    if(message == `!bingo` && !trevWait){
      client.say(`#trevperson`,`Info about the MM Randomizer mod and Viewer Bingo: https://pastebin.com/quXkHjL5`)
      toggleWait()
    }
    if(message == `!spoilers` && !trevWait){
      client.say(`#trevperson`,`We now have a chat specifically for spoilers! Check the dropdown menu in the top right of the chat box.`)
      toggleWait()
    }
    if(message == `!Omni` && !trevWait){
      client.say(`#trevperson`,`hELLO wORLD cARLsMILE`)  
      toggleWait()
    }
    if(message == `!dograce` && (user.mod || user.badges.broadcaster)){
      client.say(`#trevperson`,`https://pastebin.com/wb4TbqEA`)  
      toggleWait()
    }
    if(message == `!zsrmm` && !trevWait){
      client.say(`#trevperson`,`You can visit http://zelda.speedruns.com/mm/ for more info on Majora's Mask speedruns and glitches!`)
      toggleWait()
    }
    // if(message == `!zsr` && !trevWait){
    //   client.say(`#trevperson`,`You can visit http://zelda.speedruns.com/ for more information on Zelda speedruns and glitches!`)
    //   toggleWait()
    // }
    if(message == `!faq` && !trevWait){
      client.say(`#trevperson`,`FAQ: https://pastebin.com/S9msfcby`)
      toggleWait()
    }
    // if(message == `!wr` && !trevWait){
    //   client.say(`#trevperson`,`TMZ smells like a butt`)
    //   toggleWait()
    // }
    if(message == `!Butter` && !trevWait){
      client.say(`#trevperson`,`"!toggle bingo", "!goal #", and "!forget [Username]`)
      toggleWait()
    }
    // if(message == `!Hiro` && !trevWait){
    //   client.say(`#trevperson`,`CArlsMile`)
    //   toggleWait()
    // }
    if(message == `$Head` && !trevWait){
      client.say(`#trevperson`,`People wanted this command to link to this stream http://twitch.tv/chachashakalaka`)
      toggleWait()
    }
    if(message == `!reset` && !trevWait && (user.mod || user.badges.broadcaster)){
      client.say(`#trevperson`,`Reset is a stream monster comment. Only villains do this.`)
      toggleWait()
    }
    if(message == `!off` && (user.mod || user.badges.broadcaster)){
      client.say(`#trevperson`,`Goodnight ResidentSleeper`)
      togglePower()
    }
    if(message == `!bread` && !trevWait){
      client.say(`#trevperson`,`Link is bread: Woodfall represents plant life, and bread is made from flour, which is made from a plant. Snowhead has fire in it, which represents the heat needed to make the dough rise. Great Bay Temple is full of water, which symbolizes the cooling of the bread as it finishes rising. Stone Tower is brown, representing the color when the bread is cooked.`
    )
    toggleWait()
  }
  //   if(message == `!emulator` && !trevWait){
  //     client.say(`#trevperson`,`No, this is not emulator. Trev is using an old DS Fat with a GBA slot. You are seeing the image of his screen captured using hardware and software. His DS capture card comes from 3dscapture.com/DS`
  //   )
  //   toggleWait()
  // }
    // if(message == `!fm2` && !trevWait){
    //   client.say(`#trevperson`,`This is a fan-made sequel called Forbidden Memories 2. Everything you know is a lie.`)
    //   toggleWait()    
    // }  
    
    // if(message == `!racers`){
    //   client.say(`#trevperson`,`BooIsAluring`)
    // }

    // if(message == `!BestPokemon` && !trevWait){
    //   client.say(`#trevperson`,`It's Machamp. LOOK AT THOSE MUSCLES.`)
    // }
    // if(message == `!WorstPokemon` && !trevWait){
    //   client.say(`#trevperson`,`It's Medicham. Medicham looks like melted crayons and old gum.`)
    // }
    if(message == `!SpeedFacts` && !trevWait){
      client.say(`#trevperson`,`Follow https://twitter.com/RealSpeedFacts for REAL facts about REAL speed!`)
    }
    // if(message == `!PromotedStream` && !trevWait && (user.mod || user.badges.broadcaster)){
    //   client.say(`#trevperson`,`TrevPerson would like you to know that Chacha is his favorite streamer of all time, go watch him at twitch.tv/zfg1`)
    // }    
    // if(message == `!Mace` && !trevWait){
    //   client.say(`#trevperson`,`Who's Mace?`)
    // }
    if(message == `!worldrecord` && !trevWait){
      client.say(`#trevperson`,`World Record is 4:20:69 by ZFG`)
    }
    if(message == `!WithWindStick` && !trevWait && (user.mod || user.badges.broadcaster)){
      client.say(`#trevperson`,`▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬ I have no idea who the owner of WithWindStick is and second of all when you come in here and tell me that you just want me to know you're choosing us over another streamer it's very disrespectful. Cuz it implies that this stream is either smaller or less worth watching. "Just want to let you know I chose you over someone else." Oh it's AnimeBoy . Nice. ▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬`)
    }
    if(message == `!github` && !trevWait){
      client.say(`#trevperson`,`You can find ChaCha's Github here: https://github.com/rculton/`)
    }


    if(message == `!xeno` && (user.mod || user.badges.broadcaster)){
      xenoguys = !xenoguys
    }

    if(message == `!time` && !trevWait && xenoguys){
      client.say(`#trevperson`,`It's Reyn Time`)
    }
    if(message == `!Vangarre` && !trevWait && xenoguys){
        client.say(`#trevperson`,`Should have VanGUARDED`)
    }
    if(message == `!Vandham` && !trevWait && xenoguys){
      client.say(`#trevperson`,`He got the VandSLAM`)
    }
    if(message == `!Fiora` && !trevWait && xenoguys){
        client.say(`#trevperson`,`We don't miss her. It was very rude of her to die.`)
      }
    // if(message == `!Fiora` && !trevWait && xenoguys){
    //   client.say(`#trevperson`,`MrDestructoid BEEP BOOP`)
    // }
    if(message == `!Blossom` && !trevWait && xenoguys){
      client.say(`#trevperson`,`Born in a world of strife! Against the odds! We choose to fight! BLOSSOM DANCE! SwiftRage `)
    }
    if(message == `!Dunban` && !trevWait && xenoguys){
      client.say(`#trevperson`,`Dunban, the DunMAN, gonna give them, the DunSLAM`)
    }
    if(message == `!Riki` && !trevWait && xenoguys){
      client.say(`#trevperson`,`You can donate funds here: https://streamlabs.com/trevperson`)
    }
    if(message == `!Shulk` && !trevWait && xenoguys){
      client.say(`#trevperson`,`He's the leader of the bunch. You know him well.`)
    }
    if(message == `!Alvis` && !trevWait && xenoguys){
      client.say(`#trevperson`,`and the Chipmunks`)
    }
    if(message == `!Melia` && !trevWait && xenoguys){
      client.say(`#trevperson`,`More like SMELLia. HA, GOTEEM!`)
    }



    if(message == `!B` && !trevWait){
      client.say(`#trevperson`,`Tre🅱️Person`)
      toggleWait()
    }

    if(message == `!AnimeBoy` && !trevWait){
      client.say(`#trevperson`,`AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy `) 
      toggleWait()
    }
    if(message == `!SuperAnimeBoyVsCapcomInfinite` && !trevWait && (user.username == 'chachashakalaka') && (user.mod || user.badges.broadcaster)){
      client.say(`#trevperson`,`AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy AnimeBoy `)
    }
    if(message == `!UnlimitedPogWorks` && !trevWait && (user.username == 'chachashakalaka') && (user.mod || user.badges.broadcaster)){
      client.say(`#trevperson`,`PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp`)
    }
    if(message == `!OceanMan` && !trevWait && (user.username == 'chachashakalaka') && (user.mod || user.badges.broadcaster)){
      client.say(`#trevperson`,`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊`)
    } 

    // message response template
    // if(message == `!` && !trevWait){
    //   client.say(`#trevperson`,``)
    // }


  }
  if (channel == `#trevperson` && !powerOn){
    if(message == `!on` && (user.mod || user.badges.broadcaster)){
      client.say(`#trevperson`,`Goodmorning 4Head`)
      togglePower()
    }    
  }



  // if(channel = '#ChaChaBotalaka'){
  //   if(message = "-ping"){
  //     client.say('#ChaChaBotalaka', "Pong.")
  //   }
  // }

})

// client.on('chat', function(channel, user, message, self){
//   if(message == '!twitter'){
//     if (this.channel = "ChaChaShakalaka"){
//       console.log(this.channel)
//     }
//     else if(this.channel="ChaChaBotalaka") {
//       console.log("Bot")
//   }
//   //client.action('ChaChaShakalaka', user['display-name'] + ", You are but bio fuel for the robot uprising")
// }})

// client.on("connected", function(address, port) {
//   //client.action("ChaChaShakalaka", "Hello, I am here!");
//   console.log("Address: "+ address + " Port: " + port);
// });