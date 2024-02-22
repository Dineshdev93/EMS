
import {configureStore}  from '@reduxjs/toolkit'
import employeeSlice from './empSlice'

const empstore = configureStore({
  reducer : {
     empDtls : employeeSlice.reducer
  }
})
export default empstore