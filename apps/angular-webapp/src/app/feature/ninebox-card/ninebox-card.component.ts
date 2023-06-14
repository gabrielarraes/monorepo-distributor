import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ninebox-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ninebox-card.component.html',
  styleUrls: ['./ninebox-card.component.scss'],
})
export class NineboxCardComponent {

  @Input() text: string = '';
  @Input() imgPath: string = '';
  @Input() color: string = ''

  constructor() { }
}
