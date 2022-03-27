import { LogoComponent } from './components/logo/logo.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BtnComponent } from './components/btn/btn.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
    declarations: [
        HeaderComponent,
        LogoComponent,
        NavComponent,
        BtnComponent,
        RegisterFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        MatFormFieldModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        HeaderComponent,
        BtnComponent,
        RegisterFormComponent
    ],
})
export class SharedModule {
}
