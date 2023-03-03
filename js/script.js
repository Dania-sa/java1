var allProducts = document.querySelectorAll(".list p")
  var content = document.querySelector("#content")
  var btn = document.querySelector("#btn1")
  var totalPrice = 0
  var mash = 0


   allProducts.forEach( function (item){
        item.onclick = function (){
            totalPrice += +(item.getAttribute("price"))
            mash += +(item.getAttribute("count"))
            content.innerHTML += item.textContent + "+"
            
            if (content.innerHTML != "" ){
                btn.style.display = "block"
                btn.style.color = "black"
            }
        }      
   })
   btn.onclick = function (){
    document.getElementById("pill1").innerHTML= "The Count Of Pizza You Ordered Is: " + mash + "<br>Total Price Is : "+ totalPrice
    content.style.opacity = "0"
   }