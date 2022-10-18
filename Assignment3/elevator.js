// Variable loaded outside function, is public and is set as the starting floor
//I declare it out here so that whenever I call the main function, it doesn't get reset back to 1
let currentFloor = 1;

// Main elevator function takes in the floor number, the type of button and the button itself as parameters. 
async function elevator(floor, filterByFloor, filterButton){
    //Declare variables and create arrays of the background images, the buttons, and the level images
    var floorBackground = Array.from(document.getElementsByClassName("background"));
    var levelIndicator = Array.from(document.getElementsByClassName("level"));
    var filterSelectors = Array.from(document.getElementsByClassName("button"));
    var leftdoor = document.getElementById("left-door");
    var rightdoor = document.getElementById("right-door");
    var blocker = document.getElementById("blocker");

    // If the button is a floor button run this
    if(filterByFloor==="floor"){
        //If the button is equal to the current floor, then don't go anywhere
        //It wouldn't make much sense to let the user go to the same floor its on
        if(floor == currentFloor){
            return;
        }
        else{
            //I reset all the buttons in their array back to their default state here
            for(var selector of filterSelectors){
                selector.firstElementChild.style.display = "inline";
                selector.lastElementChild.style.display = "none";
            }
            // I then set the clicked button to be a lit button
            //and add a new class of ActiveCategory, mainly as a debug tool
            //to see which button is currently active
            filterButton.firstElementChild.style.display = "none";
            filterButton.lastElementChild.style.display="inline";
            filterButton.classList.add("ActiveCategory");

            //Here if the doors are open when a user selects a button, the doors are closed before
            //the elevator starts "moving"
            if(leftdoor.classList.contains('left-door-open')===true){
                leftdoor.classList.remove("left-door-open");
                rightdoor.classList.remove("right-door-open");
            }
            //I set the blocker div to inline to block the user from clicking on an buttons and disturbing the 
            //animation while the elevator moves
            blocker.style.display="inline";
            //I also make the script wait for 3 secs which is the amount of time the door closing animation runs for
            await new Promise(r => setTimeout(r, 3000));
            //I run through the array of floor backgrounds and display only the one that matches the floor number of the button
            for(var floorItem of floorBackground){ 
                if(floorItem.dataset[filterByFloor] === floor){
                    floorItem.style.display = "inline";
                } 
                else {
                    floorItem.style.display = "none";
                }
            }
            //Here I run through the level panels. I want them to change sequentially to give the 
            //illusion that the elevator is going up or down one floor at a time
            //If the floor the user selects is less than the current floor run this script
            if(floor < currentFloor){
                //I run through the array of level panels and set the previous level panel to no display
                //and set the current level panel to inline
                //I make the script pause for 2 seconds after each transition so the user can see it
                //and think that the elevator is slowly climbing up or down
                for(let i=currentFloor; i > floor; i-- ){
                    levelIndicator[i-2].style.display="inline";
                    levelIndicator[i-1].style.display="none";
                    console.log(floor);
                    await new Promise(r => setTimeout(r, 2000));
                }
            }
            //If the floor the user selects is greater than the current floor run this script
            if(floor > currentFloor){
                for(let i=currentFloor; i < floor; i++ ){
                    levelIndicator[i].style.display="inline";
                    levelIndicator[i-1].style.display="none";
                    await new Promise(r => setTimeout(r, 2000));
                }
            }
            //I set the currentFloor value to the value of the new floor, so that when the user selects a new floor
            //the script can still run the level panel loops
            currentFloor=floor;
            //I run the door opening animation and set the litup button back to the default inactive mode
            //I also pause the script while the door opens for the same length of time as the animation
            //I then hide the blocker div which means that the user can click on a new button which means the script is ready to run again
            leftdoor.classList.add("left-door-open");
            rightdoor.classList.add("right-door-open");
            filterButton.firstElementChild.style.display = "inline";
            filterButton.lastElementChild.style.display="none";
            filterButton.classList.remove("ActiveCategory");
            await new Promise(r => setTimeout(r, 3000));
            blocker.style.display="none";
        }
    }
    // If the button is the close button run this
    //This just runs the close door animation as well as
    //causing the button to change when the user clicks down
    if(filterByFloor==="close"){
        leftdoor.classList.remove("left-door-open");
        rightdoor.classList.remove("right-door-open");
        filterButton.firstElementChild.style.display = "none";
        filterButton.lastElementChild.style.display="inline";
    }
    // If the button is the open button run this
    //This just runs the open door animation as well as
    //causing the button to change when the user clicks down
    if(filterByFloor==="open"){
        leftdoor.classList.add("left-door-open");
        rightdoor.classList.add("right-door-open");
        filterButton.firstElementChild.style.display = "none";
        filterButton.lastElementChild.style.display="inline";
    }
}
// This is the other half of the script for the open and close door buttons
// When the user releases their mouse on those buttons it runs
//It just changes the buttons back to their default state
function unclick(filterByFloor, filterButton){
    if(filterByFloor==="close"){
        filterButton.firstElementChild.style.display = "inline";
        filterButton.lastElementChild.style.display="none";
    }
    if(filterByFloor==="open"){
        filterButton.firstElementChild.style.display = "inline";
        filterButton.lastElementChild.style.display="none";
    }
}
//This function pauses the javascript function for a certain amount of time in miliseconds
//I call it when the level changes and the door opens, to time the animations properly
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}