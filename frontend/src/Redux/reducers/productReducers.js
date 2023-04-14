import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS } from "../constants/productConstants";

const initialState = {
    products: [
        {
        id: 1,
        name: "Maruti Brezza",
        price: "14.14 Lakh",
        image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/107543/vitara-brezza-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        category: "hachback",
        description: "The Maruti Brezza has 1 Petrol Engine and 1 CNG Engine on offer."
    },{
        id: 2,
        name: "Audi A4",
        price: "51.85 Lakh",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=75",
        category: "sedan",
        description: "The Audi A4 has 1 Petrol Engine on offer. The Petrol engine is 1998 cc ."
    },{
        id: 3,
        name: "MINI Cooper",
        price: "₹ 40.00 Lakh",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/34560/cooper-exterior-right-front-three-quarter-2.jpeg?q=75",
        category: "hachback",
        description: "The Mini Cooper 3 DOOR has 1 Petrol Engine on offer. The Petrol engine is 1998 cc."
    },
],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                products: [],
            }
        case ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}