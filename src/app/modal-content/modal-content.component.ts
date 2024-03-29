import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  constructor(public modalService: NgbModal, public activeModal : NgbActiveModal) { }

  @Input() public sampleEvent;
  public isRecurring : boolean;

  ngOnInit() {
    
  }

  passBack() {
    this.activeModal.close(this.sampleEvent);
  }

  updateRecurring() {
    this.isRecurring = !this.isRecurring;
  }

}