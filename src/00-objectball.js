function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
            
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
    
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
            
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
            
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                
                    'Jeff Adrien': {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2
                    },
    
                    'Bismak Biyombo': {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10
                    },
                
                    'DeSagna Diop': {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5
                    },
                
                    'Ben Gordon': {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0
                    },
                
                    'Brendan Haywood': {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12
                    },
            }
        }
    };
}

// numPointsScored

function numPointsScored(playerName) {
    let game = gameObject();
    for (const team in game) {
        const players = game[team].players;
        if (playerName in players) {
            return players[playerName].points;
        }
    }
}

// shoeSize

function shoeSize(playerName) {
    let game = gameObject();
    for (const team in game) {
        const players = game[team].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }
    }
}


// teamColors

function teamColors(teamName) {
    let game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors
        }
    }
}

// teamNames

function teamNames() {
    let game = gameObject();
    let teams = Object.values(game).map(team => team.teamName)
    return teams;
}

// playerNumbers

function playerNumbers(teamName) {
    let game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            const players = game[team].players;
            return Object.values(players).map(player => player.number)
        }
    }
}

// playerStats

function playerStats(playerName) {
    let game = gameObject();
    for (const team of Object.values(game)) {
        if (playerName in team.players) {
        return team.players[playerName];
        }
    }
}

//bigShoeRebounds

function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = -1;
    let playerWithLargestShoe;
    for (const team in game) {
        for (const player in game[team].players) {
            const currentPlayer = game[team].players[player];

            if (currentPlayer.shoe > largestShoeSize) {
                largestShoeSize = currentPlayer.shoe;
                playerWithLargestShoe = currentPlayer;
            }
        }
    }
    debugger;

    return playerWithLargestShoe.rebounds;
}

// mostPointsScored

function mostPointsScored() {
    let game = gameObject();
    let mostPoints = -1;
    let playerWithMostPoints;
    for (const team in game) {
        for (const player in game[team].players) {
            const currentPlayer = game[team].players[player];

            if (currentPlayer.points > mostPoints) {
                mostPoints = currentPlayer.points;
                playerWithMostPoints = player;
            }
        }
    }
    debugger;

    return playerWithMostPoints;
}


// winningTeam

function winningTeam() {
    let game = gameObject();
    let mostPoints = -1;
    let winningTeamName;
    for (const team in game) {
        const teamPoints = 0;
        for (const player in game[team].players) {
            teamPoints += game[team].players[player].points;
        }
        if (teamPoints > mostPoints) {
            mostPoints = teamPoints;
            winningTeamName = game[team].teamName;
        }
    }
    debugger; 

    return winningTeamName;
}

// playerWithLongestName

function playerWithLongestName() {
    let game = gameObject();
    let longestNameLength = -1;
    let playerWithLongestName;
    for (const team in game) {
        for (const player in game[team].players) {
            const currentNameLength = player.length;

            if (currentNameLength > longestNameLength) {
                longestNameLength = currentNameLength;
                playerWithLongestName = player;
            }
        }
    }
    debugger; 

    return playerWithLongestName;
}

// doesLongNameStealATon

function doesLongNameStealATon() {
    let longestNamePlayer = playerWithLongestName();
    let game = gameObject();
    let mostSteals = -1;
    let playerWithMostSteals;
    for (const team in game) {
        for (const player in game[team].players) {
            const currentSteals = game[team].players[player].steals;

            if (currentSteals > mostSteals) {
                mostSteals = currentSteals;
                playerWithMostSteals = player;
            }
        }
    }
    debugger;

    return longestNamePlayer === playerWithMostSteals;
}
