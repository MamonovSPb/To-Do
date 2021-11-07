const list= {
    "create a task" : "In progress",
    "make a bed" : "Done",
    "write a post" : "To Do",
}
function changeStatus(name,status){
    list[name]=status;
}
function addTask(name){
    list[name]="To Do";

}
 function deleteTask(name){
    delete list[name];
 }

function showList(){
    for (let key in list){
        if(list[key]==="To Do"){
            console.log(key);
        }else if(list[key]==="Done"){
            console.log(key);
        }else if(list[key]==="In progress"){
            console.log(key);
        }
    }
}

/*
function showList() {
    for (let key in list) {
        console.log(list[key] + ":" +  key);
    }
}
*/




addTask("Learn js");
changeStatus(["create a task"],"Done");
deleteTask("make a bed")
console.log(showList(list));




