import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  standalone: false,
  templateUrl: './sort-panel.html',
  styleUrl: './sort-panel.scss',
})
export class SortPanel {
  @Input() isOpen: boolean = false;
  @Output() closed = new EventEmitter<void>();
  @Output() sortApplied = new EventEmitter<'asc' | 'desc' | null>();

  selectedSort: 'asc' | 'desc' | null = null;

  resetAll(): void {
    this.selectedSort = null;
  }

  apply(): void {
    this.sortApplied.emit(this.selectedSort);
    this.closed.emit();
  }

  close(): void {
    this.closed.emit();
  }
}
