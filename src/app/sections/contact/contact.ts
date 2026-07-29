import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formularioEnviado = false;

  nombre = '';
  correo = '';
  organizacion = '';
  motivo = '';
  mensaje = '';

  enviarFormulario(): void {
    if (
      !this.nombre.trim() ||
      !this.correo.trim() ||
      !this.motivo ||
      !this.mensaje.trim()
    ) {
      return;
    }

    this.formularioEnviado = true;

    this.nombre = '';
    this.correo = '';
    this.organizacion = '';
    this.motivo = '';
    this.mensaje = '';
  }

  mostrarFormulario(): void {
    this.formularioEnviado = false;
  }
}