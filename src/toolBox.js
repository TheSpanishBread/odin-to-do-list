//useful functions



const toolBox  = {
    toLocalStorage(project){
        let savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
        savedProjects.push(project);

        localStorage.setItem("projects", JSON.stringify(savedProjects));
    },
    toLocalStorageEdit(project, id){
        let savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
        console.log(savedProjects);
        let index = savedProjects.findIndex(project => project.projectID == id);    
        console.log(index);
        if(index !== -1){
            savedProjects[index] = project;
        }
        localStorage.setItem("projects", JSON.stringify(savedProjects));
    },

     defaultToDo : [{
            projectID : crypto.randomUUID(),
            projectTitle : "Odin Project To Do",
            projectDesc : "Make a to do list",
            projectDueDate : "2025-08-19",
            projectPriority : "High",
            projectToDoTime : ["11:30", "01:30", "05:30"],
            projectToDoDesc : ["Make HTML Structure", "Create Add To Do", "Create Delete To Do" ]
    }],
    projects : JSON.parse(localStorage.getItem("projects")) || [],
    
    // create function logic that gets from localstorage to the gui schedule
    createSchedule(scheduleDisplayContainer){

        let schedules = JSON.parse(localStorage.getItem("projects"));

        schedules.forEach(project => {
            let scheduleDisplay = document.createElement("div");
            scheduleDisplay.dataset.id = project.projectID;
            
            let projectTitleDisplay = document.createElement("p");
            projectTitleDisplay.textContent = project.projectTitle;
            scheduleDisplay.appendChild(projectTitleDisplay);
            
            let projectPriorityDisplay = document.createElement("p");
            projectPriorityDisplay.textContent = project.projectPriority;
            scheduleDisplay.appendChild(projectPriorityDisplay);
            
            let projectDueDisplay = document.createElement("p");
            projectDueDisplay.textContent = project.projectDueDate;
            scheduleDisplay.appendChild(projectDueDisplay);   

            scheduleDisplay.classList.add("scheduleDisplay", "flexColumn");   
            scheduleDisplayContainer.appendChild(scheduleDisplay);   


        });


        scheduleDisplayContainer.classList.add("scheduleDisplayContainer");
    },
    deleteScheduleLogic(element){ 
        element.addEventListener("click", (e)=>{
            if (document.querySelector("#deleteCancel")){
                let id = element.dataset.id; 
                let projects = JSON.parse(localStorage.getItem("projects"));
                projects = projects.filter(item => item.projectID !== id);
                localStorage.setItem("projects", JSON.stringify(projects));
                element.remove();

            }else{
                return;
            }
        });
    },
    fetchFromStorage(id){
        let projects = JSON.parse(localStorage.getItem("projects"));
        let obj = projects.filter(element => element.projectID == id);
        console.log(obj);
        return obj;
    }
}



export {toolBox};