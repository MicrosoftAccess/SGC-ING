"use client"
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import Layout from '../layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "@/components/ui/button"
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
import { faPenToSquare, faTrashCan, faEye } from '@fortawesome/free-regular-svg-icons'
import { faCircleExclamation, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Sidebar from '@/components/Sidebar';
import { ModalAdd } from "@/components/ModalAdd"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import TooltipAdd from "@/components/TooltipAdd"
type Checked = DropdownMenuCheckboxItemProps["checked"]
import paciente from "../../lib/paciente.json"
import { Modal } from '@/components/Modal';
import { ModalDelete } from '@/components/ModalDelete';
import { ModalRead } from '@/components/ModalRead';
export default function page() {

  const [filter, setFilter] = React.useState(paciente)
  const [position, setPosition] = React.useState("bottom")
  const filterBusy = () => {
    setFilter(paciente.filter(paciente => { return paciente.estado == "ocupado" }))
  }
  const filterAll = () => {
    setFilter(paciente.filter(paciente => { return paciente.estado }))
  }
  const filterFree = () => {
    setFilter(paciente.filter(paciente => { return paciente.estado == "disponible" }))
  }
  const filterDisabled = () => {
    setFilter(paciente.filter(paciente => { return paciente.estado == "mala" }))
  }
  if (filter == null) return <div></div>
  return (
    <Layout>
      <div className='w-full h-full flex flex-row'>
        <Sidebar></Sidebar>
        <div className='flex justify-center items-center h-full w-full'>
          <Card className='w-[1300px] text-center h-[700px]'>
            <CardHeader>
              <CardTitle>
                <div className='flex w-full gap-3 justify-center flex flex-row'>
                  <div className="w-full flex flex-row justify-between">

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Filtar</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Filtrar por: </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                          <DropdownMenuRadioItem onClick={filterAll} value="todo">Todo</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem onClick={filterFree} value="disponible">Disponible</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem onClick={filterBusy} value="ocupado">Ocupado</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem onClick={filterDisabled} value="deshabilitada">Deshabilitada</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <div>
                      <TooltipAdd />

                    </div>
                  </div>
                  {/* <Button className="bg-white hover:bg-white"></Button> */}
                  {/* <Button onClick={filterAll} className='w-[120px] hover:bg-slate-700 hover:text-white' variant="secondary">Todos</Button>
                  <Button onClick={filterFree} className='w-[120px] hover:bg-slate-700 hover:text-white' variant="secondary">Disponible</Button>
                  <Button onClick={filterBusy} className='w-[120px] hover:bg-slate-700 hover:text-white' variant="secondary">Ocupado</Button>
                  <Button onClick={filterUnable} className='w-[120px] hover:bg-slate-700 hover:text-white' variant="secondary">Deshabilitado</Button> */}

                </div>
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent className="max-h-[60%]  overflow-y-scroll">

              <Table >
                <TableHeader>
                  <TableRow>
                    <TableHead className='text-center'>N° de cama</TableHead>
                    <TableHead className='text-center'>Pabellón</TableHead>
                    <TableHead className='text-center'>Nombre del paciente</TableHead>
                    <TableHead className='text-center'>RUT Paciente</TableHead>
                    <TableHead className='text-center'>Sexo</TableHead>
                    <TableHead className='text-center'>Dia entrada</TableHead>
                    <TableHead className='text-center'>Hora entrada</TableHead>
                    <TableHead className='text-center'>Estado</TableHead>
                    <TableHead className='text-center'>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="">

                  {filter.map(paciente => (
                    <TableRow>
                      <TableCell className="font-medium">{paciente.id}</TableCell>
                      <TableCell>{paciente.pabellon}</TableCell>
                      <TableCell>{paciente.name}</TableCell>
                      <TableCell>{paciente.rut}</TableCell>
                      <TableCell>{paciente.sexo}</TableCell>
                      <TableCell>{paciente.entrada}</TableCell>
                      <TableCell>{paciente.hora}</TableCell>
                      <TableCell>
                        <div className='flex items-center justify-center'>
                          {paciente.estado == "disponible" && <FontAwesomeIcon style={{ width: '20px', height: '20px', color: "green" }} icon={faCircleExclamation} />}
                          {paciente.estado == "ocupado" && <FontAwesomeIcon style={{ width: '20px', height: '20px', color: "gold" }} icon={faCircleExclamation} />}
                          {paciente.estado == "mala" && <FontAwesomeIcon style={{ width: '20px', height: '20px', color: "orange" }} icon={faCircleExclamation} />}
                        </div>

                      </TableCell>

                      <TableCell >
                        <div className='flex flex-row justify-center items-center'>
                          {/* <Modal></Modal> */}
                          {paciente.estado == "disponible" &&
                            <ModalDelete></ModalDelete>
                          }
                          <ModalRead props={paciente}></ModalRead>

                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>


            </CardContent>
            {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
          </Card>

        </div>

      </div>

    </Layout>
  )
}
