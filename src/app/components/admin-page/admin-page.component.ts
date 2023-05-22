import { Component, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PortfolioService } from 'src/app/service/portfolio.service';

const url = 'http://localhost:8080';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})


export class AdminPageComponent {

  isMenuOpenEducation = false; isMenuOpenProject = false;
  buffer:any; bufferHeader:any; bufferEducation:any; bufferProject:any; bufferContact:any;

  educationData = {
    name: '',
    title: '',
    state: '',
    average: '',
    link: '',
  };

  projectData =
  {
    title: '',
    description: '',
    img: '',
    link: '',
  }
  
  constructor(private portfoliodata: PortfolioService, private http:HttpClient ) {}
  
  ngOnInit(): void
  {
    //Metodos de carga de informacion

    this.portfoliodata.obtainDataHeader().subscribe( data =>
      {
        this.bufferHeader = data[0];
      });

    this.portfoliodata.obtainDataEducation().subscribe( data =>
      {
        this.bufferEducation = data;
      });

    this.portfoliodata.obtainDataProject().subscribe( data =>
      {
        this.bufferProject = data;
      });

    this.portfoliodata.obtainDataContact().subscribe( data =>
      {
        this.bufferContact = data[0];
      });
  }

  toggleMenuEducation(): void
  {
    this.isMenuOpenEducation = !this.isMenuOpenEducation;
  }

  toggleMenuProject(): void
  {
    this.isMenuOpenProject = !this.isMenuOpenProject;
  }


  // Metodos de creacion

  createEducationData ( educationData:any ):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url + "/new/education", educationData, httpOptions);
  }

  createEducation ()
  {
    this.createEducationData(this.educationData).subscribe(
      response =>
      {
        console.log('Successfully created', response);
        location.reload();
      },
      error =>
      {
        console.log('Error:', error);
      }
    )
  }

  createProjectData ( projectData:any ):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url + "/new/project", projectData, httpOptions);
  }

  createProject ()
  {
    this.createProjectData(this.projectData).subscribe(
      response =>
      {
        console.log('Successfully created', response);
        location.reload();
      },
      error =>
      {
        console.log('Error:', error);
      }
    )
  }

  // Metodos de update

  

}
