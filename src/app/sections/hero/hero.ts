import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-hero',
  imports: [
    TranslatePipe
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {}