const soccerTeams = [
    {name: "inter", punti: 0, falli: 0},
    {name: "juve", punti: 0, falli: 0},
    {name: "roma", punti: 0, falli: 0},
    {name: "milan", punti: 0, falli: 0},
]

for (let i = 0; i < soccerTeams.length; i++) {
    const curTeam = soccerTeams[i];
    curTeam.punti = Math.floor((Math.random() * 50) + 1);
    curTeam.falli = Math.floor((Math.random() * 10) + 1);
}

function fusione (team, faults) {
    const teamFaults = [];
    for (let i = 0; i < team.length; i++) {
    const curTeam = team [i];
    const curFaults = faults[i];
    teamFaults.push(curTeam, curFaults);
    }
    return teamFaults;
}