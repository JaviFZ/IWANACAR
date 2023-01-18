import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DialogCloseDirective, DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-modal-confirmacion',
  standalone: true,
  imports: [CommonModule, DialogCloseDirective],
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {
  ref: DialogRef<any> = inject(DialogRef);

  ngOnInit() {
    console.log('Referncia Modal', this.ref);
  }
}
