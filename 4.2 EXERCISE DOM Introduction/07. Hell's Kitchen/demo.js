function onClick() {

    let data = ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
    let restaurants = {};
    for (let el of data) {
        let [restaurantName, workerData] = el.split(" - ");
        let workers = workerData.split(", ");
        let workersSalaries = [];
        for (let w of workers) {
            let [workerName, salary] = w.split(" ");
            workersSalaries.push({ workerName, salary: Number(salary) });
        }

        if (restaurantName in restaurants) {
            restaurants[restaurantName].workers.push(...workersSalaries);
        } else {

            restaurants[restaurantName] = { workers: workersSalaries };
        }
    }

    restaurants.AverageAndBest = function () {
        for (let restaurant in restaurants) {
            if (restaurant != "AverageAndBest") {
                let total = 0;
                let count = 0;
                let best = 0;
                for (let worker of restaurants[restaurant].workers) {
                    total += worker.salary;
                    count++;
                    if (worker.salary > best) {
                        best = worker.salary;
                    }
                }

                // Calculate and store average and best salaries
                restaurants[restaurant].average = total / count;
                restaurants[restaurant].best = best;
                restaurants[restaurant].workers.sort((a, b) => b.salary - a.salary);
            }

        }
    }
    function calculateBiggest(restaurants) {
        let biggest = 0;
        let name = "";
        for (restaurant in restaurants) {
            if (restaurants[restaurant].average > biggest) {
                biggest = restaurants[restaurant].average;
                name = restaurant;
            }
        }
        restaurants[name].ImTheBest = true;
        return `Name: ${name} Average Salary: ${(restaurants[name].average).toFixed(2)} Best Salary: ${(restaurants[name].best).toFixed(2)} `;
    }

    function bestWorkers(restaurants) {
        let result = ""
        for (let restaurant in restaurants)
            if (restaurants[restaurant].ImTheBest) {
                for (let worker of restaurants[restaurant].workers) {
                    result += `Name: ${worker.workerName} With Salary: ${worker.salary} ` ;
                }
            }
            return result;
    }


    restaurants.AverageAndBest(restaurants);
    //console.log(calculateBiggest(restaurants))
    //console.log(bestWorkers(restaurants));
   let bestR = document.getElementById("bestRestaurant");
   bestR.querySelector("p").textContent = calculateBiggest(restaurants);
   let workersID = document.getElementById("workers");
   workersID.querySelector("p").textContent = bestWorkers(restaurants);

}

