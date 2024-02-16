class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }
    addFlight(flightNumber, destination, departureTime, price) {
        let flight = this.flights.find((fight) => fight.flightNumber == flightNumber);
        if (flight) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        } else {
            this.flights.push({ flightNumber, destination, departureTime, price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }
    bookFlight(passengerName, flightNumber) {
        let flight = this.flights.find((fight) => fight.flightNumber == flightNumber);
        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            let bookingFlight =flight;
            bookingFlight.passengerName= passengerName
            this.bookings.push(bookingFlight);
            this.bookingsCount += 1;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        } 
    }
    cancelBooking(passengerName, flightNumber) {
        let passangerIndx = this.bookings.findIndex((flight) => flight.passengerName == passengerName && flight.flightNumber == flightNumber);
        if (passangerIndx != -1) {
            this.bookings.splice(passangerIndx, 1);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        } else {
            return (`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)

        }
    }
    showBookings(criteria) {
        if (this.bookings.length < 1) {
            throw new Error(`No bookings have been made yet.`)
        } else if ( criteria == "all") {
            let result = [];
            result.push(`All bookings(${this.bookingsCount}):`)
            for(let el of this.bookings) {
                result.push(`${el.passengerName} booked for flight ${el.flightNumber}.`)
            }
            return result.join("\n");
        }
        else if ( criteria == "cheap") {
            let cheapFlights = this.bookings.filter((booking) => booking.price<=100)
            if(cheapFlights.length == 0 ){
                return "No cheap bookings found."
            }
            let result = [];
            result.push("Cheap bookings:")
            for(let el of cheapFlights) {
                result.push(`${el.passengerName} booked for flight ${el.flightNumber}.`)
            }
            return result.join("\n");
        }
        else if ( criteria == "expensive") {
            let expensive = this.bookings.filter((booking) => booking.price>100)
            if(expensive.length == 0){
                return "No expensive bookings found."
            }
            let result = [];
            result.push("Expensive bookings:")
            for(let el of expensive) {
                result.push(`${el.passengerName} booked for flight ${el.flightNumber}.`)
            }
            return result.join("\n");
        }
    }
}

const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));

