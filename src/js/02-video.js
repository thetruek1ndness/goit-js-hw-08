import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time'))
  );
  localStorage.removeItem('videoplayer-current-time');
}

player.on('timeupdate', throttle(playerHandler, 1000));

function playerHandler(evt) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
}
