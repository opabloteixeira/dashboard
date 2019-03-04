



    function checkResponse( get, response, err ){
        $.ajax({
            url:    "http://dev.4all.com:3050/"+get,
            type:   "get",
            dataType:"json",
    
            success: function( data ) {
                response(data);   
            },
    
            error: function (request, status, error) {
                err(request.responseText);
            }
        });
    }





