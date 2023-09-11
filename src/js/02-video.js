import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');

const options = {
    id: 236203659,
    width: 640,
    loop: true
};

const player = new Player(iframe, options);


const onPlay = function({seconds}) {
   localStorage.setItem("videoplayer-current-time", seconds)
};

player.on('timeupdate', Throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0) 
