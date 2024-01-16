import React from 'react'
import { GrSolaris } from "react-icons/gr";


function loading() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <GrSolaris className="text-5xl animate-spin" />
      </div>
    </div>
  )
}

export default loading