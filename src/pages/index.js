
const $itens  = document.querySelectorAll(".numbers");
const $titles = document.querySelectorAll(".title-item");
const $button = document.querySelector(".input-button");




createComponent( "widgets", function (response) {

    let pageViewsRight = parseFloat(response.pageViews / 1000).toFixed(1)

    $itens[0].insertAdjacentText("afterbegin", response.newOrders);
    $itens[1].insertAdjacentText("afterbegin", response.comments);
    $itens[2].insertAdjacentText("afterbegin", response.newUsers);
    $itens[3].insertAdjacentText("afterbegin", pageViewsRight);


}, function (error) {
   console.log(error);
});




$button.addEventListener("click", event => {
    createInputMessage();
});