import PlaylistItem from "../Cards/PlaylistItem";

const PlaylistGrid = () => {
  return (
    <div className='playlist-grid'>
      <div className='playlist'>
        <div className='playlist-head'>
          <div className='playlist-title h6'>My Mix</div>
          <div className='playlist-options'>
            <i class='fa-solid fa-trash-can'></i>
          </div>
        </div>
        <PlaylistItem
          video={{
            title: "Bones (Official Lyric Video)",
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
          }}
        />
      </div>
    </div>
  );
};

export default PlaylistGrid;
