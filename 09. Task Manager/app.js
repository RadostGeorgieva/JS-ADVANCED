function solve() {
    let addButton = document.getElementById("add");
    addButton.addEventListener("click", handler);
    let taskName = document.getElementById("task");
    let description = document.getElementById("description")
    let dueDate = document.getElementById("date")
    let [addTask,open,inProgress,complete] = document.querySelectorAll("section");


    function handler(event) {

        event.preventDefault();
        if (taskName.value == "" || description.value == "" || dueDate.value == "") {
            return;
        }
        let article = createArticle();
        appendToSectionOrange(article, sections);
        //handling OPEN SECTION
        let allOpenArticlesInOrange = sections[1].querySelectorAll("article");
        for (a of allOpenArticlesInOrange) {

            let startButton = a.querySelector("button.green");
            startButton.addEventListener("click", function (event) {
                addTappendToSectionYellow(event, a);
            })
            let deleteBtn = a.querySelector("button.red");
            deleteBtn.addEventListener("click", function (event) {
                deleteHandling(event, a);
            })

        }
         //handling IN PROGRESS SECTION
         let allOpenArticlesInYellow = sections[2].querySelectorAll("article");;
         for (a of allOpenArticlesInYellow) {
             let deleteButton = a.querySelector("button.red");
             deleteButton.addEventListener("click", function (event) {
  
                 deleteHandling(event, a);
             })
             let finishButton = a.querySelector("button.orange");
             finishButton.addEventListener("click", function (event) {

                 appendToSectionGreen(event, a);
             })
         }
     
     
    }


        function createArticle() {
        
            let article = document.createElement("article")

            let h3 = document.createElement("h3");
            h3.textContent = taskName.value;
            article.appendChild(h3);
            taskName.value = "";

            let pDescription = document.createElement("p");
            pDescription.textContent = "Description: " + description.value;
            article.appendChild(pDescription);
            description.value = "";

            let pDueDate = document.createElement("p");
            pDueDate.textContent = "Due Date: " + dueDate.value;
            article.appendChild(pDueDate);
            dueDate.value = "";
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
        function appendToSectionOrange(article, sections) {
            let divsInArticle = sections[1].children;
            divsInArticle[1].appendChild(article);

        }

        function addTappendToSectionYellow(event, a) {
            let article = event.currentTarget;
            let divsInArticle = sections[2].children;
            console.log(article)
            divsInArticle[1].appendChild(a);
            let buttonToDeleteRed = a.querySelector("button.green");
            buttonToDeleteRed.classList.remove("green");
            buttonToDeleteRed.classList.add("red");
            buttonToDeleteRed.textContent = "Delete";
        
            let buttonToFinishOrange = a.querySelector("button.red");
            buttonToFinishOrange.classList.remove("red");
            buttonToFinishOrange.classList.add("orange");
            buttonToFinishOrange.textContent = "Finish";
            let divFlex = a.querySelector("div.flex")
            divFlex.appendChild(buttonToFinishOrange);
           

        }

        function deleteHandling(event, a) {
            debugger
                let article = a.querySelector("button.red");
                console.log(event.target.parentElement.parentElement);
                (event.target.parentElement.parentElement).remove();
            
        }

       function appendToSectionGreen(event, a) {
        let divsInArticle = sections[3].querySelector("div:last-child")
        divsInArticle.appendChild(a);
        let buttonToDeleteRed = a.querySelector("button.red");
        buttonToDeleteRed.remove();
        let buttonToDeleteOrange = a.querySelector("button.orange");
        buttonToDeleteOrange.remove();
        let divFlex = a.querySelector("div.flex")
        a.remove();
        }
    }
