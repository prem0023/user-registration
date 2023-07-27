import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loginFlag: false,
    userData: [
      {
        name: "Prem Kumar",
        email: "prem@gmail.com",
        password: "Prem@123",
        dob: "2021-01-07",
        city: "New York",
        pincode: 700105,
      },
      {
        name: "Ankit Kumar",
        email: "ankit@gmail.com",
        password: "Ankit@123",
        dob: "2018-01-07",
        city: "London",
        pincode: 700108,
      },
    ],
  },
  reducers: {
    registerUser: (state, action) => {
      state.loginFlag = false;
      const existingUser = state.userData.find(
        (user) => user.email === action.payload.email
      );

      if (existingUser) {
        state.loginFlag = true;
        alert("This email already exists! Please login");
      } else {
        alert("Successfully Registered!");
        state.userData = [...state.userData, action.payload];
      }
    },

    loginUser: (state, action) => {
      state.loginFlag = false;
      const { email, password } = action.payload;
      const existingUser = state.userData.find(
        (user) => user.email === email && user.password === password
      );

      if (existingUser) {
        state.loggedInUser = true;
        alert("Login successful!");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    },

    changeloginFlag: (state) => {
      state.loginFlag = false;
    },
  },
});

export const { registerUser, loginUser, changeloginFlag } = userSlice.actions;
export default userSlice.reducer;
