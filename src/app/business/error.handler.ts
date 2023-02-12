import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppErrorHandler implements ErrorHandler {
  handleError(error: Error | HttpErrorResponse) {
    console.log(error);
  }
}
