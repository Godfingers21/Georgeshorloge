function showDescription(creator) {
    // Cacher toutes les descriptions d'abord
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });

    // Afficher la description correspondante
    document.getElementById(creator + 'Description').style.display = 'block';
}

function changeImage(creator) {
    // Récupérer l'élément image
    var image = document.getElementById(creator);
    // Changer la source de l'image
    if(creator==='felix'){
        image.src = "../img/felixafter.png";
    }
    else if(creator==='faycal'){
        image.src = "../img/faycalafter.png";
    }
}
    

function restoreImage(creator) {
    // Récupérer l'élément image
    var image = document.getElementById(creator);
    if(creator==='felix'){
        image.src = "../img/felixbefore.png";
    }
    else if(creator==='faycal'){
        image.src = "../img/faycalbefore.png";
    }
}