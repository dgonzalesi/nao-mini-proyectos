import { React, useState } from 'react'

export const Newyears = () => {
  const [count, setCount] = useState({ month: 0, day: 0, year: 0, hour: 0, minute: 0, second: 0 })
  const target = new Date(2024, 0, 1, 0, 0, 1)
  const timerHandler = () => {
    const now = new Date()
    const diff = target.getTime() - now.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24) % 30 )
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30) % 12)
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(diff / (1000 * 60) % 60)
    const seconds = Math.floor(diff / 1000 % 60)
    setCount({ month: months, day: days, year: years, hour: hours, minute: minutes, second: seconds })
  }
  setInterval(timerHandler, 1000)

  return (
    <div className='text-4xl bg-red-500'>
        <h1 className='text-4xl'>Falta:</h1>
        <h1> Años: <span className="font-bold text-color-red-500 "> {count.year} </span> </h1>
        <h1> Meses: <span className="font-bold text-color-red-500 "> {count.month} </span> </h1>
        <h1> Dias: <span className="font-bold text-color-red-500 "> {count.day} </span> </h1>
        <h1> Horas: <span className="font-bold text-color-red-500 "> {count.hour} </span> </h1>
        <h1> Minutos: <span className="font-bold text-color-red-500 "> {count.minute} </span>    </h1>
        <h1> Segundos: <span className="font-bold text-color-red-500 "> {count.second} </span> </h1>
        <h1> para el 2024</h1>
    </div>
  )
}
