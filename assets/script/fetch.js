game_list = document.getElementById("games");
select_type = document.getElementById("type");
select_first_genre = document.getElementById("first-genre");
select_second_genre = document.getElementById("second-genre");
type_world = document.getElementById("type-world");
platform = document.getElementById("platform");
let url = "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag="+select_type.value+"."+select_first_genre.value+"."+select_second_genre.value+"."+type_world.value+"&platform="+platform.value

function searchGames(){
    console.log(url)
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "9a6ea1be4cmsh92dab01aedac605p1fdda3jsnbc0a89707c37"
	}
})
.then(resp => resp.json())
        // returns object of the data
        .then((games) => {
            console.log(games);
            for(i in games){
                game_list.innerHTML += `<div id="card"><img src=${JSON.stringify(games[i].thumbnail)} alt="title">
                <div id="game-card">
                <p id="title">${JSON.stringify(games[i].title)}<p>
                <p id="developer">${JSON.stringify(games[i].developer)}<p>
                <p id="developer">${JSON.stringify(games[i].genre)}<p>
                <p id="link"><a href=${JSON.stringify(games[i].game_url)}>Link to game</a><p>
                <p id="developer">${JSON.stringify(games[i].platform)}<p>
                <p id="developer">${JSON.stringify(games[i].short_description)}<p>
                </div>
                </div>`
            }
        }
            )
        }