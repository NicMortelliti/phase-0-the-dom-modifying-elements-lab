// Remove 'main'
document.querySelector('main').remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Nic is the champion"
document.body.append(newHeader);