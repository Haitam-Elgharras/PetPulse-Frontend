import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LostReportsService } from "../services/lost-reports.service";
import { Report } from "../models/report.model";
import {jwtDecode} from "jwt-decode";
import {PetManagementService} from "../services/pet-management.service";
import {Pet} from "../models/pet.model";

@Component({
  selector: 'app-manage-report',
  templateUrl: './manage-report.component.html',
  styleUrls: ['./manage-report.component.css']
})
export class ManageReportComponent {
  reportId: string | undefined;
  reportData: Report | undefined;
  pets:any[] | any;
  id: string | undefined
  selectedPetId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private lostReportsService: LostReportsService,
    private petManagamentService:PetManagementService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.reportId = params['id'];
      this.getReportById(this.reportId);
    });
    const jwtToken = localStorage.getItem('jwt-token');
    if (jwtToken) {
      const decodedToken: any = jwtDecode(jwtToken);
      console.log(decodedToken);
      this.id = decodedToken.id;
      console.log(this.id)
      this.getPetsByUserId(this.id)
    }

  }

  getReportById(reportId: string | undefined): void {
    this.lostReportsService.getLostReportById(reportId).subscribe(
      (report: Report) => {
        this.reportData = report;
        this.selectedPetId = this.reportData?.pet_id;

      },
      (error: any) => {
        console.error('Error fetching lost report:', error);
      }
    );
  }

  getPetsByUserId(userId: string | undefined): void {
    if (userId !== undefined) {
      this.lostReportsService.getPetsByUserId(userId).subscribe(
        (response: any) => {
          if (response && response.content) {
            this.pets = response.content;
            console.log(this.pets); // Logging the pets array for verification
          } else {
            console.error('No pet data found in the response content.');
          }
        },
        (error: any) => {
          console.error('Error fetching pets:', error);
        }
      );
    } else {
      console.error('User ID is undefined. Cannot fetch pets.');
    }
  }

}
