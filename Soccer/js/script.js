const soccerTeams = [
    {name: "inter", punti: 0, falli: 0},
    {name: "juve", punti: 0, falli: 0},
    {name: "roma", punti: 0, falli: 0},
    {name: "milan", punti: 0, falli: 0},
]
console.log(soccerTeams);


function potara (teams) {
    const newArray = [];
    
    for (let i = 0; i < teams.length; i++) {
        const curTeam = teams[i];
        curTeam.punti = Math.floor((Math.random() * 50) + 1);
        curTeam.falli = Math.floor((Math.random() * 10) + 1);    
        console.log(curTeam);
        newArray.push(curTeam.name, curTeam.falli);
        console.log(newArray);
    }
    return newArray;
}
console.log(potara(soccerTeams));

