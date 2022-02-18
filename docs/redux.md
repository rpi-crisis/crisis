## Redux Docs

### What is redux?

Redux allows you to have a centralized predictable state. The state, actions, and more are all stored inside the store.

You can still of course use regular useState from React to have localized state per component.

The state is effectively immutable outside of actions.

### Hooks

- `useAppSelector` (exported from `src/store/index.ts`): Use this to create local variables pointing to the Redux state.
```typescript
import { useAppSelector } from '../../store';

const courses = useAppSelector(state => state.courses.courses); 
// The first courses refers to the name of the reducer found in `src/store/index.ts` 
// The second courses refers to the name of piece of the state
```
- `useAppDispatch` (exported from `src/store/index.ts`): Use this to dispatch Redux actions (you can think of these as state modifiers).
```typescript
import { useAppDispatch } from '../../store';

const dispatch = useAppDispatch();

// Now you can call dispatch with an action

import { ADD_COURSE } from '../../store/slices/courses';

const course = {}; // this would be some Course object

dispatch(ADD_COURSE(course)); // This calls the ADD_COURSE action which modifies the state in the ADD_COURSE reducer.
```

### Slices

Slices allow you to break up your store/state into sections. For example, we have a slice to hold all course data.

Example structure of a slice:
```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
    // Fill in the typing of this state slice
};

const initialState: State = {
    // Give some initial values for the state
};

const slice = createSlice({
    name: 'some_name',
    initialState: initialState,
    reducers: {
        // Fill in your reducers here.
        
        // Example reducer:
        ADD_COURSE(state, action: PayloadAction</* put payload type here */>) {
          // modify state here
        }
    }
});

export const { ADD_COURSE } = slice.actions;

export default slice.reducer;
```

Actions must be synchronous functions. If you want to have an asynchronous function you need to create a thunk.

Example thunk (this would go in the same slice file):
```typescript
export const FETCH_COURSES = createAsyncThunk(
    "courses/fetchCourses", // Name format should be "<Name of slice>/<Name of thunk>"
    async (data, thunkAPI) => {
        // data contains payload passed into dispatch
        
        // You can await an api call in here for example
        
        // You can dispatch actions by doing
        thunkAPI.dispatch(/* Choose some action to go here */);
        
        // You can also have this thunk to cause a reject by doing
        return thunkAPI.rejectWithValue(/* You can pass some value for information about the reject */);

    }
);
```

Once you create a thunk you can modify the `createSlice` to this:
```typescript
const slice = createSlice({
    name: 'some_name',
    initialState: initialState,
    reducers: {
        // reducers
    },
    extraReducers: (builder) => {
        // NOTE: Not all of these are necessary but this is what can be done
    
        // Called when FETCH_COURSES is dispatched
        builder.addCase(FETCH_COURSES.pending, (state, action) => {
            // modify the state however
        });
        // Called when FETCH_COURSES is successfully returned and will have an action payload
        builder.addCase(FETCH_COURSES.fulfilled, (state, action) => {
            // modify the state however
        });
        // Called when FETCH_COURSES returns a reject
        builder.addCase(FETCH_COURSES.rejected, (state, action) => {
            // modify the state however
        });
    }
});
```

Once you had made a slice inside the `src/store/slices` directory, you need to add the slice reducer to the root reducer.

To do this just add the slice to the `combineReducers` function call inside the store.

### DevTools

You can download [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
to help in the development process. You will be able to see the full timeline/history of the state and any actions performed.
