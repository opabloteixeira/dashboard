
createComponent("messages", function(response){

console.log(response);

let $messageList = document.querySelector(".message-list");

response.forEach(element => {
    

    let position = "left";

    if (!element.displayPortraitLeft) {
        position = "right";        
    }

    let $itens  = `                    
    <article class="message-item">
        <div class="wrap-message-itens">

            <figure class="image ${position}">
            <img class="image-item" src="${element.portrait}" alt="Perfil Image">
            </figure>

            <h2 class="title-item"> ${element.userName}
                <span class="message-time">
                    ${element.time}
                </span>
            </h2>

            <p class="text-item">
                ${element.message}
            </p>
        </div>  
    </article>`;


    $messageList.insertAdjacentHTML("beforeend",$itens);

});
},function (error){
console.log(error);
});







createInputMessage("messages", function(response){

    const $messageList = document.querySelector(".message-list");
    const $message = document.querySelector(".input-messages").value;


    let $item  = `                    
    <article class="message-item">
        <div class="wrap-message-itens">

            <figure class="image left"></figure>

            <h2 class="title-item"> Eu
                <span class="message-time">
                1 min ago
                </span>
            </h2>

            <p class="text-item">
                ${message}
            </p>
        </div>  
    </article>`;


    $messageList.insertAdjacentHTML("beforeend",$item);

});


