/**
 * Created by jweir on 13/07/2014.
 */

function suppress(event) {
    if (!event)
        return false;
    if (event.preventDefault)
        event.preventDefault();
    if (event.stopPropagation)
        event.stopPropagation();
    if (event.cancelBubble)
        event.cancelBubble = true;
    return false;
}
var post_api = function(data) {
    console.log(data);
}
var call_api = function( context, api_url , api_data ) {
    console.log('called: call_api('+api_url+','+api_data+')');
    $.ajax({
        type: 'get',
        crossDomain: true,
        url: api_url,
        async: false,
        data: api_data,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            console.log('blah');
            post_api(data);
            $(context).closest('.panel-collapse').find('.result').html(JSON.parse(data));
        },
        fail: function (data) {
            console.log('api call failed');
            console.log(data);
        }
    });
    console.log('finished api call');
}

$(document).ready(function() {
    $('.tryme').click( function() {
        console.log($(this));

        var data            = {};
            data.year       = $(this).closest('.panel-collapse').find('input[name=year]').val();
            data.month      = $(this).closest('.panel-collapse').find('input[name=month]').val();
            data.offset     = $(this).closest('.panel-collapse').find('input[name=offset]').val();
            data.limit      = $(this).closest('.panel-collapse').find('input[name=limit]').val();

        var endpoint = '';

        switch($(this).closest('.panel-collapse').find('input[name=input]').val()) {

            case "municipality":
                /*
                $('.tryme.try2')
                    .closest('.panel-collapse')
                    .find('input[name=endpoint]').val()
                    .replace(':municipality_id',
                        $('.tryme.try2')
                            .closest('.panel-collapse')
                            .find('input[name=municipality]')
                            .val()
                    );
                */
                municipality = $(this).closest('.panel-collapse').find('input[name=municipality]').val();
                console.log(municipality);
                endpoint = $(this).closest('.panel-collapse').find('input[name=endpoint]').val().replace(':municipality_id',municipality);
                break;
            case "postcode":
                endpoint = $(this).closest('.panel-collapse').find('input[name=endpoint]').val().replace(':postcode',postcode);
                break;
            case "suburb":
                endpoint = $(this).closest('.panel-collapse').find('input[name=endpoint]').val().replace(':suburb',suburb);
                break;
        }
        console.log(endpoint);
        var api_url = 'http://govhack.mix.blue:8000'+endpoint;

        console.log(data);
        call_api($(this),api_url,data);

        return suppress(event);
    });
/*
        $('#dialog').dialog('close');
        var raw = $(this).find('.complete-address').html();
        var json = JSON.parse(raw);
        var pretty = JSON.stringify(json, null, 4).replace( / /g, '&nbsp;').replace( /\n/g, '<br />');
        $('#results').hide().html(pretty).fadeIn('slow');
        */

});