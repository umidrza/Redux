import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
});

const { setNotification } = notificationSlice.actions

let timeoutId
export const showNotification = (message, time = 5) => {
  return (dispatch) => {
    dispatch(setNotification(message))

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      dispatch(clearNotification())
    }, time * 1000)
  }
}

export const { clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;