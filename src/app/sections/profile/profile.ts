import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-profile',
  imports: [
    TranslatePipe
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {}