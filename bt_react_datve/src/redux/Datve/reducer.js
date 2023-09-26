import { RapPhim } from "./const";

const danhSachVe = []

export const DatVeReducer = (state = danhSachVe, action) => {
    switch (action.type) {
        case RapPhim.Booking:
            let danhSachUpDate = [...state]
            let index = danhSachUpDate.findIndex((gheDangDat, index) => gheDangDat.soGhe === action.payload.soGhe)
            if (index !== -1) {
                danhSachUpDate.splice(index, 1)
                state = [...danhSachUpDate]
            } else {
                state.push(action.payload)
            }
            return [...state]
        case RapPhim.Xoa:
            
            let danhSachNew = [...state]
            let indexXoa = danhSachNew.findIndex((ghe, index) => ghe.soGhe === action.payload.soGhe)
            if (indexXoa !== -1) {
                danhSachNew.splice(indexXoa, 1)
                state = [...danhSachNew]
            }
            return [...state]
        default:
            return state;
    }
}