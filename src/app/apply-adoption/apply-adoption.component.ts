import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdoptService } from '../services/adopt.service';

@Component({
  selector: 'app-apply-adoption',
  templateUrl: './apply-adoption.component.html',
  styleUrl: './apply-adoption.component.css'
})
export class ApplyAdoptionComponent {

  userId: number | undefined;
  reportId: number | undefined;
  reason: string | undefined;
  petExperience: string | undefined;
  numberOfPets: number | undefined;
  applyFrom: FormGroup | undefined;

  // Constructor
  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private adoptService: AdoptService, private router: Router) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.reportId = id ? +id : undefined;

    this.applyFrom = this.fb.group({
      userId: "",
      reportId: "",
      reason: "",
      petExperience: "",
      numberOfPets: "",
    });
  }

  onSubmit(): void
  {
    this.userId = this.authService.id;

    console.log("test");

    const id = this.route.snapshot.paramMap.get('id');
    this.reportId = id ? +id : undefined;

    
    this.applyFrom?.patchValue({
      userId: this.userId,
      reportId: this.reportId,
    });

    console.log(this.applyFrom?.value);
    

    this.adoptService.applyAdoption(this.applyFrom?.value).subscribe({
      next: (response: any) => {
        // navigate to my-reports
        console.log('Application submitted successfully:', response);
        this.router.navigate(['/my-applications']);

      },
      error: (error: any) => {
        console.error('Error submitting application:', error);
      }
    });
    
  }

}