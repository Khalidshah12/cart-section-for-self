

var container = document.querySelector("#container")

var details = JSON.parse(localStorage.getItem("cart"))

display(details)

function display(data) {
    if (data == null || data == "") {
        const noItem = document.createElement('h1');
        noItem.innerText = "There are no items in your basket."

        const hrline = document.createElement('hr');

        var continueShoppingButton = document.createElement("button")
        continueShoppingButton.innerText = "CONTINUE SHOPPING"
        continueShoppingButton.addEventListener("click", shoppingFunction)

        function shoppingFunction() {
            window.location.href = "sampleData.html"
        }

        document.querySelector("#container").append(noItem, hrline, continueShoppingButton)
    }


    else {
        const yourBasket = document.createElement('h1');
        yourBasket.innerText = "Your Basket"

        const basketHrLine = document.createElement('hr');

        const promoButton = document.createElement('button');
        promoButton.innerText = "VIEW AVAILABLE PROMOS"

        const divLikeTable = document.createElement('div');
        divLikeTable.setAttribute("id", "divLikeTable")
        const p1 = document.createElement('p');
        p1.innerText = "ITEM DESCRIPTION"
        const p2 = document.createElement('p');
        p2.innerText = "UNIT PRICE"
        const p3 = document.createElement('p');
        p3.innerText = "QUANTITY"
        const p4 = document.createElement('p');
        p4.innerText = "SUBTOTAL"
        const p5 = document.createElement('p');
        p5.innerText = "SAVINGS"
        divLikeTable.append(p1, p2, p3, p4, p5)

        data.forEach(function (elem,index) {

            const allDetails = document.createElement('div');
            allDetails.setAttribute("id", "allDetails")

            const categoryDiv = document.createElement('div');
            categoryDiv.innerText = elem.category
            categoryDiv.setAttribute("id", "categoryDiv")



            const itemDetails = document.createElement('div');
            itemDetails.setAttribute("id", "itemDetails")

            const itemDescription = document.createElement('div');
            itemDescription.setAttribute("id", "itemDescription")

            const itemDescriptionP1 = document.createElement('p');
            itemDescriptionP1.innerText = elem.brandName

            const itemDescriptionP2 = document.createElement('p');
            itemDescriptionP2.innerText = elem.productName
            itemDescription.append(itemDescriptionP1, itemDescriptionP2)



            const unitPrice = document.createElement('div');
            unitPrice.setAttribute("id", "unitPrice")

            const unitPriceP1 = document.createElement('p');
            unitPriceP1.innerText = elem.priceDisplay
            const unitPriceP2 = document.createElement('p');
            unitPriceP2.innerText = elem.priceBeforeDisplay

            unitPrice.append(unitPriceP1, unitPriceP2)


            const incDecQuantity = document.createElement('div');
            incDecQuantity.setAttribute("id", "incDecQuantity")

            const pMinus = document.createElement('p');
            pMinus.innerText = "-"
            pMinus.style.cursor = "pointer"
            pMinus.addEventListener("click", minusFunction)
            function minusFunction() {
                
                if(count == 1){
                    data.splice(index,1)
                    // details.splice(index,1)
                    // var details = []
                    localStorage.setItem("cart",JSON.stringify(data))
                    window.location.reload()
                    // window.opener.location.reload().href = "sampleData.html"
                }
                else {
                    count--
                    pQuantity.innerText = count
                    sub = elem.price * pQuantity.innerText
                    subTotal.innerText = "Rs." + " " + sub.toFixed(2)
                }

            }

            var count = 1
            var pQuantity = document.createElement('p');
            pQuantity.innerText = count

            const pPlus = document.createElement('p');
            pPlus.innerText = "+"
            pPlus.style.cursor = "pointer"
            pPlus.addEventListener("click", plusFunction)
            function plusFunction() {
                count++
                pQuantity.innerText = count
                sub = elem.price * pQuantity.innerText
                subTotal.innerText = "Rs." + " " + sub.toFixed(2)
            }

            incDecQuantity.append(pMinus, pQuantity, pPlus)


            const subTotal = document.createElement('p');
            var sub = elem.price * pQuantity.innerText

            subTotal.innerText = "Rs." + " " + sub.toFixed(2)

            const saving = document.createElement('p');
            saving.style.color = "#BE1E2D"
            var save = (elem.priceBefore - elem.price).toFixed(2)
            saving.innerText = "Rs." + " " + save
            itemDetails.append(itemDescription, unitPrice, incDecQuantity, subTotal, saving)




            allDetails.append(categoryDiv, itemDetails)
            document.querySelector("#cont").append(allDetails)
            document.querySelector("#container").append(yourBasket, basketHrLine, promoButton, divLikeTable)
        })
    }


}