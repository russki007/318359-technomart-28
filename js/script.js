(function(window) {
  let mapLink = window.document.querySelector(".map-link");
  let mapPopup = window.document.querySelector(".model-map");
   wireUp(mapLink, mapPopup);


  let msgLink = window.document.querySelector(".msg-link");
  let msgPopup = window.document.querySelector(".model-msg");
  wireUp(msgLink, msgPopup);


  let buttons = window.document.querySelectorAll(".buy-btn");
  let msgConfirm = window.document.querySelector(".model-confirm-msg");
  buttons.forEach(button =>{
    wireUp(button, msgConfirm)
  });

  function wireUp(link, target) {
    if (link) {
      link.addEventListener("click", evt => {
        evt.preventDefault();
        target.classList.toggle("hidden");
      })
    }
    if (target) {
      const closeLink = target.querySelector(".model-close");
      closeLink.addEventListener("click", evt => {
        target.classList.add("hidden");
      })
    }
  }

})(window);
