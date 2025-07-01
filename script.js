// Songs data for each mood
const moodSongs = {
  happy: [
    { title: "Happy – Pharrell Williams", link: "https://youtu.be/ZbZSe6N_BXs" },
    { title: "On Top of the World – Imagine Dragons", link: "https://youtu.be/w5tWYmIOWGk" },
    { title: "Best Day Of My Life – American Authors", link: "https://youtu.be/Y66j_BUCBMY" }
  ],
  sad: [
    { title: "Someone Like You – Adele", link: "https://youtu.be/hLQl3WQQoQ0" },
    { title: "Let Her Go – Passenger", link: "https://youtu.be/RBumgq5yVrA" },
    { title: "Fix You – Coldplay", link: "https://youtu.be/k4V3Mo61fJM" }
  ],
  calm: [
    { title: "River Flows In You – Yiruma", link: "https://youtu.be/7maJOI3QMu0" },
    { title: "Sunset Lover – Petit Biscuit", link: "https://youtu.be/4VVYxAp0dO4" },
    { title: "Weightless – Marconi Union", link: "https://youtu.be/UfcAVejslrU" }
  ],
  energetic: [
    { title: "Believer – Imagine Dragons", link: "https://youtu.be/7wtfhZwyrcc" },
    { title: "Stronger – Kanye West", link: "https://youtu.be/PsO6ZnUZI0g" },
    { title: "Titanium – David Guetta ft. Sia", link: "https://youtu.be/9P2w_y2FLyE" }
  ]
};

// Function to display songs
function showSongs(mood) {
  const songList = document.getElementById("song-list");
  const selectedSongs = moodSongs[mood];

  songList.innerHTML = `<h2>${mood.charAt(0).toUpperCase() + mood.slice(1)} Vibes 🎧</h2>`;

  selectedSongs.forEach(song => {
    const songItem = document.createElement("p");
    songItem.innerHTML = `<a href="${song.link}" target="_blank">${song.title}</a>`;
    songList.appendChild(songItem);
  });
}
