function filterCategory(filterSelection, filterBy, filterButton){
    // recipes to filter
    var itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    console.log(itemsToFilter);

    //Added in functionality for the user to see all the recipes on the page
    //If filterSelection is passed in as All then it shows the entire array
    //If not then it filters through the array only showing those items
    if(filterSelection=="All"){
        for(var listItem of itemsToFilter){
            listItem.style.display = "flex";
        }
    }
    else{
        for(var listItem of itemsToFilter){
            if(listItem.dataset[filterBy] === filterSelection){
                listItem.style.display = "flex";
            } 
            else {
                listItem.style.display = "none";
            }
        }
    }
    
    // change class of clicked filter button
    var filterSelectors = Array.from(document.getElementsByClassName("FilterSelector"));
    for(var selector of filterSelectors){
      selector.classList.remove("ActiveCategory");
    }
    filterButton.classList.add("ActiveCategory");
}