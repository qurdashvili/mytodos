function myFanction() {
    var valuee = document.getElementById("myinput").value;
    if(valuee != ""){
       
    const para = document.createElement("p");
    para.innerText = valuee;
    para.setAttribute("class", "pharagrpstyle");
    para.setAttribute("contenteditable", true);
    const chekbox = document.createElement("input");
    chekbox.setAttribute("type", "checkbox");
    const list = document.createElement("li");
    const div = document.createElement("div");
    div.setAttribute("class", "divliststyle");
    div.appendChild(chekbox);
    div.appendChild(list);
    
var clicked = false;
    para.addEventListener("click", () => {

        if(!clicked){
            clicked = true;
        const savebutton = document.createElement("button");
        savebutton.setAttribute("class", "btn btn-primary pe-3 ps-3 pt-2 pb-2");
        list.appendChild(savebutton);
        savebutton.innerText = "save";
        
        savebutton.addEventListener("click", () => {
            savebutton.remove();  
        })
    }

 });

    list.appendChild(para);
    list.setAttribute("class", "liststyle");
    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-danger");
    button.innerText = "remove";

   


    div.appendChild(button)

    document.getElementById("myinput").value ="";

    const textlist = document.getElementById("mylist");

    textlist.appendChild(div);

    button.addEventListener("click", (e) => {
        div.remove();
    
    });
}

}

