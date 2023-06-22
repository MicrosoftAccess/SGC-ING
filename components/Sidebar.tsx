import React from 'react'
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { faHouseMedicalCircleXmark } from '@fortawesome/free-solid-svg-icons'
export default function Sidebar() {
  return (
    <div className='h-full w-[100px] bg-slate-500 flex flex-col justify-center items-center'>
      <div className='w-full flex items-center gap-4 justify-center flex-col'>

        <Link href="/perfil">
          <FontAwesomeIcon style={{ height: '20px', width: "20px", color: 'white' }} icon={faUser} />
        </Link>
        <Link href="/camas">
          <FontAwesomeIcon style={{ height: '20px', width: "20px", color: 'white' }} icon={faBed} />
        </Link>
        <Link href="/pacientes" >
          <FontAwesomeIcon style={{ height: '20px', width: "20px", color: 'white' }} icon={faHouseMedicalCircleXmark} />
        </Link>
      </div>
    </div>
  )
}
