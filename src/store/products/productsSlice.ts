import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";

interface ICategoriesState {
    records: { id: number; title: string; prefix: string; img: string }[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}

const initialState: ICategoriesState = {
    records: [],
    loading: "idle",
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers :{},
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export { actGetProductsByCatPrefix };
export default productsSlice.reducer;