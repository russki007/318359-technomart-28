(function(window) {
  let mapLink = window.document.querySelector(".map-link");
  let mapPopup = window.document.querySelector(".model-map");
   wireUp(mapLink, mapPopup);


  let msgLink = window.document.querySelector(".msg-link");
  let msgPopup = window.document.querySelector(".model-msg");
  wireUp(msgLink, msgPopup);

  let buyLink = window.document.querySelector(".buy-btn");
  let msgConfirm = window.document.querySelector(".model-confirm-msg");
  wireUp(buyLink, msgConfirm);

  function wireUp(link, target) {

    if (link) {
      link.addEventListener('click', evt => {
        evt.preventDefault();
        target.classList.toggle("hidden");
      })
    }
    if (target) {
      if (target == null) debugger;
      const closeLink = target.querySelector(".model-close");
      if (closeLink == null) debugger;
      closeLink.addEventListener('click', evt => {
        target.classList.add("hidden");
      })
    }
  }

})(window);
