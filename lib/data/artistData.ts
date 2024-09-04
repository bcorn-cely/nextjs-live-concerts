/**
 * Artists 
 */

// Artist Data
export interface Artist {
    id: string;
    name: string;
    genre: string;
    image: string;
    bio: string;
  }
  
export const mockArtistData: Artist[] = [
    {
        id: "a1",
        name: "The Melodic Waves",
        genre: "Indie Rock",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
        bio: "The Melodic Waves, formed in 2015, have quickly become one of the most exciting indie rock bands of their generation. Hailing from the vibrant music scene of Portland, Oregon, the four-piece group is known for their introspective lyrics, atmospheric sound, and captivating live performances. Their unique blend of shimmering guitars, driving rhythms, and haunting vocals has earned them a dedicated following and critical acclaim. With two studio albums and numerous EPs under their belt, The Melodic Waves continue to push the boundaries of indie rock, creating music that is both deeply personal and universally relatable."
    },
    {
        id: "a2",
        name: "Neon Pulse",
        genre: "Synthwave",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Neon Pulse is at the forefront of the synthwave movement, crafting electronic soundscapes that transport listeners to a neon-soaked, retro-futuristic world. Founded in 2018 by producer and keyboardist Alex Nova, Neon Pulse has quickly gained a reputation for their immersive live shows and meticulously crafted studio productions. Drawing inspiration from 80s pop culture, cyberpunk aesthetics, and classic electronic music, their sound is a perfect blend of nostalgia and cutting-edge production techniques. With each release, Neon Pulse continues to expand their sonic palette, pushing the boundaries of what synthwave can be."
    },
    {
        id: "a3",
        name: "Acoustic Serenity",
        genre: "Folk",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Acoustic Serenity is a folk duo that has been enchanting audiences with their heartfelt lyrics and mesmerizing harmonies since 2016. Comprising singer-songwriters Emma Larsson and Michael Thornton, the pair met at a local open mic night in their hometown of Nashville, Tennessee. Their music, characterized by delicate guitar work and poignant storytelling, draws from personal experiences and the rich tradition of American folk music. Acoustic Serenity's intimate performances and three critically acclaimed albums have earned them a devoted following and appearances at major folk festivals across the country."
    },
    {
        id: "a4",
        name: "Beats & Pieces",
        genre: "Hip Hop",
        image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Beats & Pieces is a dynamic hip hop collective that has been shaking up the scene since their formation in 2018. Based in Atlanta, Georgia, this group of five talented MCs and one innovative producer has been pushing the boundaries of what hip hop can be. Known for their razor-sharp lyricism, experimental beats, and high-energy live shows, Beats & Pieces has quickly risen from local favorites to national attention. Their music tackles social issues, personal struggles, and the joy of creation, all delivered with skillful wordplay and infectious rhythms. With two mixtapes and one studio album to their name, Beats & Pieces is poised to become one of the most influential voices in contemporary hip hop."
    },
    {
        id: "a5",
        name: "Jazzy Jive",
        genre: "Jazz",
        image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Jazzy Jive, a quintet formed in 2010, has been at the forefront of the modern jazz renaissance. Led by virtuoso pianist Sarah Thompson, the group's sound is deeply rooted in the jazz tradition while incorporating elements of contemporary music. Based in New Orleans, the birthplace of jazz, Jazzy Jive's music is a melting pot of styles, reflecting the rich cultural heritage of their hometown. Their improvisational skills and tight-knit ensemble playing have made them favorites in jazz clubs and festivals worldwide. With four albums to their name, each showcasing their growth and evolving sound, Jazzy Jive continues to push the boundaries of jazz in the 21st century."
    },
    {
        id: "a6",
        name: "Electric Echo",
        genre: "Electronic",
        image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Electric Echo, the brainchild of producers and DJs Lisa Chen and David Okafor, has been at the cutting edge of electronic music since 2017. This London-based duo is known for their genre-defying sound that seamlessly blends elements of house, techno, and ambient music. Their live performances are a true spectacle, combining pulsating beats with stunning visuals to create an immersive experience. Electric Echo's production skills have been sought after by some of the biggest names in pop and electronic music, leading to high-profile collaborations and remixes. With three EPs and countless singles, they continue to be a driving force in the ever-evolving electronic music landscape."
    },
    {
        id: "a7",
        name: "The Rockin' Roots",
        genre: "Rock",
        image: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        bio: "The Rockin' Roots are a four-piece rock band that has been carrying the torch of classic rock into the 21st century since their formation in 2014. Hailing from Detroit, Michigan, their sound is deeply influenced by the giants of rock from the '60s and '70s, but with a modern twist that keeps their music fresh and relevant. Known for their electrifying live performances, blistering guitar solos, and anthemic choruses, The Rockin' Roots have built a strong following through relentless touring and three well-received studio albums. Their music celebrates the spirit of rock 'n' roll while addressing contemporary themes, bridging the gap between rock's storied past and its exciting future."
    },
    {
        id: "a8",
        name: "Soulful Serenade",
        genre: "R&B",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Soulful Serenade, formed in 2016, is an R&B group that has been captivating audiences with their smooth harmonies and heartfelt performances. This quartet, consisting of two male and two female vocalists, first met in a gospel choir in Philadelphia and bonded over their shared love of classic and contemporary R&B. Their music is a perfect blend of old-school soul and modern R&B, with lush vocal arrangements and sleek production. Soulful Serenade's debut album earned them critical acclaim and comparisons to R&B greats, while their sophomore effort saw them experimenting with more eclectic influences. Known for their emotional live performances and undeniable chemistry, Soulful Serenade is breathing new life into the R&B genre."
    }
];