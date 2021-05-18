var cards = []

while(cards.length<5) {
    var rand = (Math.floor((Math.random() * 11))+".png");
    if(!cards.includes(rand)) cards.push(rand);
}
cards = cards.concat(cards);
shuffleArray(cards);
for(var i=1; i<11; i++)
{
    console.log(cards[i]);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 1; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

var flipped = -1
var done = []

function flip(id) {
    if(!done.includes(id))
    {
        if(flipped != -1)
        {
            var img1 = document.getElementById(id);
            var newsrc1 = "./pics/"+cards[id];
            console.log(newsrc1);
            img1.src = newsrc1;
            var score = document.getElementById("score").innerHTML;
            var len = score.length;
            score = score.slice(7, len);
            // alert(score);
            if(flipped != id && cards[flipped] == cards[id])
            {
                score = parseInt(score)+10;
                document.getElementById("score").innerHTML = "Score: "+score;
                document.getElementById(flipped).style.visibility="hidden";
                document.getElementById(id).style.visibility="hidden";
                done.push(flipped);
                done.push(id);
                flipped = -1;
            }
            else if(flipped != id)
            {
                score = parseInt(score)-2;
                document.getElementById("score").innerHTML = "Score: "+score;
                document.getElementById(flipped).src = "./pics/logo.png";
                flipped = id;
            }
        }
        else
        {
            var img = document.getElementById(id);
            var newsrc = "./pics/"+cards[id];
            console.log(newsrc);
            img.src = newsrc;
            flipped = id;
        }

        if(done.length == 10)
        {
            var fileName = location.href.split("/").slice(-1)[0];
            console.log(fileName);
            var level = fileName[5];
            if(level == 1)
            {
                Alert.render('Get Ready to Play Level 2 !!!');
                
            }
            else if(level == 2)
            {
                Alert.render("Let's see you in Level 3 !!!")
                
            }
            else
            {
               Alert.render("You're a true Pok&eacute;men !!\nReturn to Homepage");
                
            }


        }
    }
}



