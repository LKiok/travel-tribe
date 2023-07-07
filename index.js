// Select the 'Travel destinations' button
let travelDestinations = document.querySelector(".button");

// Add click event listener to the button
travelDestinations.addEventListener("click", () => {
  // Select the destinations container
  let destinations = document.querySelector(".div");
  destinations.style.display = "grid"; // Show the destinations
  console.log(destinations);
});

// Select the destinations container
let destinations = document.querySelector(".div");
let isShowing = false;

// Add click event listener to the button for toggle functionality
travelDestinations.addEventListener("click", () => {
  if (isShowing) {
    destinations.style.display = "none"; // Hide the destinations
    isShowing = false;
  } else {
    destinations.style.display = "grid"; // Show the destinations
    isShowing = true;
  }
});

// Function to display destination information
const displayDestinations = (tribe) => {
  let travel = document.createElement("div");
  travel.className = "destination";

  // Populate the destination HTML
  travel.innerHTML = `
    <h3>${tribe.name}</h3>
    <img src="${tribe.image}" >
    <p>${tribe.description}</p>
    <p>${tribe.cost}</p>`;

  document.querySelector(".div").appendChild(travel);
};

// Function to search and filter destinations
const searchDestinations = () => {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const destinations = document.querySelectorAll(".destination");

  destinations.forEach((destination) => {
    const name = destination.querySelector("h3").innerText.toLowerCase();
    const description = destination.querySelector("p:nth-child(3)").innerText.toLowerCase();

    if (name.includes(searchInput) || description.includes(searchInput)) {
      destination.style.display = "grid"; // Show matching destinations
    } else {
      destination.style.display = "none"; // Hide non-matching destinations
    }
  });
};

// Add keyup event listener to the search input for live searching
document.getElementById("searchInput").addEventListener("keyup", searchDestinations);

// Function to fetch data from the server and display destinations
const fetchData = () => {
  fetch('http://localhost:3000/destinations')
    .then(response => response.json())
    .then(data => data.forEach(tribe => displayDestinations(tribe)))
    .catch(error => console.log('Error:', error));
};

// Fetch data and display destinations
fetchData();