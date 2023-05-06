// Create interface to define Astro Chart
interface AstroChart {
  name: string,
  dateOfBirth: Date,
  sunSign: string,
  moonSign: string,
  ascendant: string
}

// Create a function to generate Astro Chart
function generateAstroChart(astroData: AstroChart): AstroChart {
  let chartObject: AstroChart = {
      name: astroData.name,
      dateOfBirth: astroData.dateOfBirth,
      sunSign: getSunSign(astroData.dateOfBirth),
      moonSign: getMoonSign(astroData.dateOfBirth),
      ascendant: getAscendant(astroData.dateOfBirth)
  };

  return chartObject;
}

// Function to get Sun Sign based on Date Of Birth
function getSunSign(dob: Date): string {
  // Sun sign calculation logic
  return 'Sun Sign';
}

// Function to get Moon Sign based on Date Of Birth
function getMoonSign(dob: Date): string {
  // Moon sign calculation logic
  return 'Moon Sign';
}

// Function to get Ascendant based on Date Of Birth
function getAscendant(dob: Date): string {
  // Ascendant calculation logic
  return 'Ascendant';
}

// Example User Data
let userData: AstroChart = {
  name: 'John Doe',
  dateOfBirth: new Date(),
  sunSign: '',
  moonSign: '',
  ascendant: ''
};

// Generate Astro Chart for user
let userAstroChart = generateAstroChart(userData);
console.log(userAstroChart);