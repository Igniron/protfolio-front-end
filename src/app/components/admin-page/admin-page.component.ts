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
  bufferEducation:any; bufferProject:any;

  headerData = 
  {
    name: '',
    profession: '',
    description: '',
    img: '',
  }

  educationData = 
  {
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

  contactData =
  {
    home: '',
    location: '',
    phone: '',
    email: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    github: '',
  }
  
  constructor(private portfoliodata: PortfolioService, private http:HttpClient ) {}
  
  ngOnInit(): void
  {
    //Metodos de carga de informacion

    this.portfoliodata.obtainDataHeader().subscribe( data =>
      {
        this.headerData = data[0];
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
        this.contactData = data[0];
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

  personData( headerData:any ):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url + `/update/person?id=1`, headerData, httpOptions);
  }

  updatePerson ()
  {
    this.personData(this.headerData).subscribe(
      response =>
      {
        console.log('Successfully updated', response);
        location.reload();
      },
      error =>
      {
        console.log('Error:', error);
      }
    )
  }

  footerData( contactData:any ):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url + `/update/contact?id=1`, contactData, httpOptions);
  }

  updateFooter ()
  {
    this.footerData(this.contactData).subscribe(
      response =>
      {
        console.log('Successfully updated', response);
        location.reload();
      },
      error =>
      {
        console.log('Error:', error);
      }
    )
  }

  educationDataUpdate( education:any, id:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url + `/update/education?id=${id}`, education, httpOptions);
  }

  updateEducation ( education:any, id: any )
  {
    this.educationDataUpdate(education, id).subscribe(
      response =>
      {
        console.log('Successfully updated', response);
        location.reload();
      },
      error =>
      {
        console.log('Error:', error);
      }
    )
  }

  projectDataUpdate( project:any, id:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url + `/update/project?id=${id}`, project, httpOptions);
  }

  updateProject( project:any, id:any )
  {
    this.projectDataUpdate( project, id ).subscribe(
      response =>
      {
        console.log('Successfully updated', response);
        location.reload();
      },
      error =>
      {
        console.log('Error:', error);
      }
    )
  }


  // Delete methods

  educationDataDelete( id:any )
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.delete<any>(url + `/delete/education?id=${id}`, httpOptions);
  }

  deleteEducation ( id: any )
  {
    this.educationDataDelete( id ).subscribe(
      response =>
      {
        console.log('Successfully deleted', response);
        location.reload();
      },
      error =>
      {
        console.log('Error:', error);
      }
    )
  }

  projectDataDelete( id:any )
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.delete<any>(url + `/delete/project?id=${id}`, httpOptions);
  }

  deleteProject ( id: any )
  {
    this.projectDataDelete( id ).subscribe(
      response =>
      {
        console.log('Successfully deleted', response);
        location.reload();
      },
      error =>
      {
        console.log('Error:', error);
      }
    )
  }

}
