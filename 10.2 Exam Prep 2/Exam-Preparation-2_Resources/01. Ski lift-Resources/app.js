window.addEventListener('load', solve);

function solve() {
    let nextStepBtn = document.getElementById("next-btn");

    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let guests = document.getElementById("people-count");
    let fromDate = document.getElementById("from-date");
    let days = document.getElementById("days-count");

    let bod = document.getElementById("body");


    let ulTicketInfo = document.getElementsByClassName("ticket-info-list")[0];

    nextStepBtn.addEventListener("click", buyTicketHandling);

    function buyTicketHandling(e) {
        e.preventDefault();
        if (firstName.value != "" && lastName.value != "" && guests.value != "" && fromDate.value != "" && days.value != "" && days.value>0) {

            let liElement = document.createElement("li");
            liElement.classList.add("ticket");
            liElement.classList.remove("ticket");
            let article = document.createElement("article");
            let name = document.createElement("h3");
            let pDate = document.createElement("p");
            let pDays = document.createElement("p");
            let pPeople = document.createElement("p");

            let editFirstName = firstName.value;
            let editLastName = lastName.value;
            let editPeople = guests.value;
            let editDate = fromDate.value;
            let editDays = days.value;

            liElement.appendChild(article);
            name.textContent = `Name: ${firstName.value} ${lastName.value}`
            pDate.textContent = `From date: ${fromDate.value}`
            pDays.textContent = `For ${days.value} days`
            pPeople.textContent = `For ${guests.value} people`
            console.log("i got here");

            article.appendChild(name);
            article.appendChild(pDate);
            article.appendChild(pDays);
            article.appendChild(pPeople);
            ulTicketInfo.appendChild(liElement);

            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.classList.add("edit-btn");
            liElement.appendChild(editBtn);
            editBtn.addEventListener("click", backToTicketHandling)

            let continueBtn = document.createElement("button");
            continueBtn.textContent = "Continue";
            continueBtn.classList.add("continue-btn");
            liElement.appendChild(continueBtn);
            continueBtn.addEventListener("click", confirmTicket)

            firstName.value = "";
            lastName.value = "";
            guests.value = "";
            fromDate.value = "";
            days.value = "";

            e.target.disabled = true;


            function backToTicketHandling() {

                firstName.value = editFirstName;
                lastName.value = editLastName
                guests.value = editPeople
                fromDate.value = editDate
                days.value = editDays
                liElement.remove();
                e.target.disabled = false;


            }

            function confirmTicket() {
                debugger
                let ulConfirmTicket = document.getElementsByClassName("confirm-ticket")[0];

                let liConfirm = document.createElement("li");
                liConfirm.classList.add("ticket-content");
                let confirmArticle = document.createElement("article");
                let confirmName = document.createElement("h3");
                let confirmPDate = document.createElement("p");
                let confirmPDays = document.createElement("p");
                let confirmPPeople = document.createElement("p");

                liConfirm.appendChild(confirmArticle);
                confirmArticle.appendChild(confirmName);
                confirmArticle.appendChild(confirmPDate);
                confirmArticle.appendChild(confirmPDays);
                confirmArticle.appendChild(confirmPPeople);
                ulConfirmTicket.appendChild(liConfirm);

                confirmName.textContent = name.textContent;
                confirmPPeople.textContent = pPeople.textContent;
                confirmPDays.textContent = pDays.textContent;
                confirmPDate.textContent = pDate.textContent;

                liElement.remove();



                let cancelBtn = document.createElement("button");
                cancelBtn.textContent = "Cancel";
                cancelBtn.classList.add("cancel-btn");
                liConfirm.appendChild(cancelBtn);
                cancelBtn.addEventListener("click", cancelTicket)

                function cancelTicket() {
                    liConfirm.remove();
                    nextStepBtn.disabled = false;

                }

                let confirmConfirmBtn = document.createElement("button");
                confirmConfirmBtn.textContent = "Confirm";
                confirmConfirmBtn.classList.add("confirm-btn");
                liConfirm.appendChild(confirmConfirmBtn);
                confirmConfirmBtn.addEventListener("click", confirmTicketLast)


                function confirmTicketLast() {
                    let div = document.getElementById("main");
                    div.remove();
                    let h1 = document.createElement("h1");
                    h1.setAttribute("id","thank-you");
                    h1.textContent = "Thank you, have a nice day!"
                    let backBtn = document.createElement("button");
                    backBtn.setAttribute("id","back-btn");
                    backBtn.textContent = "Back";
                    backBtn.addEventListener("click", rel)
                    bod.appendChild(h1);
                    bod.appendChild(backBtn);
                    function rel(e) {
                        location.reload();
                    }

                }


            }
        }

    }
}




