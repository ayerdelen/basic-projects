//using selectors inside the element
// traversing the dom
const qText = document.querySelectorAll(".question");

qText.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    //open just one question
    qText.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
