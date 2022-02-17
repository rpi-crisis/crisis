import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Course = {
    name: string
};

type State = {
    courses: {
        [key: string]: Course
    },
    hasError: boolean
};

const initialState: State = {
    courses: {},
    hasError: false
};

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const FETCH_COURSES = createAsyncThunk(
    "courses/fetchCourses",
    async (data, thunkAPI) => {
        const response = await sleep(1000);
        const bool = Math.floor(Math.random() * 2) === 0 ? true : false;
        const resData = [
            {
                name: "data structures"
            },
            {
                name: "comp org"
            }
        ];
        if (bool) {
            thunkAPI.dispatch(EMPTY_COURSES());
            resData.map((course) => {
                thunkAPI.dispatch(ADD_COURSE(course));
            });
        }
        else {
            return thunkAPI.rejectWithValue("error");
        }
        
    }
);

const slice = createSlice({
    name: 'course',
    initialState: initialState,
    reducers: {
        ADD_COURSE(state, action: PayloadAction<Course>) {
            state.courses[action.payload.name] = action.payload;
        },
        EMPTY_COURSES(state) {
            state.courses = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FETCH_COURSES.rejected, (state, action) => {
            state.hasError = true;
        });
    }
});

export const { ADD_COURSE, EMPTY_COURSES } = slice.actions;

export default slice.reducer;