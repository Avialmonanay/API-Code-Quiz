// list element for creation of list items
var listEl = document.getElementById("list")





// Event listener watches for page load. pulls items from local storage
window.addEventListener('load', function() {
    const userName = JSON.parse(localStorage.getItem("userJSON"));
    const userScore = JSON.parse(localStorage.getItem("scoreJSON"));



    createScore(userScore, userName)
})


//create score functions pull json variables based on interval and then create list items.
function createScore (userScore, userName) {

console.log(userName)
console.log(userScore)



    for (var i = 0; i < userName.length; i++) {
        
        var scoreDisplay = userScore;
        var nameDisplay = userName;
  

        //creates high scores based on Local storage array
    var listItem = document.createElement("li")
    listItem.setAttribute("class", "row")

    var initial = document.createElement("h1")
    initial.setAttribute("class", "border initials")
    initial.innerText = nameDisplay[i]

    var score = document.createElement("h1")
    score.setAttribute("class", "border score")
    score.innerText = scoreDisplay[i]

    listEl.append(listItem)
    listItem.append(initial)
    listItem.append(score)
}
    }
