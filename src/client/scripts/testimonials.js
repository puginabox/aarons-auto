$.getJSON('scripts/testimonials.json', function (data) {
    var output = '<div>';
    $.each(data, function (key, val) {
        output += '<blockquote>';
        output += '<p class="bubble" itemprop="reviewBody">' + val.quote;
        output += '<cite itemprop="author">' + val.name + '</cite>';
        output += '<div class="bubble-triangle"></div>';
        output += '</p>';
        output += '</blockquote>';
    });
    output += '</div>';
    $('.reviews').html(output);
}); //get JSON