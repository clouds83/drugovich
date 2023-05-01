import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ClientService } from './client.service';
import { environment } from 'src/environments/environment';

describe('ClientService', () => {
  let service: ClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService],
    });

    service = TestBed.inject(ClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of clients', () => {
    service.getClients().subscribe((clients) => {
      expect(clients).toBeTruthy();
      expect(Array.isArray(clients)).toBeTrue();
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/clients`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
