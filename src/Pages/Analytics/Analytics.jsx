import React from "react";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div>
      <div id="section-1">
        <div id="views">
          <p>Views</p>
          <span>5</span>
        </div>
        <div id="starts">
          <p>Starts</p>
          <span>3</span>
        </div>
        <div id="completion-rate">
          <p>Completion rate</p>
          <span>30%</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className="serial-number">#</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="serial-number">1</td>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td className="serial-number">2</td>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td className="serial-number">3</td>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td className="serial-number">4</td>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;
