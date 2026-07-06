// Mzaca Gas and Paraffin — shared site behaviour

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form -> mailto fallback (no backend on static hosting)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var phone = form.querySelector("#phone").value.trim();
      var email = form.querySelector("#email").value.trim();
      var message = form.querySelector("#message").value.trim();

      var subject = encodeURIComponent("Website enquiry from " + name);
      var bodyLines = [
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + email,
        "",
        message
      ];
      var body = encodeURIComponent(bodyLines.join("\n"));

      window.location.href =
        "mailto:joemzacangulube24@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
});
