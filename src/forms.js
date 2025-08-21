//forms
const forms = {
    newForm(){
        let container = document.querySelector("#formContainer");
        let form = document.createElement("form");
        container.appendChild(form);

        let fieldset = document.createElement("fieldset");  
        fieldset.classList.add("flexColumn");
        form.appendChild(fieldset);
        return fieldset;
    },
    formCreator(array, fieldset) {
        for(let i = 0; i<= (array.length-1) ; i++){
        let inputField = document.createElement("div");
        inputField.classList.add ("flexColumn", "inputField");
        fieldset.appendChild(inputField);

        switch (array[i][0]) {
            case "input":
                let label = document.createElement("label");
                label.htmlFor = "project" + array[i][2];
                label.textContent = "Project" +  array[i][2] + ":";
                inputField.appendChild(label);

                let input = document.createElement("input");
                input.type = array[i][1];
                input.name = "project" + array[i][2];
                input.id = "project" + array[i][2];
                input.value = array[i][3];
                inputField.appendChild(input);

                break;
            case "textarea":
                let label2 = document.createElement("label");
                label2.htmlFor = "project" + array[i][1];
                label2.textContent = "Project" +  array[i][1] + ":";
                inputField.appendChild(label2);

                let input2 = document.createElement("textarea");
                input2.id = "project" + array[i][1];
                input2.name = "project" + array[i][1];
                input2.value = array[i][2];
                inputField.appendChild(input2);
                break;
            case "select":
                let label3 = document.createElement("label");
                label3.htmlFor = "project" + array[i][1];
                label3.textContent = "Project" +  array[i][1] + ":";
                inputField.appendChild(label3);

                let input3 = document.createElement("select");
                input3.name = "project" + array[i][1];
                input3.id = "project" + array[i][1];
                inputField.appendChild(input3);
                

                let optionDefault = document.createElement("option");
                optionDefault.disabled = true;
                optionDefault.textContent = "Select Project Priority";
                optionDefault.selected = true;            
                                
                input3.appendChild(optionDefault);
                array[i][2].forEach(element => {
                    let option = document.createElement("option");
                    option.value = element;
                    option.textContent = element;
                    input3.appendChild(option);
                    
                    if (array[i][3] === element){
                        option.selected = true;
                    }
                });
                break;

        
            default:
                break;
        }
        }
    },
    formSubmitButton(fieldset){
        let submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.id = "submit";
        fieldset.appendChild(submitButton);
    },
    formAddTodoButton(fieldset){
        let addToDoButton = document.createElement("button");
        addToDoButton.textContent = "+";
        fieldset.appendChild(addToDoButton);
        return addToDoButton;
    },
    addToDo(newToDoList, timeValue, DescValue){
        let inputField = document.createElement("div");
        inputField.classList.add("flexRow", "inputField2");
        newToDoList.appendChild(inputField);

        let labelTime = document.createElement("label");
        labelTime.htmlFor = "time";
        labelTime.textContent = "Time: "
        inputField.appendChild(labelTime);
        let inputTime = document.createElement("input");
        inputTime.type = "time";
        inputTime.value = timeValue;
        inputTime.classList.add("toDoTime");
        inputField.appendChild(inputTime);


        let labelDesc = document.createElement("label");
        labelDesc.htmlFor = "toDo";
        labelDesc.textContent = "To Do: "
        inputField.appendChild(labelDesc);        
        let inputDesc = document.createElement("textarea");
        inputDesc.classList.add("toDoDesc");
        inputDesc.value = DescValue;
        inputField.appendChild(inputDesc);


    },
    //start of main functions
    newProject(array){
        let fieldset = this.newForm();//get main fieldset

        let newProjectTitle = document.createElement("h1");
        newProjectTitle.textContent = "New Project Settings";
        fieldset.appendChild(newProjectTitle);//create title then append to fieldset

        this.formCreator(array, fieldset); //creates main form// array is from index contaning the options

        ///////
        let newToDoList = document.createElement("fieldset"); //creates secondary fieldset for to do
        fieldset.appendChild(newToDoList);
        newToDoList.classList.add("flexColumn");
        newToDoList.id = "newToDoList"; //insert datas here

        let toDoTitle= document.createElement("h1"); //secondary fieldset title
        toDoTitle.textContent = "Add To do lists";
        newToDoList.appendChild(toDoTitle);
        ////////////
        let addToDoButton = this.formAddTodoButton(fieldset); //creates new to do entry when button is clicked
        addToDoButton.addEventListener("click", (e)=>{
            e.preventDefault();
            this.addToDo(newToDoList, "", "");
        })
        this.formSubmitButton(fieldset);
    },
    fetchToDo(ToDoDesc,ToDoTime){
        let newToDoList = document.querySelector("#newToDoList");
        //do a foreatch with add to do with values from ibj
        for(let i = 0 ;i< ToDoDesc.length; i++){
            console.log(i);
            this.addToDo(newToDoList, ToDoTime[i], ToDoDesc[i]);
        }
    }


}


export {forms};