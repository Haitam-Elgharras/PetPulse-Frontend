import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { PetManagementService } from "./pet-management.service";

@Injectable({
  providedIn: 'root'
})
export class LostReportsService {



  constructor(private http: HttpClient, private petService: PetManagementService) { }

  baseUrl = environment.baseUrl;

  getLostReports(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/reports`);
  }

  getLostReportById(reportId: string | undefined): Observable<any>{
    return this.http.get<any[]>(`${this.baseUrl}/reports/${reportId}`);
  }

  getUserById(userId: number | undefined): Observable<any>{
    return this.http.get<any[]>(`${this.baseUrl}/users/${userId}`);
  }
}
