window.addEventListener('load', solve);

function solve() {
    let addEventBtn = document.getElementById("add-btn");
    let time = document.getElementById("time");
    let date = document.getElementById("date");
    let place = document.getElementById("place");
    let eventName = document.getElementById("event-name");
    let email = document.getElementById("email");
    addEventBtn.addEventListener("click", addingToLastCheck);

    function addingToLastCheck(e) {
        if (time.value != "" && date.value != "" && place.value != "" && eventName.value != "" && email.value != "") {
            let ulLast = document.getElementById("check-list");
            let liLast = document.createElement("li");
            liLast.classList.add("event-content")
            let articleLast = document.createElement("article");
            let pDateAndTimeLast = document.createElement("p");
            let pPlaceLast = document.createElement("p");
            let pEventLast = document.createElement("p");
            let pEmailLast = document.createElement("p");

            let timeOriginal = time.value
            let dateOriginal = date.value
            let placeOriginal = place.value
            let eventNameOriginal = eventName.value
            let emailOriginal = email.value

            pDateAndTimeLast.textContent = `Begins: ${date.value} at: ${time.value}`;
            pPlaceLast.textContent = `In: ${place.value}`;
            pEventLast.textContent = `Event: ${eventName.value}`;
            pEmailLast.textContent = `Contact: ${email.value}`;

            ulLast.appendChild(liLast);
            liLast.appendChild(articleLast);
            articleLast.appendChild(pDateAndTimeLast);
            articleLast.appendChild(pPlaceLast)
            articleLast.appendChild(pEventLast)
            articleLast.appendChild(pEmailLast)

            addEventBtn.disabled = true;

            let btnEdit = document.createElement("button");
            btnEdit.textContent = "Edit";
            btnEdit.classList.add("edit-btn")
            liLast.appendChild(btnEdit);
            
            time.value = ""
            date.value = ""
            place.value = ""
            eventName.value = ""
            email.value = ""

            btnEdit.addEventListener("click", backToBeggining);

            function backToBeggining(e) {

                time.value = timeOriginal
                date.value = dateOriginal
                place.value = placeOriginal
                eventName.value = eventNameOriginal
                email.value = emailOriginal
                addEventBtn.disabled = false;

                liLast.remove()

            }


            let btnContinue = document.createElement("button");
            btnContinue.textContent = "Continue";
            btnContinue.classList.add("continue-btn")
    
            liLast.appendChild(btnContinue);

            btnContinue.addEventListener("click", toUpcoming);

            function toUpcoming(e) {
            let ulUpcoming = document.getElementById("upcoming-list");

            let liUpcoming = document.createElement("li");
            liUpcoming.classList.add("event-content")
            let articleUpcoming = document.createElement("article");
            let pDateAndTimeUpcoming = document.createElement("p");
            let pPlaceUpcoming = document.createElement("p");
            let pEventUpcoming = document.createElement("p");
            let pEmailUpcoming = document.createElement("p");

            
            pDateAndTimeUpcoming.textContent = `Begins: ${timeOriginal} at: ${dateOriginal}`;
            pPlaceUpcoming.textContent = `In: ${placeOriginal}`;
            pEventUpcoming.textContent = `Event: ${eventNameOriginal}`;
            pEmailUpcoming.textContent = `Contact: ${emailOriginal}`;

            ulUpcoming.appendChild(liUpcoming);
            liUpcoming.appendChild(articleUpcoming);
            articleUpcoming.appendChild(pDateAndTimeUpcoming);
            articleUpcoming.appendChild(pPlaceUpcoming)
            articleUpcoming.appendChild(pEventUpcoming)
            articleUpcoming.appendChild(pEmailUpcoming)

            liLast.remove()
            let moveToFinishedBtn = document.createElement("button");
            moveToFinishedBtn.textContent = "Move to Finished";
            moveToFinishedBtn.classList.add("finished-btn")
    
            liUpcoming.appendChild(moveToFinishedBtn);
            addEventBtn.disabled = false;

            moveToFinishedBtn.addEventListener("click", finished);

            function finished(e) {
                let ulFinish = document.getElementById("finished-list");

                let liFinish = document.createElement("li");
                liFinish.classList.add("event-content")
                let articleFinished = document.createElement("article");
                let pDateAndTimeFinished = document.createElement("p");
                let pPlaceFinished = document.createElement("p");
                let pEventFinished = document.createElement("p");
                let pEmailFinished= document.createElement("p");
    
                
                pDateAndTimeFinished.textContent = `Begins: ${timeOriginal} at: ${dateOriginal}`;
                pPlaceFinished.textContent = `In: ${placeOriginal}`;
                pEventFinished.textContent = `Event: ${eventNameOriginal}`;
                pEmailFinished.textContent = `Contact: ${emailOriginal}`;
    
                ulFinish.appendChild(liFinish);
                liFinish.appendChild(articleFinished);
                articleFinished.appendChild(pDateAndTimeFinished);
                articleFinished.appendChild(pPlaceFinished)
                articleFinished.appendChild(pEventFinished)
                articleFinished.appendChild(pEmailFinished)
    
                liUpcoming.remove()
                let clearBtn=document.getElementById("clear");
                clearBtn.addEventListener("click",clearData);

                function clearData (e) {
                    liFinish.remove();
                }
            }

        }

        }
    }
}