import { Component } from '@angular/core';
import { AdoptService } from '../services/adopt.service';
import { AuthService } from '../services/auth.service';



interface Application {
  id: number | undefined;
  numberOfPets: number | undefined;
  petExperience: string | undefined;
  reason: string | undefined;
  reportId: number | undefined;
}

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrl: './my-applications.component.css'
})
export class MyApplicationsComponent {
showSuccessMessage: any;

applications: Application[] = [];


  // send a request to get my applications

  constructor(private adoptService: AdoptService, private authService: AuthService) {}


  ngOnInit() {
    this.getMyApplications();
  }

  getMyApplications() {
    this.adoptService.getAdoptionApplications(this.authService.id).subscribe({
      next: (response: any) => {
        console.log('My applications:', response);
      
        this.applications = response;
      },
      error: (error: any) => {
        console.error('Error getting my applications:', error);
      }
    });
  }


  deleteApplication(arg0: number|undefined) {

    // delete application
    this.adoptService.deleteAdoptionApplication(arg0).subscribe({
      next: (response: any) => {
        console.log('Application deleted successfully:', response);
        this.showSuccessMessage = "Application deleted successfully!"
        this.getMyApplications();
      },
      error: (error: any) => {
        console.error('Error deleting application:', error);
      }
    });
    
  }
    manageApplication(arg0: any) {
    // udpate application
    this.adoptService.updateAdoptionApplication(arg0).subscribe({
      next: (response: any) => {
        console.log('Application updated successfully:', response);
        this.showSuccessMessage = "Application updated successfully!"
        this.getMyApplications();
      },
      error: (error: any) => {
        console.error('Error updating application:', error);
      }
    });
    }
    

}
