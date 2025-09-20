let yourname = document.getElementById("yourname");
let friend_name = document.getElementById("friend-name");
let submit_btn = document.getElementById("submit-btn");
let showScore = document.getElementById("Showscore"); 

function friendshipScoreFn() {

    if (yourname.value !== "" && friend_name.value !== "") {
    
        showScore.innerHTML = "";
        let friendscore = Math.round(Math.random() * 100);
        let heading = document.createElement("h3");
        heading.textContent = yourname.value + " and " + friend_name.value + " friendship score is " + friendscore + "💖";
        showScore.appendChild(heading);

        let para = document.createElement("p"); 

        if (friendscore > 80) {
            para.textContent = "🌟 Best Friends Forever!";
        } else if (friendscore > 60) {
            para.textContent = "😊 Good Friends!";
        } else if (friendscore > 30) {
            para.textContent = "👋 Just Friends.";
        } else {
            para.textContent = "🤷 Strangers.";
        }

        showScore.appendChild(para);
    }
}

submit_btn.addEventListener("click", friendshipScoreFn);
friend_name.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        friendshipScoreFn();
    }
});

