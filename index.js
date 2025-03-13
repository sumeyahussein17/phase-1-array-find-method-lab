// code your solution here
//  function superbowlWin(record)=[{year:"2015", result:"w"},]
function superbowlWin(record) {
    let win = record.find(game => game.team === "Denver Broncos" && game.result === "W");
    return win ? win.year : undefined;
}
console.log(superbowlWin(record)); 

function superbowlWin(record) {
    let win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

