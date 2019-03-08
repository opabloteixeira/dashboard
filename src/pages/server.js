


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




    function inputMessage( post, response, err){
        
        $('.submit-message').submit(function(){

            let $form = $(".submit-message");
           /* let data = getFormData($form);*/
            console.log($form);
/*

            function getFormData($form){
                var unindexed_array = $form.serializeArray();
                var indexed_array = {};
            
                $.map(unindexed_array, function(n, i){
                    indexed_array[n['name']] = n['value'];
                });
            
                return indexed_array;
            }*/



            //console.log(data);
            
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


