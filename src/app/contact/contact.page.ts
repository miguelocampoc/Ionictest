import { Component, OnInit } from '@angular/core';
import { Tab1Service} from '../services/tab1.service';
import {HttpClient} from '@angular/common/http';
import {expense_reports} from '../interfaces/expense_reports';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
API_ENDPOINT="http://127.0.0.1:8000/api/test2";
 expense_reports: expense_reports[];
  constructor(private tabService:Tab1Service , private httpClient:HttpClient) { 
    httpClient.get(this.API_ENDPOINT).subscribe((data:expense_reports[])=>{ this.expense_reports=data;});
  }

  ngOnInit() {
  }

}
