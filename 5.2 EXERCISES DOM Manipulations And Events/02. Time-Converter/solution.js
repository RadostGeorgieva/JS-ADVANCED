function attachEventsListeners() {
    debugger
    let divCollection = document.getElementsByTagName("div");
    for (d of divCollection) {
        let btn = d.querySelector('input[type="button"]');

        btn.addEventListener("click", handler);
    }
    function handler(event) {

        switch (event.target.id) {
            case "daysBtn":
                let daysValue = document.getElementById("days").value;
                document.getElementById("hours").value = Number(daysValue) * 24;
                document.getElementById("minutes").value = Number(daysValue) * 1440;
                document.getElementById("seconds").value = Number(daysValue) * 86400;
                break;
            case "hoursBtn":
                let hoursValue = document.getElementById("hours").value;
                document.getElementById("days").value = Number(hoursValue) / 24;
                document.getElementById("minutes").value = Number(hoursValue) * 60;
                document.getElementById("seconds").value = Number(hoursValue) * 3600;
                break;
            case "minutesBtn":
                let minutesValue = document.getElementById("minutes").value;
                document.getElementById("hours").value = Number(minutesValue) / 60;
                document.getElementById("days").value = Number(minutesValue) / 1440;
                document.getElementById("seconds").value = Number(minutesValue) * 60;
                break;
            case "secondsBtn":
                let secondsValue = document.getElementById("seconds").value;
                document.getElementById("days").value = Number(secondsValue) / 86400 ;
                document.getElementById("hours").value = Number(secondsValue) / 3600 ;
                document.getElementById("minutes").value = Number(secondsValue) / 60;
                ; break;
        }
    }
}