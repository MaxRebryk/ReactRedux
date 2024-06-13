import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const slice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], loading: true, error: true },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectTasks = state => state.tasks.items;

export default slice.reducer;

export const { deposit, withdraw } = slice.actions;
