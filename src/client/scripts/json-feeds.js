$.getJSON('/scripts/testimonials.json', function (data) {
    var output = '<ul>';
    $.each(data, function (key, val) {
        output += '<li>' + val.name + '</li>';
    });
    output += '</ul>';
    $('.testen').html(output);
}); //get JSON