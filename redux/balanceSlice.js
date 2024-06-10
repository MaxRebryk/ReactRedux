import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'balance',
  initialState: { value: 0 },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const selectBalance = state => state.balance.value;

export default slice.reducer;

export const { deposit, withdraw } = slice.actions;

// export const deposit = createAction('balance/deposit');

// export const withdraw = createAction('balance/withdraw');

// const balanceInitialState = { value: 0 };

// export const balanceReducer = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//     case 'balance/withdraw':
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const balanceReducer = createReducer(balanceInitialState, builder => {
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;
//     })

//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//     });
// });
