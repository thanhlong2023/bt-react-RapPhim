import { RapPhim } from "./const";

export const BookingCreator = (payload) => {

    return {
        type: RapPhim.Booking,
        payload,
    }
}
export const Xoa = (payload) => {
   
    return {
        type: RapPhim.Xoa,
        payload,
    }
}