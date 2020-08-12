const videoElement = document.getElementById('videoplayer');
const button= document.getElementById("button");



async function getMediaElement(){

try{


    const media= await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject =media;
    videoElement.onloadedmetadata=()=>{
        videoElement.play();

    } 

}
catch(error){
    console.log("whoops error",error);
}
   
}
//add lisetrner
button.addEventListener('click',async ()=>{
    //button disabled
    button.disabled=true;
  //  video.hidden=true
    //make req to pincture in pucture
    await videoElement.requestPictureInPicture();
});



// onload
getMediaElement();