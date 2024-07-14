import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/interface/issue';
import { IssuesService } from 'src/services/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  
  issues:Issue[]=[];

  constructor(private issuelist:IssuesService) { }
  
  private getIssues(){
    this.issues=this.issuelist.getPendingIssues();
  }


  ngOnInit(): void {
    this.getIssues();
  }

}
