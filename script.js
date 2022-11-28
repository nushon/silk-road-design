function mobileView() {
    let mobileDiv = document.getElementById("mobileDiv");
    // let mobileLinkMainDiv = document.getElementById("mobileLinkMainDiv");
    if (mobileDiv.style.display === "block") {
        mobileDiv.style.display = "none";
        // mobileLinkMainDiv.display = "none";
    } else {
        mobileDiv.style.display = "block";
        // mobileLinkMainDiv.display = "block";
    }
  }