import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {
    isLoading: false,
    listUser: [],
  },
};

export const userSlice = createSlice({
  name: 'rootReducer',
  initialState,
  reducers: {
    loading: state => {
      state.cats.isLoading = true;
    },
    getListUser: (state, actions) => {
      state.users.listUser = actions.payload;
    },
  },
});
export const { loading, getListUser } = userSlice.actions;
export default userSlice.reducer;
