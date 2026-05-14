const mainApp = document.querySelector<HTMLElement>(".app");
const lastHighestElement = document.querySelector<HTMLHeadingElement>(
  ".last__highest__score",
);
const currHighestElement =
  document.querySelector<HTMLHeadingElement>(".curr__score");
const stopButton = document.querySelector<HTMLButtonElement>(".stop__btn");

export { mainApp, lastHighestElement, currHighestElement, stopButton };
