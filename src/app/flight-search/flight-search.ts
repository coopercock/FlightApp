import { Component, inject, signal } from '@angular/core';
import { Flight, initFlight } from '../data/flight';
import { FormsModule } from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FlightService } from '../flight';
import { first } from 'rxjs';

@Component({
  selector: 'app-flight-search', // <app-flight-search />
  imports: [FormsModule, JsonPipe, DatePipe],
  templateUrl: './flight-search.html',
  styleUrl: './flight-search.css',
})
export class FlightSearch {

  private flightService = inject(FlightService);

  from = signal('Graz');
  to = signal('Hamburg');

  flights = signal<Flight[]>([]);
  selectedFlight = signal({initFlight});
initFlight: any;

  search(): void {
    this.flightService.search(this.from(), this.to()).pipe(first()).subscribe(
      (flights) => {
        this.flights.set(flights);
      }
    );    
  }

  selectFlight(flight: Flight): void {
    this.selectedFlight.set({initFlight: flight});
  }
}
