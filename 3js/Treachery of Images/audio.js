let maxi = maximilian();
let audio = new maxi.maxiAudio(); 
let song = new maxi.maxiSample(); 
let myOsc = new maxi.maxiOsc();

audio.init();
      
audio.loadSample('LaBanlieue2.wav', song);

audio.play= function() {
  return song.play();
}
