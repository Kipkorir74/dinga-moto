
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