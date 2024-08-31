let increment=document.getElementsByClassName("inc");
let decrement=document.getElementsByClassName("dec");
let quantity=document.getElementsByClassName("qty");
let price=document.getElementsByClassName("prd-price");
let remove=document.getElementsByClassName("remove-btn");
let total=document.getElementsByClassName("t-amnt")[0];
let totalquantity=document.getElementsByClassName("t-qty")[0];
let totalprice=document.getElementsByClassName("total-price");

console.log(increment,decrement,quantity);
let s=0
let q=0
for(let i=0;i<increment.length;i++){
    q++;

    increment[i].addEventListener("click",function(){
        let qty=parseInt(quantity[i].innerHTML);
        let prc=parseInt(price[i].innerHTML);
        qty++

        quantity[i].innerHTML=(qty)

        totalprice[i].innerHTML=qty*(prc)

       getallPrice()
       document.getElementsByClassName("t-qty").innerHTML=q;


    //    getallquantity()

    }

)

// decrement code
decrement[i].addEventListener("click",function(){
    let qty=parseInt(quantity[i].innerHTML);
    let prc=parseInt(price[i].innerHTML);

    qty--
    if(qty<1){
        qty=1;
        }
        quantity[i].innerHTML=(qty)
        totalprice[i].innerHTML=qty*(prc)

      getallPrice()
    //   getallquantity()



})

// remove button
remove[i].addEventListener("click",function(){
    let pe=remove[i].parentElement.parentElement;
    pe.remove();
})
}

// get totak amount
function getallPrice(){
    for (let k=0;k<totalprice.length;k++){
        s+=parseInt(totalprice[k].innerHTML)
    }
    total.innerHTML=s;
    s=0
    }
    //get total quantity
    
    //   function getallquantity(){
    //     for(let v=0;v<quantity.length;v++){
    //      q+=parseInt(quantity[v].innerHTML)
    //     }
    //     totalquantity.innerHTML=v;
    //     v=0
    //   }
//    let p= document.getElementById("Q1").value
//    let l=  document.getElementById("Q2").value
//    let h=p+l
//    totalquantity=h;

// document.getElementsByClassName("t-qty").innerHTML=totalquantity
       
