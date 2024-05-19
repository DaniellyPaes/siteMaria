function tocarPararSom(){
    var audio = document.getElementById("som");
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}