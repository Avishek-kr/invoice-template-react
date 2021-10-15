import React, { useState } from 'react'
import "./invoice.css"
import logo from './black_color.png'

const InvoiceForm = () => {
const [name,Setname] = useState()
const [fullname,Setfullname] = useState()

    const inputEvent=(event)=>{
        Setname(event.target.value);
    }

    const onsubmit=()=>{
        Setfullname(name)
    }
    return (
        <div>
         <h1>Hello {fullname}</h1>
            <input type="text"
            placeholder="Enter Your Name"
            onChange={inputEvent}
            value={name} 
            />
            <button onClick={onsubmit}>Click ME👍</button>
        <div className="container">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <h2>Tax Invoice</h2>
        <div className="invoice_container">
        <div className="upper_container">
                <p>Invoice: {fullname} </p>
                <p>Order: order_I9ExXEVRkg1h6u</p>
                <p>Order Date & Time: 14 Oct 2021, 07:43:37 PM</p>
            </div>
            <table>
            <tbody>
                <tr>
                  <th>Sold to:</th>
                  <th>Ship to:</th>
                </tr>
                <tr>
                <td>
                      Navneet Singh
                   SF - 143
                   Shastri Nagar
               Ghaziabad, Uttar Pradesh, 201001
                   India
                   T: 8800970001
                </td>
                <td>
                      Navneet Singh
                   SF - 143
                   Shastri Nagar
               Ghaziabad, Uttar Pradesh, 201001
                   India
                   T: 8800970001
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
                          <p>Credit Card</p>
                    </td>
                      <td>
                        <p>Marketplace Rates</p>
                        <p>(Total Shipping Charges ₹0.00)</p>
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
                          <p>Asus tuff 2021 f15 Intel® Core™ i7-11800H Processor 2.3 GHz (24M Cache, up to 4.6 GHz, 8 Cores) M8NRCX05D975340</p>
                    </td>
                      <td>
                          <p>NA</p>
                    </td>
                    <td>
                        <p>₹88,149</p>
                  </td>
                    <td>
                        <p>1</p>
                  </td>
                    <td>
                        <p>18%</p>
                  </td>
                    <td>
                        <p>₹ 1,07,499.00</p>
                  </td>
                    </tr>
                    </tbody>
                  </table>
              </div>
              <div className="subtotal_container">
                  <div className="subtotal_items">
                      <div className="subtotal">
                          <p>Subtotal:</p>
                          <span>₹107499</span>
                      </div>
                      <div className="credit">
                      <p>Credit Point: </p>
                      <span>₹0.00</span>
                    </div>
                      <div className="credit">
                      <p>Shipping Charges: </p>
                      <span>₹0.00</span>
                    </div>
                    <div className="grandTotal">
                      <p>Grand Total:</p>
                      <span>₹107499</span>
                    </div>
              </div>
        </div>
        </div>
        </div>           
        </div>
    )
}

export default InvoiceForm
