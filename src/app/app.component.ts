import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (data) => this.message = data.message,
      error: (error) => console.error('There was an error!', error),
    })
  }

}
