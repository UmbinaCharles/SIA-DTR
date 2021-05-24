import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  add: boolean = false; // ----- addmodal -----
  edit: boolean = false; // ------- editmodal ------
  view: boolean = false; // ------- viewmodal ------
  card: boolean = false; // ------ panel -----
  attendance: boolean = false; // ------ attendance -----
  dashboard: boolean = false; // ------ dashboard -------
  positions: boolean = false; // ----- positions ------
  employees: boolean = false; // ----- employees ------
  schedule: boolean = false; // ------- schedule --------

  showFiller = false;

  constructor(public dialog: MatDialog) { }

  openModal(){
    this.add = true;
  }

  closeModal(){
    this.add = false;
  }

  openAtt(){
    this.attendance = true;
    this.dashboard = false;
    this.positions = false;
    this.employees = false;
    this.schedule = false;
  }

  openDash(){
    this.dashboard = true;
    this.attendance = false;
    this.positions = false;
    this.employees = false;
    this.schedule = false;
  }

  openPos(){
    this.positions = true;
    this.dashboard = false;
    this.attendance = false;
    this.employees = false;
    this.schedule = false;
  }

  openEmployees(){
    this.employees = true;
    this.positions = false;
    this.dashboard = false;
    this.attendance = false;
    this.schedule = false;
  }

  openSched(){
    this.schedule = true;
    this.employees = false;
    this.positions = false;
    this.dashboard = false;
    this.attendance = false;
  }

  openEdit(){
    this.edit = true;
  }

  closeEdit(){
    this.edit = false;
  }

  openView(){
    this.view = true;
  }

  closeView(){
    this.view = false;
  }

  deleteBtn(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  
  ngOnInit(): void {
  }
}
