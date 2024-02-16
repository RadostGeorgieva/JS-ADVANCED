window.addEventListener('load', solve);

function solve() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let checkIn = document.getElementById("date-in");
    let checkOut = document.getElementById("date-out");
    let guests = document.getElementById("people-count");
    let nextBtn = document.getElementById("next-btn");
    let ulClass = document.querySelector(".info-list");
    let ulConfirm = document.querySelector(".confirm-list");
    let h1Verif = document.getElementById("verification");

    nextBtn.addEventListener("click", reservationData);

    function reservationData(e) {
        e.preventDefault();
        //check emtpy
        if (firstName.value != "" &&
            lastName.value != "" &&
            checkIn.value != "" &&
            checkOut.value != "" &&
            guests.value != "" &&
            new Date(checkIn.value) <= new Date(checkOut.value)) {

            let li = document.createElement("li");
            li.classList.add("reservation-content");

            let article = document.createElement("article");

            li.appendChild(article);
            let h3 = document.createElement("h3");
            let pFrom = document.createElement("p");
            let pTo = document.createElement("p");
            let pPeople = document.createElement("p");

            h3.textContent = `Name: ${firstName.value} ${lastName.value}`
            pFrom.textContent = `From date: ${checkIn.value}`
            pTo.textContent = `To date: ${checkOut.value}`
            pPeople.textContent = `For ${guests.value} people`


            article.appendChild(h3);
            article.appendChild(pFrom);
            article.appendChild(pTo);
            article.appendChild(pPeople);
            ulClass.appendChild(li);

            let editFirstName = firstName.value;
            let editLastName = lastName.value;
            let editDateIn = checkIn.value;
            let editDateOut = checkOut.value;
            let editcountElement = guests.value;

            firstName.value = "";
            lastName.value = "";
            checkIn.value = "";
            checkOut.value = "";
            guests.value = "";
            debugger
            e.target.disabled = true;

            let btnEdit = document.createElement("button");
            btnEdit.textContent = "Edit";
            btnEdit.classList.add("edit-btn");

            let continueBtn = document.createElement("button");
            continueBtn.textContent = "Continue";
            continueBtn.classList.add("continue-btn");

            li.appendChild(btnEdit);
            li.appendChild(continueBtn);


            btnEdit.addEventListener("click", backToMakeReservation);
            continueBtn.addEventListener("click", confirmReservation);
            ///MAKING THE RETURN TO MAKE RESERVATION
            function backToMakeReservation(e) {
                firstName.value = editFirstName
                lastName.value = editLastName
                checkIn.value = editDateIn
                checkOut.value = editDateOut
                guests.value = editcountElement
                nextBtn.disabled = false;

                li.remove()

            }
            ///MAKING THE CONFIRM RESERVATION
            function confirmReservation(e) {
                let liElementconfirm = document.createElement('li');
                liElementconfirm.setAttribute('class', 'reservation-content');

                let articleElementContinue = document.createElement("article");
                articleElementContinue = article;

                let confirmBtn = document.createElement("button");
                confirmBtn.setAttribute('class', 'confirm-btn');
                confirmBtn.textContent = 'Confirm';

                let cancelBtn = document.createElement("button");
                cancelBtn.setAttribute('class', 'cancel-btn');
                cancelBtn.textContent = 'Cancel';


                liElementconfirm.appendChild(articleElementContinue);
                liElementconfirm.appendChild(confirmBtn);
                liElementconfirm.appendChild(cancelBtn);
                li.remove();
                ulConfirm.appendChild(liElementconfirm)
                confirmBtn.addEventListener('click', confirmReservationFinal);
                //handling confirmReservationFinal 
                function confirmReservationFinal(e) {
                    liElementconfirm.remove();
                    nextBtn.disabled = false;
                    h1Verif.textContent = "Confirmed.";
                    h1Verif.classList.add("reservation-confirmed");


                }
                cancelBtn.addEventListener('click', cancelReservation);
                //handling cancel reservation 
                function cancelReservation(e) {
                    liElementconfirm.remove();
                    nextBtn.disabled = false;
                    h1Verif.textContent = "Cancelled.";
                    h1Verif.classList.add("reservation-cancelled");

                }


            }
        }


    }
}





