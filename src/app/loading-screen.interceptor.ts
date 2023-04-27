import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingScreenService } from './loading-screen.service';

@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {

  constructor(public _LoadingScreenService: LoadingScreenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._LoadingScreenService.isLoading.next(true);

    return next.handle(request).pipe(
      finalize(
        () => {
          this._LoadingScreenService.isLoading.next(false);
        }
      )
    );
  }
}
