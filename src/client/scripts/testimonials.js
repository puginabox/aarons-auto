$.getJSON('/scripts/testimonials.json', function (data) {
    var output = '<div>';
    $.each(data, function (key, val) {
        output += '<blockquote>';
        output += '<p class="bubble">' + val.quote;
        output += '<cite>' + val.name + '</cite>';
        output += '<div class="bubble-triangle"></div>';
        output += '</p>';
        output += '</blockquote>';
    });
    output += '</div>';
    $('.testingAgain').html(output);
}); //get JSON