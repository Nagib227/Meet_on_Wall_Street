document.addEventListener("DOMContentLoaded", function() {
    const detailsElements = document.querySelectorAll(".list_function details");
  
    detailsElements.forEach((details) => {
      const summary = details.querySelector("summary");
      const uls = details.querySelectorAll("ul");
  
      summary.addEventListener("click", function() {
        if (!details.hasAttribute("open")) {
          uls.forEach(ul => {
            ul.style.maxHeight = ul.scrollHeight + "px";
          });
        } else {
          uls.forEach(ul => {
            ul.style.maxHeight = null;
          });
        }
      });
    });
  });
  
  
  