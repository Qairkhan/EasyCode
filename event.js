const btn = document.querySelector("button");
const link = document.querySelector("a");
// btn.onclick = function() {
//   console.log("click");
// };

btn.addEventListener("click", function(event) {
  console.log(event);
});

function clickhandler(e) {
  e.preventDefault();
  console.log("clicks");
}

link.addEventListener("click", clickhandler);
