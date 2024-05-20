import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.css']
})
export class SimilarityComponent {
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  isLoading = false;
  uploadProgress = 0;

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload(): void {
    if (!this.selectedFile) {
      return;
    }

    this.isLoading = true;
    this.uploadProgress = 0;
    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post('YOUR_API_ENDPOINT_HERE', formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total) {
            this.uploadProgress = Math.round((100 * event.loaded) / event.total);
            console.log(`Upload Progress: ${this.uploadProgress}%`);
          }
        } else if (event.type === HttpEventType.Response) {
          console.log('Upload successful', event.body);
          this.isLoading = false;
          this.uploadProgress = 0;
        }
      },
      error => {
        console.error('Upload failed', error);
        this.isLoading = false;
        this.uploadProgress = 0;
      }
    );
  }
}
