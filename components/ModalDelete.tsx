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
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export function ModalDelete() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent"><FontAwesomeIcon style={{ width: '15px', height: '15px', color: "red" }} icon={faCircleXmark} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[50%]">
        <DialogHeader>
          <DialogTitle>¿Está seguro que desea egresar este paciente?</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="w-full flex justify-center">

          <Button className="bg-green-500 hover:bg-green-700 w-[40%]" type="submit">Aceptar</Button>
        </div>

        {/* <DialogFooter className="flex justify-center w-full">
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}

