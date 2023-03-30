const element = function (tag, inner) {
  return `<${tag}>${inner}</${tag}>`;
} 

const loadEvent = function() {

  // Write your JavaScript code after this line
  // 1
  const divRoot = document.getElementById("root");
  let tagName = "button";

  for (let index = 0; index < 20; index++) {
    if (index === 10) {
      tagName = "p";
    }
    const htmlElement = element(tagName, index);
    divRoot.insertAdjacentHTML("beforeend", htmlElement);
  }

  // 2
  window.addEventListener("click", function(event) {
    console.log(event.target.tagName);
  })

  // 3
  const buttons = document.querySelectorAll("button");
  const paragraphs = document.querySelectorAll("p");
  
  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
      const current = document.getElementsByClassName(" active");

      if (current.length > 0) {
        current[0].className = "";
      }

      const paragraphIndex = Number(btn.textContent);
      paragraphs[paragraphIndex].className = " active";
    });
  });

  paragraphs.forEach(parag => {
    parag.addEventListener("click", function() {
      const current = document.getElementsByClassName(" active");

      if (current.length > 0) {
        current[0].className = "";
      }

      const buttonIndex = Number(parag.textContent) - 10;
      buttons[buttonIndex].className = " active";
    });
  });

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
