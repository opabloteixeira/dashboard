




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




    function inputMessage(){
        
        $('.submit-message').submit(function(event){

            console.log(JSON.stringify($(this).serializeArray()));



            event.preventDefault();

            let $form = JSON.stringify($(this).serializeArray());

            
            $.ajax({
                type: "post",
                url: 'http://dev.4all.com:3050/messages',
                data: $form,
                dataType: "json",
                
                success: function (data) {
                    console.log(data);
                },
            })
            
            const text = document.querySelector(".input-messages").value;  
            
            document.querySelector(".input-messages").value = "";
            
        }); 

    }


 


