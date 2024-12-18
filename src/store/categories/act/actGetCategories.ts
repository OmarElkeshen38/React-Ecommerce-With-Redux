import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

    type TResponse = { id: number; title: string; prefix: string; img: string }[];

const actGetCategories = createAsyncThunk("categories/actGetCategories", async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>("http://localhost:5005/categories");
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.messaga || error.message);
        } else {
            return rejectWithValue("An unxpected error");
        }
    }
});

export default actGetCategories;