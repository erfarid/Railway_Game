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

function startGame() {  
    // Get the player's name and selected difficulty
    const playerName = document.querySelector("#playerName").value;
    const gridSize = document.querySelector(".difficulty-btn.active")?.id; // Get the active difficulty button

    // Check if the player name is entered and difficulty is selected
    if (!playerName || !gridSize) {
        return; // Exit the function if validation fails without doing anything
    }
    document.body.style.backgroundColor = "rgba(250, 245, 223, 0.9)";

    // Unhide the game title
    document.querySelector(".game-title").hidden = false; // Unhide the game title

    // Show the info panel
    document.querySelector("#infoPanel").hidden = false;

    // Show the tile selection palette
    document.querySelector("#palette").hidden = false; // Unhide the palette if name and difficulty are valid

    // Hide the menu section
    document.querySelector("#menuSection").style.display = "none";
    
    // Show the gamepage container
    document.querySelector(".gamepage").hidden = false; // Unhide the gamepage container

    // Unhide the game section
    document.querySelector("#gameSection").hidden = false; // Unhide the game section

    // Display the player's name
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
        document.getElementById("timerDisplay").innerText = `Time: ${elapsedTime}`; // Update timer display
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
    const gridTable = document.getElementById("gridTable");
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



// function checkAllConnections(gridData){

//     if(check(gridData)){
//         endGame();
//     }
//     else{
//         console.log("not connected")
//     }
// }


// function endGame() {
//     alert("Congratulations! The track is complete!");
//     // Additional game-ending logic can be added here, such as disabling further moves or resetting the game
// }
let gameEnded = false; // Flag to indicate if the game has ended

// Function to check all connections and end the game if successful
function checkAllConnections(gridData) {
    if (check(gridData)) { // Assuming check() is a function that verifies the connections
        endGame();
    } else {
        console.log("Not connected");
    }
}

// Function to handle the end of the game

// Function to check all connections and end the game if 
// Function to handle the end of the game
// Initialize leaderboardData from localStorage, or use default if not available
// Function to end the game


// Function to end the game and display the congratulatory message
// Ensure you have references to the sections
// Ensure you have references to the sections
const menuSection = document.getElementById("menuSection");
const gameTitle = document.querySelector(".game-title");
const gamePage = document.querySelector(".gamepage");
const endMessage = document.getElementById("endMessage");
const timerDisplay = document.getElementById("timerDisplay");
const gridTable = document.getElementById("gridTable");
const playerNameInput = document.getElementById("playerName");


// Function to end the game
function endGame() {
    clearInterval(timer); // Stop the timer
    gameEnded = true; // Set game end flag to true

    // Display the end game message
    endMessage.style.display = "block";  // Show the end message
    document.getElementById("timeTaken").innerText = `Time Taken: ${elapsedTime} seconds`;  // Show elapsed time

    // Disable tile selection or other actions after the game ends
    disableTileSelection();
}

// Function to disable tile selection
function disableTileSelection() {
    const tiles = document.querySelectorAll(".tile-options div");
    tiles.forEach(tile => {
        tile.style.pointerEvents = "none"; // Disable clicking on each tile
    });

    // Also disable game grid tile selections (assuming they are in the table)
    const gridCells = document.querySelectorAll("#gridTable td");
    gridCells.forEach(cell => {
        cell.style.pointerEvents = "none"; // Disable clicking on game grid tiles
    });
}

// Function to reset the game and go back to the main menu
function returnToMenu() {
    // Hide the congratulatory message and game-related sections
    endMessage.style.display = "none"; // Hide the end message
    gameTitle.style.display = "none"; // Hide the game title
    gamePage.style.display = "none"; // Hide the game page
    rulesSection.style.display = "none"; // Hide the rules section (if it was open)

    // Show the menu section again
    menuSection.style.display = "block"; // Make sure the menu is visible

    // Clear the player name input
    playerNameInput.value = ""; // Clear player name input field

    // Deselect any selected difficulty buttons
    document.querySelectorAll(".difficulty-btn").forEach(btn => btn.classList.remove("selected")); // Remove selected difficulty

    // Reset the game state to start fresh
    resetGame(); // Reset game settings and prepare for a new game
}

// Function to reset the game
function resetGame() {
    clearInterval(timer); // Stop the timer
    elapsedTime = 0;
    timerDisplay.innerText = "0"; // Reset timer display
    gameEnded = false; // Reset game end flag

    // Re-enable tile selection if the game is reset
    enableTileSelection();

    // Clear the game grid (optional)
    gridTable.innerHTML = ""; // Clear the game grid
}

// Function to re-enable tile selection
function enableTileSelection() {
    const tiles = document.querySelectorAll(".tile-options div");
    tiles.forEach(tile => {
        tile.style.pointerEvents = "auto"; // Re-enable clicking on each tile
    });

    // Re-enable grid tile selections (assuming they are in the table)
    const gridCells = document.querySelectorAll("#gridTable td");
    gridCells.forEach(cell => {
        cell.style.pointerEvents = "auto"; // Re-enable clicking on game grid tiles
    });
}

// Add an event listener for the "Go Back to Main Menu" button
document.getElementById("goBackToMenu").addEventListener("click", returnToMenu);

// Function to show the rules section
function showRules() {
    rulesSection.style.display = "flex"; // Show rules section
}

// Function to hide the rules section
function hideRules() {
    rulesSection.style.display = "none"; // Hide rules section
}
