import Player from '@vimeo/player';
import lodash from 'lodash.throttle';

// НЕ РОЗУМІЮ ЯК КОРИСТУВАТИСЯ БІБЛІОТЕКОЮ
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function() {
   localStorage.setItem("videoplayer-current-time", +seconds)
};

player.on('timeupdate', onPlay);

player.setCurrentTime(30.456).then(function(seconds) {
   
})
