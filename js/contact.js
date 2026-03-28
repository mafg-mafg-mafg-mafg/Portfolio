(function () {
    var form = document.getElementById("contact-form");
    if (!form) {
        return;
    }

    var status = document.getElementById("form-status");
    var destinationEmail = "mafg.mafg.mafg.mafg@gmail.com";

    function setStatus(message) {
        if (status) {
            status.textContent = message;
        }
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var message = document.getElementById("contact-message").value.trim();

        if (!message) {
            setStatus("Please write a message before sending.");
            return;
        }

        var subject = encodeURIComponent("Portfolio contact");
        var body = encodeURIComponent(message);

        window.location.href = "mailto:" + destinationEmail + "?subject=" + subject + "&body=" + body;
    });
})();
