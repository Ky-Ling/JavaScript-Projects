/*
 * @Date: 2022-01-21 20:08:23
 * @LastEditors: GC
 * @LastEditTime: 2022-01-22 20:48:55
 * @FilePath: \2-A Weather App\app.js
 */

// Get the longitude and the latitude from our location
window.addEventListener("load", () => {
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector(".temperature span");

    if(navigator.geolocation) {
        // Get the information based on the API
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&key=V697WQ8TGW8437FR7D7VY2GB4&contentType=json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data);
                
                const { temp, icon } = data.currentConditions;
                
                // Set DOM elements form the API
                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = data.description;
                locationTimezone.textContent = data.timezone;

                // Formula for celsius
                let celsius = (temp - 32) * (5 / 9);

                // Set icon
                setIcons(icon, document.querySelector(".icon"));

                // Change temperature to Celsius/Farenheit
                temperatureSection.addEventListener("click", () => {
                    if (temperatureSpan.textContent === "F") {
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = Math.floor(celsius);
                        
                    } else {
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent = temp;
                    }
                })
            })
            .catch(err => {
                console.error(err);
            });
    } 
    
    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });

        // Look for every line and when it finds every line, it is gonna replace it with the underscore
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();

        skycons.play();
         
        return skycons.set(iconID, Skycons[currentIcon]);


    }
});