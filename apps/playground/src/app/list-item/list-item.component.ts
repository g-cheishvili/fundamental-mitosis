import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html"
})
export class ListItemComponent implements OnChanges {
  @Input() item: { title: string; complete: boolean };
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter<{ title: string; complete: boolean }>();
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    complete: new FormControl(false)
  });
  editMode = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["item"]) {
      this.form.patchValue(this.item);
    }
  }

  save() {
    if (this.form.valid) {
      this.editMode = false;
      this.update.emit(this.form.value);
    }
  }

  toggleComplete() {
    this.update.emit({
      ...this.item,
      complete: !this.item.complete
    });
  }

  cancel() {
    this.editMode = false;
    this.form.patchValue(this.item);
  }
}
