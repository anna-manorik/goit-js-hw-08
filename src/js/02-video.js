
import VimeoPlayer from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', _.throttle(run, 1000));

function run(data) {
    const currTime = data.seconds;
    console.log(currTime);

    localStorage.setItem("videoplayer-current-time", currTime);
}

const currTime = localStorage.getItem("videoplayer-current-time");

if(currTime !== null) {
    player.setCurrentTime(Number(currTime));
}

