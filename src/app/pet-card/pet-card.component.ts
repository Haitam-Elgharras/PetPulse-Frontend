import {Component, Input} from '@angular/core';
import {Pet} from "../models/pet.model";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  @Input() pet!: Pet;

  s3BaseUrl: string = environment.s3BaseUrl;


  getImageUrl(image: string): string {
    return `${this.s3BaseUrl}${image}`;
  }
}
