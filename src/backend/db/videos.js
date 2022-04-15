import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "Fireflies (Official Music Video)",
    image: "videos/fireflies.webp",
    creator: "Owl City",
    description: `REMASTERED IN HD!!
Official Music Video for Fireflies performed by Owl City.

Watch more remastered videos! https://www.youtube.com/watch?v=hTWKb...

YouTube view counts pre-VEVO: 22,880,713. (C) 2009 Universal Republic Records, a division of UMG Recordings, Inc.`,
  },
  {
    _id: uuid(),
    title: "Bones (Official Lyric Video)",
    creator: "Imagine Dragons",
    image: "videos/bones.webp",
    description: `Imagine Dragons - Bones
https://ImagineDragons.lnk.to/Bones

Directed & Edited by Justin Moon
Production Company °1824

Music video by Imagine Dragons performing Bones (Lyric Video). © 2022 KIDinaKORNER/Interscope Records
`,
  },
  {
    _id: uuid(),
    title: "Happy (Video)",
    image: "videos/happy.webp",
    creator: "Pharrell Williams",
    description: `Happy from Despicable Me 2 - Pharrell Williams (2013) - Universal Pictures Film Music
    
    Adrev for a 3rd Party (on behalf of Universal Pictures Film Music); UMPG Publishing, SOLAR Music Rights Management, LatinAutorPerf, LatinAutor - SonyATV, LatinAutor - UMPG, CMRRA, UMPI, Global Music Rights LLC, UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, Adrev Publishing, Sony Music Publishing, and 11 Music Rights Societies
    `,
  },
  {
    _id: uuid(),
    title: "VIBE (Official Video)",
    creator: "Diljit Dosanjh",
    image: "videos/vibe.webp",
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
    creator: "King Gnu",
    image: "videos/boy.webp",
    description: `Sony Music Entertainment (Japan) Inc., SME (on behalf of Sony Music Labels Inc.); BMI - Broadcast Music Inc., and 2 Music Rights Societies
`,
  },
  {
    _id: uuid(),
    title: "Fly high!! (spring Version)",
    creator: "Burnout Syndromez",
    image: "videos/fly-high.webp",
    description: `Fly high!! (spring Version) · BURNOUT SYNDROMES

Burnout Syndromez

℗ 2020 Sony Music Labels Inc.

Released on: 2020-03-24

Composer, Lyricist: Kazuumi Kumagai
Arranger: Kazuma Sotozono
`,
  },
];
