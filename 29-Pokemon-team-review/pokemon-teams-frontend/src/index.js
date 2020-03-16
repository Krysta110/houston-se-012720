const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector("main")


fetch(TRAINERS_URL)
.then(res => res.json())
.then(trainers => {
    trainers.forEach(trainer => makeTrainerCard(trainer) )
})

function makeTrainerCard(trainer){
{/* <div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div> */}

const div = document.createElement("div")
div.className = "card"
div.setAttribute("data-id", trainer.id)

const p = document.createElement("p")
p.innerText = trainer.name

const btn = document.createElement("button")
btn.setAttribute("data-trainer-id", trainer.id)
btn.innerText = "Add Pokemon"

btn.addEventListener("click", () => {

    fetch(POKEMONS_URL, {
        method: "POST",
        headers:
            {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            trainer_id: trainer.id
        })
    })
    .then(res => res.json())
    .then(newPokemon => makePokemon(newPokemon,ul))
})

const ul = document.createElement("ul")

trainer.pokemons.forEach(pokemon => {
    makePokemon(pokemon, ul)
})

// function makePokemon

div.append(p, btn, ul)

main.append(div)

}

function makePokemon(pokemon, ul){
    // <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>

    const li = document.createElement("li")
    li.innerText = `${pokemon.nickname}(${pokemon.species})`

    const button = document.createElement("button")
    button.className = "release"
    button.setAttribute("data-pokemon-id", pokemon.id)
    button.innerText = "Release"

    button.addEventListener("click", () => {

        fetch(POKEMONS_URL+"/"+pokemon.id,{
            method: "DELETE"
        })
        // .then(console.log)
        .then(res => res.json())
        .then(deletedPokemon => {
            li.remove()
        })
    })

    li.append(button)
    ul.append(li)
    //return li
}
