


//widgets
    function createComponent( get, response, err ){
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




    function createInputMessage( post, response, err){
        
        $('.submit-message').submit(function(){
            
            $.ajax({
                type: "post",
                url: 'http://dev.4all.com:3050/messages',
                data: $(".submit-message").serialize(),
                dataType: "json",
                
                success: function (data) {
                    console.log(data);
                },
            })
            
            const text = document.querySelector(".input-messages").value;
            
            
            console.log(text);
            
            
            document.querySelector(".input-messages").value = "";


            return false;
        }); 

    }



/*

    function createMessages( post, response, err){
        let formdata = $('.submit-message'); 

       // $.ajaxSetup({async: false});  
        $.ajax({     
            type: "get",
            url: 'http://dev.4all.com:3050/messages',
            data: formdata,
            dataType: "json",
            success: function (data) {
                console.log(data);   
            },
            error: function (request, status, error) {
                err(request.responseText);
                console.log("error: "+request.responseText);
            }
        });

    }

*/


