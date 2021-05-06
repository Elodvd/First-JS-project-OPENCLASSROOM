    //création conteneur tableau + formulaire 
    const conteneurPage = document.getElementById("main-panier");        


if(typeof localStorage!='undefined' && JSON) {
    if (localStorage.getItem('panier') == null) {
        // affichage d'un message si aucun produit dans le panier
        alert("Votre panier est vide");

        var formulaire = document.getElementById("formulaire");
        formulaire.style.visibility="hidden";
    }
    else{

        //création du Titre du tableau
        const Titretableau = document.createElement("h2");
        Titretableau.innerHTML=" Votre panier : "
        



        //création du tableau en vue de stocker les données du panier 
        const tableau = document.createElement("table");
        tableau.classList.add("bordure");

        //création conteneur tableau
        const conteneurTableau = document.getElementById("conteneur-tableau");  
        conteneurPage.appendChild(conteneurTableau);
        conteneurTableau.appendChild(Titretableau);
        conteneurTableau.appendChild(tableau);
        

        //création ligne + cellules en-tête
        const ligneEnTete = document.createElement("tr");
        tableau.appendChild (ligneEnTete);

        const nomEnTete = document.createElement("th");
        ligneEnTete.appendChild (nomEnTete);
        nomEnTete.innerHTML="Nom";
        //nomEnTete.setAttribute("width", "100px");

        const couleurEnTete = document.createElement("th");
        ligneEnTete.appendChild (couleurEnTete);
        couleurEnTete.innerHTML="Couleur";

        const quantiteEnTete = document.createElement("th");
        ligneEnTete.appendChild (quantiteEnTete);
        quantiteEnTete.innerHTML="Quantité";

        const pxUnitaireEnTete = document.createElement("th");
        ligneEnTete.appendChild (pxUnitaireEnTete);
        pxUnitaireEnTete.innerHTML="Prix unitaire";

        const pxTotalEnTete = document.createElement("th");
        ligneEnTete.appendChild (pxTotalEnTete);
        pxTotalEnTete.innerHTML="Prix Total";


        var panier_json = localStorage.getItem("panier");
        var panier = JSON.parse(panier_json);

        var totalPanier = 0;

        for (var i in panier) {
            var ajoutLigneTableau = document.createElement("tr");
            tableau.appendChild(ajoutLigneTableau);
       
 
        /* Affichage du nom du produit */
        var nomOurs = document.createElement("td");
        ajoutLigneTableau.appendChild(nomOurs);
        nomOurs.innerHTML=panier[i].nom;

       /* Affichage de la couleur du produit */
       var couleurOurs = document.createElement("td");
       ajoutLigneTableau.appendChild(couleurOurs);
       couleurOurs.innerHTML=panier[i].couleur;     

        /* Affichage de la quantité du produit */
       var qteOurs = document.createElement("td");
       ajoutLigneTableau.appendChild(qteOurs);
       qteOurs.innerHTML=panier[i].quantite; 

        /* Affichage du prix du produit */
        var pxOurs = document.createElement("td");
        ajoutLigneTableau.appendChild(pxOurs);
        pxOurs.innerHTML=panier[i].prix + " €"; 

         /* Affichage du prix total de la ligne */
        var tdTotalOurs = document.createElement("td");
        ajoutLigneTableau.appendChild(tdTotalOurs);

        var pxTotalOurs = panier[i].prix * panier[i].quantite;
        tdTotalOurs.innerHTML= pxTotalOurs + " €";
        totalPanier += pxTotalOurs ;
    }
       /* Affichage du prix total du panier */
       var pTotalPanier = document.createElement("p");
       conteneurTableau.appendChild(pTotalPanier);
       pTotalPanier.innerHTML= "TOTAL : " + totalPanier + " €";

  
      
    }


} else {
    alert("localStorage n'est pas supporté");
  }