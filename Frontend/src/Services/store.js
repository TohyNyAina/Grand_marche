import { configureStore } from '@reduxjs/toolkit'
import panierReducer from './panier'

export const store = configureStore({
  reducer: {
    panier : panierReducer
  },
})