let permissionGranted = false;
let feedback = document.querySelector("#feedback");
let button = document.querySelector("#permissionButton");
let click = new Audio();
click.play();

let geluid = document.getElementById('myAudio');

if(typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function'){
    //ios 13 device
      
      DeviceOrientationEvent.requestPermission()
      .catch(() =>{
        //button die om permission vraagt
        button.addEventListener('click', function(){
            requestAccess();
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
    let oldValue = 360;


    feedback.innerHTML = event.alpha.toFixed(0);
    if(event.alpha.toFixed(0) % 5 == 0 && event.alpha.toFixed(0) !== oldValue){
    oldValue = event.alpha.toFixed(0);
       console.log(event.alpha.toFixed(0) % 5);
       click.src = "../safe-click.mp3";
       click.play();
       geluid.play()
    }

}


