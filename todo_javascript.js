function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered 
    if (newTask != "") {
        // create new HTML list item
        var item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2714;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2716;" /> ' + '<input type="button" class="important" onclick="important(this.parentNode)" value="!"/>'+ newTask;

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item); 

       input.value="";
       input.placeholder="enter new task...";


    }
}

// change styling used for given item


function markDone (item) {
    item.className = 'finished';
}
// this function will remove the task if it is checked
function remove (item) {
    if(item.className=='finished')
        item.remove();
   
}
// To print the name of the person who had written the code
function doAbout() {
    document.getElementById("divabout").innerHTML="Author is Himanshu Gupta";
    document.getElementById("divabout").className="aboutcolor";
    
}

function clearAbout() {
document.getElementById("divabout").innerHTML="";
}

//Function for important task
function important(item){
         if( item.className=='important'){
         if(item.className=='finished'){
             item.className='finished';
         }
         else
         item.className='li';
         }
         else
         item.className='important';
}
