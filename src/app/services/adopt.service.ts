import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;


  getAdoptionReports(page: number, size: number, city: string, breed: string, specie: string,petAgeStart: number, petAgeEnd: number) {
    page = page - 1;
    return this.http.get<any>(this.baseUrl + '/reports/adoptFilter', {
      params: {
        page,
        size,
        type: 'ADOPTION',
        city,
        petSpecie: specie,
        petBreed: breed,
        petAgeStart,
        petAgeEnd
      }
    });
  }


}
