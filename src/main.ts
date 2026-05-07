const mainApp = document.querySelector<HTMLElement>(".app");

const grid = 20;

for (let i = 0; i < grid; i++) {
  for (let j = 0; j < grid; j++) {
    let element: HTMLParagraphElement = document.createElement("p");
    element.classList.add("cell");
    mainApp.appendChild(element);
  }
}
