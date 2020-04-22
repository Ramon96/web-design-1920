let permissionGranted = false;
let feedback = document.querySelector("#feedback");
let button = document.querySelector("#permissionButton");

let geluid = document.getElementById('myAudio');
let oldValue = 360;

let columnPos = 0;
let maxColumns = document.getElementsByTagName("tr")[1].children.length - 1;
let rowPos = 1;
let maxRows = document.getElementsByTagName("tbody")[0].children.length - 1;



if(typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function'){
    //ios 13 device
      
      DeviceOrientationEvent.requestPermission()
      .catch(() =>{
        //button die om permission vraagt
        button.addEventListener('click', function(){
            requestAccess();
            playMessage('joo', "nl-NL");
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

    feedback.innerHTML = "alpha: " +  event.alpha.toFixed(0) + " gamma: " + event.gamma.toFixed(0) + " beta: " + event.beta.toFixed(0) + " oldvalue: " + oldValue;

  /*if(event.alpha.toFixed(0) % 5 == 0 && event.alpha.toFixed(0) !== oldValue){
    
    oldValue = event.alpha.toFixed(0);
    //    console.log(event.alpha.toFixed(0) % 5);
    window.speechSynthesis.cancel();
    playMessage(oldValue, "nl-NL");

      //  geluid.play();

      //  geluid.onended = function() {
      //   geluid.pause();
      //   geluid.currentTime = 0; 
    // };
  }*/ 
  if(event.alpha.toFixed(0) % 10 == 0 && event.alpha.toFixed(0) !== oldValue){
    if(columnPos >= maxColumns){
      columnPos = 0;
      }
    
    else if(columnPos <= -1){
      columnPos = maxColumns;
    }
    else{
      // 0 naar 360 dan?
      if(event.alpha.toFixed(0) < oldValue){
        columnPos += 1
      }
      else if(event.alpha.toFixed(0) > oldValue){
        columnPos -= 1
      }
    }
    oldValue = event.alpha.toFixed(0);
    focusTable();
  }

// console.log(oldValue)

}

// document.getElementsByTagName("tr")[2].children[2].focus();

console.log(document.getElementsByTagName("tr")[1].children[2].innerHTML)
console.log(document.getElementsByTagName("tr")[1].children.length)
console.log(document.getElementsByTagName("tbody")[0].children.length)


function focusTable(){
  document.getElementsByTagName("tr")[rowPos].children[columnPos].focus();
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