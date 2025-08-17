import {configureStore} from "@reduxjs/toolkit";
import weather from "../features/weather/weatherSlice.js";
import message from "../features/message/messageSlice.js";
export const store = configureStore({
    reducer: {
        weather, message
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch