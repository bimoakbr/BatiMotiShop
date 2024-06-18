import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { CartItems, Produk } from '@prisma/client';

export type CartInput = {
    productID :Number;
    userID : Number;
    total: Number;
}

export type CartItemModel = CartItems & {product : Produk}

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (userID: Number) => {
  const response = await axios.get(`/api/cart/${userID}` )
  return response.data.data
})

export const addItems = createAsyncThunk('cart/addItems', async ({data} : {data: CartInput}) => {
    console.log(data);
  const response = await axios.post(`/api/cart`,data)
  console.log(response.data)
  return response.data.data
  })

export const incrementQuantityItems = createAsyncThunk('cart/incrementQuantityItems', async ( {id} : {id: Number} ) => {
    const response = await axios.patch(`/api/cart/increment/${id}`, "")
    console.log(response.data)
    return response.data.data
  })

export const decrementQuantityItems = createAsyncThunk('cart/decrementQuantityItems', async ( {id} : {id: Number} ) => {
    const response = await axios.patch(`/api/cart/decrement/${id}`, "")
    console.log(response.data)
    return response.data.data
  })

export const deleteItems = createAsyncThunk('cart/deleteItems', async (  {id} : {id: Number} ) => {
    const response = await axios.post(`/api/cart/delete/${id}`, "")
    console.log(response.data)
    return response.data.data
})


export interface CartState {
  isLoading: string;
  cart: CartItemModel[];
  error: string | null;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cart: [], isLoading: "idle", error: null} as CartState,
  reducers: {
    // addToCart: (state, action: PayloadAction<CartItemModel>) => {
    //   const itemInCart = state.cart.find((item) => item.id === action.payload.id && action.payload.color === item.color && action.payload.size === item.size);
    //   if (itemInCart) {
    //     itemInCart.total++;
    //   } else {
    //     state.cart.push({ ...action.payload, quantity: 1 });
    //   }
    // },
    // incrementQuantity: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload.id && action.payload.color === item.color && action.payload.size === item.size);
    //   if (item) {
    //     item.total++;
    //   }
    // },
    // decrementQuantity: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload.id && action.payload.color === item.color && action.payload.size === item.size);
    //   if (item) {
    //     if (item.quantity === 1) {
    //       item.quantity = 1;
    //     } else {
    //       item.quantity--;
    //     }
    //   }
    // },
    // removeItem: (state, action) => {
    //   const removeItem = state.cart.filter((item) => item.id !== action.payload.id);

    //   const data = state.cart.filter((item) => item.id === action.payload.id);

    //   if (data !== undefined) {
    //     if (data.length >= 2) {
    //       data.forEach((items) => {
    //         if (action.payload.color === items.color) {
    //           if (items.size !== action.payload.size) {
    //             removeItem.push(items);
    //           }
    //         } else if (items.size == action.payload.size) {
    //           if (items.color !== action.payload.color) {
    //             removeItem.push(items);
    //           }
    //         }
    //       });
    //     }
    //   }

    //   state.cart = removeItem;
    // },
    clearProducts : (state) => {
      state.cart = [];
    }
  },
  extraReducers : (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.isLoading = "loading"
    })
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.isLoading= "succeeded"
      state.cart = action.payload
    })
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.isLoading = "rejected";
      state.error = action.error.message as string
    })
    builder.addCase(addItems.pending, (state)=> {
      state.isLoading = "loading"
    })
    builder.addCase(addItems.fulfilled, (state, action) => {
      state.isLoading= "succeeded"
      console.log("paylaod" + action.payload);
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.total += action.payload.total;
      } else {
        state.cart.push({
          id: action.payload.id,
          productID: action.payload.productID,
          userID: action.payload.userID,
          total: action.payload.total,
          product: action.payload.product
        });
      }

    })
    builder.addCase(addItems.rejected, (state, action) => {
      state.isLoading= "rejected"
      state.error = action.error.message as string
    })
    builder.addCase(incrementQuantityItems.pending, (state) => {
      state.isLoading = "loading"
    })
    builder.addCase(incrementQuantityItems.fulfilled, (state, action) => {
      state.isLoading= "succeeded"
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.total++;
      }
    })
    builder.addCase(incrementQuantityItems.rejected, (state, action) => {
      state.isLoading= "rejected"
      state.error = action.error.message as string
      console.log(action.error)
    })
    builder.addCase(decrementQuantityItems.pending, (state) => {
      state.isLoading = "loading"
      
    })
    builder.addCase(decrementQuantityItems.fulfilled, (state, action) => {
      state.isLoading= "succeeded"
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.total <= 1) {
          item.total = 1;
        } else {
          item.total--;
        }
      }
    })
    builder.addCase(decrementQuantityItems.rejected, (state, action) => {
      state.isLoading= "rejected"
      state.error = action.error.message as string
    })
    builder.addCase(deleteItems.pending, (state) => {
      state.isLoading = "loading"
    })
    builder.addCase(deleteItems.fulfilled, (state, action) => {
      state.isLoading= "succeeded"
      const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = removeItem
    })
    builder.addCase(deleteItems.rejected, (state, action) => {
      state.isLoading= "rejected"
      state.error = action.error.message as string
    })
  }
});

export const cartReducer = cartSlice.reducer;
export const { clearProducts} = cartSlice.actions;