import React from 'react'
import logo from './black_color.png'

const RenderInvoice = ({name}) => {
    return (
        <div>
             <div className="container">
        <div className="logo">
            <img src={logo} alt="logo" />
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

export default RenderInvoice
