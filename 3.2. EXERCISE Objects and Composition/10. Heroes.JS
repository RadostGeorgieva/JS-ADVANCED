function solve() {
    let canCast = (state) => ({
            cast: (spell) => {
                console.log(`${mage.name} cast ${spell}`)
                state.mana--;
            }
        
    })

    let canFigth = (state) => ({
        
            fight: () => {
                console.log(`${fighter.name} slashes at the foe!`)
                 state.stamina--;
            }
        })
    let mage = (name) => {
        let state = {
            name: name,
            health: 100,
            mana: 100
        }
        return Object.assign(state, canCast(state));

    }
    let fighter = (name) => {
        let state = {
            name: name,
            health: 100,
            stamina: 100
        }

        return Object.assign(state, canFigth(state));
    }

   


            return { mage: mage, fighter: fighter };
        
    }
    let create = solve();

const scorcher = create.mage("Scorcher");

scorcher.cast("fireball")

scorcher.cast("thunder")

scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");

scorcher2.fight()

console.log(scorcher2.stamina);

console.log(scorcher.mana);