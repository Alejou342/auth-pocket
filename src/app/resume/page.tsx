"use client"
import React from 'react';
import axios from 'axios';

const CompraOnline = () => {
  const processStep = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _amount = urlParams.get('amount');

    try {
      await axios.get(`https://www.cpocketbot.com/api/psecompra/${_amount}`);
      alert('Pago completado');
      window.location.replace('https://api.whatsapp.com/send?phone=573205832189&text=Gracias%20por%20ayudarme');
    } catch (e) {
      window.location.replace('https://api.whatsapp.com/send?phone=573205832189&text=Gracias%20por%20ayudarme');
    }
  };

  return (
    <div className="container">
      <header>
        <img src="../asset/img/header.png" alt="Bancolombia Logo" />
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
        <div>
          <div>
            <h5 style={{ fontWeight: 'bold', textAlign: 'center' }}>Compra online BANCOLOMBIA</h5>
          </div>
        </div>
        <div style={{ fontSize: '11px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'right', marginRight: '2px' }}>
            <p>Nro. de factura:</p>
            <p>Descripcion del pago:</p>
            <p>Nro referencia:</p>
            <p>Nro referencia 2:</p>
            <p>Nro referencia 3:</p>
            <p>Valor a pagar:</p>
            <p>Producto:</p>
          </div>
          <div style={{ marginLeft: '2px' }}>
            <p>1345454657468484</p>
            <p>Pago Pocki</p>
            <p>4165465163</p>
            <p>192.168.54.11</p>
            <p>121216</p>
            <p style={{ fontWeight: 'bold' }} id="amount">$0</p>
            <p style={{ fontWeight: 'bold', textOverflow: 'ellipsis', maxWidth: '100px', overflow: 'hidden', height: '10px' }}>
              5616-1564165-14- Ahorros / Bancolombia A la mano - Cuenta de ahorros
            </p>
          </div>
        </div>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-evenly' }} className="buttons">
          <a style={{ fontSize: '11px', textDecoration: 'none', color: '#000', border: '1px solid #000', backgroundColor: 'transparent', borderRadius: '0px' }} href="#" className="cancel-btn">Regresar</a>
          <a style={{ fontSize: '11px', textDecoration: 'none', color: '#000', border: '1px solid #000', backgroundColor: 'transparent', borderRadius: '0px' }} href="#" className="cancel-btn">Cancelar</a>
          <a style={{ fontSize: '11px', textDecoration: 'none', color: '#000', borderRadius: '0px' }} href="#" className="continue-btn" onClick={processStep}>Pagar</a>
        </div>
        <div className="maintenance-info">
          <img src="../asset/img/side.png" alt="Bancolombia Logo" />
        </div>
      </main>
      <footer>
        <p>Dirección IP: 191.104.12.149</p>
        <p>Copyright © 2024 Bancolombia S.A.</p>
      </footer>
    </div>
  );
};

export default CompraOnline;
