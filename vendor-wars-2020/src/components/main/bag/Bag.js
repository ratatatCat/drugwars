import React, { useState } from "react";
import "./Bag.css";

function Bag() {
  return (
    <div className="Bag">
      <h3>Trenchcoat space: 0/100</h3>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Acid</td>
            <td>40</td>
            <td>1,032</td>
          </tr>
          <tr>
            <td>Cocaine</td>
            <td>40</td>
            <td>1,032</td>
          </tr>
          <tr>
            <td>Crack</td>
            <td>40</td>
            <td>1,032</td>
          </tr>
          <tr>
            <td>Ecstasy</td>
            <td>40</td>
            <td>1,032</td>
          </tr>
          <tr>
            <td>Heroin</td>
            <td>40</td>
            <td>1,032</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bag;
