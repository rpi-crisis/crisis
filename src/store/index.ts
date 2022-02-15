import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localforage from "localforage";
import { useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import courseSlice from "./slices/courseSlice";

const rootReducer = combineReducers({
    courses: courseSlice
});

let config = {
    key: 'root',
    storage: localforage
};

export const store = configureStore({
    reducer: persistReducer(config, rootReducer),
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export function useAppSelector<TSelected = unknown>(selector: (state: RootState) => TSelected): TSelected {
    return useSelector(selector);
};