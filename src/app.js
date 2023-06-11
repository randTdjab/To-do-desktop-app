// Task Creation logic 
// Task Parameters appearing logic
// Task Name changing Logic 
// Task Notes Adding Logic

let TaskCreationInput = document.querySelectorAll(".TaskAppender > input")
let Task = document.getElementsByClassName("Task")[0];

for (var i = 0 ; i < TaskCreationInput.length ; i++){
    TaskCreationInput[i].addEventListener("keydown",(event)=>{
        if (event.keyCode === 13){
            let TaskListLocation = event.currentTarget.parentNode.previousElementSibling.firstElementChild;
            let NewTask = Task.cloneNode(true);  // creating new task
            // adding the name to the Task
            console.log(NewTask);
            NewTask.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML = event.currentTarget.value;
            event.currentTarget.value = "";
            TaskListLocation.appendChild(NewTask);   // adding it to task list
            TaskListLocation.insertBefore(NewTask,TaskListLocation.firstChild);  // Making the Task Go all up when it gets created 
// Task Parameters appearing code 
            let Tasks = document.getElementsByClassName("Task");
            let TaskParameters = document.getElementById("TaskParameters");
            let PopUps = document.getElementById("PopuPs");
            for (var i = 0 ; i < Tasks.length ; i++){
                Tasks[i].replaceWith(Tasks[i].cloneNode(true)); 
                Tasks[i].addEventListener("click",(event)=>{
                    // if you click on the check box nothing will happen
                    if ((event.target.classList[0] != "CheckBox") & (event.target.classList[0] != "icon-Trash")) {
                        let ClickedTask = event.currentTarget; //  Storing the Last Task That Got C
                        // displaying the Task Parameters
                        PopUps.style.display = "block";
                        PopUps.style.backgroundColor = "rgba(0, 0, 0, 0.76)"
                        TaskParameters.style.display = "flex";
                        // Changing the Name Of the task Parameters
                        TaskParameters.firstElementChild.firstElementChild.value = event.currentTarget.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML;
                        // Task Name changing Logic 
                        TaskParametersNameInput = document.querySelector("#TaskParameters > .LeftSide > .TaskName");                        TaskParametersNameInput.addEventListener("keydown",(event)=>{
                            if (event.keyCode === 13){
                                event.preventDefault();
                                ClickedTask.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML = event.currentTarget.value;
                            }
                        });
                        // Task Notes Adding Logic
                        TaskParametersNoteInput = document.querySelector("#TaskParameters > .LeftSide > .TaskNote") 
                        TaskParametersNoteInput.addEventListener("keydown",(event)=>{
                            if(event.keyCode === 13){
                                event.preventDefault();
                                ClickedTask.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.firstElementChild.innerHTML = "Notes : " + event.currentTarget.value;                                
                            }
                        })
                    }
            });}
// task deleting code
            let TaskDeleteBtns  = document.getElementsByClassName("icon-Trash");
            for(var i = 0; i<TaskDeleteBtns.length ; i++){
                TaskDeleteBtns[i].addEventListener("click",(event)=>{
                    event.currentTarget.parentNode.parentNode.remove();
                })
            }
// Task Clearing code 
            let CheckBoxes = document.getElementsByClassName("CheckBox"); // updating the Check Boxes After The new one got added
            for(let i = 0 ; i < CheckBoxes.length ; i++){
                CheckBoxes[i].replaceWith(CheckBoxes[i].cloneNode(true)); 
                CheckBoxes[i].addEventListener("click",(event)=>{
                    // Task Checking Code
                    if (event.currentTarget.children.length === 0){
                        // displaying the finsished TASKS BUTTON
                        event.currentTarget.parentNode.parentNode.nextElementSibling.firstElementChild.style.display = "flex";
                        //  if the Finished Tasks are clopsed then the task will be hidden if not he won't 
                        if(event.currentTarget.parentNode.parentNode.nextElementSibling.children.length > 1){
                            event.currentTarget.parentNode.style.display =  event.currentTarget.parentNode.parentNode.nextElementSibling.lastElementChild.style.display
                        }else{
                            event.currentTarget.parentNode.style.display = "flex";
                        }
                        // moving the task to the finished tasks
                        event.currentTarget.parentNode.parentNode.nextElementSibling.appendChild(event.currentTarget.parentNode);
                        // Making the Task Go all up when it gets done 
                        event.currentTarget.parentNode.parentNode.insertBefore(event.currentTarget.parentNode,event.currentTarget.parentNode.parentNode.firstElementChild.nextElementSibling);
                        // changing the style of the tasks
                            // the check box styles
                        event.currentTarget.parentNode.style.backgroundColor = "var(--m_color)"
                        event.currentTarget.style.borderColor = "var(--s_color)";
                        event.currentTarget.style.backgroundColor = "var(--s_color)";
                        event.currentTarget.appendChild(document.createElement("span"));
                        event.currentTarget.firstElementChild.classList.add("icon-Check");
                        event.currentTarget.firstElementChild.style.color = "var(--m_color)";   
                            // Other Styles
                        event.currentTarget.parentNode.style.color = "var(--s_color)";

                    // Task Checking Code
                    }else{
                        // moving the task to the Task List
                        event.currentTarget.parentNode.parentNode.previousElementSibling.appendChild(event.currentTarget.parentNode);  
                        // changing the style of the tasks
                        // the check box styles
                        event.currentTarget.parentNode.style.backgroundColor = "var(--s_color)"
                        event.currentTarget.style.borderColor = "var(--m_color)";
                        event.currentTarget.style.backgroundColor = "none";
                        event.currentTarget.firstElementChild.remove(); 
                            // Other Styles
                        event.currentTarget.parentNode.style.color = "var(--m_color)";
                    } 
                });
            };
        };
    });
};

// Goal Category Adding Code
let GoalCategoryInput = document.querySelector("#MyGoals > .Header > input");
let GoalAddingInput = document.querySelectorAll(".GoalInputBtn > .GoalInput > input");
let GoalCategory = document.querySelector("#Samples > .GoalCategory");
let Goal = document.querySelector("#Samples > .Goal");
let GoalTypePopUp = document.getElementById("GoalType");
let PopUps = document.getElementById("PopuPs");
let GoalCategoryHeader = document.querySelectorAll(".GoalCategory > .header"); 

let MyDayPage = document.getElementById("MyDay");
let MyGoalsPage = document.getElementById("MyGoals");
GoalCategoryInput.addEventListener("keydown",(event)=>{
    if(event.keyCode === 13){
        let newGoalCategory = GoalCategory.cloneNode(true);
        newGoalCategory.firstElementChild.firstElementChild.innerHTML = event.target.value;
        event.currentTarget.parentNode.parentNode.querySelector("#GoalsCategoriesContainer").appendChild(newGoalCategory);
//Goal Category selection Code 
        let GoalCategoryHeader = document.querySelectorAll(".GoalCategory > .header"); 
        let GoalCategoryGoalList = document.getElementById("GoalCategoryGoalList");
        for(var i=0 ; i<GoalCategoryHeader.length ; i++){
            GoalCategoryHeader[i].addEventListener("click",(event)=>{
                console.log(GoalCategoryGoalList.querySelector(".Header > h1").textContent);
                GoalCategoryGoalList.querySelector(".Header > h1").textContent = event.currentTarget.firstElementChild.textContent;
                GoalCategoryGoalList.style.display = "flex";
                MyDayPage.style.display = "none";
                MyGoalsPage.style.display = "none";
            })
        }

// Goal Adding Code
        GoalAddingInput[i].replaceWith(GoalAddingInput[i].cloneNode(true));
        for (var i = 0 ; i<GoalAddingInput.length ; i++){
            GoalAddingInput = document.querySelectorAll(".GoalInputBtn > .GoalInput > input");
            
            GoalAddingInput[i].addEventListener("keydown",(event)=>{
                if(event.keyCode === 13){
                    PopUps.style.display = "block";
                    PopUps.style.backgroundColor = "rgba(0, 0, 0, 0.76)"
                    GoalTypePopUp.style.display = "flex";
                    let newGoal = Goal.cloneNode(true);
                    newGoal.querySelector(".Title > h1").innerHTML = event.currentTarget.value;
                    event.currentTarget.parentNode.parentNode.parentNode.querySelector(".GoalsListContainer").appendChild(newGoal);
                }
                
            })
        }
        for (var i = 0 ; i<GoalAddingInput.length ; i++){
            GoalAddingInput = document.querySelectorAll(".GoalInputBtn > .GoalInput > input");
            
            GoalAddingInput[i].addEventListener("keydown",(event)=>{
                if(event.keyCode === 13){
                    PopUps.style.display = "block";
                    PopUps.style.backgroundColor = "rgba(0, 0, 0, 0.76)"
                    GoalTypePopUp.style.display = "flex";
                    let newGoal = Goal.cloneNode(true);
                    newGoal.querySelector(".Title > h1").innerHTML = event.currentTarget.value;
                    event.currentTarget.parentNode.parentNode.parentNode.querySelector(".GoalsListContainer").appendChild(newGoal);
                }
                
            })
        }
    }
})

// Goal Type Exeting Code
let GoalTypePopUpExitBtn = document.querySelector("#GoalType > span");
for(var i =0 ; i < GoalTypePopUp.children.length ; i++){
    GoalTypePopUp.children[i].addEventListener("click",(event)=>{
        GoalTypePopUp.style.display = "none";
        PopUps.style.display = "none";
    })
   
}



// Task Parameters exiting code 

let TaskParametersExitButton = document.getElementById("TaskParameters").lastElementChild;

TaskParametersExitButton.addEventListener("click",(event)=>{

    TaskParametersExitButton.parentNode.parentNode.style.display = "none";
    TaskParametersExitButton.parentNode.style.display = "none";
})

// Task Parameter Text Input Flexbilty

    // Name INput
let TaskParametersNameInput = document.querySelector("#TaskParameters > .LeftSide > .TaskName");
let TaskParametersNameInputLineNumber = 1 ; // the number of lines

TaskParametersNameInput.addEventListener("keydown",(event)=>{
    if(TaskParametersNameInput.value.length / 60 > TaskParametersNameInputLineNumber){
        TaskParametersNameInput.rows = TaskParametersNameInputLineNumber + 1;
        TaskParametersNameInputLineNumber += 1;
    }
    if(TaskParametersNameInput.value.length / 60 < TaskParametersNameInputLineNumber - 1 ){
        TaskParametersNameInput.rows = TaskParametersNameInputLineNumber - 1;
        TaskParametersNameInputLineNumber -= 1;
    }
})

// Time Input  Limit 

let TimeInputs = document.querySelectorAll(".Box > input");

for (var i = 0 ; i<TimeInputs.length ; i++){
    TimeInputs[i].addEventListener("keydown",(event)=>{
        if(event.currentTarget.value === 1){
            if(parseInt(event.currentTarget.value) > 2){
                event.currentTarget.value = "";
            }
        }else if(parseInt(event.currentTarget.value.length) === 2){
            if(parseInt(event.currentTarget.value) > 2){
                event.currentTarget.value = "";
            }           
        }
    })
}


// Hidding Finished Tasks code

let FinsihedTasksButtons = document.getElementsByClassName("FinishButton");

for( let i = 0 ; i < FinsihedTasksButtons.length ; i++ ){
    FinsihedTasksButtons[i].addEventListener(("click"),(event)=>{
        let NotFinsishedTasks =  event.currentTarget.parentNode.children;
        for (let i = 1 ; i<NotFinsishedTasks.length ; i++){
            if (NotFinsishedTasks[i].style.display === "flex"){
                console.log(event.currentTarget.parentNode.firstElementChild.firstElementChild);
                event.currentTarget.parentNode.firstElementChild.firstElementChild.style["-webkit-transform"] = "rotate(0deg)";
                NotFinsishedTasks[i].style.display = "none";
            }else if(NotFinsishedTasks[i].style.display === "none"){
                event.currentTarget.parentNode.firstElementChild.firstElementChild.style["-webkit-transform"] = "rotate(90deg)";
                NotFinsishedTasks[i].style.display = "flex";
            }
        }
    })
};


// swithching Pages Code

let MyDayBtn = document.querySelector(".Buttons > h1 > .icon-Sun");
let MyGoalsBtn = document.querySelector("#PagesBar > .Buttons > h1 > .icon-Goals");

MyDayPage = document.getElementById("MyDay");
MyGoalsPage = document.getElementById("MyGoals");

console.log(MyGoalsBtn);

MyDayBtn.parentNode.addEventListener("click",(event)=>{
    MyGoalsPage.style.display = "none";
    MyDayPage.style.display = "flex";
});


MyGoalsBtn.parentNode.addEventListener("click",(event)=>{
    MyGoalsPage.style.display = "flex";
    MyDayPage.style.display = "none";
});


