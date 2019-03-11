import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent implements OnInit {

  @Output() openModal = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter();
  currentX: number;
  currentY: number;

  constructor() { }

  ngOnInit() {
    // Pega o valor atual do scroll
    this.currentX = window.scrollX;
    this.currentY = window.scrollY;
  }

  closeModal() {
    this.openModal.emit(false);
  }
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:wheel', ['$event'])
  lockScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    window.scroll(this.currentX, this.currentY);
  }

  deleteEvent() {
    this.delete.emit();
  }

}
