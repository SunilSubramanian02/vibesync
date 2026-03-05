// Songs data for each mood with artist separation and icon mapping
const moodSongs = {
  happy: {
    icon: '<i class="fa-regular fa-face-smile-beam" style="color: #fde047;"></i>',
    title: 'Happy Vibes',
    songs: [
      { title: "Happy", artist: "Pharrell Williams", link: "https://youtu.be/ZbZSe6N_BXs" },
      { title: "On Top of the World", artist: "Imagine Dragons", link: "https://youtu.be/w5tWYmIOWGk" },
      { title: "Best Day Of My Life", artist: "American Authors", link: "https://youtu.be/Y66j_BUCBMY" },
      { title: "Walking On Sunshine", artist: "Katrina & The Waves", link: "https://youtu.be/iPUmE-tne5U" }
    ]
  },
  sad: {
    icon: '<i class="fa-regular fa-face-frown" style="color: #93c5fd;"></i>',
    title: 'Melancholic Vibes',
    songs: [
      { title: "Someone Like You", artist: "Adele", link: "https://youtu.be/hLQl3WQQoQ0" },
      { title: "Let Her Go", artist: "Passenger", link: "https://youtu.be/RBumgq5yVrA" },
      { title: "Fix You", artist: "Coldplay", link: "https://youtu.be/k4V3Mo61fJM" }
    ]
  },
  calm: {
    icon: '<i class="fa-solid fa-leaf" style="color: #86efac;"></i>',
    title: 'Relaxing Vibes',
    songs: [
      { title: "River Flows In You", artist: "Yiruma", link: "https://youtu.be/7maJOI3QMu0" },
      { title: "Sunset Lover", artist: "Petit Biscuit", link: "https://youtu.be/4VVYxAp0dO4" },
      { title: "Weightless", artist: "Marconi Union", link: "https://youtu.be/UfcAVejslrU" },
      { title: "Clair de Lune", artist: "Claude Debussy", link: "https://youtu.be/CvFH_6DNRCY" }
    ]
  },
  energetic: {
    icon: '<i class="fa-solid fa-bolt" style="color: #f9a8d4;"></i>',
    title: 'High Energy Vibes',
    songs: [
      { title: "Believer", artist: "Imagine Dragons", link: "https://youtu.be/7wtfhZwyrcc" },
      { title: "Stronger", artist: "Kanye West", link: "https://youtu.be/PsO6ZnUZI0g" },
      { title: "Titanium", artist: "David Guetta ft. Sia", link: "https://youtu.be/9P2w_y2FLyE" },
      { title: "Can't Hold Us", artist: "Macklemore", link: "https://youtu.be/2zNSgSzhBfM" }
    ]
  }
};

// Function to display songs
function showSongs(mood) {
  const playlistSection = document.getElementById("playlist-section");
  const songList = document.getElementById("song-list");
  const playlistTitle = document.getElementById("playlist-title");
  const songCount = document.getElementById("song-count");
  const buttons = document.querySelectorAll('.mood-btn');
  
  // Update active state on buttons
  buttons.forEach(btn => {
    if(btn.dataset.mood === mood) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const moodData = moodSongs[mood];
  
  if (!playlistSection.classList.contains('hidden') && playlistSection.style.display !== 'none') {
    playlistSection.classList.add('fading-out');
    setTimeout(() => {
      renderPlaylist(moodData, playlistSection, songList, playlistTitle, songCount);
      playlistSection.classList.remove('fading-out');
    }, 300);
  } else {
    renderPlaylist(moodData, playlistSection, songList, playlistTitle, songCount);
  }
}

function renderPlaylist(moodData, section, list, titleEl, countEl) {
  // Update Header
  titleEl.innerHTML = `${moodData.icon} <span>${moodData.title}</span>`;
  countEl.textContent = `${moodData.songs.length} songs`;
  
  // Clear Current List
  list.innerHTML = '';
  
  // Generate New Cards
  moodData.songs.forEach((song, index) => {
    const card = document.createElement("a");
    card.href = song.link;
    card.target = "_blank";
    card.className = "song-card";
    
    // Add dynamic delay for staggered animation
    card.style.animationDelay = `${0.1 * (index + 1)}s`;
    
    card.innerHTML = `
      <div class="song-icon">
        <i class="fa-solid fa-music"></i>
      </div>
      <div class="song-info">
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
      <div class="play-btn">
        <i class="fa-solid fa-play"></i>
      </div>
    `;
    list.appendChild(card);
  });
  
  // Show Section
  section.classList.remove('hidden');
  section.style.display = 'block';
}
