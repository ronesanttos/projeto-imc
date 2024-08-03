import './imcTable.css'
import Button from './Button'

const ImcTable = ({ data, imc, info, infoClass, handleReset }) => {
    return (
        <div id='res-container'>
            <p id="imc-number">Seu Imc: <span className={infoClass}>{imc}</span> </p>
            <p id="imc-info">Situação atual: <span className={infoClass}> {info}</span> </p>
            <h3>Confira as classificações:</h3>
            <div id='imc-table'>
                <div className="table-header">
                    <h4>IMC</h4>
                    <h4>Classificação</h4>
                    <h4>Obesidade</h4>
                </div>

                {data.map((item) => (
                    <div className='table-data' key={item.info}>
                        <p>{item.classification}</p>
                        <p>{item.info}</p>
                        <p>{item.obesity}</p>
                    </div>
                ))}
            </div>
            < Button id='next-btn' text="Voltar" action={handleReset} />
        </div>
    )
}

export default ImcTable
