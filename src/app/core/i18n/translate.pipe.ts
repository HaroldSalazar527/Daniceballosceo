import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
  effect
} from '@angular/core';

import { LanguageService } from './language.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private readonly languageEffect;

  constructor(
    private readonly languageService: LanguageService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.languageEffect = effect(() => {
      this.languageService.currentLanguage();
      this.changeDetectorRef.markForCheck();
    });
  }

  transform(key: string): string {
    return this.languageService.translate(key);
  }

  ngOnDestroy(): void {
    this.languageEffect.destroy();
  }
}