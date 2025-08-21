//DOM Variables
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');


const DOMVariables = {
     body: document.querySelector("body"),
     newProject : document.querySelector("#newProject"),
     deleteProject : document.querySelector("#deleteProject"),
     schedulesDisplay : document.querySelectorAll(".scheduleDisplay"),
     inputDates : document.querySelectorAll("input[type='date']"),
     schedules : document.querySelector("#mainToDoDisplayGrid"),
     settings : document.querySelector("#mainToDoSettingsOptions"),
     formattedToday : yyyy + "-" + mm + "-" + dd,

}



export {DOMVariables};