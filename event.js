const btn = document.querySelector("button");
const link = document.querySelector("a");
// btn.onclick = function() {
//   console.log("click");
// };

// btn.addEventListener("click", function(e) {
//   console.log(e);
// });

function clickhandler(e) {
  e.preventDefault();
  console.log("click");
}

link.addEventListener("click", clickhandler);
