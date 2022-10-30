import Task from "./taskClass.js";
const tasks_ar = [];

export const checkLocal = () => {
  if(localStorage["tasks"]){
    tasks_ar.push(...JSON.parse(localStorage["tasks"]));
    createTasks(tasks_ar)
  }
}

export const addTask = (_taskItem) => {
  tasks_ar.push(_taskItem);
  createTasks(tasks_ar)
}

export const removeAllTasks = () => {
  tasks_ar.splice(0 , tasks_ar.length)
  createTasks(tasks_ar)
}

export const removeSingleTask = (_idDel) => {
  tasks_ar.forEach((item,i ) => {
    if(item.id == _idDel){
      tasks_ar.splice(i , 1);
    }
  })
  createTasks(tasks_ar)
}

export const createTasks = (_tasks_ar) => {
  document.querySelector("#id_list").innerHTML = "";
  let sort_ar = _.sortBy(_tasks_ar, "time");
  sort_ar.forEach(item => {
    let task = new Task("#id_list", item);
    task.render()
  })
  saveLocal(sort_ar);
}

const saveLocal = (_ar) => {
  localStorage.setItem("tasks", JSON.stringify(_ar));
}