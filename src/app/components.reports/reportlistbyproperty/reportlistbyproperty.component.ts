import { AuthService } from 'src/app/services/auth.service';
import { Subscription, Subject } from 'rxjs';
import { Report } from './../../models/report.model';
import { ReportService } from './../../services/report.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-reportlistbyproperty',
  templateUrl: './reportlistbyproperty.component.html',
  styleUrls: ['./reportlistbyproperty.component.css']
})
export class ReportlistbypropertyComponent implements OnInit, OnDestroy {
  

  propertyId!: any
  reports!: Report[];
  reportsSub!: Subscription;
  userIsAuthenticated = false
  private authStatusSub!: Subscription;
  isLoading: boolean = true
  userId!: string; 
  property: any;
  filteredReports!: Report[]

  private reportsUpdated = new Subject<{
    reports: Report[];
  }>();

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private reportService: ReportService,
    private propertyService: PropertyService
  ) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.paramMap.get('propertyId');

    this.property = this.propertyService.getProperty(this.propertyId).subscribe((property: any) =>{
      this.property = property
    })

    console.log(this.property)

    this.reportService.reportsWithoutImages().subscribe((reportDisplayData: any)=>{
      this.reports = reportDisplayData.reports;

      this.filteredReports = this.reports.filter((report: Report) => report.propertyId === this.propertyId);
      console.log('filtering completed')
    
      this.reportsUpdated.next({
        reports: [...this.reports]
      })
      this.isLoading = false;
    })
    
    

  this.reportsSub = this.reportService
      .getReportUpdateListener()
      .subscribe(
        (reportData: { reports: Report[] }) => {
         this.reports = reportData.reports
        }
    );


    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    })
    

}

ngOnDestroy(){
  this.reportsSub.unsubscribe()
}
}