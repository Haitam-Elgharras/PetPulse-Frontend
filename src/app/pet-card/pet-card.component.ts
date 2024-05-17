import {Component, Input} from '@angular/core';
import {Pet} from "../models/pet.model";

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  @Input() pet!: Pet;

  // S3 bucket URL
  private s3BaseUrl = 'https://petpulse.s3.amazonaws.com/';

  getImageUrl(image: string): string {
    return `${this.s3BaseUrl}${image}`;
  }
}
