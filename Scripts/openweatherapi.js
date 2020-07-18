$(document).ready(function () {
    $('#getWeather').click(function () {
        try {
            var cityName = "4887398"
            var URL = "http://api.openweathermap.org/data/2.5/weather?id=" + cityName + "&units=imperial&appid=1ce3548ae9eb4c8bba8dd1daa2ee9a25"


            $.ajax({
                url: URL,
                success: function (result) {
                    console.log(result);
                    var html
                    html =
                        ' <ul>'
                        + '<li>Temperature:' + result.main.temp + '</li>'

                    $.each(result.weather, function (key, weather) {
                        html += '<li><img class="weather-icon" src="http://openweathermap.org/img/w/' + weather.icon + '.png" />'
                            + weather.description + '</li>'
                    })
                    html += "</ul>"

                    console.log(html)
                    $('#weather').prepend(html)
                    $("#getWeather").hide()
                }

            })
        } catch (e) {
            var html = e;
            $('#weather').prepend(e)
        }
    })
})