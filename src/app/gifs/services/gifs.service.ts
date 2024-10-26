import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/response.gifs.interface';

const apiKey: string = 'NZ65azdoXg5TOTWLcJHE4HfP8aMncwK6';
const apiUrl: string = 'https://api.giphy.com/v1/gifs/search';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  constructor(private http: HttpClient) { }
  private _tagsHistory: string[] = [];
  public gifList: Gif[] = [];

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }
  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }
  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', apiKey)
      .set('q', tag)
      .set('limit', '25')
      .set('offset', '0')
      .set('rating', 'g')
      .set('lang', 'en')
      .set('bundle', 'messaging_non_clips');

    this.http.get<SearchResponse>(apiUrl, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
      });
  }
}
