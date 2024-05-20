import { Component, Input } from '@angular/core';
import { Report } from '../../models/report.model';
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  styles: [
    `
      .card__img,
      .card__img--hover {
        background-image: url('https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
      }
      .card__img,
      .card__img--hover {
      }
    `,
  ],
})
export class CardComponent {
  @Input() Report!: Report;

  icons = { faHeart, faComments };
  likeColor = 'red';
}
