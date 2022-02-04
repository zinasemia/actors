"use strict";
let actors;

fetch("./actors.json")
    .then(response => {
        return response.json();
    })
    .then(function (data) {
        showartist(data);
     
    });

// actors.forEach(showartist);

function showartist(actors) {
    const templateElement = document.querySelector("#mytemplate").content;
    const parent = document.querySelector(".recieving");
    actors.forEach(actor => {
       
        const clone = templateElement.cloneNode(true);
        clone.querySelector(".fullname").textContent = actor.fullname;
        clone.querySelector("#movie").textContent = actor.movie;
        parent.appendChild(clone);

    });
   


}

function showmovie() { console.log("movie", movie);

document.querySelector(".hidden").classList.toggle("hidden");
}