document
  .getElementById("back_desk_page")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./index.html";
    console.log('done');
  });
