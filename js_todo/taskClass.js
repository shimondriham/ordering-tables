import { removeSingleTask } from "./tasksManger.js";

class Task {
  constructor(_parent,_item){
    this.parent = _parent;
    this.name = _item.name;
    this.howMany = _item.howMany;
    this.time = _item.time;
    this.tel = _item.tel;
    this.card = _item.card;
    this.validity = _item.validity;
    this.cvv = _item.cvv;
    this.id = _item.id;
  }

  render(){
    let div = document.createElement("div");
    div.className = "border my-2 p-2";
    document.querySelector(this.parent).append(div);

    div.innerHTML = `  
     <button class="badge hero-btn float-end ">X</button>
    <button class="badge hero-btn2 float-start button2">אשראי</button>
    <h5>${this.time}: שעה</h5>
    <h5>שם:${this.name}</h5>
    <h5>${this.howMany}: מס' סועדים</h5>
    <h5>${this.tel}: טלפון</h5>
   
    
    `
    let btn = div.querySelector("button");
    btn.addEventListener("click", () => {
      removeSingleTask(this.id)
    })

    let btn2 = div.querySelector(".button2");
    btn2.addEventListener("click", () => {
      if(this.card){
         alert(this.card +"  ,  "+ this.validity+"  ,  "+ this.validity);
      }else{
        alert("אין אשראי")
      }
    })
  }



}

export default Task;