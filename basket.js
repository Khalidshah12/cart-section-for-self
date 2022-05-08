

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

        document.querySelector("#nothingInBasket").append(noItem, hrline, continueShoppingButton)
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

        data.forEach(function (elem, index) {

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

                if (count == 1) {
                    data.splice(index, 1)
                    // details.splice(index,1)
                    // var details = []
                    localStorage.setItem("cart", JSON.stringify(details))
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


            const deletelogo = document.createElement('p');
            deletelogo.innerText = "x"
            deletelogo.addEventListener("click", function () {
                deleteItem(data, index)
            })

            const saving = document.createElement('p');
            saving.style.color = "#BE1E2D"
            var sav = (elem.priceBefore - elem.price).toFixed(2)
            var save = sav
            saving.innerText = "Rs." + " " + save
            itemDetails.append(itemDescription, unitPrice, incDecQuantity, subTotal, deletelogo, saving)

            allDetails.append(categoryDiv, itemDetails)
            document.querySelector("#cont").append(allDetails)
            document.querySelector("#container").append(yourBasket, basketHrLine, promoButton, divLikeTable)
        })

        // const productDetailsEndHrLine = document.createElement('hr');
        // productDetailsEndHrLine.setAttribute("id","productDetailsEndHrLine")
        // document.querySelector("#cont").append(productDetailsEndHrLine)


        const containerAfterProductDetail = document.createElement('div');
        document.querySelector("body").append(containerAfterProductDetail)

        // Empty Basket button
        const emptyBasketButton = document.createElement('div');
        const emptyBasket = document.createElement('button');
        emptyBasket.innerText = "EMPTY BASKET"
        emptyBasket.addEventListener("click", emptyBasketFunction)
        function emptyBasketFunction() {
            document.querySelector("#container").innerHTML = ""
            document.querySelector("#cont").innerHTML = ""
            containerAfterProductDetail.innerHTML = ""
            details = []
            localStorage.setItem("cart", JSON.stringify(details))
            window.location.reload()
        }
        emptyBasketButton.append(emptyBasket)
        containerAfterProductDetail.append(emptyBasketButton)

        const checkoutDiv = document.createElement('div');
        containerAfterProductDetail.append(checkoutDiv)

        const checkoutDiv1 = document.createElement('div');
        const subTotalAndTotal = document.createElement('div');
        const checkoutSubtotalAndDeliveryText = document.createElement('div');
        const checkoutSubtotalAndDeliveryTextp1 = document.createElement('p');
        const checkoutSubtotalAndDeliveryTextp2 = document.createElement('p');
        checkoutSubtotalAndDeliveryText.append(checkoutSubtotalAndDeliveryTextp1,checkoutSubtotalAndDeliveryTextp2)


        const checkoutSubtotalValue = document.createElement('div');
        const checkoutSubtotalValuep1 = document.createElement('p');
        const checkoutSubtotalValuep2 = document.createElement('p');
        checkoutSubtotalValue.append(checkoutSubtotalValuep1,checkoutSubtotalValuep2)
        subTotalAndTotal.append(checkoutSubtotalAndDeliveryText,checkoutSubtotalValue)


        const checkoutSubTotal = document.createElement('div');
        const checkoutSubTotalp1 = document.createElement('p');
        const checkoutSubTotalp2 = document.createElement('p');

        checkoutSubTotal(checkoutSubTotalp1,checkoutSubTotalp2)
        const checkoutTotal = document.createElement('div');
        subTotalAndTotal.append(checkoutSubTotal,checkoutTotal)


        const saveDiv = document.createElement('div');
        const saveDivImg = document.createElement('img');
        saveDiv.append(saveDivImg)
        checkoutDiv1.append(subTotalAndTotal,saveDiv)

        const checkoutDiv2 = document.createElement('div');
        const checkoutButton = document.createElement('button');
        const deliveryInstruction = document.createElement('div');
        checkoutDiv2.append(checkoutButton,deliveryInstruction)
        checkoutDiv.append(checkoutDiv1,checkoutDiv2)



        const subtotalText = document.createElement('p');
        subtotalText.innerText = "Subtotal"
        const subtotalDeliveryText = document.createElement('p');
        subtotalDeliveryText.innerText = "Delivery Charges "

        const subtotalValue = document.createElement('p');
        subtotalValue.innerText = 150
        const subtotalDeliveryvalue = document.createElement('p');
        subtotalDeliveryvalue.innerText = "---"


        const totalText = document.createElement('p');
        totalText.innerText = "TOTAL"
        const totalValue = document.createElement('p');
        totalValue.innerText = 150

        document.querySelector("#checkoutSubtotalAndDeliveryText").append(subtotalText, subtotalDeliveryText)
        document.querySelector("#checkoutSubtotalValue").append(subtotalValue,subtotalDeliveryvalue)
        document.querySelector("#checkoutTotal").append(totalText,totalValue)

        // document.querySelector("#checkoutDiv2").append()
        document.querySelector("#checkoutDiv3").append()

        
    }

    function deleteItem(data, index) {
        data.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(details))
        window.location.reload()
    }

}