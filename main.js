fetch("maps.json")
    .then(myData => myData.json())
    .then(jsonData => createCard(jsonData))

function createCard(jsonData) {
    const list = document.querySelector(".listing");
    for (let i = 0; i < jsonData.length; i++) {
        list.innerHTML +=
            `
        <li>
        <h2>${jsonData[i].name}</h2>
        <div class="body">
        <img src="${jsonData[i].image}">
        </img>
        <p>
        ${jsonData[i].type}
        </p>
        <p>
        ${jsonData[i].description}
        </p>
        
        </div>
        <div class="cta">
        <a href="">klik hier!</a>
        </div>
        </li>
        `
    };
}