let homeScoreEl = document.getElementById("home-current-score");
let guestScoreEl = document.getElementById("guest-current-score");
let homeScore = 0;
let guestScore = 0;

function updateScore(team:string, score:number) {
  if(homeScoreEl !== null && guestScoreEl !== null) {
    if(team === "home") {
      //console.log("home score updated");
      //console.log(score);
      homeScore += score;
      homeScoreEl.textContent = homeScore.toString();
    } else if(team === "guest") {
      guestScore += score;
      guestScoreEl.textContent = guestScore.toString();
    }
  }
}

function resetScore() {
  if(homeScoreEl !== null && guestScoreEl !== null) {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = "0";
    guestScoreEl.textContent = "0";
  }
}

// Make functions globally accessible
window.updateScore = updateScore;
window.resetScore = resetScore;

// For TypeScript, declare these functions as available on the window object
declare global {
  interface Window {
    updateScore: (team: string, points: number) => void;
    resetScore: () => void;
  }
}