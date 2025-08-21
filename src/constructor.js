//classes for constructors

import { DOMVariables } from "./DOMVariables";


class ToDoConstructor{
    constructor(){
        this.projectID = crypto.randomUUID();
        this.projectTitle = document.querySelector("input[name='projectTitle']").value;
        this.projectDesc = document.querySelector("textarea[name='projectDescription']").value;
        this.projectDueDate = document.querySelector("input[name='projectDueDate']").value;
        this.projectPriority = document.querySelector("select[name='projectPriority']").value;
        
        this.projectToDoTime = [];
        this.projectToDoDesc = [];
        let toDoListTime = document.querySelectorAll(".toDoTime");
        let toDoListDesc = document.querySelectorAll(".toDoDesc");
        for(let i = 0 ; i <toDoListDesc.length; i++){
            this.projectToDoTime.push(toDoListTime[i].value);
            this.projectToDoDesc.push(toDoListDesc[i].value);            
        }
    }
    deleteProject(){
        DOMVariables.deleteProject.addEventListener("click", ()=>{
            console.log("hello");
            //add X button then delete the project
        });
    }
}

class ToDoConstructorEdit{
    constructor(id){
        this.projectID = id;
        this.projectTitle = document.querySelector("input[name='projectTitle']").value;
        this.projectDesc = document.querySelector("textarea[name='projectDescription']").value;
        this.projectDueDate = document.querySelector("input[name='projectDueDate']").value;
        this.projectPriority = document.querySelector("select[name='projectPriority']").value;
        
        this.projectToDoTime = [];
        this.projectToDoDesc = [];
        let toDoListTime = document.querySelectorAll(".toDoTime");
        let toDoListDesc = document.querySelectorAll(".toDoDesc");
        for(let i = 0 ; i <toDoListDesc.length; i++){
            this.projectToDoTime.push(toDoListTime[i].value);
            this.projectToDoDesc.push(toDoListDesc[i].value);            
        }
    }
}

export {ToDoConstructor, ToDoConstructorEdit};