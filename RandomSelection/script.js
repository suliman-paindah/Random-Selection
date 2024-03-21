const tagsEl = document.querySelector(".tags");
const textarea = document.querySelector("#textarea");
textarea.focus();

let times = 30; // Declare times outside randomSelect

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  ///*this to split the string into sprite tags */
  const tags = input.split(",");
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag.trim(); // Trim to remove leading/trailing whitespace
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  let count = 0;
  interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlight(randomTag);
    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
    count++;
    if (count === times) {
      clearInterval(interval);
    }
  }, 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function unHighlight(tag) {
  tag.classList.remove("highlight");
}
