function solve() {
    let addButton = document.getElementById("add");
    addButton.addEventListener("click", handler);
    let taskName = document.getElementById("task");
    let description = document.getElementById("description")
    let dueDate = document.getElementById("date")
    let [addTask, open, inProgress, complete] = document.querySelectorAll("section");


    function handler(event) {

        event.preventDefault();
        if (taskName.value == "" || description.value == "" || dueDate.value == "") {
            return;
        }
        //creating article and putting it in OPEN section
        let article = createArticle();
        let divs = open.children;
        divs[1].appendChild(article);
        let allB = article.querySelectorAll("button");;
        addEventListenerToButtons(allB);
    }
    //handling OPEN SECTION 
    function addEventListenerToButtons(allB){
        Array.from(allB).forEach(btn => btn.addEventListener("click", handlingButtons))
    }


    function createArticle() {
        if (taskName.value == "" || description.value == "" || dueDate.value == "") {
            return;
        }
        let article = document.createElement("article")
        //adding header
        let h3 = document.createElement("h3");
        h3.textContent = taskName.value;
        article.appendChild(h3);
        taskName.value = "";
        //adding description
        let pDescription = document.createElement("p");
        pDescription.textContent = "Description: " + description.value;
        article.appendChild(pDescription);
        description.value = "";
        //adding date
        let pDueDate = document.createElement("p");
        pDueDate.textContent = "Due Date: " + dueDate.value;
        article.appendChild(pDueDate);
        dueDate.value = "";
        //adding buttons
        let buttonDiv = document.createElement("div");
        buttonDiv.classList.add("flex");
        let startButton = document.createElement("button");
        startButton.classList.add("green");
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("red");
        startButton.textContent = "Start";
        deleteButton.textContent = "Delete";
        buttonDiv.appendChild(startButton);
        buttonDiv.appendChild(deleteButton);
        article.appendChild(buttonDiv);
        return article;

    }

    function handlingButtons(event) {
        event.stopPropagation();
        debugger
        let currentButton = event.target
        let article = currentButton.parentElement.parentElement;
        console.log(article);
        //handling change FROM OPEN to in progress
        if (currentButton.textContent == "Start") {
            //changing the red button
            let redbutton = article.getElementsByClassName("red");
            redbutton[0].textContent = "Finish";
            redbutton[0].classList.add("orange");
            redbutton[0].classList.remove("red");
            //changing the green button
            currentButton.classList.remove("green");
            currentButton.classList.add("red");
            currentButton.textContent = "Delete";

            //changing location of article
            let divs = inProgress.children;
            divs[1].removeAttribute('id');
            divs[1].appendChild(article);

            //deleting the article
        } else if (currentButton.textContent == "Delete") {
            article.remove();
            ///handling change FROM IN PROGRESS to COMPLETE
        } else if (currentButton.textContent == "Finish") {
            //removing DIV containig buttons
            currentButton.parentElement.remove();
            //changing location of article
            let divs = complete.children;
            divs[1].appendChild(article);
        }
    }
}
