import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log('Hello!');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const startVideoTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? 0;

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .setCurrentTime(startVideoTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {

  }
  );

const onTimeUpdate = function (data) {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
  })
    .catch(function (error) {
      // an error occurred
    })
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
