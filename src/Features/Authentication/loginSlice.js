import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { baseUrl } from "../../Utils";


const userFromSession = sessionStorage.getItem('user');
const isAuthenticatedFromSession = userFromSession ? true : false;

export const LoginUser = createAsyncThunk(
  "loginUser",
  async (data, {rejectWithValue} ) => {
    const { navigate,dispatch, ...rest } = data;
    try {
      const response = await fetch( `${baseUrl}/users/login`,    {
        method:"POST",
        mode:'cors',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })

     
      if (!response.ok) {
        Swal.fire({
          title: "Oops",
          text: "Invalid Login Credentials",
          icon: "error",
        }).then((result) => {});
      } else {
        const resData = await response.json();

        let user = resData.status;

        if (resData.status === 200) {
          delete data.password;
         sessionStorage.setItem("user", JSON.stringify(data));
         dispatch(login())
          navigate("/dashboard");
       
          

        
        }
      }
      return response.ok ? data : rejectWithValue("Invalid login credentials");
    } catch (e) {

      if (e) {
        Swal.fire({
          title: "Oops",
          text: "Something went wrong, please try again",
          icon: "error",
        }).then((result) => {
          
        });
      }
      return rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  isAuthenticated: isAuthenticatedFromSession,
  error: "",
  error2: "",
  isSuccessful: false,
  loading: false,
  response: {},
} ;

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(LoginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        LoginUser.fulfilled,
        (state, action) => {
          state.loading = false;
          state.response = action.payload;
          (state.error = ""), (state.isSuccessful = true);
        }
      )
      .addCase(LoginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.isSuccessful = false;
      });
  },
});

export default loginSlice.reducer;
export const { logout,login } = loginSlice.actions;
