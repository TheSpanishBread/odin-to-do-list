import "./styles.css";
import {DOMVariables} from "./DOMVariables.js";
import {toolBox} from "./toolBox.js";
import {gui} from "./gui.js";
import {forms} from "./forms.js";
import {ToDoConstructor, ToDoConstructorEdit} from "./constructor.js";
import { gu } from "date-fns/locale";
 
//events

if(toolBox.projects.length == 0){
    localStorage.setItem("projects", JSON.stringify(toolBox.defaultToDo));
    
}
toolBox.createSchedule(DOMVariables.schedules);
DOMVariables.schedulesDisplay = document.querySelectorAll(".scheduleDisplay"); 
editProjects(); //update events listernrs


// click
DOMVariables.inputDates.forEach(inputDate => {
    inputDate.value = DOMVariables.formattedToday;
    inputDate.min = DOMVariables.formattedToday;
    inputDate.addEventListener("click", () =>{
        inputDate.showPicker();
    });
});


//ADD a to do
DOMVariables.newProject.addEventListener("click", (e)=>{
    e.preventDefault();
    gui.overlay();
    gui.formcontainer();
    gui.exitForm()
    forms.newProject([["input", "text", "Title", ""], 
        ["textarea", "Description", ""], 
        ["input", "date", "DueDate", ""],
         ["select", "Priority", ["Low", "Medium", "High"] ], "default" ]);
    
    
    console.log("passed");
    let submit = document.querySelector("#submit");
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        gui.resetSchedule(DOMVariables.schedules);
        let newToDo = new ToDoConstructor();
        console.log(newToDo);
        toolBox.toLocalStorage(newToDo);
        gui.removeForm();
        gui.removeOverlay();
        toolBox.createSchedule(DOMVariables.schedules);
        DOMVariables.schedulesDisplay = document.querySelectorAll(".scheduleDisplay");
        editProjects();
    });
});

//Remove a  todo
DOMVariables.deleteProject.addEventListener("click", (e)=>{
        if(document.querySelector("#deleteCancel")){
            document.querySelector("#deleteCancel").remove();    
        }
        e.preventDefault();

        gui.deleteCancelButton(DOMVariables.settings, DOMVariables.deleteProject, DOMVariables.schedules);
        gui.deleteSchedule(DOMVariables.schedules, editProjects());
        

});  

//Edit
    function editProjects(){        
            DOMVariables.schedulesDisplay.forEach(element => {
            element.addEventListener("click", ()=>{
                    if(!document.querySelector("#deleteCancel")){
                        gui.overlay();
                        gui.formcontainer();
                        gui.exitForm();
                        let id = element.dataset.id;
                        console.log(id);
                        let obj = toolBox.fetchFromStorage(id);
                        forms.newProject([["input", "text", "Title", obj[0].projectTitle], 
                            ["textarea", "Description", obj[0].projectDesc], 
                            ["input", "date", "DueDate", obj[0].projectDueDate],
                            ["select", "Priority", ["Low", "Medium", "High"] , obj[0].projectPriority ]]);
                            // logic to get to dos
                        forms.fetchToDo(obj[0].projectToDoDesc, obj[0].projectToDoTime);
                        let submit = document.querySelector("#submit");
                        submit.addEventListener("click", (e)=>{
                            //edit this that should replace whats inside localstorage
                            e.preventDefault();
                            //remove everything from gui to do list
                            gui.resetSchedule(DOMVariables.schedules);
                            //////////
                            let newToDo = new ToDoConstructorEdit(id);
                            //logic to search for the specific entry in localstorage then replace values from form
                            toolBox.toLocalStorageEdit(newToDo, id);
                            /////////
                            //rvemo shit
                            gui.removeForm();
                            gui.removeOverlay();
                            //this gets from local storage to gui display to do list
                            toolBox.createSchedule(DOMVariables.schedules);
                            DOMVariables.schedulesDisplay = document.querySelectorAll(".scheduleDisplay");
                            editProjects();
                        });

                    }else{
                        return;
                    }
             
        })
        });
        
    }
