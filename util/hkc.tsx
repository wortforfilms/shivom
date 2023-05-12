
// First, we need to declare a class to represent our Astro Chart. 
export const snake = (str: any) => {
  const s = str && `${str}`?.replaceAll("_", " ")
    .split(" ")
    .map((st: string, index: number) => {
      return `${st.slice(0, 1).toUpperCase()}${st.slice(1)} `;
    });
  return s;
};


export const paraFirst = (str: any) => {
  const s = str?.slice(0,1).toUpperCase()
  const b=str?.slice(1)
    
  const i=`${s}${b} `
      return i;
    

};

class AstroCh {
  // We'll need to declare some fields to store data
  public planets: Planet[]
  public userWeight: number

  // We need to create a constructor to initialize our object
  constructor (planets: Planet[], userWeight: number) {
      this.planets = planets
      this.userWeight = userWeight
  }

  // Now, we need to create a method that will calculate the gravitational pull of each planet and display it on the chart
  public calculateGravitationalPull(): void {
      // Loop through the planets array
      for (let i = 0; i < this.planets.length; i++) {
          // Calculate the gravitational pull of each planet
          let pull = this.planets[i].mass * this.userWeight
          // Display the gravitational pull on the chart
          console.log(`Gravitational pull of ${this.planets[i].name}: ${pull}`)
      }
  }
}

// Next, we need to declare a class to represent a Planet
class Planet {
  // We'll need to declare some fields to store data
  public name: string
  public mass: number

  // We need to create a constructor to initialize our object
  constructor (name: string, mass: number) {
      this.name = name
      this.mass = mass
  }
}

// Now, we need to create an instance of the Astro Chart class
let planets = [
  new Planet('Mercury', 0.37),
  new Planet('Venus', 0.88),
  new Planet('Earth', 1),
  new Planet('Mars', 0.11),
  new Planet('Jupiter', 2.64),
  new Planet('Saturn', 1.15),
  new Planet('Uranus', 0.92),
  new Planet('Neptune', 1.19)
]

let AstroCh0 = new AstroCh(planets, 68) // 68 is the user's weight

// Finally, we need to call the calculateGravitationalPull method
AstroCh0.calculateGravitationalPull()