import { Injectable } from "@angular/core"
import { Router, CanActivate } from '@angular/router';

@Injectable()

export class UserService {

    login(loginId: string, password: string): boolean {
        return true;
    }
}