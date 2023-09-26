import React, { Component } from "react";
import ListGheNgoi from "./ListGheNgoi";
import ListOder from "./ListOder";

import "./css/index.css";


export default class DatVe extends Component {
  
  render() {
    return (
      <div className="bookingMovie">
        <div className="fillter">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <ListGheNgoi />
              </div>
              <div className="col-3">
                <ListOder />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
