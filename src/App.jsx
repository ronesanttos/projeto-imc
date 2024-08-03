import { useState } from 'react'
import './App.css'

import { data } from './data/data'
import CalculaImc from './components/CalculaImc'
import ImcTable from './components/ImcTable'

function App() {
  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  const calcImc = (e, peso, altura) => {
    e.preventDefault()

    if (!peso || !altura) return

    const pesoFloat = +peso.replace(',', '.')
    const alturaFloat = +altura.replace(',', '.')

    const resImc = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(1)
    setImc(resImc)

    data.map((item) => {
      if (resImc >= item.min && resImc <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })
    if (!info) return
  }

  const handleReset = (e) => {
    e.preventDefault()
    setImc('')
    setInfo('')
    setInfoClass('')
  }
  return (
    <div className='container'>
      {!imc ? <CalculaImc calcImc={calcImc} /> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} handleReset={handleReset} />}
    </ div>
  )
}

export default App
