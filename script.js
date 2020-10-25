window.addEventListener("load", function() {
    let astro = "";
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
            response.json().then(function(json) {
                json.forEach(element => {
                astro += `
                <div class="astronaut">
                    <h3>${element.firstName} ${element.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${element.hoursInSpace}</li>
                        <li>Active: ${element.active}</li>
                        <li>Skills: ${element.skills.join(', ')}</li>
                    </ul>
                    <img src= ${element.picture} class="avatar">
                </div>`
            });

            destination = document.getElementById('container');
            destination.innerHTML = `${astro}`;
        });
    });
});