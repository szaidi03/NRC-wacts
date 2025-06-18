import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appFileDragdrop]',
  standalone: true,
})
export class FileDragNDropDirective {
  @Input() dontChangeBackground = false;
  @Input() defaultColor = '#f3f3f3';
  @Output() fileChanged: EventEmitter<File[]> = new EventEmitter();

  @HostBinding('style.background') private background;
  @HostBinding('style.border') private borderStyle = '2px dashed';
  @HostBinding('style.border-color') private borderColor = '#696D7D';
  @HostBinding('style.border-radius') private borderRadius = '5px';

  constructor() {}

  ngOnInit() {
    if (this.dontChangeBackground) {
      this.background = this.defaultColor;
    } else {
      this.background = '#eee';
    }
  }

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (!this.dontChangeBackground) {
      this.background = 'lightgray';
    }
    this.borderColor = '#40bf86';
    this.borderStyle = '3px solid';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (!this.dontChangeBackground) {
      this.background = '#eee';
    }
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (!this.dontChangeBackground) {
      this.background = '#eee';
    }
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
    const files = evt.dataTransfer.files;
    const valid_files: Array<File> = files;
    this.fileChanged.emit(valid_files);
  }
}
