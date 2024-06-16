import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectTasks } from './tasksSlice';

const slice = createSlice({
  name: 'filterText',
  initialState: { text: '' },
  reducers: {
    changeTextFilter: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const selectTextFilter = state => state.filterText.text;

export const selectFilteredTasks = createSelector(
  [selectTextFilter, selectTasks],
  (textFilter, tasks) => {
    return tasks.filter(task =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

// export const selectFilteredTasks = state => {
//   const tasks = state.tasks.items;
//   const textFilter = selectTextFilter(state);

//   return tasks.filter(task =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase())
//   );
// };

export default slice.reducer;

export const { changeTextFilter } = slice.actions;
