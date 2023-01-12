let selected_card = null
let selected_card_adv = null
let ma_vie = null
let adv_vie = null
let mon_mana = null
let adv_mana = null
let compteur_refresh = false
let tour = null
let compteur_tour = false
let temps_restant = null
let hero = null
let compteur_hero = false
let bouton_hero = null
let compteur_chat = true
let photo_adv = null





const play_card = (type, carte_id = null, target_id = null) => {

    
    let formData = new FormData();
        formData.append("carte_id", carte_id); // <input type="text" name="chuck" value="aaa" />
        formData.append("type", type); // <input type="text" name="chuck" value="aaa" />
        formData.append("target_id", target_id); // <input type="text" name="chuck" value="aaa" />

        

        fetch("ajax-play.php", {
            method : "POST",
            body : formData
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            }
        )
}

const refresh_cartes = (liste_cartes, mp, div) => {

    document.getElementById(div).innerHTML = ""
    

    for (let i = 0; i < liste_cartes.length; i++) {
        let carte = document.createElement("div")
        carte.classList.add("carte")

        let background = document.createElement("img")
        background.classList.add("carte-background")

        let desc = document.createElement("p")
        desc.classList.add("carte-description")
        desc.innerHTML = liste_cartes[i]["mechanics"][0]

        let border = document.createElement("img")
        border.classList.add("carte-border")
        
        
        if (liste_cartes[i]["mechanics"][0] == "Taunt")
            border.classList.add("taunt")
        else if (liste_cartes[i]["mechanics"][0] == "Stealth")
            border.classList.add("stealth")

        if (mp < 500){
            if (liste_cartes[i]["cost"] <= mp)
            border.classList.add("valid_card")
            else border.classList.add("unvalid_card")
        }
        let uid = liste_cartes[i]["uid"]
        if ( uid  == selected_card){
            carte.classList.add("selected")
        }

        let mana = document.createElement("p")
        mana.classList.add("carte-mana")
        mana.innerHTML = liste_cartes[i]["cost"]

        let degat = document.createElement("p")
        degat.classList.add("carte-degats")
        degat.innerHTML = liste_cartes[i]["atk"]

        let vie = document.createElement("p")
        vie.classList.add("carte-vie")
        vie.innerHTML = liste_cartes[i]["hp"]

        carte.appendChild(background)
        carte.appendChild(desc)
        carte.appendChild(border)
        carte.appendChild(mana)
        carte.appendChild(degat)
        carte.appendChild(vie)
        

        if (div == "mon-board"){
            carte.addEventListener('click', () => {
                selected_card = liste_cartes[i]["uid"]
                })
                document.getElementById("mon-board").appendChild(carte)
                
        }
        else if (div == "board-adv"){
            carte.addEventListener('click', () => {
                if (selected_card != null){
                    selected_card_adv = liste_cartes[i]["uid"]
                    play_card("ATTACK", selected_card, selected_card_adv)
                    selected_card = null
                    selected_card_adv = null
                }
                })
                document.getElementById("board-adv").appendChild(carte)
        }
        else {
        carte.addEventListener('click', () => {
            play_card("PLAY", liste_cartes[i]["uid"])
            })
            document.getElementById("container-cartes").appendChild(carte)
        }
        
    }
    

}




const refresh_hand_adv = (qte) => {

    document.getElementById("Cartes-Adversaire").innerHTML = ""

    for (let i = 0; i < qte; i++) {
        let carte = document.createElement("div")
        carte.classList.add("Cartes-restantes-adv")
        document.getElementById("Cartes-Adversaire").appendChild(carte)
    }

}

const hide_all = (message) => {
    var divsToHide = document.getElementsByClassName("jeu"); 
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; 
    }
    document.querySelector(".triangle-wrapper").style.display = "flex"
    document.querySelector(".triangle-loading").innerHTML = message
    document.body.style.backgroundImage = "none"
    if (message != "Loading"){
        setTimeout( () => {window.location.replace("home.php")}, 4000); //
        
    }
}

const verifier_tour = (ton_tour) => {
    if (!ton_tour && compteur_tour){
        
    tour.classList.remove("your_turn")
    compteur_tour = false
    }
    else if (ton_tour && !compteur_tour){
    tour.classList.add("your_turn")
    compteur_tour = true
    }
    

}
const attaquer_adv = (board_adv) => {
    try{
    if (board_adv.length >0 && selected_card != null && compteur_adv == false){
        
    photo_adv.classList.remove("valid_card")
    photo_adv.classList.add("unvalid_card")
    compteur_adv = true

    photo_adv.addEventListener('click', () => {
        play_card("ATTACK", selected_card, 0)
        selected_card = null
        photo_adv.classList.remove("unvalid_card")
        photo_adv.classList.add("valid_card")
        compteur_adv = false
    })
    }
    
}
catch (err){}
    

}


const verifier_pouvoir_hero = (ton_tour, mana) => {
  
    try{
        if (ton_tour && compteur_hero){
        bouton_hero.classList.remove("bouton_hero_true")
        bouton_hero.classList.add("bouton_hero")
        compteur_tour = false
        }
        else if (!ton_tour && !compteur_hero && mana >= 2){
            bouton_hero.classList.add("bouton_hero_true")
            bouton_hero.classList.remove("bouton_hero")
            compteur_tour = true
        }
    }
    catch(err) {
    
      }

}


const state = () => {
    fetch("ajax-state.php", {   // Il faut créer cette page et son contrôleur appelle 
 method : "POST"        // l’API (games/state)
    })
.then(response => response.json())
.then(data => {
    console.log(data); // contient les cartes/état du jeu.

    if (data == "WAITING" && compteur_refresh == false){
        
        compteur_refresh = true
    }
    else if (data != "WAITING" && compteur_refresh == true){
        document.querySelector(".triangle-wrapper").style.display = "none"
        var divsToHide = document.getElementsByClassName("jeu"); 
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "flex"; 
        }
        document.body.style.backgroundImage = "url(img/fight.png)"
        photo_adv = document.querySelector("Photo-Adversaire")
        document.querySelector(".Photo-Adversaire").innerHTML = data["opponent"]["username"]
        
        tour = document.querySelector(".Mon-Deck")
        temps_restant = document.querySelector(".Temps-restant")
        compteur_refresh = false
    }
    else if (data != "WAITING" && compteur_refresh == false && data!= "LAST_GAME_LOST" && data!= "LAST_GAME_LOST"){
    ma_vie.innerHTML = data["hp"]
    mon_mana.innerHTML = data["mp"]
    adv_vie.innerHTML = data["opponent"]["hp"]
    adv_mana.innerHTML = data["opponent"]["mp"]
    temps_restant.innerHTML = data["remainingTurnTime"]
    console.log(selected_card)
    
    

    refresh_cartes(data["hand"], data["mp"], "container-cartes")
    refresh_cartes(data["opponent"]["board"], 999, "board-adv" )
    refresh_cartes(data["board"], 999, "mon-board" )
    refresh_hand_adv(data["opponent"]["handSize"])
    verifier_tour(data["yourTurn"])
    verifier_pouvoir_hero(data["heroPowerAlreadyUsed"], data["mp"])
    attaquer_adv(data["opponent"]["board"])

    
    
    }
    else if (data == "LAST_GAME_LOST" && compteur_refresh == false){
        hide_all("Defeat")
    }
    else if (data == "LAST_GAME_WON" && compteur_refresh == false){
        hide_all("Victory")
    }




    setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}


window.addEventListener("load", () => {

    ma_vie = document.getElementsByClassName("qte-vie")[0]
    adv_vie = document.getElementsByClassName("qte-vie-adv")[0]
    mon_mana = document.getElementsByClassName("qte-mana")[0]
    adv_mana = document.getElementsByClassName("qte-mana-adv")[0]
    bouton_hero = document.querySelector(".bouton_hero")
    bouton_hero.addEventListener('click', () => {
        play_card("HERO_POWER")
        compteur_hero = true
        })

    document.querySelector(".bouton_skip_tour").addEventListener('click', () => {
        play_card("END_TURN")
        })

    document.querySelector(".bouton_abandon").addEventListener('click', () => {
        play_card("SURRENDER")
        })

    document.querySelector(".bouton_chat").addEventListener('click', () => {
        if (compteur_chat){
        document.querySelector(".chat").style.display = "none"
        compteur_chat = false
        }
        else
        {
            document.querySelector(".chat").style.display = "block"
            compteur_chat = true
        }

        })
    

        hide_all("Loading")
    

setTimeout(state, 500); // Appel initial (attendre 1 seconde)
});
