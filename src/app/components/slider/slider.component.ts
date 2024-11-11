import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MaterialModule, FormsModule, CardComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input()title: string ='';
  @Output()emisor= new EventEmitter();
 value=0;
 cambioSLider(valor:number){
  console.log(valor);
  this.emisor.emit(valor);
 }
}
