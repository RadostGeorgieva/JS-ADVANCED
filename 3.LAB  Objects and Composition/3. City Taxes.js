function cityTaxes(name,population,treasury) {
    let obj = {  
       name: name,
       population: Number(population),
       treasury:Number(treasury),
       taxRate:10,

      collectTaxes() {
        this.treasury+=this.population*this.taxRate;

      },
      applyGrowth(percentage) {
        this.population+=Math.floor((percentage*this.population)/100);

      },
      applyRecession(percentage) {
        this.treasury-=Math.floor((percentage*this.treasury)/100);
      }
    };
   

    return obj;
}
const city =

cityTaxes('Tortuga',

7000,

15000);

console.log(city);