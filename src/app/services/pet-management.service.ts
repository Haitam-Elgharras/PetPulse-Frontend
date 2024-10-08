import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Pet} from "../models/pet.model";

@Injectable({
  providedIn: 'root'
})
export class PetManagementService {

  constructor(private http : HttpClient) { }

  baseUrl = environment.baseUrl;
    s3BaseUrl: string = environment.s3BaseUrl;

  public getPetsByUserId(userId: number, name : string, page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pets/user/${userId}?name=${name}&page=${page}&size=${size}`);
  }

  public createPet(petData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pets/save`, petData);
  }

  public getPetById(petId: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/pets/${petId}`);
  }

  public deletePet(petId: number): Observable<Pet> {
    return this.http.delete<Pet>(`${this.baseUrl}/pets/${petId}`);
  }

  public updatePet(petData: FormData, petId : number): Observable<any> {
    console.log(petData);
    return this.http.put<any>(`${this.baseUrl}/pets/${petId}`, petData);
  }

  public getImageUrl(image: string): string {
    return `${this.s3BaseUrl}${image}`;
  }

}
