let permissionGranted = false;
let feedback = document.querySelector("#feedback");
let button = document.querySelector("#permissionButton");

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

        window.requestAnimationFrame(gyroscope);
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
      if(response == 'granted'){
        permissionGranted = true;
      }else{
        permissionGranted = false;
      }
  })
  .catch(console.error);

}

function gyroscope(timestamp){



    feedback.innerHTML = "gaat lekker "  +  rotationY + rotationX;
    // feedback.innerHTML = "gaat lekker " ;

    requestAnimationFrame(gyroscope);
}