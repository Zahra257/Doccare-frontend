import React, { useEffect } from "react";
import { getListConsultation } from "../../Redux/Reducers/PendingConsultation";
import { useDispatch, useSelector } from "react-redux";

const Patients = ({List}) => {
 

  return (
    <div>
      <div class="recentCustomers">
        <div class="cardHeader">
          <h2>Patient Recents</h2>
        </div>
        <table>
          {List.map((item) => (
            <tr>
              <td width="60px">
                <div class="imgBx">
                  {" "}
                  <img src={item.avatar} />
                </div>
              </td>
              <td>
                <h4>
                {item.Nom + ' ' + item.Prénom }
                  <br />
                  <span>{item.Civilité}</span>
                </h4>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Patients;
