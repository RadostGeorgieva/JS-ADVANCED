function timeToWalk(stepsToWork, strideLength, kmh) {
    let numberOfRests = Math.floor(stepsToWork / (500 /strideLength));

    // Calculate the total time in minutes
    let totalTimeInHours = (stepsToWork * strideLength) / (kmh * 1000) + (numberOfRests / 60);

    // Convert total time to minutes
    let totalTimeInSeconds = totalTimeInHours * 3600;
    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    let seconds = Math.floor(totalTimeInSeconds % 60)+1;
    if(hours<10){
       hours = String("0"+hours);
    } 
    if(minutes<10) {
        minutes = String("0"+minutes);
    }
    if(seconds<10) {
        seconds = String("0"+seconds);
    }
    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5)