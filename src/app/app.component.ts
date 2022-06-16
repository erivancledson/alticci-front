import { Component } from '@angular/core';

import { AlticciService } from './service/alticci.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  valor : any;
  resultado : any;

  constructor(private alticciService : AlticciService){
  }

  calcular(){
    this.alticciService.calcular(this.valor).subscribe(data => {
      this.resultado = data;
    });
  }
}
