// Write your helper functions here!

// require('cross-fetch/polyfill');
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let targetMission = document.getElementById('missionTarget');
    targetMission.innerHTML =`<h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`
    
                 
   
 }
 
 function validateInput(testInput) {
   if (testInput === ''){
    return "Empty"
   }else if(isNaN(testInput)){
       return "Not a Number"
   } else return "Is a Number"
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
         
    let faultyItems = document.getElementById('faultyItems');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let h2 = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');

  
    const validatePilot = validateInput(pilot);
    console.log(validatePilot)
    const validateCopilot = validateInput(copilot);
    console.log(validateCopilot)
    const validateFuel =validateInput(fuelLevel);
    console.log(validateFuel);
    const validateCargo = validateInput(cargoLevel);
    console.log(validateCargo)
    if (validatePilot ==='Empty' || validateCopilot === 'Empty' || validateFuel === "Empty" || validateCargo === 'Empty') {
        alert('All fields are required');
    };
    if(validateCargo !== 'Is a Number' || validateFuel !== 'Is a Number'){
         alert('Make sure to enter valid data type!');
         return
    }
    //maybe another validation?
    if(validatePilot ==='Is a Number' || validateCopilot ==='Is a Number'){
        alert('Make sure to enter valid data type!')
        return;
    }
    if(validateFuel === 'Is a Number' && fuelLevel < 10000){
        faultyItems.style.visibility ='visible';
        h2.innerHTML = 'Shuttle Not Ready for Launch';
        h2.style.color ='red';
        pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        
         
    } else if (validateCargo === 'Is a Number' && cargoLevel > 10000){ // onlycargostatus
        faultyItems.style.visibility = 'visible';
        h2.innerHTML = 'Shuttle Not Ready for Launch';
        h2.style.color ='red';
        pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        fuelStatus.innerHTML='Fuel level high enough for launch';
    } else if(Number(cargoLevel) <=10000 && Number(fuelLevel) >= 10000) {
            faultyItems.style.visibility ='visible';
            h2.style.color = 'green';
            pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`
            fuelStatus.innerHTML ='Fuel level high enough for launch '
            cargoStatus.innerHTML='Cargo mass low enough for launch'
            h2.innerHTML = 'Shuttle is Ready for Launch'
            
            }
    
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
       planetsReturned = await planetsReturned.json();
        console.log(planetsReturned)
        
    
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
let index = Math.ceil(Math.random() * planets.length-1)
// console.log(index)
return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;