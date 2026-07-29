import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-recognitions',
  imports: [
    TranslatePipe
  ],
  templateUrl: './recognitions.html',
  styleUrl: './recognitions.css'
})
export class Recognitions {}