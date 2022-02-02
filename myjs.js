fetch("./actors.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => console.log(jsondata));
    item.forEach(showartist);



function showartist(item) {
    const templateElement = document.querySelector("#mytemplate").content;
    const clone = templateElement.cloneNode(true);
    clone.querySelector(".fullname").textContent = item.fullname;
    clone.querySelector(".movie").textContent = item.fullname;
    const parent = document.querySelector("body");
    parent.appendChild(clone);
}