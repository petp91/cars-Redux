import {createSlice, nanoid} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: "",
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, actions) {
            state.data.push({
                name: actions.payload.name,
                cost: actions.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, actions) {
            const updated = state.data.filter((car) => {
                return car.id !== actions.payload
            })
            state.data = updated
        }
    }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer