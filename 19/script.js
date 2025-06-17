async function name() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Almaty&units=metric&appid=d07d3acb2517ed0570384eeaf465e4f1');
        const data = await response.json();

        console.log(data.weather[0].main);
        
    } catch (error) {
        console.error(error);
        
    }
}

name()