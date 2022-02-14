import React from 'react';

const Orders = () => {

  return <div>
  
  <div class="recentOrder">
            <div class="cardHeader">
             <h2>Recent Orders</h2>
             <a href="#" class="btn">View All</a>
            </div>
             <table>
                 <thead>
                     <tr>
                         <td>Name</td>
                         <td>Price</td>
                         <td>Payment</td>
                         <td>Status</td>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>star Refregerator</td>
                         <td>$1200</td>
                         <td>Paid</td>
                         <td><span class="status delivered">Delivered</span></td>
                     </tr>

                     <tr>
                        <td>Windoy Cooler</td>
                        <td>$110</td>
                        <td>Due</td>
                        <td><span class="status Pending">Pending</span></td>
                    </tr>

                    <tr>
                        <td>Speakers</td>
                        <td>$620</td>
                        <td>Paid</td>
                        <td><span class="status Return">Return</span></td>
                    </tr>

                 </tbody>
             </table>
        </div>

      
  </div>;
};

export default Orders;
