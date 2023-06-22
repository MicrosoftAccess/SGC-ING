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
import { faPenToSquare, faTrashCan, faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { faBook } from '@fortawesome/free-solid-svg-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function ModalRead({ props }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent"><FontAwesomeIcon style={{ width: '15px', height: '15px', color: "gray" }} icon={faBook} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[75%]">
        <DialogHeader>
          <DialogTitle className="text-center">Datos del paciente</DialogTitle>
          <DialogDescription>
            {/* Datos del paciente ... */}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-evenly gap-3">
          <Card className="">
            <CardHeader>
              <CardTitle className="text-center">ID Cama: {props.id}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 items-center justify-center">
              {/* <Avatar className="w-12 h-12">
                <AvatarImage src="../lib/user.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}

              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-row gap-2 w-[50%]">
                  <div className="font-bold">Nombre:</div>
                  <div>{props.name}</div>

                </div>
                <div className="w-[50%] flex flex-row">
                  <div className="font-bold">Prevision:</div>
                  <div>{props.prevision}</div>
                </div>
              </div>
              <div className="flex flex-row gap-2 w-full justify-start">
                <div className="font-bold">Direccion:</div>
                <div>{props.direccion}</div>
              </div>
              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-row w-[50%] ">
                  <div className="flex flex-row gap-2 w-[50%]">
                    <div className="font-bold">Edad:</div>
                    <div>{props.edad}</div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 ">
                  <div className="font-bold">
                    Rut:
                  </div>
                  <div>
                    {props.rut}
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-row w-[50%]  ">
                  <div className="flex flex-row gap-2">
                    <div className="font-bold">Sexo:</div>
                    <div>{props.sexo}</div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-[50%]">
                  <div className="font-bold">
                    Contacto:
                  </div>
                  <div>
                    {props.contacto}
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-row w-[50%]  ">
                  <div className="flex flex-row gap-2">
                    <div className="font-bold">Emergencia:</div>
                    <div>{props.sexo}</div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-[50%]">
                  <div className="font-bold">
                    Fecha adm:
                  </div>
                  <div>
                    {props.contacto}
                  </div>
                </div>
              </div>


              {/* <div className="flex flex-row gap-2">
                <div className="font-bold">Nombre: </div>
                <div>
                  {props.name}
                </div>
              </div>
              <div className="gap-3 flex flex-col">

                <div className="flex justify-center gap-3 w-full flex-row">
                  <div className="flex flex-row gap-2">
                    <div className="font-bold">Edad:</div>
                    <div> {props.edad}</div>

                  </div>
                </div>
                <div className="flex justify-center gap-3 w-full flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="font-bold">RUT: </div>
                    <div>
                      {props.rut}
                    </div>
                  </div>
                  <div>Sexo: {props.sexo} </div>
                </div>
              </div>
              <div className="gap-3 flex flex-col">

                <div className="flex justify-center gap-3 w-full flex-col">
                  <div>Temperatura:{props.name} </div>
                  <div>Peso: 67 kg</div>
                </div>
                <div className="flex justify-center gap-3 w-full flex-col">
                  <div>Altura: 1.76 M </div>
                  <div>Presion arterial: </div>
                </div>
              </div> */}

            </CardContent>
            <CardFooter></CardFooter>
          </Card>



        </div>
        {/* <DialogFooter className="">
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}

