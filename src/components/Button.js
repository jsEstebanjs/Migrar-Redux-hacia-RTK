import { useDispatch } from "react-redux"
import { decrement, increment } from "../store/reducers/CountSlice"

const Button = ({ type, children }) => {

  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(type)}
    >
      {children}
    </button>
  )
}

export default Button