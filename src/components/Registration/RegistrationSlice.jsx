import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    success: false,
    done: false,
    error:'',
}

export const RegistrationSlice= createSlice({
    name: 'register',
    initialState,
    reducers:{
        registration_success(state){
            state.success= true
            state.error=false
        },
        registration_failed(state){
            state.success= false
            state.error=true
        },
        setStatus(state){
            state.done= true
        }
    }
})

export const registerUser= (userData) => async(dispatch) => {
    try{
        const response = await fetch('http://127.0.0.1:8000/register/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
                       },
             body: JSON.stringify(userData),
    });
        if(response.ok){
            console.log('user registered successfully')
            dispatch(registration_success())
        }
        else{
            console.log("failed to register!!")
            dispatch(registration_failed())
        }
    } catch(error){
        console.log(error)
    }
}

export const {registration_success,registration_failed,setStatus} = RegistrationSlice.actions

export const RegisterReducer= RegistrationSlice.reducer