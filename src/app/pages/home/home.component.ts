import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mesesFaltantes: number = 0;

  ngOnInit(): void {
    this.calcularMesesFaltantes();
  }

  /**
   * Calcula cuántos meses faltan desde la fecha actual hasta junio de 2026.
   * Si ya pasó junio de 2026, muestra 0.
   */
  private calcularMesesFaltantes(): void {
    const hoy = new Date();
    const añoActual = hoy.getFullYear();
    const mesActual = hoy.getMonth(); // 0 = Enero, 5 = Junio
    const añoObjetivo = 2026;
    const mesObjetivo = 5; // Junio

    let meses = (añoObjetivo - añoActual) * 12 + (mesObjetivo - mesActual);
    this.mesesFaltantes = meses < 0 ? 0 : meses;
  }

  /**
   * Muestra una alerta de notificación.
   * Puedes reemplazar este método por una integración con un servicio real
   * (por ejemplo, guardar el email del usuario, enviar a una API, etc.)
   */
  notificarLanzamiento(): void {
    alert('📖 Recibirás un recordatorio cuando "El Legado de los Dioses" esté disponible en Junio 2026.');
    // Aquí podrías agregar lógica para abrir un modal de suscripción, enviar un evento a Google Analytics, etc.
  }
}