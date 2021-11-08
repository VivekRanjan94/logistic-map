import React, { useEffect, useState } from 'react'
import Graph from './Graph'
import { simulateYears } from './Utils/simulator'

const App = () => {
  const [r, setR] = useState(2.9)
  const [startPopulation, setStartPopulation] = useState(200)
  const [maxPopulation, setMaxPopulation] = useState(700)
  const [numberOfYears, setNumberOfYears] = useState(50)
  const [data, setData] = useState([])

  const updateData = () => {
    setData(
      simulateYears(
        r,
        startPopulation,
        maxPopulation,
        new Date().getFullYear(),
        numberOfYears
      )
    )
  }

  useEffect(() => {
    updateData()
  }, [r, startPopulation, maxPopulation, numberOfYears])

  return (
    <div className='App'>
      <div
        className='options'
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '50px',
        }}
      >
        <div className='r'>
          <input
            id='typeinp'
            type='range'
            min='-2'
            max='4'
            value={r}
            onChange={(e) => {
              setR(Number(e.target.value))
            }}
            step='0.1'
          />
          <div>r={r}</div>
        </div>
        <div className='start-population'>
          <input
            id='typeinp'
            type='range'
            min='100'
            max={maxPopulation - 100}
            value={startPopulation}
            onChange={(e) => {
              setStartPopulation(Number(e.target.value))
            }}
            step='100'
          />
          <div>Start Population={startPopulation}</div>
        </div>
        <div className='max-population'>
          <input
            id='typeinp'
            type='range'
            min={startPopulation + 100}
            max='10000'
            value={maxPopulation}
            onChange={(e) => {
              setMaxPopulation(Number(e.target.value))
            }}
            step='100'
          />
          <div>Max Population={maxPopulation}</div>
        </div>
        <div className='number-of-years'>
          <input
            id='typeinp'
            type='range'
            min='10'
            max='300'
            value={numberOfYears}
            onChange={(e) => {
              setNumberOfYears(Number(e.target.value))
            }}
            step='1'
          />
          <div>Number Of Years={numberOfYears}</div>
        </div>
      </div>
      <div
        className='graph'
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {data.length !== 0 && <Graph data={data} />}
      </div>
    </div>
  )
}

export default App
