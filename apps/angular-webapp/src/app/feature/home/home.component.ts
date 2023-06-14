import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NineboxCardComponent } from "../ninebox-card/ninebox-card.component";
import {Observable, of, Subscription, take} from "rxjs";

@Component({
  selector: 'distributor-home',
  standalone: true,
  imports: [CommonModule, NineboxCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public nineboxs: Observable<any | null> = of(null);
  constructor() {}

  retornoService = of([
    {text: 'box', imgPath: 'box', color: 'gray'},
    {text: 'box', imgPath: 'box', color: 'gray'},
    {text: 'box', imgPath: 'box', color: 'gray'},
    {text: 'box', imgPath: 'box', color: 'gray'},
    {text: 'box', imgPath: 'box', color: 'gray'},
    {text: 'box', imgPath: 'box', color: 'gray'},
    {text: 'box', imgPath: 'box', color: 'gray'},
    {text: 'box', imgPath: 'box', color: 'gray'},
    {text: 'box', imgPath: 'box', color: 'gray'},
  ]);

  ngOnInit(): void {
    this.nineboxs = this.retornoService;
  }
}
