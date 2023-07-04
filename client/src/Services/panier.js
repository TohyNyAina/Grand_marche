import { createSlice } from '@reduxjs/toolkit';

/** 
* {Object[]} intialPanier
**/
const initialState = {
    items : []
}

export const panierSlice = createSlice({
    name : "panier",
    initialState,
    reducers: {
        addToPanier: (state, action) => {
          const existingItem = state.items.find(item => item._id === action.payload._id);
            //console.log(action.payload._id,"=>",state.items);
          if (existingItem) {
            state.items.map(item => {
              if (item._id === action.payload._id) {
                item.nombre += 1;
              }
              return item;
            });
          } else {
            state.items.push({ ...action.payload, nombre: 1 });
          }
        },
        decrementPanier : (state,action) => {
          const existingItem = state.items.find(item => item._id === action.payload._id);
            //console.log(action.payload._id,"=>",state.items);
          if (existingItem) {
            state.items.map(item => {
              if (item._id === action.payload._id && item.nombre > 0) {
                item.nombre -= 1;
              }
              return item;
            });
          }
        }
        ,
        removeToPanier : (state,action) => {
          const existingItem = state.items.find(item => item._id === action.payload);
          if(existingItem){
            state.items = state.items.filter((e) => e._id !== action.payload)
          }
        }
      }
})

export const { addToPanier , decrementPanier ,removeToPanier }  = panierSlice.actions;

export default panierSlice.reducer