//Recuperation des infos du formulaire
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const dateNaissance = document.getElementById('date_naissance');
const email = document.getElementById('email');
const liste = document.getElementById('listes');

//Pointer le curseur dans le champ prenom
prenom.focus();

//Generer Email
function generateEmail() {
    let nomValue = nom.value.trim();
    let prenomValue = prenom.value.trim();
    let dateValue = dateNaissance.value
    let emailValue = ''
    if (nomValue != '' && prenomValue != '' && dateValue != '') {
        console.log(nomValue, prenomValue, dateValue);
        emailValue = prenomValue.charAt(0) + nomValue + dateValue.split('-')[0] + '@isi.sn'
        email.value = emailValue.toLowerCase()
    } else {
        alert('Tous les champs sont obligatoires !')
    }
}

//Tableau de personnes
var T = []

function save() {
    let nomValue = nom.value.trim();
    let prenomValue = prenom.value.trim();
    let dateValue = dateNaissance.value
    let emailValue = email.value.trim();
    if (nomValue != '' && prenomValue != '' && dateValue != '' && emailValue != '') {
        let personne = {
            nom: nomValue,
            prenom: prenomValue,
            dateNaissance: dateValue,
            email: emailValue
        }
        T.push(personne)
        loadTable()
        nom.value = ''
        prenom.value = ''
        dateNaissance.value = ''
        email.value = ''
    } else {
        alert('Tous les champs sont obligatoires !')
    }
}

function loadTable() {
    liste.innerHTML = ''
    T.forEach((p, i) => {
        let tr = `
            <tr>
                <td>${i+1}</td>
                <td>${p.nom}</td>
                <td>${p.prenom}</td>
                <td>${p.dateNaissance}</td>
                <td>${p.email}</td>
                <td>
                    <button class="btn btn-sm btn-outline-warning">Modifier</button>
                    <button class="btn btn-sm btn-outline-danger">Supprimer</button>
                </td>
            </tr>
        `
        liste.innerHTML += tr
    })
}
