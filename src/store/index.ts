import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localforage from "localforage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import courses from "./slices/courses";

const rootReducer = combineReducers({
  courses: courses
});

const config = {
  key: "root",
  storage: localforage
};

const reducer = persistReducer(config, rootReducer);

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
