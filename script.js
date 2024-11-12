// Select menu buttons using querySelector
const rulesButton = document.querySelector("#rules");
const startGameButton = document.querySelector("#startGame");

// Select difficulty buttons using querySelector
const easyButton = document.querySelector("#easy");
const hardButton = document.querySelector("#hard");

// Select the close button and rules section
const closeRulesButton = document.querySelector("#closeRules");
const rulesSection = document.querySelector("#rulesSection");

let currentMapData;

// Player name and difficulty level
let playerName;
let gridSize;

// Global variables for timer
let timer;
let elapsedTime = 0;

// Function to handle active state for any button group
function setActiveButton(button, buttonGroup) {
    console.log(`Button clicked: ${button.id}`); // Log to confirm click

    // Remove 'active' class from all buttons in the group
    buttonGroup.forEach(btn => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");
}

// Function to show rules
function showRules() {
    rulesSection.style.display = "flex"; // Show rules section
}

// Function to hide rules
function hideRules() {
    rulesSection.style.display = "none"; // Hide rules section
}

// Function to start the game
let game_container = document.querySelector(".game_container")
let main_page = document.querySelector(".main_page")
function startGame() {  
    // Get the player's name and selected difficulty
    const playerName = document.querySelector("#playerName").value;
    const gridSize = document.querySelector(".difficulty-btn.active")?.id; // Get the active difficulty button

    // Check if the player name is entered and difficulty is selected
    if (!playerName || !gridSize) {
        return; // Exit the function if validation fails without doing anything
    }
    document.body.style.backgroundColor = "rgba(250, 245, 223, 0.9)";

    game_container.hidden = false;
    main_page.hidden = true
    
    document.querySelector("#menuSection").hidden = true
    

    document.querySelector("#playerNameDisplay").innerText = `Player: ${playerName}`;

    // Create the grid based on the selected difficulty
    createGrid(gridSize === "easy" ? 5 : 7); // Assuming 5x5 for easy and 7x7 for hard

    // Start the timer
    startTimer();
}



// Function to start the timer
function startTimer() {
    // Reset elapsed time
    elapsedTime = 0;

    // Clear any existing timer to avoid duplicates
    clearInterval(timer);

    // Update the timer every second
    timer = setInterval(() => {
        elapsedTime++; // Increment elapsed time
        document.querySelector("#timerDisplay").innerText = `Time: ${elapsedTime}`; // Update timer display
    }, 1000);
}

// Define map data for easy (5x5)

const easymap1 =  // easy map 1
        [
            [{ name: "empty", angle: 0, path: [] }, 
            { name: "mountain", angle: 90, path: ["left", "down"] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "oasis", angle: 0, path: [] }],
            
            [{ name: "empty", angle: 0, path: [] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "bridge", angle: 0, path: ["up", "down"] }, 
            { name: "oasis", angle: 0, path: [] }],
            
            [{ name: "bridge", angle: 0, path: ["up", "down"] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "mountain", angle: 180, path: ["up", "left"] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "empty", angle: 0, path: [] }],
            
            [{ name: "empty", angle: 0, path: [] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "oasis", angle: 0, path: [] }, 
            { name: "empty", angle: 0, path: [] }],
            
            [{ name: "empty", angle: 0, path: [] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "mountain", angle: 270, path: ["up", "right"] }, 
            { name: "empty", angle: 0, path: [] }, 
            { name: "empty", angle: 0, path: [] }]
        ];


const easymap2 =  // easy map 2
    [
        [{ name: "oasis", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "bridge", angle: 90, path: ["left", "right"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "mountain", angle: 180, path: ["up", "left"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "mountain", angle: 180, path: ["up", "left"] }],
         
        [{ name: "bridge", angle: 0, path: ["up", "down"] }, 
         { name: "oasis", angle: 0, path: [] }, 
         { name: "mountain", angle: 270, path: ["up", "right"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "oasis", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }]
    ];


const easymap3 =  // easy map 3
    [
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "bridge", angle: 90, path: ["left", "right"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "bridge", angle: 0, path: ["up", "down"] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "mountain", angle: 180, path: ["up", "left"] }, 
         { name: "bridge", angle: 0, path: ["up", "down"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "oasis", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "bridge", angle: 90, path: ["left", "right"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "mountain", angle: 180, path: ["up", "left"] }]
    ];


const easymap4 =  // easy map 4
    [
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "bridge", angle: 90, path: ["left", "right"] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "bridge", angle: 0, path: ["up", "down"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "mountain", angle: 90, path: ["left", "down"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "mountain", angle: 90, path: ["left", "down"] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "oasis", angle: 0, path: [] }, 
         { name: "mountain", angle: 270, path: ["up", "right"] }, 
         { name: "empty", angle: 0, path: [] }]
    ];
const easymap5 =  // easy map 5
    [
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "bridge", angle: 90, path: ["left", "right"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "mountain", angle: 0, path: ["right", "down"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "bridge", angle: 0, path: ["up", "down"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "mountain", angle: 270, path: ["up", "right"] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "bridge", angle: 0, path: ["up", "down"] }, 
         { name: "oasis", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }],
         
        [{ name: "empty", angle: 0, path: [] }, 
         { name: "mountain", angle: 180, path: ["up", "left"] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }, 
         { name: "empty", angle: 0, path: [] }]
    ];



// Include all easy maps in the mapDataEasy array
const mapDataEasy = [easymap1,easymap2,easymap3,easymap4,easymap5]

const hardmap1 = [
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "mountain", angle: 90, path: ["left", "down"] }, 
     { name: "oasis", angle: 0, path: [] }, 
     { name: "oasis", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 90, path: ["left", "right"] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "bridge", angle: 0, path: ["up", "down"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 90, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 0, path: ["up", "down"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "mountain", angle: 270, path: ["up", "right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "mountain", angle: 270, path: ["up", "right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "mountain", angle: 90, path: ["left", "down"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 90, path: ["left", "right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "oasis", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 90, path: ["left","right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }]
];


const hardmap2 = [
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "oasis", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "bridge", angle: 0, path: ["up", "down"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 90, path: ["left", "right"]}, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "mountain", angle: 180, path: ["up","left"]}, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 90, path: ["left","right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 0, path: ["up","down"]}],
     
    [{ name: "mountain", angle: 0, path: ["right","down"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "oasis", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "mountain", angle: 90, path: ["left","down"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "mountain", angle: 0, path: ["right","down"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "oasis", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }]
];


const hardmap3 = [
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 90, path: ["left", "right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 0, path: ["up", "down"] }],
     
    [{ name: "oasis", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "mountain", angle: 270, path: ["up", "right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "oasis", angle: 0, path: [] }, 
     { name: "mountain", angle: 270, path: ["up","right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "bridge", angle: 90, path: ["left","right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "bridge", angle: 0, path: ["up","down"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "mountain", angle: 90, path: ["left", "down"] }, 
     { name: "empty", angle: 0, path: [] }],
     
    [{ name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "oasis", angle: 0, path: [] }, 
     { name: "mountain", angle: 270, path: ["up","right"] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }, 
     { name: "empty", angle: 0, path: [] }]
];

const hardmap4 = [
    [
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "bridge", angle: 0, path: ["up","down"] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "mountain", angle: 180, path: ["up","left"] }, 
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "mountain", angle: 270, path: ["up", "right"] }, 
        { name:"empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] }, 
        { name: "bridge", angle: 90, path: ["left","right"] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "oasis", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "bridge", angle: 90, path: ["left","right"] }, 
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "mountain", angle: 180, path: ["up","left"] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "mountain", angle: 90, path: ["left","down"] }, 
        { name: "empty", angle: 90, path: [] }, 
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "bridge", angle: 0, path: ["up","down"] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "mountain", angle: 270, path: ["up","right"] }, 
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }, 
        { name: "empty", angle: 0, path: [] }
    ]
];

const hardmap5 = [
    [
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "mountain", angle: 0, path: ["right","down"] },
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] },
        { name: "bridge", angle: 90, path: ["left","right"] },
        { name: "bridge", angle: 90, path: ["left","right"] },
        { name: "empty", angle: 0, path: [] },
        { name: "mountain", angle: 90, path: ["left","down"] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "mountain", angle: 0, path: ["right","down"] },
        { name: "empty", angle: 0, path: [] },
        { name: "oasis", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] },
        { name: "mountain", angle: 180, path: ["up","left"] },
        { name: "empty", angle: 0, path: [] },
        { name: "bridge", angle: 0, path: ["up", "down"] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] }
    ],
    [
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] },
        { name: "empty", angle: 0, path: [] }
    ]
];

const mapDataHard = [hardmap1,hardmap2,hardmap3,hardmap4,hardmap5]


// Function to create the grid with the map images
// Function to get a random map from the specified map data array
function getRandomMap(mapData) {
    const randomIndex = Math.floor(Math.random() * mapData.length); // Get a random index
    return mapData[randomIndex]; // Return the map at that index
}



let selectedTileSrc = ""; // Variable to store the selected tile's image source

// Right-click to select a tile from the palette
document.querySelectorAll(".tile-options img").forEach(tile => {
    tile.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // Prevent the default context menu
        selectedTileSrc = event.target.src; // Store selected tile image
    });
});

let gridData;


function createGrid(size) {
    const gridTable = document.querySelector("#gridTable");

    gridTable.innerHTML = ""; // Clear any previous grid content

    const currentMapData = size === 5 ? easymap5 : getRandomMap(mapDataHard); // Select map data based on size
    gridData = []; // Initialize gridData to store cell details

    for (let i = 0; i < currentMapData.length; i++) {
        const row = gridTable.insertRow(); // Insert a new row
        gridData[i] = []; // Initialize each row in gridData as an array

        for (let j = 0; j < currentMapData[i].length; j++) {
            const cell = row.insertCell(); // Insert a new cell in the current row
            cell.className = "cell"; // Assign a class for styling

            const divContainer = document.createElement("div");
            divContainer.className = "image-container"; // Class for styling the div

            const img = document.createElement("img");
            img.className = "cell-image"; // Class for styling the image

            // Set initial image based on tile type from map data
            switch (currentMapData[i][j].name) {
                case "empty":
                    img.src = "starter_eng/pics/tiles/empty.png";
                    break;
                case "mountain":
                    img.src = "starter_eng/pics/tiles/mountain.png";
                    break;
                case "bridge":
                    img.src = "starter_eng/pics/tiles/bridge.png";
                    break;
                case "oasis":
                    img.src = "starter_eng/pics/tiles/oasis.png";
                    break;
                default:
                    img.src = "starter_eng/pics/tiles/default.png"; // Fallback image
            }

            // Store the original tile type as a data attribute
            cell.dataset.originalTile = img.src;
            cell.dataset.isReplaced = "false";
            cell.dataset.hasReplacement = "false";
            cell.dataset.permanentReplacement = "false";
            cell.dataset.rotation = "0"; // Set initial rotation to 0

            // Apply rotation based on the angle property
            img.style.transform = `rotate(${currentMapData[i][j].angle}deg)`;

            // Assign start and end positions based on the path data
            const path = currentMapData[i][j].path;
            if (path.length >= 2) {
                cell.dataset.start = path[0]; // First direction in path
                cell.dataset.end = path[1];   // Second direction in path
            } else {
                cell.dataset.start = "none"; // For tiles without paths
                cell.dataset.end = "none";
            }

            // Append image to the div container, then container to the cell
            divContainer.appendChild(img);
            cell.appendChild(divContainer);

            // Add cell details to gridData for this position
            gridData[i][j] = { cell, img, type: currentMapData[i][j].name };

            // Left-click event to apply the selected tile image to the clicked cell, with conditions
            cell.addEventListener("click", () => {
                // Prevent changing if cell is an oasis tile
                if (img.src.includes("oasis.png")) return;

                // If the cell has a permanent replacement, do not allow further changes
                if (cell.dataset.permanentReplacement === "true") return;

                // Check if selected tile is curve rail or straight rail
                if (selectedTileSrc.includes("curve_rail.png") || selectedTileSrc.includes("straight_rail.png")) {
                    // Prevent placing rails on mountain or bridge tiles
                    if (img.src.includes("mountain.png") || img.src.includes("bridge.png")) {
                        return;
                    }

                    if (img.src === selectedTileSrc) {
                        let newRotation = (parseInt(cell.dataset.rotation) + 90) % 360; // Rotate 90 degrees
                        cell.dataset.rotation = newRotation;
                        img.style.transform = `rotate(${newRotation}deg)`;
                        assignStartEndPoints(cell, img.src, i, j, gridData, currentMapData);
                    } else {
                        img.src = selectedTileSrc;
                        cell.dataset.rotation = "0"; // Reset rotation
                        img.style.transform = `rotate(0deg)`;
                        cell.dataset.isReplaced = "true";
                        assignStartEndPoints(cell, img.src, i, j, gridData, currentMapData);
                    }

                    // Now call assignStartEndPoints with the correct type after the tile is replaced
                    const tileType = selectedTileSrc.includes("curve_rail.png") || selectedTileSrc.includes("straight_rail.png") ? "rail" : currentMapData[i][j].name;
                    
                } else if (selectedTileSrc.includes("mountain_rail.png")) {
                    if (img.src.includes("mountain.png") && cell.dataset.isReplaced === "false") {
                        img.src = selectedTileSrc;
                        cell.dataset.isReplaced = "true";
                        cell.dataset.hasReplacement = "true";
                        cell.dataset.permanentReplacement = "true";
                        assignStartEndPoints(cell, img.src, i, j, gridData, currentMapData);
                    }
                } else if (selectedTileSrc.includes("bridge_rail.png")) {
                    if (img.src.includes("bridge.png") && cell.dataset.isReplaced === "false") {
                        img.src = selectedTileSrc;
                        cell.dataset.isReplaced = "true";
                        cell.dataset.hasReplacement = "true";
                        cell.dataset.permanentReplacement = "true";
                        assignStartEndPoints(cell, img.src, i, j, gridData, currentMapData);
                    }
                } else if (!img.src.includes("mountain.png") && !img.src.includes("bridge.png") && selectedTileSrc) {
                    img.src = selectedTileSrc;
                    cell.dataset.isReplaced = "true";
                }

                gridData[i][j] = { cell, img, type: currentMapData[i][j].name }
                // Call assignStartEndPoints again to update the start/end after tile is placed
                checkAllConnections(gridData); 
            });

            // Right-click event to remove the replaced image from the cell
            cell.addEventListener("contextmenu", (event) => {
                event.preventDefault();

                if (cell.dataset.isReplaced === "true" && cell.dataset.hasReplacement === "false" && cell.dataset.permanentReplacement === "false") {
                    img.src = cell.dataset.originalTile;
                    cell.dataset.isReplaced = "false";
                    cell.dataset.rotation = "0";
                    img.style.transform = `rotate(0deg)`;
                    gridData[i][j] = { cell, img, type: currentMapData[i][j].name }
                }

                const tileType = currentMapData[i][j].name;
            });
        }
    }

    
}

// Event listeners to menu buttons
rulesButton.addEventListener("click", () => {
    setActiveButton(rulesButton, [rulesButton, startGameButton]);
    showRules();
});

startGameButton.addEventListener("click", startGame); // Start game when clicked

// Event listeners to difficulty buttons
easyButton.addEventListener("click", () => {
    gridSize = "easy";
    setActiveButton(easyButton, [easyButton, hardButton]);
});
hardButton.addEventListener("click", () => {
    gridSize = "hard";
    setActiveButton(hardButton, [easyButton, hardButton]);
});

closeRulesButton.addEventListener("click", hideRules);

/* now its time to end the game */


// Check if the game ends when all tracks are connected
function assignStartEndPoints(cell, tileType, i, j, gridData, currentMapData) {

    console.log("I am in",tileType)


    const connections = {};  // Object to store start and end values
    const rotation = parseInt(cell.dataset.rotation);  // Get the rotation of the tile

    
        // Check if it's a straight rail
        if (tileType.includes("straight_rail.png")) {
            console.log("Straight Rail detected");
            // For straight rail, assign start and end based on rotation
            if (rotation === 0 || rotation === 180) {
                connections.start = "up";
                connections.end = "down";  // For 0° and 180° (up to down)
            } else if (rotation === 90 || rotation === 270) {
                connections.start = "left";
                connections.end = "right";  // For 90° and 270° (left to right)
            }
        } 
        // Check if it's a curved rail
        else if (tileType.includes("curve_rail")) {
            console.log("Curve Rail detected");
            // For curve rail, assign start and end points based on rotation
            if (rotation === 0) {
                connections.start = "right";
                connections.end = "down";  // For 0° (right to down)
            } else if (rotation === 90) {
                connections.start = "left";
                connections.end = "down";  // For 90° (left to down)
            } else if (rotation === 180) {
                connections.start = "up";
                connections.end = "left";  // For 180° (up to left)
            } else if (rotation === 270) {
                connections.start = "up";
                connections.end = "right";  // For 270° (up to right)
            }
        }
        else{
              
                // For mountain or bridge tile, use the path from map data
                const path = currentMapData[i][j].path;
                console.log(`Path for mountain/bridge tile at (${i}, ${j}):`, path);
        
                if (path && path.length >= 2) {
                    connections.start = path[0];  // First direction in path
                    connections.end = path[1];    // Second direction in path
                } else {
                    // Default behavior when no path is defined
                    connections.start = "none";
                    connections.end = "none";
                    console.log(`No valid path for tile at (${i}, ${j})`);
                }
            
        }
        
    

    // Set the start and end points for the cell
    cell.dataset.start = connections.start;
    cell.dataset.end = connections.end;

    // Log the start and end points to the console for debugging
    console.log(`Tile at (${i}, ${j}) - Start: ${connections.start}, End: ${connections.end}`);
}


//here now i am dealing with the ending of the game 

function  validDirection(x,y,gridData){

    return x >= 0 && x < gridData.length &&y >= 0 && y < gridData.length;
}


function changeDirection(dir)
{
    if(dir === "left") return "right"
    if(dir === "right") return "left"
    if(dir === "up") return "down"
    if(dir === "down") return "up"
}


function checkDirection(gridData, row, col, cell) {
    const temp = [cell.dataset.start, cell.dataset.end];
    

    if(!gridData[row][col].img.src.includes("oasis.png")){
        for (const point of temp) {
            let adjacent = null;
    
            // Check for boundary conditions before accessing the adjacent cell
            if (point === "down" && row + 1 < gridData.length) {
                adjacent = gridData[row + 1][col].cell;
            }
            else if (point === "up" && row - 1 >= 0) {
                adjacent = gridData[row - 1][col].cell;
            }
            else if (point === "left" && col - 1 >= 0) {
                adjacent = gridData[row][col - 1].cell;
            }
            else if (point === "right" && col + 1 < gridData[0].length) {
                adjacent = gridData[row][col + 1].cell;
            }
    
            // If there's no adjacent cell or it doesn't exist, return false
            if (!adjacent) {
                return false;
            }
    
            const temp_2 = [adjacent.dataset.start, adjacent.dataset.end];
    
            // Check if the opposite direction exists in the adjacent cell
            if (!temp_2.includes(changeDirection(point))) {
    
                return false;
            }
        }
    }
    

    return true;
}



function allPlaces(gridData){
    for(let row = 0;row<gridData.length;row++)
    {
        for(let col = 0;col < gridData[0].length;col++)
        {
            if(!gridData[row][col].img.src.includes("oasis.png"))
            {
                if(gridData[row][col].cell.dataset.isReplaced === "false")
                {
                        return false; 
                }

            }
           
            console.log(row,col);

        }

    }

    return true;
}


// This function checks if all cells are connected correctly
function check(gridData) {


    if(allPlaces(gridData)){

        
    for (let row = 0; row < gridData.length; row++) {
        for (let col = 0; col < gridData[row].length; col++) {
            const currentCell = gridData[row][col].cell;  // Access the actual DOM cell element

            // If any connection is invalid, set isComplete to false and exit early
            if (!checkDirection(gridData, row, col, currentCell)) {
                console.log(row,col);
                return false
                //break;  // Stop checking further cells once a failure is found
            }

        }
        //if (!isComplete) break;  // Stop outer loop if game is not complete
    }

    // If all connections are valid, end the game
    //console.log(row,col);
    return true;

    }

    console.log("not filled")
    return false;
}




let gameEnded = false;

function checkAllConnections(gridData) {
    if (check(gridData)) {
        endGame();
    } else {
        console.log("Not connected");
    }
}



const menuSection = document.querySelector("#menuSection");
const gameTitle = document.querySelector(".game-title");
const gamePage = document.querySelector(".gamepage");
const endMessage = document.querySelector("#endMessage");
const timerDisplay = document.querySelector("#timerDisplay");
const gridTable = document.querySelector("#gridTable");
const playerNameInput = document.querySelector("#playerName");


const playerData = {
    playerName: playerNameInput.value || "Anonymous",
    timeTaken: elapsedTime || 0,
    difficulty: gridSize || "Easy"
};


function endGame() {
    clearInterval(timer);
    gameEnded = true;
    endMessage.style.display = "block";
    document.getElementById("timeTaken").innerText = `Time Taken: ${elapsedTime} seconds`;

    const playerData = {
        playerName: playerNameInput.value,
        timeTaken: elapsedTime,
        difficulty: gridSize
    };

    const leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboardData.push(playerData);

    // Save to local storage and log for debugging
    localStorage.setItem("leaderboard", JSON.stringify(leaderboardData));
    console.log("Saved leaderboard data:", JSON.parse(localStorage.getItem("leaderboard")));

    disableTileSelection();
}


function showLeaderboard() {
    const leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];
    
    // Sort leaderboard data by time taken (ascending order)
    leaderboardData.sort((a, b) => a.timeTaken - b.timeTaken);

    // Reference the leaderboard table body
    const leaderboardElement = document.getElementById("leaderboardData");
    leaderboardElement.innerHTML = ""; // Clear any existing data

    // if (leaderboardData.length === 0) {
    //     leaderboardElement.innerHTML = `
    //         <tr>
    //             <td colspan="4">No data available yet. Be the first to play!</td>
    //         </tr>
    //     `;
    //     return;
    // }

    // Populate the leaderboard with sorted data
    leaderboardData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.playerName || 'Anonymous'}</td>
            <td>${entry.timeTaken || 0}</td>
            <td>${entry.difficulty || 'Unknown'}</td>
        `;
        leaderboardElement.appendChild(row);
    });

    // Show leaderboard section and hide main menu
    document.querySelector(".leaderboard_section_outerarea").hidden = false;
    document.querySelector(".main_page").hidden = true;
}

// Add an event listener to the leaderboard button
document.getElementById("leaderboard").addEventListener("click", showLeaderboard);

function resetLeaderboard() {
    const leaderboardData = JSON.parse(localStorage.getItem("leaderboard"));
    if (!leaderboardData || leaderboardData.length === 0) {
        return;
    }

    localStorage.removeItem("leaderboard");

    const leaderboardElement = document.getElementById("leaderboardData");
    leaderboardElement.innerHTML = `
        <tr>
            <td colspan="4">No data available yet. Be the first to play!</td>
        </tr>
    `;

    console.log("Leaderboard has been reset.");
}

function disableTileSelection() {
    const tiles = document.querySelectorAll(".tile-options div");
    tiles.forEach(tile => {
        tile.style.pointerEvents = "none";
    });
    const gridCells = document.querySelectorAll("#gridTable td");
    gridCells.forEach(cell => {
        cell.style.pointerEvents = "none";
    });
}
document.querySelector("#backToMenuButton").addEventListener("click", returnToMenu);
document.querySelector("#resetLeaderboardButton").addEventListener("click", resetLeaderboard);
document.querySelector("#goBackToMenu").addEventListener("click", returnToMenu);



function returnToMenu() {
    endMessage.style.display = "none"; // Hide the end message (if visible)
    console.log("Returning to menu...");

    // Hide the game container and leaderboard section
    document.querySelector(".game_container").hidden = true; 
    document.querySelector(".leaderboard_section_outerarea").hidden = true;

    // Show the main menu
    document.querySelector(".main_page").hidden = false;

    // Reset player name input and deselect difficulty buttons
    playerNameInput.value = "";
    document.querySelectorAll(".difficulty-btn").forEach(btn => btn.classList.remove("selected"));

    // Reset the game state
    resetGame();
}

function resetGame() {
    clearInterval(timer);
    elapsedTime = 0;
    timerDisplay.innerText = "0";
    gameEnded = false;
    enableTileSelection();
    gridTable.innerHTML = "";
}

function enableTileSelection() {
    const tiles = document.querySelectorAll(".tile-options div");
    tiles.forEach(tile => {
        tile.style.pointerEvents = "auto";
    });
    const gridCells = document.querySelectorAll("#gridTable td");
    gridCells.forEach(cell => {
        cell.style.pointerEvents = "auto";
    });
}

document.querySelector("#goBackToMenu").addEventListener("click", returnToMenu);




