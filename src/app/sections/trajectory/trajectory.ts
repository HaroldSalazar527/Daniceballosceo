import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-trajectory',
  imports: [
    TranslatePipe
  ],
  templateUrl: './trajectory.html',
  styleUrl: './trajectory.css'
})
export class Trajectory {}