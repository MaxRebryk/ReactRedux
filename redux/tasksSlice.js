import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask } from './operations';

const handlePending = state => {
  state.error = false;
  state.loading = true;
};

const handlerejected = state => {
  state.loading = false;
  state.error = true;
};

const slice = createSlice({
  name: 'tasks',
  initialState: { items: [], loading: true, error: true },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handlerejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handlerejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, handlerejected);
  },
});

export const selectTasks = state => state.tasks.items;

export default slice.reducer;

export const { deposit, withdraw } = slice.actions;
