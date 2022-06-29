const form = document.querySelector(".formulaire");
const questions = document.querySelectorAll(".question");
const titreResultat = document.querySelector(".resultats h2");
const aideResultat = document.querySelector(".aide");
const noteResultat = document.querySelector(".note");
const emojis = ['✔️','✨','👀','😭','👎'];
const ArrayResult = ['rep3', 'rep4', 'rep8', 'rep10', 'rep15'];
let array = [];
let verifyArray = [];

//Boleen false or true 
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(document.querySelector('input[name="grp1"]:checked').value);

    for (let i = 1 ; i < 6 ; i++){
        array.push(document.querySelector(`input[name="grp${i}"]:checked`).value)
    }
    veriFunction (array)
    array=[];
})

function veriFunction (arrResult){
    for (let j = 0 ; j<5 ; j++){
        if (arrResult[j] === ArrayResult[j]){
            verifyArray.push(true);
        }else{
            verifyArray.push(false);
        }
    }
    afficherResultat(verifyArray)
    couleurFunction(verifyArray)
    verifyArray=[];
}

//Display false or true
function afficherResultat (tabCheck){
    const NbdeFautes = tabCheck.filter(el => el != true).length;
    
    switch(NbdeFautes) {


        case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';
    };
};
function couleurFunction (tabBool){
    for (let i = 0 ; i < tabBool.length ; i++){
        if (tabBool[i] === true ){
            questions[i].style.background = "green";
        }else{
            questions[i].style.background = "red";
        }
    }
}; 


questions.forEach (item => {
    item.addEventListener('click', ()=> {
        item.style.background = "white"
    })
})