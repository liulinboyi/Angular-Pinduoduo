import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { ProductVariant } from '../../domain';
import { DialogService } from 'src/app/dialog/services';

@Component({
  selector: 'app-product-variant-dialog',
  templateUrl: './product-variant-dialog.component.html',
  styleUrls: ['./product-variant-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductVariantDialogComponent implements OnInit {
  @Input() variants: ProductVariant[] = [];
  @Output() formSubmitted = new EventEmitter();
  @Output() selected = new EventEmitter<number>();
  @Input() selectedVariantIndex = -1;
  count = 1;
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  get price() {
    if (this.variants.length === 0 || this.selectedVariantIndex < 0) {
      return 0;
    }
    return this.variants[this.selectedVariantIndex].price;
  }

  get productImage() {
    return this.selectedVariantIndex < 0
      ? this.variants[0].product.imageUrl
      : this.variants[this.selectedVariantIndex].product.imageUrl;
  }

  get selectedVariantName() {
    return this.selectedVariantIndex < 0
      ? ''
      : this.variants[this.selectedVariantIndex].name;
  }

  handleSelection(idx: number) {
    this.selectedVariantIndex = idx;
    this.selected.emit(this.selectedVariantIndex);
  }

  handleConfirm() {
    if (this.selectedVariantIndex < 0 || this.count === 0) {
      return;
    }
    this.formSubmitted.emit({
      variant: this.variants[this.selectedVariantIndex],
      count: this.count
    });
    this.dialogService.close();
  }

  handleAmountChange(count: number) {
    this.count = count;
  }
}
