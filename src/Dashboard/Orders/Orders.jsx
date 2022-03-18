import React, { useEffect } from "react";

const Orders = ({ List }) => {
  return (
    <div>
      <div class="recentOrder">
        <div class="cardHeader">
          <h2>Liste d'attente</h2>
          <a href="#" class="">
            View All
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <td>Nom</td>
              <td>RDV</td>
              <td>Type</td>
              <td>Date de naissance</td>
            </tr>
          </thead>
          <tbody>
            {List.map((item) => (
              <tr>
                <td>{item.Nom + " " + item.Prénom} </td>
                <td>{item.Heure}</td>
                <td>{item.Type}</td>
                <td>
                  <span class="status delivered">{item.Date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
