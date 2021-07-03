import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { JobofferService } from "app/service/joboffer.service";
import { followsService } from 'app/service/follows.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;

  data: Date = new Date();
  
  amount: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  orderId: string;
  email: string;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  dropdownList = [
    { id: 1, itemName: "CDI" },
    { id: 2, itemName: "CDD" },
    { id: 3, itemName: "Traineeship" },
    { id: 4, itemName: "Freelance" },
    { id: 5, itemName: "Alernation" },
    
    
  ];
  selectedItems = [];
  dropdownList1 = [
    { id: 1, itemName: "Less than 1 year" },
    { id: 2, itemName: "Between 1 and 2 years" },
    { id: 3, itemName: "Between 2 and 5 years" },
    { id: 4, itemName: "More than 5 years" },
  
  ];
  selectedItems1 = [];
  dropdownList2= [
    { id: 1, itemName: "Less than 600DT " },
    { id: 2, itemName: "Between 600DT and 1200DT" },
    { id: 3, itemName: "Between 1200DT and 1500DT" },
    { id: 4, itemName: "More than 1500DT" },
  
  ];

  selectedItems2 = [];
  companyName:string ; 
  offerTitle:string ; 
  offerDescription:string ; 
  typeOfContract:string ; 
  salary:string ; 
  yearsOfExperience:string ; 

favorites : any=[]

  
 token : string=localStorage.getItem("email1")
 datas : any=["NO POST"]
  constructor(public router: Router,private jobservice :JobofferService,private followservice :followsService) { }
  click(event){
    console.log(event.itemName)
    this.typeOfContract=event.itemName
  }

  click1(event){
    console.log(event.itemName)
    this.salary=event.itemName
  }

  click2(event){
    console.log(event.itemName)
    this.yearsOfExperience=event.itemName
  }
  onSubmit(data){
    console.log(data)
    this.jobservice.decode(this.token).subscribe((id)=>{
      console.log(id.email1)
      const obj={
      //  id : id.email1,
       company: this.companyName,
       offerTitle: this.offerTitle,
       offerDescription: this.offerDescription,
       typeOfContract: this.typeOfContract,
       salary: this.salary,
       yearsOfExperience: this.yearsOfExperience,
      }
      this.jobservice.updatepostjob(data._id,obj).subscribe((create)=>{
        this.router.navigate(['views/home'])
        for(var i=0;i<this.datas.length;i++){
          if(this.datas[i]._id===create._id){
            this.datas[i]=create
          }
        }
        console.log(create)
        })
    
  })
  }
    delete(data){
    
  this.jobservice.deletepostjob(data._id).subscribe((del)=>

  console.log(del)

  )
  for(let i=0;i<this.datas.length;i++){
  if(this.datas[i]._id===data._id){
  this.datas.splice(i,1)
  }
  }

    
  }
  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.jobservice.decode(this.token).subscribe((id)=>{
      console.log(id)
     this.jobservice.getpostjobs(id.email1).subscribe((data)=>{
     
     this.datas=data
     console.log(data)
    })
    this.followservice.getfavorite(id.email1).subscribe((get)=>{this.favorites=get
    console.log(this.favorites)
    })

    })

  }


  onSubmitPayment() {
    const obj = {
      receiverWallet: "60d5d753e1add7620c68faf9",
      amount: 100,
      selectedPaymentMethod: "gateway",
      token: "TND",
      firstName: "Heni",
      lastName: "Mezrani",
      phoneNumber: "55555555",
      email: "heni@mezrani.com",
      orderId: "1é11",
      successUrl: "http://localhost:4200/#/views/successPayment?user=heni&anyinfo=myinfo",
      failUrl: "http://localhost:4200/#/views/failPayment?user=heni&anyinfo=myinfo",
    };
    this.jobservice.postPayment(obj).subscribe((payment) => {
      // this.router.navigate(payment);
      window.location.href = payment.payUrl;
    });

    this.amount = null;
    this.firstName = "";
    this.lastName = "";
    this.phoneNumber = "";
    this.email = "";
    this.orderId = "";
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
