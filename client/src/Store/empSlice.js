import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "empSlice",
  initialState: [],
  reducers: {
    employeedetails: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const emdtlsActions = employeeSlice.actions;
export default employeeSlice;
