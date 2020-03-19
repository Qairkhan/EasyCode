const btn = document.querySelector("button");
const link = document.querySelector("a");
// btn.onclick = function() {
//   console.log("click");
// };

// btn.addEventListener("click", function(e) {
//   console.log(e);
// });

link.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("click");
});
