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
        <Link className='w-full h-10' href="/">
          <Button className='w-full h-10 bg-slate-500'><FontAwesomeIcon icon={faUser} /></Button>
        </Link>
        <Link className='w-full h-10' href="/camas">
          <Button className='w-full h-10 bg-slate-500'><FontAwesomeIcon icon={faBed} /></Button>
        </Link>
        <Button className='w-full h-10 bg-slate-500'><FontAwesomeIcon icon={faHouseMedicalCircleXmark} /></Button>
      </div>
    </div>
  )
}
