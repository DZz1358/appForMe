import { LogoComponent } from './components/logo/logo.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BtnComponent } from './components/btn/btn.component';



@NgModule({
    declarations: [
        HeaderComponent,
        LogoComponent,
        NavComponent,
        BtnComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        HeaderComponent,
        BtnComponent
    ],
})
export class SharedModule {
}
