import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(playerOn, 1000));

let currentTime = 0;
// console.log(currentTime);

function playerOn(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}
