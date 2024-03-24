import { useState } from "react";

export default function Change() {
    const [name, setName] = useState("Guest")
    const [quantity, setQuanrtity] = useState(0)
    const [payment, setPayment] = useState("Visa")
    const [shipping, setShipping] = useState("Delivery")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleQuantityChange = (e) => {
        setQuanrtity(e.target.value)
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>
            
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}
                />
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}
                />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}