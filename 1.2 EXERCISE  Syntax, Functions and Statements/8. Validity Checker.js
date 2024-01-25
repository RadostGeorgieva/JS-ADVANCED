function solve(x1,y1,x2,y2){
    let distancexandy = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
    let distancexy1and0 = Math.sqrt(Math.pow((0-x1),2)+Math.pow((0-y1),2))
    let distancexy2and0 = Math.sqrt(Math.pow((x2-0),2)+Math.pow((y2-0),2))
    if(distancexy1and0%1 == 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if(distancexy2and0%1 == 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if(distancexandy%1 == 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
solve(2, 1, 1, 1)