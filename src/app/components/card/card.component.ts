import { Component, Input } from '@angular/core';
import { Report } from '../../models/report.model';
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';
import { PetManagementService } from '../../services/pet-management.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  styles: [
    `
      .card__img,
      .card__img--hover {
        background-image: petService.getImageUrl(Report.pet.images[0]);
      }
      .card__img,
      .card__img--hover {
      }
    `,
  ],
})
export class CardComponent {
  @Input() Report!: Report;

  constructor(public petService: PetManagementService) {}

  icons = { faHeart, faComments };
  likeColor = 'red';
}
