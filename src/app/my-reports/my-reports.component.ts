import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {jwtDecode} from "jwt-decode";
import {LostReportsService} from "../services/lost-reports.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.css']
})
export class MyReportsComponent implements OnInit {
  id: number =7;
  reports: any[] = [];

  constructor(private authService: AuthService,private lostReportsService: LostReportsService,private router: Router) {}


  ngOnInit() {
    const jwtToken = localStorage.getItem('jwt-token');
    if (jwtToken) {
      const decodedToken: any = jwtDecode(jwtToken);
      console.log(decodedToken);
      this.id = decodedToken.id;
      this.getMyReports();
    }
  }
  getMyReports(): void {
    if (this.id) {
      this.lostReportsService.getReportsByUserId(this.id).subscribe(
        (reports: any[]) => {

          this.reports = [...reports]; // Update the reports array
          console.log(
           this.reports
          )
        },
        (error: any) => {
          console.error('Error fetching reports:', error);
        }
      );
    } else {
      console.error('User ID is not available.');
    }
  }
  manageReport(reportId: number) {
    this.router.navigate(['/my-reports', reportId]);
  }

  viewApplications(reportId: number) {
    this.router.navigate(['/show-applications', reportId]);
  }

  navigateToAddReport() {
    this.router.navigate(['/add-report']);
  }
}
