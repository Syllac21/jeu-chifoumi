const statut = document.querySelector("h2")
let jeuActif=true
let choixJoueur="1"
let choixOrdi="1"
let resultat="gagné"
const gagne=()=>`vous avez gagné`
const egalite=()=>`égalité`
const perdu=()=>'vous avez perdu'



document.querySelectorAll(".case").forEach(cell=>cell.addEventListener("click", gestionClickCase))
document.querySelector("#recommencer").addEventListener('click',recommencer)

// les fonctions
function gestionClickCase(){
    const indexCase=parseInt(this.dataset.index)
    if(!jeuActif){
        return
    }
    
    choixJoueur=indexCase
    tourOrdi()
    verifGagne()
    document.getElementById('papier').style.visibility='hidden';
    document.getElementById('Pierre').style.visibility='hidden';
    document.getElementById('ciseaux').style.visibility='hidden';
    document.getElementById('texteOrdi').style.visibility='visible';
    document.getElementById('texteJoueur').style.visibility='visible';

    switch(choixJoueur){
        case 0:
            document.getElementById('reponseJoueur0').style.visibility='visible';
            break;
        case 1:
            document.getElementById('reponseJoueur1').style.visibility='visible';
            break;
        case 2:
            document.getElementById('reponseJoueur2').style.visibility='visible';
            break;
    }
    switch(choixOrdi){
        case 0:
            document.getElementById('reponseOrdi0').style.visibility='visible';
            break;
        case 1:
            document.getElementById('reponseOrdi1').style.visibility='visible';
            break;
        case 2:
            document.getElementById('reponseOrdi2').style.visibility='visible';
            break;
    }

}


function tourOrdi(){
    choixOrdi=Math.floor(Math.random()*3)
}

function recommencer(){
    jeuActif=true
    statut.innerHTML="Résultat"
    document.getElementById('papier').style.visibility='visible';
    document.getElementById('Pierre').style.visibility='visible';
    document.getElementById('ciseaux').style.visibility='visible';
    document.getElementById('texteOrdi').style.visibility='hidden';
    document.getElementById('texteJoueur').style.visibility='hidden';
    document.getElementById('reponseJoueur0').style.visibility='hidden';
    document.getElementById('reponseJoueur1').style.visibility='hidden';
    document.getElementById('reponseJoueur2').style.visibility='hidden';
    document.getElementById('reponseOrdi0').style.visibility='hidden';
    document.getElementById('reponseOrdi1').style.visibility='hidden';
    document.getElementById('reponseOrdi2').style.visibility='hidden';

    
}

function verifGagne(){
    jeuActif=false
    if(choixJoueur==choixOrdi){
        statut.innerHTML=egalite()
        
    }
    switch (choixJoueur){
        case 0:
            if(choixOrdi==1){
                statut.innerHTML=gagne()
                
                return
            }
            statut.innerHTML=perdu()
            
            break;
        case 1:
            if(choixOrdi==2){
                statut.innerHTML=gagne()
                
                return
            }
            statut.innerHTML=perdu()
            break;
        case 2:
            if(choixOrdi==0){
                statut.innerHTML=gagne()
                
                return
            }
            statut.innerHTML=perdu()
            break;
    }
}