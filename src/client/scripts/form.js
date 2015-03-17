// Contact Form
$("#contact-form").submit(function (event) {

    $(this).each(function () {
        var count = $(this).find(':input[data-invalid]').length;
        if (count === 0) {

            var url = "./php/form.php";
            var data = $(this).serialize();
            var success = $(this).append("<p>Thank You! We will be in touch shortly about your appointment!.</p>");

            $.ajax({
                type: "POST",
                url: url,
                data: data,
                success: success
            });

        }
    });
    event.preventDefault();
});