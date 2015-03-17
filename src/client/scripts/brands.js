

$.getJSON('scripts/brands.json', function (data) {
    var output = '<div class="brands-covered">';
    $.each(data, function (key, val) {
        output += '<p>';
        output += val.name;
        output += '</p>';
    });
    output += '</div>';
    $('.edmunds-brands').html(output);
}); //get JSON



