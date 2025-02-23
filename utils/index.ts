export async function fetchCars() {
    const headers = {
      'X-RapidAPI-Key': '855951fcaemshb673d6d70f6ac51p18fd7fjsn12cde2d6f126',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  
    const response = await fetch(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
      {
        method: 'GET',
        headers: headers,
      }
    );
  
    const result = await response.json(); // Using json() instead of text()
    return result;
  }

export const calculateCarRent = (city_mpg: number, year: number) => {   
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}