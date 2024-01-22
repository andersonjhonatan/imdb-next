import Image from 'next/image'
import React from 'react'


function loading() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Image src="/spinner.svg" alt="loading" width={200} height={200} />
      </div>
    </div>
  )
}

export default loading