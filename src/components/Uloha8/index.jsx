/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/

import { useState } from "react"

export const Uloha8 = () => {
  const [prsiVBrne, setPrsiVBrne] = useState('mozna')

  const zmenitStav = () => {
    if (prsiVBrne === 'mozna') {
      setPrsiVBrne('ano')
    } 
    else if (prsiVBrne === 'ano') {
        setPrsiVBrne('ne')
    } 
    else {
      setPrsiVBrne('mozna')
    }
    }
  

  return (
    <>
      <h3>Prší v Brně: {prsiVBrne}</h3>
      <button onClick={zmenitStav}>změnit</button>
    </>
  )
}
