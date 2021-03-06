

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

                    var k = (elem.priceBefore - elem.price).toFixed(2)
                    sav = sav - k
                    var save = sav.toFixed(2)
                    saving.innerText = "Rs." + " " + save
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


                var k = (elem.priceBefore - elem.price)
                sav = sav + k
                var save = sav
                saving.innerText = "Rs." + " " + save.toFixed(2)
            }

            incDecQuantity.append(pMinus, pQuantity, pPlus)


            const subTotal = document.createElement('p');
            var sub = elem.price * pQuantity.innerText

            subTotal.innerText = "Rs." + " " + sub.toFixed(2)


            const deletelogo = document.createElement('p');
            deletelogo.innerText = "x"
            deletelogo.style.cursor = "pointer"
            deletelogo.addEventListener("click", function () {
                deleteItem(data, index)
            })

            const saving = document.createElement('p');
            saving.style.color = "#BE1E2D"
            var sav = (elem.priceBefore - elem.price)
            var save = sav
            saving.innerText = "Rs." + " " + save
            itemDetails.append(itemDescription, unitPrice, incDecQuantity, subTotal, deletelogo, saving)

            allDetails.append(categoryDiv, itemDetails)
            document.querySelector("#cont").append(allDetails)
            document.querySelector("#container").append(yourBasket, basketHrLine, promoButton, divLikeTable)
        })

        const containerAfterProductDetail = document.createElement('div');
        containerAfterProductDetail.setAttribute("id", "containerAfterProductDetail")
        document.querySelector("body").append(containerAfterProductDetail)

        // Empty Basket button
        const emptyBasketButton = document.createElement('div');
        emptyBasketButton.setAttribute("id", "emptyBasketButton")
        const emptyBasket = document.createElement('button');
        emptyBasket.innerText = "EMPTY BASKET"
        emptyBasket.setAttribute("id", "emptyBasket")
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
        checkoutDiv.setAttribute("id", "checkoutDiv")
        containerAfterProductDetail.append(checkoutDiv)

        const checkoutDiv1 = document.createElement('div');
        checkoutDiv1.setAttribute("id", "checkoutDiv1")
        const subTotalAndTotal = document.createElement('div');
        subTotalAndTotal.setAttribute("id", "subTotalAndTotal")
        const checkoutSubTotal = document.createElement('div');
        checkoutSubTotal.setAttribute("id", "checkoutSubTotal")
        const checkoutSubtotalAndDeliveryText = document.createElement('div');
        checkoutSubtotalAndDeliveryText.setAttribute("id", "checkoutSubtotalAndDeliveryText")
        const checkoutSubtotalAndDeliveryTextp1 = document.createElement('p');
        checkoutSubtotalAndDeliveryTextp1.innerText = "Subtotal"
        const checkoutSubtotalAndDeliveryTextp2 = document.createElement('p');
        checkoutSubtotalAndDeliveryTextp2.innerText = "Delivery Charges"
        checkoutSubtotalAndDeliveryText.append(checkoutSubtotalAndDeliveryTextp1, checkoutSubtotalAndDeliveryTextp2)

        const checkoutSubtotalValue = document.createElement('div');
        checkoutSubtotalValue.setAttribute("id", "checkoutSubtotalValue")
        const checkoutSubtotalValuep1 = document.createElement('p');
        checkoutSubtotalValuep1.innerText = "Rs. 200.00"
        const checkoutSubtotalValuep2 = document.createElement('p');
        checkoutSubtotalValuep2.innerText = "**"
        checkoutSubtotalValue.append(checkoutSubtotalValuep1, checkoutSubtotalValuep2)
        checkoutSubTotal.append(checkoutSubtotalAndDeliveryText, checkoutSubtotalValue)


        const checkoutTotal = document.createElement('div');
        checkoutTotal.setAttribute("id", "checkoutTotal")
        const checkoutTotalp1 = document.createElement('p');
        checkoutTotalp1.innerText = "TOTAL"
        const checkoutTotalp2 = document.createElement('p');
        checkoutTotalp2.innerText = "Rs. 200.00"
        checkoutTotal.append(checkoutTotalp1, checkoutTotalp2)



        subTotalAndTotal.append(checkoutSubTotal, checkoutTotal)


        const saveDiv = document.createElement('div');
        saveDiv.setAttribute("id", "saveDiv")
        const saveDivImg = document.createElement('p');
        saveDivImg.innerText = "logo"
        const saveDivP1 = document.createElement('p');
        saveDivP1.innerText = "You Saved!"
        const saveDivP2 = document.createElement('p');
        saveDivP2.innerText = "Saved Amout"

        saveDiv.append(saveDivImg, saveDivP1, saveDivP2)
        checkoutDiv1.append(subTotalAndTotal, saveDiv)

        const checkoutDiv2 = document.createElement('div');
        checkoutDiv2.setAttribute("id", "checkoutDiv2")
        const checkoutButton = document.createElement('button');
        checkoutButton.setAttribute("id", "checkoutButton")
        checkoutButton.innerText = "CHECKOUT"
        checkoutButton.style.cursor = "pointer"
        const deliveryInstruction = document.createElement('div');
        deliveryInstruction.innerText = "** Actual delivery charges computed at checkout time"
        deliveryInstruction.setAttribute("id", "deliveryInstruction")
        checkoutDiv2.append(checkoutButton, deliveryInstruction)
        checkoutDiv.append(checkoutDiv1, checkoutDiv2)


    }

    function deleteItem(data, index) {
        data.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(details))
        window.location.reload()
    }
}