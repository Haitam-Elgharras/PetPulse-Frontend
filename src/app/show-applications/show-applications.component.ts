import {Component, ViewChild} from '@angular/core';
import {Report} from "../models/report.model";
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {LostReportsService} from "../services/lost-reports.service";
import {PetManagementService} from "../services/pet-management.service";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-show-applications',
  templateUrl: './show-applications.component.html',
  styleUrl: './show-applications.component.css'
})
export class ShowApplicationsComponent {

}
