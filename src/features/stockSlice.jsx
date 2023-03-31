import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "auth",

  initialState: {
    purchases: [],
    sales:[],
    brands:[],
    firms:[],
    products:[],
    categories:[],
    loading: false,
    error: false,

  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload:{data, url} }) => {
      state.loading = false;
     state[url] = data
    },
    //getSuccessSales: (state,{payload}) => {
      //state.loading = false;
      //state.sales = payload
    //}
    //getSuccessPurchase: (state,{payload}) => {
    // state.loading = false;
    // state.purchase = payload
    //}

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  fetchFail,} = stockSlice.actions;
export default stockSlice.reducer;
