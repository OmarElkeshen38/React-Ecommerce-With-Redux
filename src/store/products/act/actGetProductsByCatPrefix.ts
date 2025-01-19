import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

    type TResponse = { id: number; title: string; prefix: string; img: string }[];

const actGetProductsByCatPrefix = createAsyncThunk("products/actGetProductsByCatPrefix", async(prefix: string, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>(`http://localhost:5005/products?cat_prefix=${prefix}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.messaga || error.message);
        } else {
            return rejectWithValue("An unxpected error");
        }
    }
});

export default actGetProductsByCatPrefix;