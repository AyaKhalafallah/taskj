// console.log("hi")

var cart=document.querySelectorAll(".but")
var basket=document.querySelector("#basket")
// var nam=document.querySelectorAll('#n')
var buy=document.getElementById('buy')
var totalprice=document.getElementById('totalprice')
x=0
var total=0
cart.forEach(function(item)
{
item.onclick=function(){
	total+=parseInt(item.getAttribute("price"));
	basket.innerHTML+= (x+=1)+"-  " +item.textContent+"    ";

	if (basket.innerHTML!=""){

	buy.style.display="block";

}
}	
})
buy.onclick=function(){totalprice.style.display="block";
	totalprice.innerHTML="Total Price :"+" "+total}


