import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { faCircleExclamation, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import paciente from "../lib/paciente.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
type Checked = DropdownMenuCheckboxItemProps["checked"]
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export function ModalAdd() {
  const [position, setPosition] = React.useState("Cama")
  const [position2, setPosition2] = React.useState("Masculino")
  let freeBed = paciente.filter(paciente => { return paciente.estado == "disponible" })
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent"><FontAwesomeIcon style={{ width: '15px', height: '15px', color: "green" }} icon={faCirclePlus} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[50%]">
        <DialogHeader>
          <DialogTitle>Añadir paciente a una cama</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center justify-center flex-row gap-3 w-full">
            <div className="flex w-[50%] flex-row items-center justify-between">

              <div>
                Seleccione cama:
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-[30%]" variant="outline">{position}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 h-52 overflow-y-scroll">
                  <DropdownMenuLabel>Camas Disponibles</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    {freeBed.map(cama =>
                      <DropdownMenuRadioItem key={cama.id} value={cama.id}>{cama.id}</DropdownMenuRadioItem>

                    )
                    }
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex w-[50%] justify-between items-center">
              <div>
                Seleccione sexo:
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">{position2}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Seleccione el sexo</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={position} onValueChange={setPosition2}>
                    <DropdownMenuRadioItem value="Masculino">Masculino</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Femenino">Femenino</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

          </div>
          <div className="flex flex-row gap-3">

            <Input placeholder="RUT Paciente" className="w-[50%]"></Input>
            <Input placeholder="Pabellón" className="w-[50%]"></Input>
          </div>
          <div className="flex flex-row gap-3">
            <Input placeholder="Nombre Paciente" className="w-[50%]"></Input>
            <Input placeholder="Prevision" className="w-[50%]"></Input>

          </div>
          <Input placeholder="Direccion" className="w-full"></Input>

        </div>
        <Button type="submit" className="bg-green-500 w-full hover:bg-green-700">Aceptar</Button>
      </DialogContent>
    </Dialog>
  )
}

