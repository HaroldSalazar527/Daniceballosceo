import {
  Component,
  ElementRef,
  HostListener,
  inject
} from '@angular/core';

import {
  LanguageCode,
  LanguageService
} from '../../core/i18n/language.service';

import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private readonly elementRef = inject(ElementRef);
  private readonly languageService = inject(LanguageService);

  menuAbierto = false;
  menuIdiomasAbierto = false;
  headerReducido = false;

  readonly idiomaActual =
    this.languageService.currentLanguage;

  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
    this.menuIdiomasAbierto = false;

    document.body.style.overflow =
      this.menuAbierto ? 'hidden' : '';
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
    document.body.style.overflow = '';
  }

  alternarMenuIdiomas(): void {
    this.menuIdiomasAbierto = !this.menuIdiomasAbierto;
  }

  cambiarIdioma(language: LanguageCode): void {
    this.languageService.setLanguage(language);
    this.menuIdiomasAbierto = false;
  }

  nombreIdiomaActual(): string {
    const language = this.idiomaActual();

    if (language === 'en') {
      return 'EN';
    }

    if (language === 'fr') {
      return 'FR';
    }

    return 'ES';
  }

  @HostListener('window:scroll')
  detectarScroll(): void {
    this.headerReducido = window.scrollY > 30;
  }

  @HostListener('window:resize')
  detectarCambioPantalla(): void {
    if (window.innerWidth > 900 && this.menuAbierto) {
      this.cerrarMenu();
    }
  }

  @HostListener('document:keydown.escape')
  cerrarConEscape(): void {
    if (this.menuIdiomasAbierto) {
      this.menuIdiomasAbierto = false;
      return;
    }

    if (this.menuAbierto) {
      this.cerrarMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  cerrarIdiomasAlHacerClickFuera(event: MouseEvent): void {
    const clickedInside =
      this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.menuIdiomasAbierto = false;
    }
  }
}