var allNames = ['kola','movic','ibrahim','tunde','yusuf','santor','lacelot','ayan','kokolee']
// allNames.pop()
// allNames.shift()
// allNames.push('uthman')
// allNames.unshift('harike')
// console.log(allNames);
var cart = [];

function addItems() {
if(inp.value == ""){
    alert('abeg fill')
} else{
   cart.push(inp.value)
   document.getElementById('inp').value = '';
   console.log(cart);
   show.innerHTML = "";
   for (i = 0; i < cart.length; i++) {
       show.innerHTML += `
       <p> ${i+1}.${cart[i]}</p>
       `
   }
}
}
function shit() {
       cart.pop(show.innerHTML)
       show.innerHTML = cart;
       show.innerHTML = "";
       for (i = 0; i < cart.length; i++) {
        show.innerHTML += `
        <p> ${i+1}.${cart[i]}</p>
        `
    }
    }
    function remTop() {
        cart.shift(show.innerHTML)
        show.innerHTML = cart;
        show.innerHTML = "";
        for (i = 0; i < cart.length; i++) {
         show.innerHTML += `
         <p> ${i+1}.${cart[i]}</p>
         `
     }
     }
     function addTop() {
        cart.unshift(inp.value)
        document.getElementById('inp').value = '';
        show.innerHTML = cart;
        show.innerHTML = "";
        for (i = 0; i < cart.length; i++) {
         show.innerHTML += `
         <p> ${i+1}.${cart[i]}</p>
         `
     }
     }
   