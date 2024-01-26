var i = 35;

function agrandir() {
    var letitre = document.getElementById("titre");
    var fontSizeTitre = letitre.style.fontSize;
    if (i >= 50) {
        alert("Vous avez atteint le niveau de zoom maximal.");
    } else {
        letitre.style.fontSize = (i + 3) + "px";
        i = i + 3;
    }
}

function diminuer() {
    var letitre = document.getElementById("titre");
    var fontSizeTitre = letitre.style.fontSize;
    if (i <= 10) {
        alert("Vous avez atteint le niveau de zoom minimal.");
    } else {
        letitre.style.fontSize = (i - 3) + "px";
        i = i - 3;
    }
}

//function police() {
//    var pol = document.getElementsByClassName("top");
//    let q;
//    q = prompt("Mettez un type de police.")
//
//    pol.style.fontFamily = q;
//}

const progressBar = document.querySelector('.progress_bar');
progressBar.style.display = "none";

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  progressBar.style.display = "block";
  const height = document.body.scrollHeight; // taille du site
  const windowHeight = window.innerHeight; // taille de l'affichage
  const position = window.scrollY; // la position en pixels du document
  
  const trackLength = height - windowHeight; // taille du site - la partie affichée sur l'écran en ce moment (exemple : 1000px)
  
  const percentage = 
        Math.floor((position / trackLength) * 100); // pourcentage du site déjà parcouru
  
  progressBar
      .style.right = 100 - percentage + '%';
}

function policechangement() {

    // Sélectionnez tous les éléments de la page
    var elements = document.querySelectorAll("body, h1, p");

    let q;
    q = prompt("Mettez un type de police.");
    // Parcourez tous les éléments et changez la police
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontFamily = q;
}
}

function taillechangement() {

    // Sélectionnez tous les éléments de la page
    var elements = document.querySelectorAll("img");

    let c;
    c = prompt("Mettez une taille d'image");
    // Parcourez tous les éléments et changez la police
    if (c >=500) {
        alert("Vous avez choisi une taille trop grosse !")
    } else {
        if (c <= 100) {
            alert("Vous avez mis une taille trop petite !")

        } else {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.width = c + "px";
        }
    }
    
}
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function test() {
    var texte = document.getElementById("titre");

    // Définissez une variable pour suivre l'état de visibilité du texte
    var visible = true;

    // Déf des variable pour la couleur
    var letters = '0123456789ABCDEF';
    

    // Utilisez setInterval() pour exécuter une fonction à intervalles réguliers
    setInterval(function() {
    // Inversez l'état de visibilité du texte
    visible = !visible;
    
    // Génère une couleur aléatoire

    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    texte.style.backgroundColor = color;
    console.log("La couleur actuelle est : " + color);

    // Modifiez la visibilité du texte en fonction de l'état actuel
    if (visible) {
        texte.style.visibility = "visible";
  } else {
        texte.style.visibility = "hidden";
  }
    }, 1200); // Changez la valeur 500 pour ajuster la vitesse de clignotement (en millisecondes)
}

test()

function titrepage() {
    var titrepage = document.getElementById("pagetitle");
    var texte = document.getElementById("titre");

    let s;
    s = prompt("Titre de la page ?")

    titrepage.textContent = s;
    texte.innerHTML = s;
}

function graphique(){
    const ctx = document.getElementById('myChart');
    var randomnb = getRandomInt(50);
    var testreg = getRandomInt(36);
    var testreg2 = getRandomInt(18);
    new Chart(ctx, {
            type: 'doughnut',
            data: {
            labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi','Samedi','Dimanche'],
        datasets: [{
          label: 'NB heures',
          data: [(randomnb+testreg2*1.3), (randomnb*1.3),(randomnb*0.9+testreg2*0.3),((randomnb+testreg)*0.1+testreg2*randomnb*0.2),(randomnb*1.5),(randomnb*0.5),((randomnb-testreg)*2)],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugin: {
            title: {
                display: true,
                text: 'Test',
            }
        }
      }
    });
}
