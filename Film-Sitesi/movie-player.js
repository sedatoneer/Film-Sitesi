document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('movie-video');
    const playBtn = document.getElementById('play-btn');
    let isPlaying = false;

    playBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (isPlaying) {
            video.pause();
            playBtn.querySelector('.material-icons').textContent = 'play_arrow';
        } else {
            video.play();
            playBtn.querySelector('.material-icons').textContent = 'pause';
        }
        isPlaying = !isPlaying;
    });
});