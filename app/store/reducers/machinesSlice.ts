import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface Machine {
    id: string;
    name: string;
}

const machinesSlice = createSlice({
    name: 'machines',
    initialState: [] as Machine[],
    reducers: {
        addMachine: (state, action: PayloadAction<Machine>) => {
            // state.push(action.payload);

            // AMO A METE' MUXAS MÁQUINAS Y A COMPROBA' QUÉ TARDA: 10, 100, 1000, 10000, 100000
            console.log("ini: ", Date.now())
            for(let i =0; i < 100000; i++) {
                state.push({ id: i.toString(), name: 'Machine' + i });
            }
            console.log("end: ", Date.now())
        },
}})

export const { addMachine } = machinesSlice.actions;
export default machinesSlice.reducer;