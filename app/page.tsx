import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function IndexPage() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card className="shadow-xl w-[25%] h-[35%]">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Inicio de sesión</CardTitle>
          <CardDescription>Ingrese sus credenciales</CardDescription>
        </CardHeader>
        <CardContent className="w-full h-[50%] items-center flex justify-center flex-col gap-2">
          <Input placeholder="Usuario" type="text"></Input>
          <Input placeholder="Contraseña" type="password"></Input>
        </CardContent>
        <CardFooter className="w-full flex items-center justify-center">
          <Link className="w-full" href="/camas">
            <Button className="bg-green-500 w-full">Iniciar sesión</Button>
          </Link>
        </CardFooter>
      </Card>


    </div>
  )
}
