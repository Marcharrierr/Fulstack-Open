const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hola {props.name}, tienes {props.age} año </p>
    </div>
  )
}

const App = () => {
  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App