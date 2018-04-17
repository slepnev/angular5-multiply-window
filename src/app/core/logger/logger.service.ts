import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  public log: EventEmitter<string> = new EventEmitter<string>();

}
