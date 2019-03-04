

const $itens = document.querySelectorAll(".numbers");

checkResponse( "widgets", function (response) {


    console.log(response);

    let pageViewsRight = parseFloat(response.pageViews / 1000).toFixed(1)

    $itens[0].insertAdjacentText("afterbegin", response.newOrders);
    $itens[1].insertAdjacentText("afterbegin", response.comments);
    $itens[2].insertAdjacentText("afterbegin", response.newUsers);
    $itens[3].insertAdjacentText("afterbegin", pageViewsRight);



}, function (error) {
   console.log(error);
});

