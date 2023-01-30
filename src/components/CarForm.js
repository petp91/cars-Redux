import {useDispatch, useSelector} from "react-redux";
import {changeCost, changeName, addCar} from "../Store";

const CarForm = () => {
    const dispatch = useDispatch()

    const {cost, name } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(parseInt(carCost)))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(addCar({ name, cost}))
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input
                            value={name}
                            onChange={handleNameChange}
                            className="input is-expanded"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="">Cost</label>
                        <input
                            value={cost || ""}
                            type="number"
                            onChange={handleCostChange}
                            className="input is-expanded"
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm