import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Client } from '../models/client-model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  errorMessage!: string;

  constructor(private http: HttpClient) {}

  getClients() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .get<Client[]>(`${environment.apiUrl}/clients`, { headers })
      .pipe(
        catchError((error) => {
          this.errorMessage =
            'Ocorreu um erro ao carregar lista. Tente novamente mais tarde.';

          console.error('Ocorreu um erro:', error);
          console.error(this.errorMessage);

          return throwError(this.errorMessage);
        })
      );
  }
}
