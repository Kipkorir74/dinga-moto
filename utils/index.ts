
export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '429c064d9dmsh2d375b83fcd343fp1f23dejsn77f2494ea93f',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    });
    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 45; // Base rental price per day in dollars
    const mileageFactor = 0.2; // Additional rate per mile driven
    const ageFactor = 0.07; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };