let input = document.getElementById("input");
let button = document.getElementById("button");
let searchResult = document.getElementById("SearchResult");
let movieBox = document.querySelectorAll(".movieBox");
let resultMovie = document.getElementById("resultMovie");
let movieBoxcontainer1 = document.getElementById("movieBoxContainer")
let movieBoxcontainer2 = document.getElementById("movieBoxContainer2")
let backBtn = document.getElementById("back");

backBtn.addEventListener("click" , () => {
    window.location.reload();
})

let movieArray = [
    {
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
        name : "Turning Red"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
        name : "The Adam Project"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        name : "The Batman"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/1j6JtMRAhdO3RaXRtiWdPL5D3SW.jpg",
        name : "Sonic the Hedgehog 2"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
        name : "My Hero Academia: World Heroes' Mission"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
        name : "Hotel Transylvania: Transformania"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        name : "Demon Slayer Mugen Train"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
        name : "The Boss Baby: Family Business"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg",
        name : "Jujutsu Kaisen 0"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg",
        name : "The Seven Deadly Sins: Cursed by Light"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/oifhfVhUcuDjE61V5bS5dfShQrm.jpg",
        name : "Clifford the Big Red Dog"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        name : "Venom: Let There Be Carnage"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
        name : "Sonic the Hedgehog"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
        name : "Mortal Kombat"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
        name : "Free Guy"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
        name : "F9"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
        name : "Jungle Cruise"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg",
        name : "Apex"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
        name : "The Tomorrow War"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
        name : "Raya and the Last Dragon"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/8p3mhjyLjHKtaAv8tFKfvEBtir0.jpg",
        name : "Sooryavanshi"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg",
        name : "The Addams Family 2"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
        name : "The Croods: A New Age"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        name : "Godzilla vs. Kong"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg",
        name : "The Amazing Spider-Man"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/xF1uc2pEf34X2G41wvZaF5H0V7C.jpg",
        name : "Survive the Game"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/6WcJ4cV2Y3gnTYp5zHu968TYmTJ.jpg",
        name : "Dragon Fury"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        name : "The Avengers"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
        name : "Doctor Strange"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
        name : "My Hero Academia: Heroes Rising"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
        name : "The Amazing Spider-Man 2"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
        name : "Venom"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        name : "Coco"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
        name : "Wonder Woman 1984"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
        name : "Monster Hunter"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
        name : "Soul"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/tUkY0WxffPZ9PoyC62PIyyUMGnt.jpg",
        name : "Encounter"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/39oaQUS0KxyXL6KYJ2o2u03PpHz.jpg",
        name : "Far From the Tree"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
        name : "Harry Potter and the Chamber of Secrets"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/kWhXubAiIcHW0xn5GThflqaKZqh.jpg",
        name : "The Vault"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
        name : "Ava"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/ode14q7WtDugFDp78fo9lCsmay9.jpg",
        name : "The Maze Runner"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        name : "The Lion King"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        name : "Spider-Man: Homecoming"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
        name  : "Eternals"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        name  : "Avengers: Infinity War"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        name  : "Avengers: Endgame"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
        name  : "Deadpool"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
        name  : "Spider-Man: Far From Home"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        name  : "Spider-Man: Homecoming"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
        name  : "Pirates of the Caribbean: On Stranger Tides"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
        name  : "Iron Man 2"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
        name  : "Fast & Furious Presents: Hobbs & Shaw"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/dImWM7GJqryWJO9LHa3XQ8DD5NH.jpg",
        name  : "The Fate of the Furious"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
        name  : "Doctor Strange in the Multiverse of Madness"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
        name  : "Avengers: Age of Ultron"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/85cWkCVftiVs0BVey6pxX8uNmLt.jpg",
        name  : "The Dark Knight Rises"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
        name  : "Thor: Ragnarok"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
        name  : "Deadpool 2"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
        name  : "Spider-Man"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
        name  : "Spider-Man"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
        name  : "Thor"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg",
        name  : "Spider-Man 3"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
        name  : "Captain America: Civil War"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
        name  : "Batman v Superman: Dawn of Justice"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/hLZHJjsZ83Wfn3MRteNb6ew0WC7.jpg",
        name  : "Journey 2: The Mysterious Island"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
        name  : "Minions: The Rise of Gru"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/rzrSeqqpm1BwJ3tcTznztBtLLSD.jpg",
        name  : "Injustice"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
        name  : "Teenage Mutant Ninja Turtles"
    },{
        image : "https://www.themoviedb.org/t/p/w220_and_h330_face/lC4ULSf5J4X9jnBOKcY3pwbAwmT.jpg",
        name  : "Pacific Rim"
    },
]

let searchText = ""

input.addEventListener("input" ,(element) => {
    searchText = element.target.value.toLowerCase();
})

let string = "";

button.addEventListener("click" , ()=>{
    movieBoxcontainer1.style.display = "none";
    movieBoxcontainer2.style.display = "block";
    resultMovie.innerHTML = "";
    const filterArray = movieArray.filter((m)=>{
        return m.name.toLowerCase().includes(searchText);
    })
    let filteredMovie = filterArray.length > 0 ;
    if(filteredMovie){
        for(let i = 0 ; i<filterArray.length ; i++){
            let CardDiv = document.createElement("div");
            CardDiv.classList.add("card" , "movieBox2");

            let Image = document.createElement("img");
            Image.src = filterArray[i].image;

            let CardBlock = document.createElement("div");
            CardBlock.classList.add("card-block");

            let Para = document.createElement("p");
            Para.classList.add("text-center" , "fw-bold");
            Para.append(filterArray[i].name);

            CardBlock.append(Para);

            CardDiv.append(Image , CardBlock);

       resultMovie.append(CardDiv);
        }
        
    }else{
    let warn =  `<h5>Nothing match with "${searchText}"<h5>`
    resultMovie.innerHTML = warn ;
    }
})