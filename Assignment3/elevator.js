let currentFloor = 1;
async function elevator(floor, filterByFloor, filterButton){
    // floors to filter
    var floorBackground = Array.from(document.getElementsByClassName("background"));
    var levelIndicator = Array.from(document.getElementsByClassName("level"));
    var filterSelectors = Array.from(document.getElementsByClassName("button"));
    var leftdoor = document.getElementById("left-door");
    var rightdoor = document.getElementById("right-door");
    var blocker = document.getElementById("blocker");
    var difference = null;

    if(filterByFloor==="floor"){
        if(floor == currentFloor){
            return;
        }
        else{
            difference = Math.abs(floor - currentFloor);
            for(var selector of filterSelectors){
                selector.firstElementChild.style.display = "inline";
                selector.lastElementChild.style.display = "none";
            }
            // change class of clicked filter button
            filterButton.firstElementChild.style.display = "none";
            filterButton.lastElementChild.style.display="inline";
            filterButton.classList.add("ActiveCategory");

            if(leftdoor.classList.contains('left-door-open')===true){
                leftdoor.classList.remove("left-door-open");
                rightdoor.classList.remove("right-door-open");
                blocker.style.display="inline";
                await new Promise(r => setTimeout(r, 3000));
                // floor change here
                for(var floorItem of floorBackground){ 
                    if(floorItem.dataset[filterByFloor] === floor){
                        floorItem.style.display = "inline";
                    } 
                    else {
                        floorItem.style.display = "none";
                    }
                }
                //level change here
                if(floor < currentFloor){
                    for(let i=currentFloor; i > floor; i-- ){
                        levelIndicator[i-2].style.display="inline";
                        levelIndicator[i-1].style.display="none";
                        console.log(floor);
                        await new Promise(r => setTimeout(r, 2000));
                    }
                }
                if(floor > currentFloor){
                    for(let i=currentFloor; i < floor; i++ ){
                        levelIndicator[i].style.display="inline";
                        levelIndicator[i-1].style.display="none";
                        await new Promise(r => setTimeout(r, 2000));
                    }
                }
                currentFloor=floor;
            }

            blocker.style.display="inline";
            leftdoor.classList.add("left-door-open");
            rightdoor.classList.add("right-door-open");
            filterButton.firstElementChild.style.display = "inline";
            filterButton.lastElementChild.style.display="none";
            filterButton.classList.remove("ActiveCategory");
            await new Promise(r => setTimeout(r, 3000));
            blocker.style.display="none";
        }
    }

    if(filterByFloor==="close"){
        leftdoor.classList.remove("left-door-open");
        rightdoor.classList.remove("right-door-open");
        filterButton.firstElementChild.style.display = "none";
        filterButton.lastElementChild.style.display="inline";
    }

    if(filterByFloor==="open"){
        leftdoor.classList.add("left-door-open");
        rightdoor.classList.add("right-door-open");
        filterButton.firstElementChild.style.display = "none";
        filterButton.lastElementChild.style.display="inline";
    }
}

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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}