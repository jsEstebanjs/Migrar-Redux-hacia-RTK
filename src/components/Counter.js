import { useSelector } from "react-redux"

const Counter = () => {
  const dataCounter = useSelector((state) => state.count.count)

  return (
    <h2>{dataCounter}</h2>
  )
}

export default Counter