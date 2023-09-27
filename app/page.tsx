"use client";

import ReduxProvider from "./store/ReduxProvider";
import MachineInfo from "./MachineInfo";

export default function Home() {
  
  return (
    <ReduxProvider>
      <MachineInfo/>
    </ReduxProvider>  
  )
}  