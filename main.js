var cards = document.querySelector(".card")
var btn = document.getElementById("btn1")

var say = 27;
const film = () => {
    fetch("https://api.tvmaze.com/shows")
        .then(res => res.json())
        .then(datas => {

            for (let i = 0; i < say; i++) {
                const element = datas[i];
                cards.innerHTML += `
            <div class="imgg" id="bir" style="width: 18rem;">
            <img src="${element.image.medium}" class="card-img-top" alt="...">
            <div class="card-body avarage">
                <h5 class="card-title">${element.name}</h5>
                <p>${element.rating.average}/10</p>
            </div>
            <div class="cards2">
                <p class="date"><strong>Day:</strong>${element.schedule.days} </p>
                <p class="date"><strong>Time:</strong> ${element.schedule.time}</p>
            </div>
            </div>
            
            `;

            }
        })
        .catch(error => console.error("Error fetching data:", error));
}
film();

btn.addEventListener("click", function () {
    say += 10;
    film()
    console.log(say);
});


