import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [baseexperience, setBaseexperience] = useState(0)
  const [weight, setWeight] = useState(0)
  const [height, setHeight] =useState(0)
  const [order, setOrder] =useState('')
  const [is_default, setIs_default] = useState('')
  const [location_area_encounters, setLocation_area_encounters] =useState('')
  const [abilities, setAbilities] = useState([])
  const [types, setTypes] = useState([])
  
const data1 = async () => {
  const ras = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
  
  setId(ras.data.id)
  setName(ras.data.name)
  setBaseexperience(ras.data.base_experience)
  setHeight(ras.data.height)
  setWeight(ras.data.weight)
  setOrder(ras.data.order)
  setIs_default(ras.data.is_default)
  setLocation_area_encounters(ras.data.location_area_encounters)
  
  ras.data.abilities.map((data) => {
    console.log(data)

  })
  ras.data.types.map((data2) => {
    console.log(data2)

  })
}
useEffect( () => {
  data1()
}, []);

  return (
  <div>
    <h1>Pokemon</h1>
    Name : {name} <br />
    ID : {id} <br />
    Base Experience : {baseexperience}<br />
    height : {height}<br />
    weight : {weight}<br />
    order : {order} <br />
    is default : {is_default} <br />
    abilities:
    {abilities.map((data) => (
      <li>{data.ability.name}</li>
    ))} <br />
    types:
    {types.map((data2) => (
      <li>{data.type.name}</li>
    ))}br
    location area encounters : <a href="{location_area_encounters}">lokasi</a>
  </div>
  )
}

export default App
