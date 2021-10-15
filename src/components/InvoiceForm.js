import React, { useState } from 'react'
import "./invoice.css"
import logo from './black_color.png'

const InvoiceForm = () => {
const [name,Setname] = useState()
const [order,Setorder] = useState()
const [date,SetDate] = useState()
const [sold,SetSoldto] = useState()
const [ship,SetShipto] = useState()
const [payment,SetPaymentMethod] = useState()
const [shipping,SetShippingMethod] = useState()
const [shippingCharges,SetShippingCharges] = useState("0.00")
const [productName, SetProductName] = useState()
const [sku, SetSKU] = useState()
const [price, SetPrice] = useState("0.00")
const [qty, SetQty] = useState()
const [tax, SetTax] = useState("0")
const [subtotal, SetSubtotal] = useState("0.00")
const [credit, SetCredit] = useState("0.00")
const [show, setShow] = useState(true);

const grandTotal= parseInt(subtotal)+parseInt(credit)+parseInt(shippingCharges);


    const OninputEvent=(event)=>{
        Setname(event.target.value);
    }
    const OnOrderEvent=(event)=>{
        Setorder(event.target.value);
    }
    const OndateTime=(event)=>{
        SetDate(event.target.value);
    }
    const OnsoldTo=(event)=>{
        SetSoldto(event.target.value);
    }
    const OnshipTo=(event)=>{
        SetShipto(event.target.value);
    }
    const OnpaymentMethod=(event)=>{
        SetPaymentMethod(event.target.value);
    }
    const OnshippingMethod=(event)=>{
        SetShippingMethod(event.target.value);
    }
    const OnshippingCharges=(event)=>{
        SetShippingCharges(event.target.value);
    }
    const OnProductName=(event)=>{
        SetProductName(event.target.value);
    }
    const OnSKU=(event)=>{
        SetSKU(event.target.value);
    }
    const OnChangePrice=(event)=>{
        SetPrice(event.target.value);
    }
    const OnChangeQty=(event)=>{
        SetQty(event.target.value);
    }
    const OnChangeTax=(event)=>{
        SetTax(event.target.value);
    }
    const OnChangeSubtotal=(event)=>{
        SetSubtotal(event.target.value);
    }
    const OnChangeCredit=(event)=>{
        SetCredit(event.target.value);
    }


    return (
      
        <div> 
        <div className="all_input" style={{ display: show ? "block" : "none" }}>
        <div className="inputs">
        <div className="input_label">
        <label><b>Enter Invoice Number:</b></label>
            <input className="input" type="number"
            onChange={OninputEvent}
            value={name} 
            />
            </div>
            <div className="input_label">
            <label><b>Enter OrderId:</b></label>
            <input className="input" type="text"
            onChange={OnOrderEvent}
            value={order} 
            />
            </div>
            <div className="input_label">
            <label><b>Date & Time:</b></label>
            <input className="input" type="text"
            placeholder="14 Oct 2021, 07:43:37 PM"
            onChange={OndateTime}
            value={date} 
            />
            </div>
            <div className="input_label">
            <label><b>Sold To:</b></label>
            <input className="input" type="text"
            onChange={OnsoldTo}
            value={sold} 
            /></div>
            <div className="input_label">
            <label><b>Ship to:</b></label>
            <input className="input" type="text"
            onChange={OnshipTo}
            value={ship} 
            /></div>
            <div className="input_label">
            <label><b>Payment Method:</b></label>
            <input className="input" type="text"
            onChange={OnpaymentMethod}
            value={payment} 
            /></div>
            <div className="input_label">
            <label><b>Shipping Method:</b></label>
            <input className="input" type="text"
            onChange={OnshippingMethod}
            value={shipping} 
            /></div>
            <div className="input_label">
            <label><b>Shipping Charges:</b></label>
            <input className="input" type="number"
            onChange={OnshippingCharges}
            value={shippingCharges} 
            /></div>
            <div className="input_label">
            <label><b>Product Name:</b></label>
            <input className="input" type="text"
            onChange={OnProductName}
            value={productName} 
            /></div>
            <div className="input_label">
            <label><b>SKU:</b></label>
            <input className="input" type="text"
            onChange={OnSKU}
            value={sku} 
            /></div>
            <div className="input_label">
            <label><b>Price:</b></label>
            <input className="input" type="number"
            onChange={OnChangePrice}
            value={price} 
            /></div>
            <div className="input_label">
            <label><b>Quantityy:</b></label>
            <input className="input" type="text"
            onChange={OnChangeQty}
            value={qty} 
            /></div>
            <div className="input_label">
            <label><b>Tax %:</b></label>
            <input className="input" type="text"
            onChange={OnChangeTax}
            value={tax} 
            /></div>
            <div className="input_label">
            <label><b>Sub Total:</b></label>
            <input className="input" type="number"
            onChange={OnChangeSubtotal}
            value={subtotal} 
            /></div>
            <div className="input_label">
            <label><b>Credit Points:</b></label>
            <input className="input" type="number"
            onChange={OnChangeCredit}
            value={credit} 
            /></div>
            </div>
            </div>
        <div className="container">
        <div className="logo">
            <img  onClick={() => setShow((s) => !s)} src={logo} alt="logo" />
        </div>
        <h2>Tax Invoice</h2>
        <div className="invoice_container">
        <div className="upper_container">
                <p>Invoice: {name} </p>
                <p>Order: {order}</p>
                <p>Order Date & Time: {date}</p>
            </div>
            <table>
            <tbody>
                <tr>
                  <th>Sold to:</th>
                  <th>Ship to:</th>
                </tr>
                <tr>
                <td style={{width: "50%"}}>
                     {sold}
                </td>
                <td style={{width: "50%"}}>
                {ship}
                </td>
                </tr>
                </tbody>
              </table>
              <div className="payment_method">
                <table>
                <tbody>
                    <tr>
                      <th>Payment Method:</th>
                      <th>Shipping Method:</th>
                    </tr>
                    <tr>
                      <td>
                          <p>{payment}</p>
                    </td>
                      <td>
                        <p>{shipping}</p>
                        <p>(Total Shipping Charges ₹{shippingCharges})</p>
                    </td>
                    </tr>
                    </tbody>
                  </table>
              </div>
              <div className="items_container">
                <table>
                <tbody>
                    <tr>
                      <th>Products</th>
                      <th>SKU</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Tax</th>
                      <th>Subtotal</th>
                    </tr>
                    <tr>
                      <td style={{width: "50%"}}>
                          <p>{productName}</p>
                    </td>
                      <td>
                          <p>{sku}</p>
                    </td>
                    <td>
                        <p>₹{price}</p>
                  </td>
                    <td>
                        <p>{qty}</p>
                  </td>
                    <td>
                        <p>{tax}%</p>
                  </td>
                    <td>
                        <p>₹{subtotal}</p>
                  </td>
                    </tr>
                    </tbody>
                  </table>
              </div>
              <div className="subtotal_container">
                  <div className="subtotal_items">
                      <div className="subtotal">
                          <p>Subtotal:</p>
                          <span>₹{subtotal}</span>
                      </div>
                      <div className="credit">
                      <p>Credit Point: </p>
                      <span>₹{credit}</span>
                    </div>
                      <div className="credit">
                      <p>Shipping Charges: </p>
                      <span>₹{shippingCharges}</span>
                    </div>
                    <div className="grandTotal">
                      <p>Grand Total:</p>
                      <span>₹{grandTotal}</span>
                    </div>
              </div>
        </div>
        </div>
        </div>           
        </div>
    )
}

export default InvoiceForm
