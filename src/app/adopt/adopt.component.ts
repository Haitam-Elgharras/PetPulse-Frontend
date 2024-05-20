import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {
  faBackwardStep,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons';
import { PetManagementService } from '../services/pet-management.service';
import { AuthService } from '../services/auth.service';
import { Report } from '../models/report.model';
import { AdoptService } from '../services/adopt.service';


@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css'],
})
export class AdoptComponent implements OnInit {
  icons = { faForwardStep, faBackwardStep };
  BreedOptions!: [{ label: string; value: number }];
  // Pets: Pet[] = [];
  adoptionPosts:  Report[] = [];
  page: number = 1;
  petAgeEnd: number = 40;
  petAgeStart: number = 1;
  breed!: any;
  specie: string= 'DOG';
  health!: any;
  size: number = 6;
  city!: string;

  constructor(
    private PetsService: PetManagementService,
    private authService: AuthService,
    private adoptService: AdoptService,
  ) {}

  ngOnInit() {
    this.getAdoptionReports(
      // this.page,
      // this.size,
      // this.city
    );
  
  }


  onBreedChange() {
    console.log(this.breed);
    this.getAdoptionReports(
      // this.page,
      // this.size,
      // this.city
    );
    }

    onCityChange() {
      this.getAdoptionReports(
        // this.page,
        // this.size,
        // this.city
      );
      }
      

  selectSpecie = () => {
    console.log(this.specie);
    this.getAdoptionReports(
      // this.page,
      // this.size,
      // this.city
    );
  };

  moveForword = () => {
    this.page++;
    this.getAdoptionReports(
      // this.page,
      // this.size,
      // this.city
    );
  };

  moveBackword = () => {
    if (this.page - 1 > 0) this.page--;
    this.getAdoptionReports(
      // this.page,
      // this.size,
      // this.city
      // this.min,
      // this.max,
      // this.specie,
      // this.breed,
      // this.health
    );
  };

  getAdoptionReports = (
  ) => {
      // this.adoptionPosts = Array.from({ length: 10 }, (_, i) => ({
      //   id: i,
      //   title: `Adoption Post ${i}`,
      //   description: `This is a description for Adoption Post ${i}`,
      //   latitude: Math.random() * 100,
      //   longitude: Math.random() * 100,
      //   city: `City ${i}`,
      //   address: `Address ${i}`,
      //   type: 'Adoption',
      //   status: 'Available',
      //   additionalNotes: `Additional notes for Adoption Post ${i}`,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   verified: Math.random() > 0.5,
      //   pet_id: i,
      //   user_id: i,
      //   petData: {
      //     id: i,
      //     name: `Pet ${i}`,
      //     specie: Math.random() > 0.5 ? 'Dog' : 'Cat',
      //     breed: Math.random() > 0.5 ? 'Breed 1' : 'Breed 2',
      //     age: `${Math.random() * 10} years`,
      //     images: [
      //       "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      //       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      //     ]
      //   },
      //   reporterName: `Reporter ${i}`
      // })); 

      this.adoptService.getAdoptionReports(this.page, this.size, this.city,this.breed,this.specie,this.petAgeStart,this.petAgeEnd).subscribe(
        {
          next: (response) => {
            this.adoptionPosts = response.content;
            console.log(this.adoptionPosts);
          },
          error: (error) => {
            console.log(error);
          },
        }
      );
  };

  petAgeStartAgeChange = (event: any) => {
    this.petAgeStart = JSON.parse(event.target.value);
    console.log(this.petAgeStart);
    this.getAdoptionReports(
      // this.page,
      // this.size,
      // this.city
    );
  };

  petAgeEndAgeChange = (event: any) => {
    this.petAgeEnd = JSON.parse(event.target.value);
    this.getAdoptionReports(
      // this.page,
      // this.size,
      // this.city
    );
  };
}
