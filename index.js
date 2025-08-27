const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config();
const express = require('express');

const client = new Client({
  readyStatus: false,
  checkUpdate: false
});

// Express لتشغيل البوت 24 ساعة
const app = express();
const listener = app.listen(process.env.PORT || 2000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.get('/', (req, res) => {
  res.send(`<body><center><h1>Bot 24H ON!</h1></center></body>`);
});

// قائمة بالأغاني والمحتوى الذي تريد عرضه
const spotifyContent = [
  {
    song: "Shakliat",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Hat - Chi",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Law Bt5af",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Saffa7in",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Go3ran",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "El Magary",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Ay Za7ma",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Drama - tik",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Hologram",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Msg Tabe3y",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Se7r Esxwd",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Nicotine",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Nos5a Wa7da",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Amiin",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "All I Need",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "2",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Sobek",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Ahlan",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "El 3anka2",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Mokna 3al Marii5",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "3adi Fash5",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Mala7is",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Yow Yow",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Mickey Mouse",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Yala N8ra2",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Turbo",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "5afafish",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "3alam Eftradi",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Kan Zir Bamby",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  },
  {
    song: "Medusa",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227904222199891/image0.jpg?ex=68b04095&is=68aeef15&hm=09c4918f869d10743575cf7fe4d7b507b0421db9a0f2b5c39443fad6b69cf758& ",
  },
  {
    song: "Longboard",
    artist: "Marwan Dama",
    album: "Dama 40",
    albumArt: "https://cdn.discordapp.com/attachments/905256599906558012/1410227753592164372/image0.jpg?ex=68b04071&is=68aeeef1&hm=9140f03abb6e3ab7778ae775e6cfc05b709c997acc82c9fc67829c952c349316&",
  }
];

let currentTrackIndex = 0;

// دالة لتحديث حالة Spotify
function updateSpotifyPresence() {
  const track = spotifyContent[currentTrackIndex];
  
  const r = new client.RichPresence()
    .setApplicationId('1368904881691164713')
    .setType('LISTENING')
    .setName('Spotify')
    .setState(track.song)
    .setDetails(`By ${track.artist}`)
    .setStartTimestamp(Date.now() + 3 * 60 * 60 * 1000)
    .setEndTimestamp(Date.now() + 24 * 60 * 60 * 1000)
    .setAssetsLargeImage(track.albumArt)
    .setAssetsLargeText(track.album)
    .addButton('Play on Spotify', 'https://open.spotify.com/artist/09nMUkeuZrhEpo2N4wsOxe?si=tRRIrOEeTAOz0Sy8oUioeQ');

  client.user.setActivity(r);
  
  // الانتقال للأغنية التالية في المصفوفة
  currentTrackIndex = (currentTrackIndex + 1) % spotifyContent.length;
}

// عند تشغيل البوت
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.username} is ready!`);
  
  // تحديث الحالة فوراً عند التشغيل
  updateSpotifyPresence();
  
  // تحديث الحالة كل 30 ثانية (مدة الأغنية + وقت انتقال)
  setInterval(updateSpotifyPresence, 60 * 4000);
  
  client.user.setPresence({ status: "dnd" });
});

client.login(process.env.token);
