import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PetManagementService} from "../services/pet-management.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.css'
})
export class PetFormComponent implements OnInit{

  ownerId : number = 1;
  petFormGroup! : FormGroup;
  selectedFiles: File[] = [];

  constructor(private petService : PetManagementService, private fb: FormBuilder, private router: Router) {
    this.petFormGroup = this.fb.group({
      ownerId: [this.ownerId],
      name: ['', Validators.required],
      breed: ['', Validators.required],
      specie: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      image: [null, Validators.required]
    });
  }

  onFileChange(event: any): void {
    if (event.target.files) {
      this.selectedFiles = Array.from(event.target.files);
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.petFormGroup.valid && this.selectedFiles) {
      const formData = new FormData();
      formData.append('name', this.petFormGroup.get('name')!.value);
      formData.append('breed', this.petFormGroup.get('breed')!.value);
      formData.append('specie', 'DOG');
      formData.append('age', this.petFormGroup.get('age')!.value);
      formData.append('ownerId', this.petFormGroup.get('ownerId')!.value);
      this.selectedFiles.forEach(file => {
        formData.append('image', file);
      });

      this.petService.createPet(formData).subscribe(response => {
        console.log('Pet created successfully:', response);
        this.router.navigate(['/pets']);
      }, error => {
        console.error('Error creating pet:', error);
        // Handle error (e.g., show an error message)
      });
    }
  }

}
