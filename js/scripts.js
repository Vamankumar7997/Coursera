
// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $("#mycarousel").carousel({ interval: 2000 });
  // eslint-disable-next-line no-undef
  $("#carousel-button").click(function () {
      // eslint-disable-next-line no-undef
      if ($("#carousel-button").children("span").hasClass("fa-pause")) {
          // eslint-disable-next-line no-undef
          $("#mycarousel").carousel("pause");
          // eslint-disable-next-line no-undef
          $("#carousel-button").children("span").removeClass("fa-pause");
          // eslint-disable-next-line no-undef
          $("#carousel-button").children("span").addClass("fa-play");
        } 
        // eslint-disable-next-line no-undef
        else if ($("#carousel-button").children("span").hasClass("fa-play")) {
            // eslint-disable-next-line no-undef
            $("#mycarousel").carousel("cycle");
            // eslint-disable-next-line no-undef
            $("#carousel-button").children("span").removeClass("fa-play");
            // eslint-disable-next-line no-undef
            $("#carousel-button").children("span").addClass("fa-pause");
    }
  });

  // eslint-disable-next-line no-undef
  $("#buttonLogin").click(function () {
    // eslint-disable-next-line no-undef
    $("#loginModal").modal("show");
  });

  // eslint-disable-next-line no-undef
  $("#buttonReservation").click(function () {
    // eslint-disable-next-line no-undef
    $("#reservationFormModal").modal("show");
  });
});
