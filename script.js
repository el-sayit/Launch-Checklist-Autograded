// Write your JavaScript code here!


window.addEventListener("load", function() {
    let button = document.getElementById('formSubmit');
    button.addEventListener('click',function(event){
        event.preventDefault();
        const list = document.getElementById('faultyItems');
        const pilot = document.querySelector('input[name=pilotName]');
        const copilot = document.querySelector('input[name=copilotName');
        const fuelLevel = document.querySelector('input[name=fuelLevel]');
        const cargoLevel = document.querySelector('input[name=cargoMass]');
        formSubmission(document,list,pilot.value,copilot.value,fuelLevel.value,cargoLevel.value);
 
})
                 
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse =myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   pickPlanet(listedPlanets)
   let i = Math.ceil(Math.random() * listedPlanets.length-1)
   console.log(i)
//    for (let i =0; i<listedPlanets.length; i++){
       addDestinationInfo(document, listedPlanets[i].name, listedPlanets[i].diameter,listedPlanets[i].star, listedPlanets[i].distance, listedPlanets[i].moons,listedPlanets[i].image)

//    }
//    let i = Math.ceil(Math.random() * listedPlanets.length)
//    console.log(pickPlanet(listedPlanets[i]))
    })
    
    
 });
