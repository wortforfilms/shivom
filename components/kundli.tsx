interface Planet {
  name: string;
  nakshatra: Nakshatra;
}

export enum Nakshatra {
  ASHWINI = 'Ashwini',
  BHARANI = 'Bharani',
  KRITTIKA = 'Krittika',
  ROHINI = 'Rohini',
  MRIGASHIRSHA = 'Mrigashirsha',
  ARDRA = 'Ardra',
  PUNARVASU = 'Punarvasu',
  PUSHYA = 'Pushya',
  ASHLESHA = 'Ashlesha',
  MAGHA = 'Magha',
  PURVA_PHALGUNI = 'Purva Phalguni',
  UTTARA_PHALGUNI = 'Uttara Phalguni',
  HASTA = 'Hasta',
  CHITRA = 'Chitra',
  SWATI = 'Swati',
  VISHAKHA = 'Vishakha',
  ANURADHA = 'Anuradha',
  JYESHTHA = 'Jyeshtha',
  MOOLA = 'Moola',
  PURVA_ASHADHA = 'Purva Ashadha',
  UTTARA_ASHADHA = 'Uttara Ashadha',
  SHRAVANA = 'Shravana',
  DHANISHTA = 'Dhanishta',
  SHATABHISHA = 'Shatabhisha',
  PURVA_BHADRAPADA = 'Purva Bhadrapada',
  UTTARA_BHADRAPADA = 'Uttara Bhadrapada',
  REVATI = 'Revati'
}

export interface Kundali {
  sun: Planet;
  moon: Planet;
  mercury: Planet;
  venus: Planet;
  mars: Planet;
  jupiter: Planet;
  saturn: Planet;
  uranus: Planet;
  neptune: Planet;
  pluto: Planet;
}

export const Kundali0 = [
  // "sun",
  // "moon",
  "mercury",
  "earth",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
]

// Sample birth information
const birthDate = new Date('1990-01-01T05:30:00.000Z');
const birthLatitude = 28.6139; // New Delhi
const birthLongitude = 77.2090;

// function calculatePlanetPosition(planetName: string, birthDate: Date, birthLatitude: number, birthLongitude: number): number {
//   // Perform calculations to determine planet position based on birth information
//   // This can involve complex astronomical calculations, and may require the use of external libraries or APIs

//   // For the sake of simplicity, we'll use random numbers as planet positions in this example
//   return Math.floor(Math.random() * 360);
// }

function calculatePlanetPosition(planetName: string, birthDate: Date, birthLatitude: number, birthLongitude: number): Nakshatra {
  // Perform calculations to determine planet position based on birth information
  // This can involve complex astronomical calculations, and may require the use of external libraries or APIs

  // For the sake of simplicity, we'll use a random Nakshatra as planet position in this example
  const nakshatras = Object.values(Nakshatra);
  return nakshatras[Math.floor(Math.random() * nakshatras.length)];
}

function createKundali(birthDate: Date, birthLatitude: number, birthLongitude: number): Kundali {
  return {
    sun: { name: 'Sun', nakshatra: calculatePlanetPosition('Sun', birthDate, birthLatitude, birthLongitude) },
    moon: { name: 'Moon', nakshatra: calculatePlanetPosition('Moon', birthDate, birthLatitude, birthLongitude) },
    mercury: { name: 'Mercury', nakshatra: calculatePlanetPosition('Mercury', birthDate, birthLatitude, birthLongitude) },
    venus: { name: 'Venus', nakshatra: calculatePlanetPosition('Venus', birthDate, birthLatitude, birthLongitude) },
    mars: { name: 'Mars', nakshatra: calculatePlanetPosition('Mars', birthDate, birthLatitude, birthLongitude) },
    jupiter: { name: 'Jupiter', nakshatra: calculatePlanetPosition('Jupiter', birthDate, birthLatitude, birthLongitude) },
    saturn: { name: 'Saturn', nakshatra: calculatePlanetPosition('Saturn', birthDate, birthLatitude, birthLongitude) },
    uranus: { name: 'Uranus', nakshatra: calculatePlanetPosition('Uranus', birthDate, birthLatitude, birthLongitude) },
    neptune: { name: 'Neptune', nakshatra: calculatePlanetPosition('Neptune', birthDate, birthLatitude, birthLongitude) },
    pluto: { name: 'Pluto', nakshatra: calculatePlanetPosition('Pluto', birthDate, birthLatitude, birthLongitude) }
  };
}

// Usage example
const kundali = createKundali(birthDate, birthLatitude, birthLongitude);
console.log(kundali);


