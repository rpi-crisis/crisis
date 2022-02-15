import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import courseSlice from "./slices/courseSlice";

export const store = configureStore({
    reducer: {
        courses: courseSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export function useAppSelector<TSelected = unknown>(selector: (state: RootState) => TSelected): TSelected {
    return useSelector(selector);
};