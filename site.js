(function () {
  var popupLinks = document.querySelectorAll("[data-booking-popup], [data-email-popup]");

  popupLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var popupWidth = Math.min(960, Math.max(360, window.screen.availWidth - 80));
      var popupHeight = Math.min(820, Math.max(520, window.screen.availHeight - 80));
      var popupLeft = Math.max(0, Math.round((window.screen.availWidth - popupWidth) / 2));
      var popupTop = Math.max(0, Math.round((window.screen.availHeight - popupHeight) / 2));
      var popupName = link.hasAttribute("data-email-popup") ? "amihanTravelsEmail" : "amihanTravelsBooking";
      var features = [
        "popup=yes",
        "resizable=yes",
        "scrollbars=yes",
        "width=" + popupWidth,
        "height=" + popupHeight,
        "left=" + popupLeft,
        "top=" + popupTop
      ].join(",");

      event.preventDefault();

      var popup = window.open(link.href, popupName, features);

      if (popup) {
        popup.focus();
      } else {
        window.location.href = link.href;
      }
    });
  });
})();
