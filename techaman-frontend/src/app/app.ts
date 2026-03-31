import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule],
templateUrl: './app.html'
})
export class AppComponent {
apiResponse = '';

constructor(private http: HttpClient) {}

fetchData() {
this.http.get('http://localhost:8081/api/private', { responseType: 'text' }).subscribe({
next: (data) => this.apiResponse = data,
error: (err) => this.apiResponse = 'Error: Unauthorized or CORS issue'
});
}
}