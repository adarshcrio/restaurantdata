import express from "express";
import cors from "cors";
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const corsOptions = {
  origin: '*',
  credentials:true
}
app.use(cors(corsOptions));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); 
app.use(express.static("public"));


const port = process.env.PORT||6000; // You can change the port as needed

const data = {
  "States": ["California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan", "Nevada", "Arizona", "Washington", "Oregon", "Colorado", "Virginia", "Massachusetts", "Indiana", "Tennessee", "Missouri"],
  "Cities": {
    "California": ["San Diego", "San Francisco", "Los Angeles", "Sacramento"],
    "Texas": ["Houston", "Dallas", "Austin", "San Antonio"],
    "Florida": ["Tampa", "Orlando", "Miami", "Jacksonville"],
    "New York": ["Rochester", "Buffalo", "New York City", "Albany"],
    "Illinois": ["Chicago", "Springfield"],
    "Pennsylvania": ["Philadelphia", "Pittsburgh", "Harrisburg"],
    "Ohio": ["Columbus", "Cleveland", "Cincinnati"],
    "Georgia": ["Savannah", "Augusta", "Atlanta", "Macon"],
    "North Carolina": ["Raleigh", "Charlotte", "Durham"],
    "Michigan": ["Grand Rapids", "Detroit", "Lansing"],
    "Nevada": ["Las Vegas", "Reno", "Carson City"],
    "Arizona": ["Phoenix", "Tucson", "Scottsdale"],
    "Washington": ["Seattle", "Spokane"],
    "Oregon": ["Portland", "Salem"],
    "Colorado": ["Denver", "Boulder"],
    "Virginia": ["Richmond", "Virginia Beach"],
    "Massachusetts": ["Boston", "Cambridge"],
    "Indiana": ["Indianapolis", "Fort Wayne"],
    "Tennessee": ["Nashville", "Memphis"],
    "Missouri": ["Kansas City", "St. Louis"]
  },
  "Restaurants": [
    {
      "restaurantName": "California Bistro",
      "rating": 4.1,
      "address": "853 Main St, San Diego, California",
      "city": "San Diego",
      "state": "California"
    },
    {
      "restaurantName": "Ocean View Restaurant",
      "rating": 4.2,
      "address": "557 Main St, San Diego, California",
      "city": "San Diego",
      "state": "California"
    },
    {
      "restaurantName": "The Grand Steakhouse",
      "rating": 4.7,
      "address": "331 Main St, Dallas, Texas",
      "city": "Dallas",
      "state": "Texas"
    },
    {
      "restaurantName": "Tampa Bay Seafood",
      "rating": 4.1,
      "address": "858 Main St, Tampa, Florida",
      "city": "Tampa",
      "state": "Florida"
    },
    {
      "restaurantName": "Orlando's Finest",
      "rating": 3.7,
      "address": "937 Main St, Orlando, Florida",
      "city": "Orlando",
      "state": "Florida"
    },
    {
      "restaurantName": "Orlando Art Café",
      "rating": 3.8,
      "address": "286 Main St, Orlando, Florida",
      "city": "Orlando",
      "state": "Florida"
    },
    {
      "restaurantName": "Miami Sports Grill",
      "rating": 3.9,
      "address": "142 Main St, Miami, Florida",
      "city": "Miami",
      "state": "Florida"
    },
    {
      "restaurantName": "Miami Summit & Eats",
      "rating": 4.4,
      "address": "668 Main St, Miami, Florida",
      "city": "Miami",
      "state": "Florida"
    },
    {
      "restaurantName": "Buffalo Art Bistro",
      "rating": 4.5,
      "address": "178 Main St, Buffalo, New York",
      "city": "Buffalo",
      "state": "New York"
    },
    {
      "restaurantName": "Buffalo Book & Dine",
      "rating": 4.9,
      "address": "852 Main St, Buffalo, New York",
      "city": "Buffalo",
      "state": "New York"
    },
    {
      "restaurantName": "Chicago Reads & Eats",
      "rating": 4.4,
      "address": "470 Main St, Chicago, Illinois",
      "city": "Chicago",
      "state": "Illinois"
    },
    {
      "restaurantName": "Chicago Art Café",
      "rating": 4.1,
      "address": "919 Main St, Chicago, Illinois",
      "city": "Chicago",
      "state": "Illinois"
    },
    {
      "restaurantName": "Philly Book Bound",
      "rating": 4.7,
      "address": "625 Main St, Philadelphia, Pennsylvania",
      "city": "Philadelphia",
      "state": "Pennsylvania"
    },
    {
      "restaurantName": "Philly Reading Room",
      "rating": 4.6,
      "address": "463 Main St, Philadelphia, Pennsylvania",
      "city": "Philadelphia",
      "state": "Pennsylvania"
    },
    {
      "restaurantName": "Columbus Tech Café",
      "rating": 4.5,
      "address": "850 Main St, Columbus, Ohio",
      "city": "Columbus",
      "state": "Ohio"
    },
    {
      "restaurantName": "Augusta Startup Spot",
      "rating": 3.7,
      "address": "580 Main St, Augusta, Georgia",
      "city": "Augusta",
      "state": "Georgia"
    },
    {
      "restaurantName": "Raleigh Sports Bar",
      "rating": 4.2,
      "address": "409 Main St, Raleigh, North Carolina",
      "city": "Raleigh",
      "state": "North Carolina"
    },
    {
      "restaurantName": "Detroit Art Lounge",
      "rating": 4.0,
      "address": "761 Main St, Detroit, Michigan",
      "city": "Detroit",
      "state": "Michigan"
    },
    {
      "restaurantName": "Detroit Tech Hub",
      "rating": 3.9,
      "address": "829 Main St, Detroit, Michigan",
      "city": "Detroit",
      "state": "Michigan"
    },
    {
      "restaurantName": "Vegas Music Kitchen",
      "rating": 4.8,
      "address": "123 Main St, Las Vegas, Nevada",
      "city": "Las Vegas",
      "state": "Nevada"
    },
    {
      "restaurantName": "Reno Food House",
      "rating": 4.6,
      "address": "456 Main St, Reno, Nevada",
      "city": "Reno",
      "state": "Nevada"
    },
    {
      "restaurantName": "Phoenix Tech Eats",
      "rating": 4.3,
      "address": "789 Main St, Phoenix, Arizona",
      "city": "Phoenix",
      "state": "Arizona"
    },
    {
      "restaurantName": "Tucson Art Kitchen",
      "rating": 4.1,
      "address": "101 Main St, Tucson, Arizona",
      "city": "Tucson",
      "state": "Arizona"
    },
    {
      "restaurantName": "Seattle Tech Diner",
      "rating": 4.0,
      "address": "123 Main St, Seattle, Washington",
      "city": "Seattle",
      "state": "Washington"
    },
    {
      "restaurantName": "Spokane Art Café",
      "rating": 4.2,
      "address": "456 Main St, Spokane, Washington",
      "city": "Spokane",
      "state": "Washington"
    },
    {
      "restaurantName": "Portland Food Market",
      "rating": 4.5,
      "address": "789 Main St, Portland, Oregon",
      "city": "Portland",
      "state": "Oregon"
    },
    {
      "restaurantName": "Salem Music Café",
      "rating": 4.7,
      "address": "101 Main St, Salem, Oregon",
      "city": "Salem",
      "state": "Oregon"
    },
    {
      "restaurantName": "Denver Tech Tavern",
      "rating": 4.3,
      "address": "123 Main St, Denver, Colorado",
      "city": "Denver",
      "state": "Colorado"
    },
    {
      "restaurantName": "Boulder Art House",
      "rating": 4.1,
      "address": "456 Main St, Boulder, Colorado",
      "city": "Boulder",
      "state": "Colorado"
    },
    {
      "restaurantName": "Richmond Food Fest",
      "rating": 4.6,
      "address": "789 Main St, Richmond, Virginia",
      "city": "Richmond",
      "state": "Virginia"
    },
    {
      "restaurantName": "Virginia Beach Music Spot",
      "rating": 4.8,
      "address": "101 Main St, Virginia Beach, Virginia",
      "city": "Virginia Beach",
      "state": "Virginia"
    },
    {
      "restaurantName": "Boston Tech Bites",
      "rating": 4.2,
      "address": "123 Main St, Boston, Massachusetts",
      "city": "Boston",
      "state": "Massachusetts"
    },
    {
      "restaurantName": "Cambridge Art Lounge",
      "rating": 4.4,
      "address": "456 Main St, Cambridge, Massachusetts",
      "city": "Cambridge",
      "state": "Massachusetts"
    },
    {
      "restaurantName": "Indy Food Bash",
      "rating": 4.5,
      "address": "789 Main St, Indianapolis, Indiana",
      "city": "Indianapolis",
      "state": "Indiana"
    },
    {
      "restaurantName": "Fort Wayne Music & More",
      "rating": 4.7,
      "address": "101 Main St, Fort Wayne, Indiana",
      "city": "Fort Wayne",
      "state": "Indiana"
    },
    {
      "restaurantName": "Nashville Tech Place",
      "rating": 4.3,
      "address": "123 Main St, Nashville, Tennessee",
      "city": "Nashville",
      "state": "Tennessee"
    },
    {
      "restaurantName": "Memphis Art Scene",
      "rating": 4.1,
      "address": "456 Main St, Memphis, Tennessee",
      "city": "Memphis",
      "state": "Tennessee"
    },
    {
      "restaurantName": "Kansas City Food Court",
      "rating": 4.6,
      "address": "789 Main St, Kansas City, Missouri",
      "city": "Kansas City",
      "state": "Missouri"
    },
    {
      "restaurantName": "St. Louis Music House",
      "rating": 4.8,
      "address": "101 Main St, St. Louis, Missouri",
      "city": "St. Louis",
      "state": "Missouri"
    },
    {
      "restaurantName": "San Francisco Food Fest",
      "rating": 4.0,
      "address": "111 Main St, San Francisco, California",
      "city": "San Francisco",
      "state": "California"
    },
    {
      "restaurantName": "LA Music Night",
      "rating": 4.1,
      "address": "222 Main St, Los Angeles, California",
      "city": "Los Angeles",
      "state": "California"
    },
    {
      "restaurantName": "Sacramento Art Gala",
      "rating": 4.2,
      "address": "333 Main St, Sacramento, California",
      "city": "Sacramento",
      "state": "California"
    },
    {
      "restaurantName": "Houston Summit Diner",
      "rating": 4.3,
      "address": "444 Main St, Houston, Texas",
      "city": "Houston",
      "state": "Texas"
    },
    {
      "restaurantName": "Austin Food Expo",
      "rating": 4.0,
      "address": "555 Main St, Austin, Texas",
      "city": "Austin",
      "state": "Texas"
    },
    {
      "restaurantName": "San Antonio Tech Gathering",
      "rating": 4.1,
      "address": "666 Main St, San Antonio, Texas",
      "city": "San Antonio",
      "state": "Texas"
    },
    {
      "restaurantName": "Jacksonville Art Show",
      "rating": 4.0,
      "address": "777 Main St, Jacksonville, Florida",
      "city": "Jacksonville",
      "state": "Florida"
    },
    {
      "restaurantName": "Rochester Book Expo",
      "rating": 4.2,
      "address": "888 Main St, Rochester, New York",
      "city": "Rochester",
      "state": "New York"
    },
    {
      "restaurantName": "NYC Music Fest",
      "rating": 4.4,
      "address": "999 Main St, New York City, New York",
      "city": "New York City",
      "state": "New York"
    },
    {
      "restaurantName": "Albany Food Gala",
      "rating": 4.0,
      "address": "100 Main St, Albany, New York",
      "city": "Albany",
      "state": "New York"
    },
    {
      "restaurantName": "Springfield Outdoor Expo",
      "rating": 3.9,
      "address": "101 Main St, Springfield, Illinois",
      "city": "Springfield",
      "state": "Illinois"
    },
    {
      "restaurantName": "Pittsburgh Tech Seminar",
      "rating": 4.2,
      "address": "102 Main St, Pittsburgh, Pennsylvania",
      "city": "Pittsburgh",
      "state": "Pennsylvania"
    },
    {
      "restaurantName": "Harrisburg Startup Hub",
      "rating": 4.1,
      "address": "103 Main St, Harrisburg, Pennsylvania",
      "city": "Harrisburg",
      "state": "Pennsylvania"
    },
    {
      "restaurantName": "Cleveland Food Fest",
      "rating": 4.3,
      "address": "104 Main St, Cleveland, Ohio",
      "city": "Cleveland",
      "state": "Ohio"
    },
    {
      "restaurantName": "Cincinnati Music Fest",
      "rating": 4.5,
      "address": "105 Main St, Cincinnati, Ohio",
      "city": "Cincinnati",
      "state": "Ohio"
    },
    {
      "restaurantName": "Savannah Art Fair",
      "rating": 4.1,
      "address": "106 Main St, Savannah, Georgia",
      "city": "Savannah",
      "state": "Georgia"
    },
    {
      "restaurantName": "Atlanta Tech Conference",
      "rating": 4.3,
      "address": "107 Main St, Atlanta, Georgia",
      "city": "Atlanta",
      "state": "Georgia"
    },
    {
      "restaurantName": "Macon Food Fair",
      "rating": 4.0,
      "address": "108 Main St, Macon, Georgia",
      "city": "Macon",
      "state": "Georgia"
    },
    {
      "restaurantName": "Charlotte Comedy Show",
      "rating": 3.9,
      "address": "109 Main St, Charlotte, North Carolina",
      "city": "Charlotte",
      "state": "North Carolina"
    },
    {
      "restaurantName": "Book Fair",
      "rating": 4.1,
      "address": "110 Main St, Durham, North Carolina",
      "city": "Durham",
      "state": "North Carolina"
    },
    {
      "restaurantName": "Food Truck Fest",
      "rating": 4.2,
      "address": "111 Main St, Grand Rapids, Michigan",
      "city": "Grand Rapids",
      "state": "Michigan"
    },
    {
      "restaurantName": "Tech Expo",
      "rating": 4.0,
      "address": "112 Main St, Lansing, Michigan",
      "city": "Lansing",
      "state": "Michigan"
    },
    {
      "restaurantName": "Art Expo",
      "rating": 4.1,
      "address": "113 Main St, Carson City, Nevada",
      "city": "Carson City",
      "state": "Nevada"
    },
    {
      "restaurantName": "Startup Pitch",
      "rating": 4.3,
      "address": "114 Main St, Scottsdale, Arizona",
      "city": "Scottsdale",
      "state": "Arizona"
    },
    {
      "restaurantName": "Developer Conference",
      "rating": 4.3,
      "address": "250 Main St, Los Angeles, California",
      "city": "Los Angeles",
      "state": "California"
    },
    {
      "restaurantName": "Culinary Carnival",
      "rating": 4.5,
      "address": "280 Main St, Austin, Texas",
      "city": "Austin",
      "state": "Texas"
    },
    {
      "restaurantName": "Art & Craft Fest",
      "rating": 4.2,
      "address": "390 Main St, Orlando, Florida",
      "city": "Orlando",
      "state": "Florida"
    },
    {
      "restaurantName": "Community Showcase",
      "rating": 4.1,
      "address": "410 Main St, Spokane, Washington",
      "city": "Spokane",
      "state": "Washington"
    },
    {
      "restaurantName": "Indoor Market",
      "rating": 4.0,
      "address": "560 Main St, Portland, Oregon",
      "city": "Portland",
      "state": "Oregon"
    }

  ]
};

// Get all states
app.get("/states", (req, res) => {
  res.json(data.States);
});

// Get all cities for a specific state
app.get("/cities/:state", (req, res) => {
  const state = req.params.state;
  const cities = data.Cities[state];
  if (cities) {
    res.json(cities);
  } else {
    res.status(404).json({ error: "State not found" });
  }
});

// Get restaurants based on state and city
app.get("/restaurants", (req, res) => {
  const { state, city } = req.query;
  console.log(req.query);
  const filteredRestaurants = data.Restaurants.filter(
    (restaurant) => restaurant.state === state && restaurant.city === city
  );
  
  res.json(filteredRestaurants);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on PORT:${port}`);
});
