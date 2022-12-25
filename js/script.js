let formDOM = document.querySelector("#task")

let buttonDOM = document.querySelector("#liveToastBtn")
formDOM.addEventListener("clicked", newElement)

let taskListDOM = document.querySelector("#list")
taskListDOM.addEventListener("click",check_li)

let tasks = document.getElementById("list");
tasks.addEventListener("click",clearTask);


function newElement(event){
    const task = formDOM.value
    if (task.length > 0 & task[0] != " "){
        var span = document.createElement("span")
        var span_text = document.createTextNode("x")
        span.className = "close"
        span.appendChild(span_text)

        const liDOM = document.createElement("li")
        liDOM.className = "li"
        const task_text = document.createTextNode(task)
        liDOM.appendChild(task_text)
        liDOM.appendChild(span)
        taskListDOM.appendChild(liDOM)
        $("#liveToast").toast({delay:2000})
        $("#liveToast").toast("show")
        console.log("Listeye eklendi")
        localStorage.setItem(task,task)
        console.log(localStorage.getItem(task))

        

        
    }else{
         $("#liveToastError").toast({delay:2000})
         $("#liveToastError").toast("show")
         console.log("Hatalı Giriş")
    }
    formDOM.value = ""
}



function check_li(event) {
    if (event.target.tagName = "li") {
        event.target.classList.toggle("checked")
        console.log("Yapıldı...")
    }
}



function clearTask(event) {
    if(event.target.className === "close") {
        event.target.parentElement.remove()
        console.log("Silindi...")
        $("#liveToastDelete").toast({delay:2000})
        $("#liveToastDelete").toast("show")
        localStorage.removeItem(event.target.parentElement.textContent.slice(0,-1));
        // SPAN'ın içindeki X yazısını da aldığı için slice ile sildim
    }
}