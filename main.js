const date = new Date();

let year = date.getFullYear();

const footer = document.querySelector("#copyright");

footer.textContent = "Federico Nuñez © " + year;
