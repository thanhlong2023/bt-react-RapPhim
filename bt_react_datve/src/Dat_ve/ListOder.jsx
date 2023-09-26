import React, { Component } from "react";

import { connect } from "react-redux";
import { Xoa } from "../redux/Datve/creator";

class ListOder extends Component {
  tongTien = () => {
    let { mangVe } = this.props;
    let tongTien = 0;
    for (let i = 0; i < mangVe.length; i++) {
      tongTien += mangVe[i].gia;
    }
    return tongTien.toLocaleString();
  };
  render() {
    return (
      <div className="text-light text-center">
        <h3>Danh sách ghế bạn chọn</h3>
        <div className="">
          <div className="d-flex mt-5">
            <button className="gheDuocChon"></button>
            <p>Ghế đã đặt</p>
          </div>
          <div className="d-flex">
            <button className="gheDangChon"></button>
            <p>Ghế đang chọn</p>
          </div>
          <div className="d-flex">
            <button className="ghe"></button>
            <p>Ghế chưa đặt</p>
          </div>
        </div>
        <div>
          <table className="table table-bordered border-light">
            <thead className="text-white">
              <tr>
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col">Hủy</th>
              </tr>
            </thead>
            <tbody
              className="text-warning
            "
            >
              {this.props.mangVe.map((Ghe, index) => {
                return (
                  <tr key={index}>
                    <td>{Ghe.soGhe}</td>
                    <td>{(Ghe.gia).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => this.props.dispatch(Xoa(Ghe))}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-light">
              <tr>
                <td>Tổng tiền</td>
                <td className="text-warning">{this.tongTien()}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return { mangVe: rootReducer.DatVeReducer };
};
export default connect(mapStateToProps)(ListOder);
