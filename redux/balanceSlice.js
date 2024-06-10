import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

export const deposit = createAction('balance/deposit');

export const withdraw = createAction('balance/withdraw');

const balanceInitialState = { value: 0 };

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

export const balanceReducer = createReducer(balanceInitialState, builder => {
  builder
    .addCase(deposit, (state, action) => {
      return {
        ...state,
        value: state.value + action.payload,
      };
    })
    .addCase(withdraw, (state, action) => {
      return {
        ...state,
        value: state.value - action.payload,
      };
    });
});
