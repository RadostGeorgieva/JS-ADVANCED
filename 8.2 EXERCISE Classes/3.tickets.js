function ticketHandling(arr, sorting) {
    class Ticket {
        constructor(destination, price, status) {

            this.destination = destination;
            this.price =Number(price);
            this.status = status;

        }
    }
    let tickets = [];
    for (let el of arr) {
        let [destination, price, status] = el.split("|");
        let ticket = new Ticket(destination, price, status);

        tickets.push(ticket);
    }
 if(sorting == "price") {
    tickets.sort((s1, s2) => {
        return s1[sorting] - s2[sorting];
    }); 
} else if (sorting == "status" ||sorting == "destination" ) {
    tickets.sort((a, b) => {
        const nameA = a[sorting];
        const nameB = b[sorting]
         if (nameA < nameB) {
           return -1;
         }
     if (nameA > nameB) {
           return 1;
       }

        return 0;
     }); 
    }
    return tickets;

}

console.log(ticketHandling(['Philadelphia|167.20|available',

'New York City|95.99|available',

'New York City|100.99|sold',

'Boston|126.20|departed'],

'status'))