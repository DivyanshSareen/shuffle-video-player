import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
export const videos = [
  {
    _id: uuid(),
    title: "Fireflies",
    image: "videos/fireflies.webp",
    link: "https://www.youtube.com/embed/psuRGfAaju4",
    category: "English",
    creator: "Owl City",
    likes: 200,
    description: `REMASTERED IN HD!!
Official Music Video for Fireflies performed by Owl City.

Watch more remastered videos! https://www.youtube.com/watch?v=hTWKb...

YouTube view counts pre-VEVO: 22,880,713. (C) 2009 Universal Republic Records, a division of UMG Recordings, Inc.`,
  },
  {
    _id: uuid(),
    title: "Bones",
    link: "https://www.youtube.com/embed/DYed5whEf4g",
    category: "English",
    creator: "Imagine Dragons",
    image: "videos/bones.webp",
    likes: 200,
    description: `Imagine Dragons - Bones
https://ImagineDragons.lnk.to/Bones

Directed & Edited by Justin Moon
Production Company °1824

Music video by Imagine Dragons performing Bones (Lyric Video). © 2022 KIDinaKORNER/Interscope Records
`,
  },

  {
    _id: uuid(),
    title: "VIBE",
    link: "https://www.youtube.com/embed/fyBzPE6w6-k",
    category: "Punjabi",
    creator: "Diljit Dosanjh",
    image: "videos/vibe.webp",
    likes: 200,
    description: `Presenting Official Video of the song VIBE performed by DILJIT DOSANJH from the album MoonChild Era. 

Song: Vibe
Singer: Diljit Dosanjh
Music: Intense
Lyrics: Raj Ranjodh

Spl Thx - Diljit Thind ( THIND MOTION FILMS ) Chani Nattan, Maan Farms
`,
  },
  {
    _id: uuid(),
    title: "BOY",
    link: "https://www.youtube.com/embed/n0QNaym0jDI",
    category: "Japanese",
    creator: "King Gnu",
    image: "videos/boy.webp",
    likes: 200,
    description: `Sony Music Entertainment (Japan) Inc., SME (on behalf of Sony Music Labels Inc.); BMI - Broadcast Music Inc., and 2 Music Rights Societies
`,
  },
  {
    _id: uuid(),
    title: "Fly high",
    link: "https://www.youtube.com/embed/CTaW2NKu3Z8",
    category: "Japanese",
    creator: "Burnout Syndromez",
    image: "videos/fly-high.webp",
    likes: 200,
    description: `Fly high!! (spring Version) · BURNOUT SYNDROMES

Burnout Syndromez

℗ 2020 Sony Music Labels Inc.

Released on: 2020-03-24

Composer, Lyricist: Kazuumi Kumagai
Arranger: Kazuma Sotozono
`,
  },
  {
    _id: uuid(),
    title: "My Neighbour Totoro",
    link: "https://www.youtube.com/embed/n6M8RcCQbho",
    category: "Lofi",
    creator: "SpikedZen Music",
    image: "videos/totoro.webp",
    likes: 400,
    description: `Gotta honor that favorite childhood movie with this.

Background art: https://www.artstation.com/artwork/Yn0qX
`,
  },
  {
    _id: uuid(),
    title: "Haikyuu lofi mix",
    link: "https://www.youtube.com/embed/CTaW2NKu3Z8",
    category: "Lofi",
    creator: "chill sect",
    image: "videos/haikyu.webp",
    likes: 400,
    description: `tacklist
0:00 palademix - above but it's lofi
2:43 kijugo - fly high but it's lofi
5:04 ruiz vazquez vanessa - Kenya Relax
6:54 kyodai - greed
8:53 jonkyoto karasuno high
11:01Random Loop

`,
  },
  {
    _id: uuid(),
    title: "We Are!",
    link: "https://www.youtube.com/embed/c3aQjvjjLPI",
    category: "Japanese",
    creator: "Mugiwara Crew",
    image: "videos/op.webp",
    likes: 400,
    description: `Artiste : Mugiwara Crew (麦わらの一味)
                - Robin : Yamaguchi Yuriko
                - Sanji : Hirata Hiroaki
                - Zoro : Nakai Kazuya
                - Nami : Okamura Akemi
                - Usopp : Yamaguchi Kappei
                - Luffy : Tanaka Mayumi
                - Chopper : Ootani Ikue
`,
  },
  {
    _id: uuid(),
    title: "These Days",
    link: "https://www.youtube.com/embed/gnpw_Z-mBlY",
    category: "Punjabi",
    creator: "Sidhu Moose Wala",
    image: "videos/thesedays.webp",
    likes: 400,
    description: `Sidhu Moose Wala Presents "These Days" from Moosetape

Singer/Lyrics/Composer - Sidhu Moose Wala
Rap - Bohemia
Rap Lyrics - Bohemia
Music - The Kidd
Mix Master - Dense
Visuals - Navkaran Brar
Label - Sidhu Moose Wala
Online Promotions - Gold Media Entertainment, One Digital Entertainment
`,
  },
  {
    _id: uuid(),
    title: "My War x Levitating",
    link: "https://www.youtube.com/embed/gKBkS-dv4lg",
    category: "AMV",
    creator: "KobiVISUAL",
    image: "videos/aot.webp",
    likes: 400,
    description: `#attackontitan #ErenYeager #amv
attackontitan vibes
god this mashup is just beautiful - Kobi 

Song: https://youtu.be/ER5R0pFaMXI
`,
  },
  {
    _id: uuid(),
    title: "Jujutsu Kaisen",
    link: "https://www.youtube.com/embed/OLLwWp6hX2I",
    category: "AMV",
    creator: "LEE AMVs 索",
    image: "videos/jjk.webp",
    likes: 400,
    description: `#JujutsuKaisen #4kAMV #Anime
Anime Name : Jujutsu Kaisen [Ep: 20-24]
Credit:-
"Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use."
`,
  },
  {
    _id: uuid(),
    title: "Mob Psycho 100",
    link: "https://www.youtube.com/embed/zmuR5s2_B7A",
    category: "AMV",
    creator: "BlobBro",
    image: "videos/mob.webp",
    likes: 400,
    description: `The first of the big things is here! This one took a lot of effort, hope you enjoy! Leave a comment and tell me what you thought! Like and Subscribe if you really liked it, because there's more like this on the way!
`,
  },
  {
    _id: uuid(),
    title: "High hopes | BNHA",
    link: "https://www.youtube.com/embed/NackbvJYUd8",
    category: "AMV",
    creator: "JazitJ",
    image: "videos/bnha.webp",
    likes: 400,
    description: `Sorry this took so long to get done, but hey it's here now so whatever right?
`,
  },
  {
    _id: uuid(),
    title: "Happy",
    link: "https://www.youtube.com/embed/ZbZSe6N_BXs",
    image: "videos/happy.webp",
    category: "English",
    creator: "Pharrell Williams",
    likes: 200,
    description: `Happy from Despicable Me 2 - Pharrell Williams (2013) - Universal Pictures Film Music
    
    Adrev for a 3rd Party (on behalf of Universal Pictures Film Music); UMPG Publishing, SOLAR Music Rights Management, LatinAutorPerf, LatinAutor - SonyATV, LatinAutor - UMPG, CMRRA, UMPI, Global Music Rights LLC, UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, Adrev Publishing, Sony Music Publishing, and 11 Music Rights Societies
    `,
  },
  {
    _id: uuid(),
    title: "GTA San Andreas",
    link: "https://www.youtube.com/embed/W4VTq0sa9yg",
    image: "videos/gtasa.webp",
    category: "Themes",
    creator: "GTA Series Videos",
    likes: 200,
    description: `Grand Theft Auto: San Andreas Opening Intro \ Titles
Platform: PC
Made by: Rockstar Games & Rockstar North
    `,
  },
];
