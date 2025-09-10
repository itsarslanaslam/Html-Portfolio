let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    console.log(
        inputs[0].value,
        inputs[1].value 
       );
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = `Title: ${inputs[0].value} `;

    let p = document.createElement("p");
    p.textContent = `Description: ${inputs[1].value} `;

    card.appendChild(title);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
    })
})