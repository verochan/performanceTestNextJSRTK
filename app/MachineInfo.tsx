"use client";

import type { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { addMachine } from './store/reducers/machinesSlice'

export default function Home() {
  const machinesNames = useSelector((state: RootState) => state.machines).map(machine => machine.name+"\n");
  const dispatch = useDispatch()

  return (
      <div>
        <button onClick={() => dispatch(addMachine({ id: '1', name: 'Machine' }))}>Añadir muchas máquinas</button>
        <div>
          <span>Eres una máquina: {machinesNames}</span>
        </div>
      </div>
  )
}  