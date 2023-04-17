import { React, useState } from 'react'

export const Calculator = () => {
  const [sueldo, setSueldo] = useState({
    sueldo: 0,
    deductions: 0,
    tax1: 0,
    tax2: 0,
    total: 0
  })
  const onChangeHandler = (event) => {
    const tempSueldo = {
      sueldo: 0,
      deductions: 0,
      tax1: 0,
      tax2: 0,
      total: 0
    }
    event.preventDefault()
    tempSueldo.sueldo = event.target.sueldo.value
    tempSueldo.deductions = event.target.deductions.value
    tempSueldo.tax1 = ((tempSueldo.sueldo - tempSueldo.deductions) * (event.target.tax1.value / 100))
    tempSueldo.tax2 = (tempSueldo.sueldo - tempSueldo.deductions) * (event.target.tax2.value / 100)
    tempSueldo.total = tempSueldo.sueldo - (tempSueldo.tax1 + tempSueldo.tax2)
    console.log(tempSueldo)
    setSueldo(tempSueldo)
    }
  return (
    <div className='pt-10'>
      <h1 className='text-4xl font-mono font-bold'>Calculadora de Ingresos:</h1>
      <form
        action='POST'
        onSubmit={onChangeHandler}>
        <label htmlFor='sueldo'>Sueldo Bruto:</label>
        <input
          type='number'
          name='sueldo'
          min={0}
          placeholder='Ingrese su sueldo'
          className='border-2 border-black rounded-md p-2 m-2 w-full'
        />
        <label htmlFor='deductions'> Deducciones: </label>
        <input
          name='deductions'
          type='number'
          placeholder='Ingrese sus deducciones'
          className='border-2 border-black rounded-md p-2 m-2 w-full'
        />
        <label htmlFor='tax1'> Impuesto Sobre el Ingreso (%) </label>
        <input
          name='tax1'
          type='number'
          className='border-2 border-black rounded-md p-2 m-2 w-full'
          value='25'
        />
        <label htmlFor='tax2'> Impuesto Estatal (%) </label>
        <input
          type='number'
          name='tax2'
          className='border-2 border-black rounded-md p-2 m-2 w-full'
          value={5}
        />
        <button type='submit'> Calcular </button>
      </form>
     <div className='container text-2xl'>
        <h3> Su ingreso bruto es: {sueldo.sueldo} </h3>
        <h3> Deducciones: {sueldo.deductions} </h3>
        <h3> ISR: {sueldo.tax1} </h3>
        <h3> Impuesto Estatal: {sueldo.tax2} </h3>
        <h3> Ingreso Neto: {sueldo.total} </h3>
      </div>
    </div>
  )
}
