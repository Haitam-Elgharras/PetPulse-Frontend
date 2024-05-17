import {Component, OnInit} from '@angular/core';
import {Pet} from "../models/pet.model";
import {ActivatedRoute} from "@angular/router";
import {PetManagementService} from "../services/pet-management.service";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent implements OnInit{
  pet!: Pet;

  constructor(private route: ActivatedRoute, private petService: PetManagementService) { }

  ngOnInit(): void {
    const petId = this.route.snapshot.paramMap.get('id');
    if (petId) {
      this.petService.getPetById(Number(petId)).subscribe(pet => {
        this.pet = pet;
      });
    }
  }

  private s3BaseUrl = 'https://petpulse.s3.amazonaws.com/';

  getImageUrl(image: string): string {
    return `${this.s3BaseUrl}${image}`;
  }
}
