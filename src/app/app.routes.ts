import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeLoginComponent } from './wecome-login.component';



export const appRoutes: Routes=[
    {path:"",component:WelcomeLoginComponent},
    {path:"user",component:AppComponent},
    // {path: '',component: AppComponent}
    
];