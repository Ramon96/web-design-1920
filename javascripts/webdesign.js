let permissionGranted = false;
let feedback = document.querySelector("#feedback");
let button = document.querySelector("#permissionButton");

let geluid = document.getElementById('myAudio');
let oldValue = 360;






if(typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function'){
    //ios 13 device
      
      DeviceOrientationEvent.requestPermission()
      .catch(() =>{
        //button die om permission vraagt
        button.addEventListener('click', function(){
            requestAccess();
            playMessage('joo', "nl-NL");
            document.getElementsByTagName("th")[0].focus();
            geluid.play();
        })

      throw error;
      })
      .then(()=>{
        permissionGranted = true;
        window.addEventListener('deviceorientation', function(event) {
            // feedback.innerHTML = event.alpha + ' : ' + event.beta + ' : ' + event.gamma;
            deviceRotation(event);
          });
      })
    }
else{
  //non ios 13 device
  feedback.innerHTML = "This is not an ios13 device :(";  
}  


function requestAccess()
{
  DeviceOrientationEvent.requestPermission()
    .then(res => {
      if(res == 'granted'){
        permissionGranted = true;
        
        window.addEventListener('deviceorientation', function(event) {
            // feedback.innerHTML = event.alpha + ' : ' + event.beta + ' : ' + event.gamma;
            deviceRotation(event);
          });
      }else{
        permissionGranted = false;
      }
    })
    .catch(console.error);
}

function deviceRotation(event){

  //alpha beta gamma

    feedback.innerHTML = "alpha: " +  event.alpha.toFixed(0) + " gamma: " + event.gamma.toFixed(0) + " beta: " + event.beta.toFixed(0);

    if(event.alpha.toFixed(0) % 5 == 0 && event.alpha.toFixed(0) !== oldValue){
    
    oldValue = event.alpha.toFixed(0);
    //    console.log(event.alpha.toFixed(0) % 5);
    window.speechSynthesis.cancel();
    playMessage(oldValue, "nl-NL");

      //  geluid.play();

      //  geluid.onended = function() {
      //   geluid.pause();
      //   geluid.currentTime = 0; 
    // };
}
// console.log(oldValue)

}


function playMessage(message, locale){
  var msg = new SpeechSynthesisUtterance(message);
  msg.text = message;
  msg.volume = 1; // 0 to 1

  msg.rate = 1; // 0.1 to 9

  msg.pitch = 1; // 0 to 2, 1=normal

  msg.lang = locale ;//"en-US";
  window.speechSynthesis.speak(msg);
}