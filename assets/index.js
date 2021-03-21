const video = document.querySelector('video');
const button = document.querySelector('#playButton')

function  MediaPlayer(config) {
this.media = config.el;
}

MediaPlayer.prototype.play = function() {
this.media.play();
};

const  player = new  MediaPlayer({ el:  video });
button.onclick = () =>  player.play();

MediaPlayer.prototype.play = function() {
  if(this.media.paused){
    this.media.play();
  } else {
    this.media.pause()
  }
}
