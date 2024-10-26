import { Component } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';
import { Gif } from '../../../interfaces/response.gifs.interface';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent {

  constructor(private gifsService: GifsService) { }

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
  
}
