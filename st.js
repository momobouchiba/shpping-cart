let buttonplus =document.getElementsByClassName("fas fa-minus-square")
for (let plus of buttonplus  ) {
    plus.addEventListener("clike"),function( ) {
        plus.nextElementSibling.innerHTML++;
        Soumme ();
    });


   let buttonminse =document.querySelectorAll(".fa-minse-squeare ") {
    console.log(buttonminse); 
    for   (let i = 0; i < buttonminus.length; i++) {  buttonminus [i].()
        buttonminus[i].addEventListener("click", function () {
            if (buttonminus[i].previousElementSibling.innerHTML > 0) {
              buttonminus[i]. .innerHTML--;
            }
              soumme();
            });


let buttonminus=document.getElementsByClassName("fat-time");
for (let mrv buttonremove  )  
{
    rmv.addEventListener("click", function () {
      rmv.parentNode.remove();
      somme();
    });
  }
 
  
  function somme() {
    let quantity = document.getElementsByClassName("qte");
    let prices = document.getElementsByClassName("price");
    let sum = 0;
  
    for (let i = 0; i < prices.length; i++) {
      sum += quantity[i].innerHTML * prices[i].innerHTML;
    }
    return (document.getElementById("totalp").innerHTML =
      "Shooping Bag Total : $" + sum);
  }
  
  
  let hearts = document.getElementsByClassName("fa-heart");
  for (let heart of hearts) {
    heart.addEventListener("click", function () {
    });
  }

  


