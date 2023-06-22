import React from 'react'
import Sidebar from '@/components/Sidebar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faWeightScale, faChildReaching, faHeartPulse, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faUserTimes } from '@fortawesome/free-solid-svg-icons'
export default function page() {
  return (
    <div className='flex bg-slate-300 h-full w-full flex-row'>
      <Sidebar></Sidebar>
      <div className='flex flex-col w-full justify-center items-center'>

        <Card className='w-[1000px] h-[600px]'>
          <CardHeader>
            <CardTitle className='text-4xl text-center'>Perfil Paciente</CardTitle>
          </CardHeader>
          <CardContent className='flex w-full justify-between  items-center '>
            <div className='flex flex-row justify-center'>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-2'>
                  <div className='font-bold'>Nombre:</div>
                  <div>Juan Alberto Gustamante Pérez:</div>

                </div>
                <div className='flex flex-row gap-2'>
                  <div className='flex flex-row gap-2'>
                    <div className='font-bold'>RUT:</div>
                    <div>2024555-9</div>

                  </div>
                  <div className='flex flex-row gap-2'>
                    <div className='font-bold'>Edad:</div>
                    <div>24</div>

                  </div>

                </div>
                <div className='font-bold'>
                  Datos relevantes del paciente
                </div>
                <div className='flex flex-row gap-2'>
                  <div className='font-bold flex flex-row gap-2'><FontAwesomeIcon style={{ height: '20px', width: '20px' }} icon={faWeightScale} />Peso:</div>
                  <div>65 KG</div>

                </div>
                <div className='flex flex-row gap-2'>
                  <div className='font-bold flex flex-row gap-1'><FontAwesomeIcon style={{ height: '20px', width: '20px' }} icon={faTemperatureThreeQuarters} />Temperatura</div>
                  <div>27 C°</div>

                </div>
                <div className='flex flex-row gap-2'>
                  <div className='font-bold flex flex-row gap-2'> <FontAwesomeIcon style={{ height: '20px', width: '20px' }} icon={faChildReaching} />Peso</div>
                  <div>1.67 M</div>

                </div>
                <div className='flex flex-row gap-2'>
                  <div className='font-bold flex flex-row gap-2'><FontAwesomeIcon style={{ height: '20px', width: '20px' }} icon={faHeartPulse} /> Frecuencia cardiaca:</div>
                  <div>87 Bpm:</div>

                </div>


              </div>


            </div>
            <div className='w-[500px]  h-[400px] flex flex-col gap-3'>
              <div className='font-bold text-center text-2xl'>Historial del paciente</div>
              <div className='overflow-y-scroll'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis tellus lorem, et volutpat nisl aliquam et. Suspendisse ultrices velit sapien, a laoreet enim cursus nec. Sed quis eros ullamcorper, vulputate ipsum quis, molestie quam. Ut aliquet leo ut sollicitudin elementum. Sed sed metus eget dui luctus fringilla sit amet quis massa. Etiam tempus ac lorem et efficitur. Suspendisse pretium risus vitae suscipit pulvinar. Suspendisse tincidunt ornare tellus ut maximus. Proin sit amet aliquet arcu, eget finibus felis. Ut venenatis lorem justo, ut faucibus orci egestas eu.

                Nullam vel sagittis lacus. Nulla fringilla ligula in libero sollicitudin, sit amet porta massa maximus. Praesent facilisis porttitor suscipit. Ut a urna at risus hendrerit sagittis eu sed risus. Pellentesque augue sapien, elementum sed mattis a, consectetur sit amet urna. Vivamus eu ante in nibh feugiat egestas. Ut lectus tellus, vehicula sit amet pulvinar non, feugiat consectetur quam. Quisque lacinia ligula at sapien rhoncus elementum. Aliquam posuere lacus vitae pretium faucibus. Suspendisse mollis ac magna in placerat. Nunc ut scelerisque neque, non consectetur dui. Mauris iaculis, turpis ultricies suscipit tincidunt, urna ipsum laoreet arcu, ac placerat arcu sapien non purus.

                In fringilla accumsan nisi, sed lacinia nisi aliquet nec. Praesent vel facilisis turpis. Fusce at justo at erat porttitor varius sed et sapien. Maecenas ornare arcu vel fringilla mattis. Mauris dignissim at quam semper accumsan. Ut et ligula ac diam venenatis pulvinar nec congue nisl. Curabitur varius nisi aliquam massa finibus dictum nec non mi. Cras nisi augue, elementum eget dui non, maximus imperdiet felis. Quisque sed enim sit amet elit molestie euismod. Mauris ligula nunc, dignissim et nisi quis, sollicitudin mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero libero, elementum id orci sed, interdum dapibus mauris. Pellentesque maximus est ac ornare sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque egestas eleifend quam non commodo.

                Curabitur fermentum elit leo, at pretium lectus dapibus ac. Integer nulla lorem, venenatis at pretium ac, dignissim sit amet nulla. Donec finibus sem rutrum, gravida risus eu, sollicitudin nulla. Vivamus at nunc at lorem lobortis ultrices. Nulla facilisi. Vivamus at libero neque. Nulla vel interdum augue, at viverra est. Proin pellentesque suscipit orci quis feugiat. Phasellus a magna ac velit tempor semper. Cras sed magna risus. Suspendisse potenti.

                Praesent mi odio, aliquam eget hendrerit non, facilisis nec mi. Mauris magna elit, egestas eget lacinia eget, cursus at augue. Quisque id vulputate dolor. Suspendisse tincidunt eros ac enim hendrerit, at laoreet ex egestas. Vivamus faucibus iaculis velit tristique condimentum. Nulla facilisi. Cras egestas aliquam ante non lacinia. Etiam mollis justo sit amet augue dapibus, eu scelerisque mauris tincidunt. Duis tempus, ante vel tempor rutrum, velit ipsum porta augue, vel pellentesque tortor libero at quam. Donec efficitur nec nisl et semper.
              </div>

            </div>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>


        <div>

        </div>
      </div>

    </div>
  )
}
