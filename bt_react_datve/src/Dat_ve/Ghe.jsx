import React, { Component } from "react";

import { connect } from "react-redux";
import { BookingCreator } from "../redux/Datve/creator";

class Ghe extends Component {
  rederGhe = () => {
    let { danhSachGhe } = this.props.ghe;

    return danhSachGhe.map((ghe, index) => {
      if (ghe.daDat === true) {
        return (
          <button className="gheDuocChon" key={index}>
            {ghe.soGhe}
          </button>
        );
      }
      if (ghe.gia === 0) {
        return (
          <span className="rowNumber" key={index}>
            {ghe.soGhe}
          </span>
        );
      }
      let cssGheDangChon = "";
      let indexGhe = this.props.danhSachGheBanChon.findIndex(
        (gheDC, index) => gheDC.soGhe === ghe.soGhe
      );

      if (indexGhe !== -1) {
        cssGheDangChon = "gheDangChon";
      }

      return (
        <button
          key={index}
          className={`ghe ${cssGheDangChon}`}
          onClick={() => this.props.dispatch(BookingCreator(ghe))}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  render() {
    let { hang } = this.props.ghe;
    return (
      <div>
        <span className="rowNumber">{hang}</span>
        {this.rederGhe()}
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return { danhSachGheBanChon: [...rootReducer.DatVeReducer] };
};
export default connect(mapStateToProps)(Ghe);
