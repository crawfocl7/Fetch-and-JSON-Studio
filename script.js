window.addEventListener("load", function() {
    let astro = "";
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
            response.json().then(function(json) {
                // const div = document.getElementById('container');
                json.forEach(element => {
                // for(let i = 0; i < json.results.length; i++) {
                astro += `

                <h3>${element.firstName} ${element.lastName}</h3>
                <li>Hours in space: ${element.hoursInSpace}</li>
                <li>Active: ${element.active}</li>
                <li>Skills: ${element.skills}</li>`
            });

            destination = document.getElementById('container');
            destination.innerHTML = `<ul>${astro}</ul>`;
        });
    });
});