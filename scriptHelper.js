// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let targetMission = document.getElementById('targetMission');
    targetMission.innerHTML =`<h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${image}">`
    
                 
   
 }
 
 function validateInput(testInput) {
   if (testInput === ''){
    return "Empty"
   }else if(isNaN(testInput)){
       return "Not a Number"
   } else return "Is a Number"
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    pilot = document.getElementById('pilotName');
    copilot = document.querySelector('input[name=copilotName]');
     list = document.getElementById('faultyItems');
    fuelLevel = document.querySelector('input[name=fuelLevel]')
    cargoLevel = document.querySelector('input[name=cargoMass]');
    let li = document.querySelector('ol');
    let h2 = document.getElementById('launchStatus');

    let button = document.getElementById('formSubmit');

    button.addEventListener('submit', function(event){
    event.preventDefault();
    const validatePilot = validateInput(pilot.value);
    const validateCopilot = validateInput(copilot.value);
    const validateFuel =validateInput(fuelLevel.value);
    const validateCargo = validateInput(cargoLevel.value);
    
    if (validatePilot ==='Empty' || validateCopilot === 'Empty' || validateFuel === "Empty" || validateCargo === 'Empty') {
        alert('All fields are required');
    }
    if(validateFuel === 'Is a Number' && fuelLevel.value < 10000){
        list.style.visibility ='visible';
        h2.innerText = 'Shuttle not ready for launch';
        h2.style.color ='red';
        li.innerHTML = `<li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is Ready</li>
        <li id="copilotStatus" data-testid="copilotStatus">Copilot ${copilot.value} is Ready</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>` 
    } else if (validateCargo === 'Is a Number' && cargoLevel.value < 10000){
        list.style.visibility = 'visible';
        h2.innerText = 'Shuttle not ready for launch';
        h2.style.color ='red';
        li.innerHTML = `<li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is Ready</li>
        <li id="copilotStatus" data-testid="copilotStatus">Copilot ${copilot.value} is Ready</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>` 
    } else {list.style.visibility ='hidden';
            h2.style.color = 'green';
            h2.innerText = 'Shuttle is ready for launch';}
    });

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        response.json().then(function(json){
           
        }) 
    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
let index = Math.ceil(Math.random() * planets.length)
return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;