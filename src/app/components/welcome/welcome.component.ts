import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export default class WelcomeComponent {

}
