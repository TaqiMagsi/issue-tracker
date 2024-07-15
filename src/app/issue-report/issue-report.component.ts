import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})

export class IssueReportComponent implements OnInit {

  constructor() { }
  
  issueForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(''),
    type: new FormControl('')
   });

  ngOnInit(): void {
  }

}
interface IssueForm {
  title: FormControl;
  description: FormControl;
  priority: FormControl;
  type: FormControl;
 }