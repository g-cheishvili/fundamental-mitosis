import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ThemingService} from '@fundamental-ngx/core/theming';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SegmentedButtonProps} from "@fundamental/angular";
import {BehaviorSubject, combineLatest, map} from "rxjs";

@Component({
  selector: 'fundamental-mitosis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  items$ = new BehaviorSubject(new Array(10).fill(0).map((_, i) => ({title: `Item ${i + 1}`, complete: false})));
  selectedViewMode$ = new BehaviorSubject<'incomplete' | 'complete' | 'all'>('all');
  filteredItems$ = combineLatest([this.items$, this.selectedViewMode$]).pipe(
    map(([items, viewMode]) => {
      if (viewMode === 'incomplete') {
        return items.filter(item => !item.complete);
      }
      if (viewMode === 'complete') {
        return items.filter(item => item.complete);
      }
      return items;
    })
  );
  itemForm: FormGroup;
  filterButtons: SegmentedButtonProps['buttons'] = [
    {
      content: 'All',
      value: 'all'
    },
    {
      content: ' Incomplete',
      value: 'incomplete',
      icon: 'sys-enter'
    },
    {
      content: ' Complete',
      value: 'complete',
      icon: 'sys-enter-2'
    }
  ]

  /** @hidden */
  constructor(private readonly _themingService: ThemingService) {
    this.initForm();
  }

  /** @hidden */
  ngOnInit(): void {
    this._themingService.init();
    this._themingService.setTheme('sap_horizon')
  }

  addItem() {
    if (this.itemForm.valid) {
      this.items$.next([this.itemForm.value, ...this.items$.value]);
      this.initForm();
    }
  }

  deleteItem(index: number) {
    const items = [...this.items$.value];
    items.splice(index, 1);
    this.items$.next(items);
  }

  initForm(data: any = {}) {
    this.itemForm = new FormGroup({
      title: new FormControl(data.title || '', Validators.required),
      complete: new FormControl(data.complete || false)
    });
  }

  updateItem(index: number, $event: { title: string; complete: boolean }) {
    const items = [...this.items$.value];
    items[index] = $event;
    this.items$.next(items);
  }
}
