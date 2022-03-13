import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "..";
import {Course} from "../../types";

const BASE_URL = "https://raw.githubusercontent.com/rpi-crisis/data";

type State = {
    courses: {
        [key: string]: Course
    },
    coursesLoading: boolean,
    hasError: boolean,
    versionLoading: boolean,
    version: string
};

const initialState: State = {
  courses: {},
  hasError: false,
  coursesLoading: false,
  versionLoading: false,
  version: ""
};

export const CHECK_VERSION = createAsyncThunk<
  string,
  void,
  {
    state: RootState
  }
>(
  "courses/checkVersion",
  async (data, thunkAPI) => {
    const res = await fetch(`${BASE_URL}/main/meta`);
    const version = await res.text();
    if (version !== thunkAPI.getState().courses.version) {
      // updating local courses
      thunkAPI.dispatch(FETCH_COURSES());
    }
    return version;
  }
);

export const FETCH_COURSES = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const res = await fetch(`${BASE_URL}/main/model_data.json`);
    return await res.json() as Course[];
  }
);

const slice = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {
    EMPTY_COURSES(state) {
      state.courses = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_COURSES.rejected, (state) => {
      state.hasError = true;
    });
    builder.addCase(CHECK_VERSION.rejected, (state) => {
      state.hasError = true;
    });
    builder.addCase(FETCH_COURSES.pending, (state) => {
      state.coursesLoading = true;
    });
    builder.addCase(CHECK_VERSION.pending, (state) => {
      state.versionLoading = true;
    });
    builder.addCase(CHECK_VERSION.fulfilled, (state, data) => {
      if (state.version !== data.payload) {
        state.version = data.payload;
      }
      state.versionLoading = false;
    });
    builder.addCase(FETCH_COURSES.fulfilled, (state, data) => {
      for (const course of data.payload) {
        state.courses[course.id] = course;
      }
      state.coursesLoading = false;
    });
  }
});

export const { EMPTY_COURSES } = slice.actions;

export default slice.reducer;