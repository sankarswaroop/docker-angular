import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class User {
	fName: string;
	lName: string;
	age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'docker-angular';
  constructor(private http: HttpClient) {}

	rows: User[] = [];

	ngOnInit(){
		this.http.get('http://localhost:8090/list').subscribe((response: User[]) => {
			this.rows = response;
		});
	}
}
