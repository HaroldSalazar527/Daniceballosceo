import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Profile } from '../../sections/profile/profile';
import { Trajectory } from '../../sections/trajectory/trajectory';
import { Recognitions } from '../../sections/recognitions/recognitions';
import { Services } from '../../sections/services/services';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Profile,
    Trajectory,
    Recognitions,
    Services,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}