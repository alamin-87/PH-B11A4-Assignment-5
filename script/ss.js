//------------------ Get all elements with the class name "add_history"
let buttons = document.getElementsByClassName("add_history");

//------------------ Loop through each button and add an event listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    //----------- Show an alert message
    alert("Board Updated Successfully");

    //---------- Disable the button after clicking
    this.disabled = true;
    this.style.backgroundColor = "#9BA8F8";
    this.style.cursor = "not-allowed";

    //------------ Get and update task count
    const taskCount = document.getElementById("task_count").innerText;
    const convertTaskCount = parseInt(taskCount);
    const resultCount = convertTaskCount - 1;
    document.getElementById("task_count").innerText = resultCount;

    //------------ Get and update total task count
    const totalTaskCount = document.getElementById("total_task_count").innerText;
    const totalConvertTaskCount = parseInt(totalTaskCount);
    const totaalResultCount = totalConvertTaskCount + 1;
    document.getElementById("total_task_count").innerHTML = totaalResultCount;

    // ------------ Add History ----------------
    const historyContent = document.getElementById("history_content");

    // Find the closest card for this button
    let parentCard = this.closest(".main_card1");

    if (parentCard) {
      let cardHeading = parentCard.querySelector(".card_hading"); // Get heading inside this card

      if (cardHeading) {
        const div = document.createElement("div");
        const currentTime = new Date().toLocaleTimeString();

        // Set inner text with the correct card heading
        div.innerText = `You have completed the task: ${cardHeading.innerText} at ${currentTime}`;

        // Add styles
        div.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
        div.style.padding = "8px";
        div.style.marginTop = "10px";
        div.style.borderRadius = "5px";
        div.style.backgroundColor = "#f9f9f9";
        div.style.color = "#333";
        div.style.fontFamily = "Arial, sans-serif";
        div.style.fontSize = "14px";
        div.style.border = "1px solid #ccc";

        historyContent.appendChild(div);
      }
    }

    // ------------------ Last button click alert
    if (i === buttons.length - 1) {
      alert("Congratulations!!! You have completed all the current tasks.");
    }
  });
}
