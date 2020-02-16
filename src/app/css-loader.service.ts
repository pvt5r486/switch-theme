import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class CSSLoaderService {

    constructor(
        @Inject(DOCUMENT) private document: Document,
    ) { }

    public switchCSS(cssPath: string) {
        const themeLink = this.document.querySelector('#themeLink') as HTMLLinkElement;
        themeLink.href = cssPath;
    }

    public loadDefaultCSS(cssPath: string) {
        if (this.loadLocalStorage()) {
            switch (this.loadLocalStorage()) {
                case 'dark-theme':
                    this.switchCSS('dark-theme.css');
                    break;

                case 'default-theme':
                    this.switchCSS('default-theme.css');
                    break;
            }
        } else {
            this.switchCSS(cssPath);
        }
    }

    loadLocalStorage(): string {
        return localStorage.getItem('theme');
    }
}
