let permissionGranted = false;
let feedback = document.querySelector("#feedback");
let button = document.querySelector("#permissionButton");

let geluid = document.getElementById('myAudio');
let oldAlpha = 360;


let columnPos = 0;
let maxColumns = document.getElementsByTagName("tr")[1].children.length - 1;
let rowPos = 1;
let maxRows = document.getElementsByTagName("tbody")[0].children.length - 1;



if(typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function'){
    //ios 13 device
      introductionMessage("Druk op uw scherm en vervolgends op toestaan om de applicatie toegang te geven tot uw mobiele bewegings sensoren", "nl-NL")
      DeviceOrientationEvent.requestPermission()
      .catch(() =>{
        //button die om permission vraagt
        button.addEventListener('click', function(){
            requestAccess();
            introductionMessage('Leg uw mobiele telefoon plat op tafel en roteer je telefoon om links en rechts in de tabel te gaan. kantel je telefoon om omhoog en omlaag in de tabel te gaan.', "nl-NL");
            // geluid.play();
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
  // feedback.innerHTML = "This is not an ios13 device :(";  
  button.addEventListener('click', function(){
    introductionMessage('Deze applicatie word alleen door een ios13 systeem ondersteund', "nl-NL");
})
  button.style.background = "grey";
  button.style.cursor = "not-allowed";
  button.innerHTML = "Only supports iOS13 devices"
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
        console.log('hallo')
      }
    })
    .catch(console.error);
}

function deviceRotation(event){

  //alpha beta gamma

    feedback.innerHTML = "alpha: " +  event.alpha.toFixed(0) + " gamma: " + event.gamma.toFixed(0) + " beta: " + event.beta.toFixed(0) + " oldAlpha: " + oldAlpha + " oldBeta: " + oldBeta;

  /*if(event.alpha.toFixed(0) % 5 == 0 && event.alpha.toFixed(0) !== oldAlpha){
    
    oldAlpha = event.alpha.toFixed(0);
    //    console.log(event.alpha.toFixed(0) % 5);
    window.speechSynthesis.cancel();
    playMessage(oldAlpha, "nl-NL");

      //  geluid.play();

      //  geluid.onended = function() {
      //   geluid.pause();
      //   geluid.currentTime = 0; 
    // };
  }*/ 
  if(event.alpha.toFixed(0) % 10 == 0 && event.alpha.toFixed(0) !== oldAlpha){

      // 0 naar 360 dan?
      if(event.alpha.toFixed(0) < oldAlpha){
        columnPos += 1
        if(columnPos > maxColumns){
          columnPos = 1;
          }
      }
      else{

        columnPos -= 1
        if(columnPos <= 0){
          columnPos = maxColumns;
        }
      }
      oldAlpha = event.alpha.toFixed(0);
      focusTable();
  }

  if(event.beta.toFixed(0) <= -10 && oldBeta == 0){
   // omhoog

   oldBeta = 1;

   rowPos -= 1;
   if(rowPos <= 0){
     rowPos = maxRows;
   }



   focusTable();
  }
  else if(event.beta.toFixed(0) >= 10 && oldBeta == 0){
    // omlaag
    oldBeta = 1;

    rowPos += 1;
    if(rowPos > maxRows){
     rowPos = 1;
   }
 


    focusTable(); 
  }
  else if(event.beta.toFixed(0) >= 0 && event.beta.toFixed(0) <= 3){
    oldBeta = 0;
  }
  

// console.log(oldAlpha)

}
let oldBeta = 0;
// document.getElementsByTagName("tr")[2].children[2].focus();

console.log(document.getElementsByTagName("tr")[1].children[2].innerHTML)
console.log(document.getElementsByTagName("tr")[1].children.length)
console.log(document.getElementsByTagName("tbody")[0].children.length)


console.log(document.getElementsByTagName("tr")[0].children[0].innerHTML)

function focusTable(){
  document.getElementsByTagName("tr")[rowPos].children[columnPos].focus();
  window.speechSynthesis.cancel();
  playMessage(document.getElementsByTagName("tr")[rowPos].children[columnPos].innerHTML, "nl-NL");
}

function introductionMessage(message, locale){

  var msg = new SpeechSynthesisUtterance(message);

  msg.text = message;
  msg.volume = 1; // 0 to 1

  msg.rate = 1; // 0.1 to 9

  msg.pitch = 1; // 0 to 2, 1=normal

  msg.lang = locale ;//"en-US";
  window.speechSynthesis.speak(msg);
} 

function playMessage(message, locale){
  
  let value = document.getElementsByTagName("tr")[0].children[columnPos].innerHTML;
  let rowVal = document.getElementsByTagName("tr")[rowPos].children[0].innerHTML
  let spreek = rowVal +  " " + value +  " " + message
  var msg = new SpeechSynthesisUtterance(spreek);

  console.log(value +  " " + rowVal + " " + message)

  msg.text = spreek;
  msg.volume = 1; // 0 to 1

  msg.rate = 1; // 0.1 to 9

  msg.pitch = 1; // 0 to 2, 1=normal

  msg.lang = locale ;//"en-US";
  window.speechSynthesis.speak(msg);
}