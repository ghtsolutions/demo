import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NotifierModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
        ]
      },
    ], {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
    NotifierModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 12,
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10,
        },
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4,
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease',
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50,
        },
        shift: {
          speed: 300,
          easing: 'ease',
        },
        overlap: 150,
      },
    },),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
