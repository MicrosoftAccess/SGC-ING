"use client"
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ModalAdd } from './ModalAdd'
export default function TooltipAdd() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <ModalAdd></ModalAdd>
          </TooltipTrigger>
          <TooltipContent>
            <p>Asignar paciente a cama</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}
