import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule, RoutesRecognized , CanActivate } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ElementsComponent } from './elements/elements.component';
import { SectionsComponent } from './sections/sections.component';
// import { AboutusComponent } from './examples/aboutus/aboutus.component';
// import { BlogpostComponent } from './examples/blogpost/blogpost.component';
// import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
// import { ContactusComponent } from './examples/contactus/contactus.component';
// import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
 import { LandingComponent } from './views/landing/landing.component';
 import { LoginComponent } from './views/login/login.component';
 import { ProfilComponent } from './views/profil/profil.component';
 import { CompanyComponent } from './views/company/company.component';
 import { SearchcComponent } from './views/searchc/searchc.component';
 import { SearchuComponent } from './views/searchu/searchu.component';
import { SignupComponent } from './views/signup/signup-u.component';
import { CreateCvComponent } from './views/create-cv/create-cv.component';
import { PostJobComponent } from './views/post-job/post-job.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { NucleoiconsComponent } from './elements/nucleoicons/nucleoicons.component';
// import { PricingComponent } from './examples/pricing/pricing.component';
import { 
    AuthGuardService as AuthGuard 
  } from './auth/auth-guard.service';
//   import { 
//     RoleGuardService as AuthroleGuard 
//   } from './auth/role-guard.service';
let routes: Routes =[
    { path: '', redirectTo: 'views/profil', pathMatch: 'full' },
    { path: 'presentation',         component: PresentationComponent },
    { path: 'elements',           component: ElementsComponent },
    { path: 'sections',             component: SectionsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    // { path: 'examples/aboutus',     component: AboutusComponent },
    // { path: 'examples/blogpost',    component: BlogpostComponent },
    // { path: 'examples/blogposts',   component: BlogpostsComponent },
    // { path: 'examples/contactus',   component: ContactusComponent },
    // { path: 'examples/ecommerce',   component: EcommerceComponent },
    // { path: 'examples/pricing',     component: PricingComponent },
    // { path: 'examples/productpage', component: ProductpageComponent },
    { path: 'views/profil',     component: ProfilComponent },
    { path: 'views/createcv',    component: CreateCvComponent },
    { path: 'views/postJob',    component: PostJobComponent },

    { path: 'views/calendar',    component: CalendarComponent },
     { path: 'views/landing',     component: LandingComponent },
     { path: 'views/login',       component: LoginComponent },
     { path: 'views/company',     component: CompanyComponent },
    { path: 'views/searchc', component: SearchcComponent },
     { path: 'views/landing',component: LandingComponent  },
     { path: 'views/login',component: LoginComponent },
     { path: 'views/company',component: CompanyComponent },
    { path: 'views/searchu', component: SearchuComponent ,canActivate: [AuthGuard] },
    { path: 'views/profil', component: ProfilComponent, canActivate: [AuthGuard] },
    // { path: 'examples/profile',     component: ProfileComponent },
     { path: 'views/signup',    component: SignupComponent },
     { path: 'views/searchu', component: SearchuComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        
        RouterModule.forRoot(routes,{
          useHash: true
        })
    ],
    exports: [
    ]
})
export class AppRoutingModule { }
