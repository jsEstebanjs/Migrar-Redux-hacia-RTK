import { useDispatch, useSelector } from "react-redux"
import { changeText } from "../store/reducers/Text.Slice"

const InputText = () => {
  const dispatch = useDispatch()
  const username = useSelector(state => state.text.username)


  return (
    <input
      type={"text"}
      onChange={(e) => dispatch(changeText(e.target.value))}
      value={username}
    />
  )
}

export default InputText