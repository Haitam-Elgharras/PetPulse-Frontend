import {Component, OnInit} from '@angular/core';
import {Pet} from "../models/pet.model";
import {PetManagementService} from "../services/pet-management.service";

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit {

  userId : number = 1;
  pets: Pet[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number = 1;

  constructor(private petService: PetManagementService) {}

  ngOnInit(): void {
    this.getPets(this.userId);
  }

  getPets(userId : number): void {
    this.petService.getPetsByUserId(userId, this.currentPage - 1, this.itemsPerPage).subscribe(response => {
      this.pets = response.content;
      this.totalPages = response.totalPages;
    });
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.getPets(this.userId);
  }

}
