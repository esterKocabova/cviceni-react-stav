import { useState } from 'react'
import './style.css'
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)

  const soucet = () => {
  return parseInt(input1, 10) + parseInt(input2, 10)
 }
  return (
    <div className='bonus4'>
      <input type="number" defaultValue="0"  onChange={(e) => setInput1(e.target.value)}/> +{' '}
      <input type="number" defaultValue="0" onChange={(e) => setInput2(e.target.value)}/> = <output>{soucet()}</output>
    </div>
  )
}
