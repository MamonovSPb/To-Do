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
    let listDone="";
    let listToDo="";
    let listInPr="";

    for(let key in list){
        if(list[key]=="Done"){
            listDone+=`${key} \n` ;
        }
        if(list[key]=="To Do"){
            listToDo+=`${key} \n`;
        }
        if(list[key]=="In progress"){
            listInPr+=`${key} \n`;
        }

    }
    return console.log(`To do:\n${listToDo} \n` + `Done: \n${listDone} \n` + `In progress: \n${listInPr}`);
}





addTask("Learn js");
changeStatus(["create a task"],"Done");
deleteTask("make a bed")
console.log(showList(list));




