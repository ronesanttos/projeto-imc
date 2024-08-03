import './CalculaImc.css'
import { useState } from 'react'

import Button from './Button'

const CalculaImc = ({ calcImc }) => {
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')

    const validate = (text) => {
        return text.replace(/[^0-9,]/g, '')
    }

    const handlePesoChange = (e) => {
        const validaPeso = validate(e.target.value)
        setPeso(validaPeso)
    }

    const handleAlturaChange = (e) => {
        const validaAltura = validate(e.target.value)
        setAltura(validaAltura)
    }
    const handleLimpar = (e) => {
        e.preventDefault()
        setAltura('')
        setPeso('')
    }

    return (
        <div className='calc-container'>

            <h1>Calculadora de IMC</h1>

            <form id='form-inputs'>
                <div className='form-control'>
                    <label>Peso: </label>
                    <input type="text" value={peso} onChange={(e) => handlePesoChange(e)} placeholder='exemplo 70,5' />
                </div>

                <div className='form-control'>
                    <label >Altura: </label>
                    <input type="text" value={altura} onChange={(e) => handleAlturaChange(e)} placeholder='exemplo 1,70' />
                </div>

                <div className='action-control'>
                    <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, peso, altura)} />
                    <Button id="clear-btn" text="Limpar" action={handleLimpar} />
                </div>
            </form>

        </div>
    )
}

export default CalculaImc
