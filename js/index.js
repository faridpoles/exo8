var moyenne_user = parseInt(prompt("Quel est ta moyenne ?"));

if (moyenne_user < 10 ) {
    alert("Tu es recalé !");
} else if ((moyenne_user => 10) && (moyenne_user < 12)) {
    alert("Tu es reçu !");
} else if ((moyenne_user => 12) && (moyenne_user <= 20 )) {
    alert("Tu es reçu avec mention :) !");
} else if (moyenne_user > 20) {
    alert("Ta moyenne ne peut dépasser 20 ! ");
}