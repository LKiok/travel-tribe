let travelDestinations = document.querySelector(".button")
travelDestinations.addEventListener("click",()=>{
  let destinations = document.querySelector(".div")
  destinations.style.display="grid";
  console.log(destinations);
})

let destinations = document.querySelector(".div");
let isShowing = false;

travelDestinations.addEventListener("click", () => {
  if (isShowing) {
    destinations.style.display = "none";
    isShowing = false;
  } else {
    destinations.style.display = "grid";
    isShowing = true;
  }
});

const displayDestinations = (tribe) => {
    let travel = document.createElement("div")
    travel.className = "destination";

    travel.innerHTML = `
    <h3>${tribe.name}</h3>
    <img src="${tribe.image}" >
    <p>${tribe.description}</p>
    <p>${tribe.cost}</p>` 

    document.querySelector(".div").appendChild(travel);
}
const searchDestinations = () => {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const destinations = document.querySelectorAll(".destination");

  destinations.forEach(destination => {
    const name = destination.querySelector("h3").innerText.toLowerCase();
    const description = destination.querySelector("p:nth-child(3)").innerText.toLowerCase();

    if (name.includes(searchInput) || description.includes(searchInput)) {
      destination.style.display = "grid";
    } else {
      destination.style.display = "none";
    }
  });
};

document.getElementById("searchInput").addEventListener("keyup", searchDestinations);


const fetchData = () => {
    fetch('http://localhost:3000/destinations')
    .then(response => response.json())
    .then(data => data.forEach(tribe =>displayDestinations(tribe)))
    .catch(error => console.log('Error:', error));
}
fetchData();