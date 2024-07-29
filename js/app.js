//Mobile menu
    //Ouverture de menu pour le mode mobile
    const openMenu = () => {
        const menu = document.querySelector('.header-menu');
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            document.querySelector('header .material-icons').innerHTML = "close";
        }
        else {
            document.querySelector('header .material-icons').innerHTML = "menu";
        }
    }

    //Fermeture de menu pour le mode mobile
    const closeMenu = () => {
        const menu = document.querySelector('.header-menu');
        menu.classList.remove('active');
        document.querySelector('header .material-icons').innerHTML = "menu";
    }

//Gestion des modals pour les projets
    // Obtenir le modal
    var modal = document.getElementById("myModal");
    var modalYellowaves = document.getElementById("myModalYellowaves");
    var modalRaclavel = document.getElementById("myModalRaclavel");
    var modalRpg = document.getElementById("myModalRpg");
    var modalPortfolio = document.getElementById("myModalPortfolio");
    var modalCopameba = document.getElementById("myModalCopameba");
    var modalMalink = document.getElementById("myModalMalink");
    var modalRivendell = document.getElementById("myModalRivendell");

    // Obtenir le bouton qui ouvre le modal
    var btn = document.getElementById("openModalBtn");
    var btnYellowaves = document.getElementById("openModalBtnYellowaves");
    var btnRaclavel = document.getElementById("openModalBtnRaclavel");
    var btnRpg = document.getElementById("openModalBtnRpg");
    var btnPortfolio = document.getElementById("openModalBtnPortfolio");
    var btnCopameba = document.getElementById("openModalBtnCopameba");
    var btnMalink = document.getElementById("openModalBtnMalink");
    var btnRivendell = document.getElementById("openModalBtnRivendell");

    // Obtenir l'élément <span> qui ferme le modal
    var span = document.getElementsByClassName("close")[0];
    var spanYellowaves = document.getElementsByClassName("closeYellowaves")[0];
    var spanRaclavel = document.getElementsByClassName("closeRaclavel")[0];
    var spanRpg = document.getElementsByClassName("closeRpg")[0];
    var spanPortfolio = document.getElementsByClassName("closePortfolio")[0];
    var spanCopameba = document.getElementsByClassName("closeCopameba")[0];
    var spanMalink = document.getElementsByClassName("closeMalink")[0];
    var spanRivendell = document.getElementsByClassName("closeRivendell")[0];

    // Lorsque l'utilisateur clique sur le bouton, ouvrir le modal
    btnYellowaves.onclick = function() {
        modalYellowaves.style.display = "block";
    }
    btnYellowaves.onclick = function() {
        modalYellowaves.style.display = "block";
    }
    btnRaclavel.onclick = function() {
        modalRaclavel.style.display = "block";
    }
    btnRpg.onclick = function() {
        modalRpg.style.display = "block";
    }
    btnPortfolio.onclick = function() {
        modalPortfolio.style.display = "block";
    }
    btnCopameba.onclick = function() {
        modalCopameba.style.display = "block";
    }
    btnMalink.onclick = function() {
        modalMalink.style.display = "block";
    }
    btnRivendell.onclick = function() {
        modalRivendell.style.display = "block";
    }

    // Lorsque l'utilisateur clique sur <span> (x), fermer le modal
    spanYellowaves.onclick = function() {
        modalYellowaves.style.display = "none";
    }
    spanRaclavel.onclick = function() {
        modalRaclavel.style.display = "none";
    }
    spanRpg.onclick = function() {
        modalRpg.style.display = "none";
    }
    spanPortfolio.onclick = function() {
        modalPortfolio.style.display = "none";
    }
    spanCopameba.onclick = function() {
        modalCopameba.style.display = "none";
    }
    spanMalink.onclick = function() {
        modalMalink.style.display = "none";
    }
    spanRivendell.onclick = function() {
        modalRivendell.style.display = "none";
    }

    // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermer le modal
    window.onclick = function(event) {
        if (event.target == modalYellowaves) {
            modalYellowaves.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modalRaclavel) {
            modalRaclavel.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modalRpg) {
            modalRpg.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modalPortfolio) {
            modalPortfolio.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modalCopameba) {
            modalCopameba.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modalMalink) {
            modalMalink.style.display = "none";
        }
    }
    
//Fin modal

//gestion du boutton partie cachée
document.getElementById('toggleButton').addEventListener('click', function() {
    var hiddenContent = document.getElementById('hiddenContent');
    if (hiddenContent.classList.contains('hidden')) {
        hiddenContent.classList.remove('hidden');
        this.classList.remove('arrow-down');
        this.classList.add('arrow-up');
    } else {
        hiddenContent.classList.add('hidden');
        this.classList.remove('arrow-up');
        this.classList.add('arrow-down');
    }
});
//Fin gestion du boutton partie cachée