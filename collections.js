// Side Nav
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var close=document.getElementById("close-nav")
menuicon.addEventListener("click",function()
{
    sidenav.style.left=0
})
close.addEventListener("click",function()
{
    sidenav.style.left="-50%"
})

// Offer
var offer=document.getElementById("offer")
var offerclose=document.getElementById("offerClose")
offerclose.addEventListener("click",function()
{
    offer.style.display="none"
})

// Search Fuctionality
var search=document.getElementById("search")
var rightGrid=document.getElementById("right-grid")
var dressList=rightGrid.querySelectorAll("div")

search.addEventListener("keyup",function()
{
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<dressList.length;count++)
    {
        var dressName=dressList[count].querySelector("h1").textContent

        if(dressName.toUpperCase().indexOf(enteredValue)<0)   //<-1
        {
            dressList[count].style.display="none"   
        }
        else
        {
            dressList[count].style.display="block"
        }
    }
})

// CheckBox Functions
document.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".left input[type='checkbox']");
    const products = document.querySelectorAll(".right-grid .price");

    function filterProducts() {
        let selectedOccasions = [];
        let selectedColors = [];
        let selectedArrivals = [];

        document.querySelectorAll("#casual:checked, #formals:checked, #party:checked")
            .forEach(cb => selectedOccasions.push(cb.id));

        document.querySelectorAll("#black:checked, #red:checked, #blue:checked, #brown:checked")
            .forEach(cb => selectedColors.push(cb.id));

        document.querySelectorAll("#old:checked, #new:checked")
            .forEach(cb => selectedArrivals.push(cb.id));

        products.forEach(product => {
            let matchOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(product.dataset.occasion);
            let matchColor = selectedColors.length === 0 || selectedColors.includes(product.dataset.color);
            let matchArrival = selectedArrivals.length === 0 || selectedArrivals.includes(product.dataset.arrival);

            if (matchOccasion && matchColor && matchArrival) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));
});
