import Player from '@vimeo/player';
import lodash from 'lodash.throttle';


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    const onPlay = function(data) {
        localStorage.setItem("videoplayer-current-time", value)
    };
    
    player.on('timeupdate', onPlay);


    player.setCurrentTime(30.456).then(function(seconds) {
        
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
               
                break;
    
            default:
                
                break;
        }
    });