import { addTask, removeAllTasks } from "./tasksManger.js";

export const declareEvents = () => {
  let add_btn = document.querySelector("#add_btn");
  let reset_btn = document.querySelector("#reset_btn");


  add_btn.addEventListener("click", () => {
    let taskItem = {
      name: document.querySelector("#id_name").value,
      time: document.querySelector("#id_time").value,
      howMany: document.querySelector("#id_howMany").value,
      tel: document.querySelector("#id_tel").value,
      card: document.querySelector("#id_card").value,
      validity: document.querySelector("#id_validity").value,
      cvv: document.querySelector("#id_cvv").value,
      id:Date.now()
    }
    addTask(taskItem)
  })

  reset_btn.addEventListener("click", () => {
    if(confirm("Are you sure you want Delete all?"))
    {
      removeAllTasks();
    }
  })
}