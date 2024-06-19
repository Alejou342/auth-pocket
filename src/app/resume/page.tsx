"use client";
import React from 'react';
import { processStep, formatPrice } from '@/utils'
import SideHeader from '@/components/SideHeader'
import { useRouter } from 'next/navigation';
import ModalGeneral from '@/containers/Modal'
import ModalContent from '@/components/ModalContent'
import Loader from '@/components/Loader'

const CompraOnline = ({ actual, value }: any) => {

  const router = useRouter()
  const [ openModal, setOpenModal ] = React.useState(false)
  const [loaderActive, setLoaderActive] = React.useState<boolean>(false)

  const doPayment = () => {
      setLoaderActive(true)
      setTimeout(() => {
        setLoaderActive(false)
        setOpenModal(!openModal)
    }, 2000);
  }

  return (
    <div className="grid h-screen mx-auto place-items-center">
      <SideHeader to="/" />
      <Loader active={loaderActive} />
      <ModalGeneral state={openModal} setState={setOpenModal} >
        <ModalContent />
      </ModalGeneral>
      <main className="flex flex-col w-11/12">
        <div>
          <div>
            <h5 className="font-bold text-center">Compra online Pocki</h5>
          </div>
        </div>
        <div className="text-xs flex justify-between my-4">
          <div className="text-justify mr-1">
            <p>Nro. de factura:</p>
            <p>Descripcion del pago:</p>
            <p>Nro referencia:</p>
            <p>Nro referencia 2:</p>
            <p>Nro referencia 3:</p>
            <p>Saldo actual: </p>
            <p>Valor a pagar:</p>
            <p>Producto:</p>
          </div>
          <div className="ml-1">
            <p>1345454657468484</p>
            <p>Pago Pocki</p>
            <p>4165465163</p>
            <p>192.168.54.11</p>
            <p>121216</p>
            <p className='text-green-400 font-bold'>{formatPrice(actual || 4500000)}</p>
            <p className="text-red-400 font-bold" id="amount">{`- ${formatPrice(value || 350000)}`}</p>
            <p className="font-bold truncate max-w-xs">
              5616-1564165-14 Pocki Ahorros
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-evenly">
          <a className="w-[5rem] text-xs text-center border border-black bg-transparent rounded-none py-1 px-2" href="#" onClick={() => { router.push('/')}}>Regresar</a>
          <a className="w-[5rem] text-xs text-center border border-black bg-transparent rounded-none py-1 px-2" href="#" onClick={() => { router.push('/')}}>Cancelar</a>
          <a className="w-[5rem] text-xs text-center text-white bg-primary rounded-none py-1 px-2" href="#" onClick={doPayment}>Pagar</a>
        </div>
      </main>
      <footer className="text-center mt-4">
        <p>Dirección IP: 191.104.12.149</p>
        <p>&copy; 2024 Pocki S.A.</p>
      </footer>
    </div>
  );
};

export default CompraOnline;