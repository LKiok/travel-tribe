# Travel Tribe Website

This is a simple website for Travel Tribe, showcasing travel destinations and recommendations.
##Table of Contents
- Description
- Technologies Used
- Installation
- Usage
- Additional Functionality
- Code Snippets
- Author
  
## Description

The Travel Tribe website is designed to provide users with information about various travel destinations and recommendations. It consists of different sections, each serving a specific purpose. Here's an overview of the sections:

- **Section 1: Navigation**: Displays the website logo and a navigation menu with links to different pages.
- **Section 2: Search and Buttons**: Allows users to search for destinations and includes buttons for triggering specific actions.
- **Section 3: Introduction**: Presents an inspiring quote about traveling and an image to capture attention.
- **Section 4: Gallery**: Showcases a collection of captivating images representing different travel destinations.
- **Section 5: Destinations**: Displays a list of travel destinations. The content is dynamically generated based on data fetched from a server.
- **Section 6: Travel Recommendations**: Provides recommendations for popular travel destinations.
- **Footer**: Contains contact information for Travel Tribe.

## Technologies Used

- HTML- used to create structure of the website
- CSS- used to style the website
- JavaScript- use to create the functionality of the website

## Usage

To use the Travel Tribe website:

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.

## Additional Functionality

The website incorporates the following additional JavaScript functionality:

- **Toggle Destinations**: Clicking the "Travel destinations" button reveals or hides the destinations container.
- **Dynamic Destination Display**: The destinations are fetched from a server and displayed dynamically on the website.
- **Live Search**: Users can search for specific destinations using the search input field, which filters the displayed destinations in real-time.

## Author
- Letia Kiok

## Code Snippets

Here are some code snippets that demonstrate the additional functionality:

```javascript
// Select the 'Travel destinations' button
let travelDestinations = document.querySelector(".button");

// Add click event listener to the button
travelDestinations.addEventListener("click", () => {
  // Select the destinations container
  let destinations = document.querySelector(".div");
  destinations.style.display = "grid"; // Show the destinations
  console.log(destinations);
});
