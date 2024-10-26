import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(private readonly gifsService: GifsService) { }

  get tagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  getGifsByTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
