export const initialState={
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //logic from removing item from basket

            //here we cloned the basked
            let newBasket = [...state.basket];

            //here we check to see if product exist
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            if(index>=0){
                //item exists in basket, remove it
                newBasket.splice(index, 1);
            };
            return { 
                ...state,
                basket: newBasket,
            };
            break;
        default:
            return state;
        
    }
}

export default reducer;
