//graphical changes
import { DOMVariables } from "./DOMVariables";
import { toolBox } from "./toolBox";

const gui = {
    exitForm(){
        document.querySelector("#overlay").addEventListener("click", ()=>{
        document.querySelector("#overlay").remove();
        document.querySelector("#formContainer").remove();

    });
    },
    overlay(){
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.id ="overlay";
        DOMVariables.body.appendChild(overlay);
        console.log("overlay");
    },
    formcontainer(){
        let container = document.createElement("div");
        container.id = "formContainer";
        DOMVariables.body.appendChild(container);
    },
    removeOverlay(){
        let overlay = document.querySelector("#overlay");
        DOMVariables.body.removeChild(overlay);
    },
    removeForm(){
        let formContainer = document.querySelector("#formContainer");
        DOMVariables.body.removeChild(formContainer);
    },
    resetSchedule(scheduleDisplayContainer){
        while (scheduleDisplayContainer.firstChild) {
            scheduleDisplayContainer.removeChild(scheduleDisplayContainer.firstChild);
        }
    },
    deleteSchedule(schedules){
        let scheduleChildren = Array.from(schedules.children);
        scheduleChildren.forEach(element => {
            element.style.backgroundColor = "red";
            toolBox.deleteScheduleLogic(element);
        });
    },
    deleteCancelButton(parent, deleteButton, schedules){
        let button = document.createElement("button");
        button.id = "deleteCancel";
        button.textContent = "Cancel Delete";
        button.style.backgroundColor = "red";
        deleteButton.insertAdjacentElement("afterend", button);

        button.addEventListener("click", ()=>{
            parent.removeChild(button);
            let scheduleChildren = Array.from(schedules.children);
            scheduleChildren.forEach(element => {
                element.style.backgroundColor = "white";    

            DOMVariables.schedulesDisplay = document.querySelectorAll(".scheduleDisplay"); // update node array in grid display

            });
            
        });
    }
    //create function that displays schedule
}


export {gui};