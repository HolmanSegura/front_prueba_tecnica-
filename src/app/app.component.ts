import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,  
  imports: [RouterModule],  
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-tecnica';
}
