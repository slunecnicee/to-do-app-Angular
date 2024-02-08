import {
  CheckIcon
} from "./chunk-S2ATEGZN.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-SIDFWQCH.js";
import "./chunk-I37SRA4W.js";
import {
  ObjectUtils,
  PrimeTemplate,
  SharedModule
} from "./chunk-MPR4DGDE.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-KBADN6ZP.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-NYJW3O46.js";

// node_modules/primeng/fesm2022/primeng-checkbox.mjs
var _c0 = ["input"];
function Checkbox_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 10);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r5.checkboxIcon);
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Checkbox_ng_container_5_ng_container_1_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Checkbox_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Checkbox_ng_container_5_ng_container_1_span_1_Template, 1, 2, "span", 8)(2, Checkbox_ng_container_5_ng_container_1_CheckIcon_2_Template, 1, 2, "CheckIcon", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.checkboxIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.checkboxIcon);
  }
}
function Checkbox_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Checkbox_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Checkbox_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Checkbox_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, Checkbox_ng_container_5_span_2_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "icon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.checkboxIconTemplate);
  }
}
function Checkbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Checkbox_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 5)(2, Checkbox_ng_container_5_span_2_Template, 2, 2, "span", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.checkboxIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checkboxIconTemplate);
  }
}
var _c1 = (a1, a2, a3) => ({
  "p-checkbox-label": true,
  "p-checkbox-label-active": a1,
  "p-disabled": a2,
  "p-checkbox-label-focus": a3
});
function Checkbox_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 14);
    ɵɵlistener("click", function Checkbox_label_6_Template_label_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      const _r0 = ɵɵreference(3);
      return ɵɵresetView(ctx_r9.onClick($event, _r0, true));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.labelStyleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction3(6, _c1, ctx_r2.checked(), ctx_r2.disabled, ctx_r2.focused));
    ɵɵattribute("for", ctx_r2.inputId)("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.label, "");
  }
}
var _c2 = (a1, a2, a3) => ({
  "p-checkbox p-component": true,
  "p-checkbox-checked": a1,
  "p-checkbox-disabled": a2,
  "p-checkbox-focused": a3
});
var _c3 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Checkbox),
  multi: true
};
var Checkbox = class _Checkbox {
  cd;
  /**
   * Value of the checkbox.
   * @group Props
   */
  value;
  /**
   * Name of the checkbox group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Allows to select a boolean value instead of multiple values.
   * @group Props
   */
  binary;
  /**
   * Label of the checkbox.
   * @group Props
   */
  label;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the label.
   * @group Props
   */
  labelStyleClass;
  /**
   * Form control value.
   * @group Props
   */
  formControl;
  /**
   * Icon class of the checkbox icon.
   * @group Props
   */
  checkboxIcon;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that checkbox must be checked before submitting the form.
   * @group Props
   */
  required;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Callback to invoke on value change.
   * @param {CheckboxChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  templates;
  checkboxIconTemplate;
  model;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focused = false;
  constructor(cd) {
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this.checkboxIconTemplate = item.template;
          break;
      }
    });
  }
  onClick(event, checkbox, focus) {
    event.preventDefault();
    if (this.disabled || this.readonly) {
      return;
    }
    this.updateModel(event);
    if (focus) {
      checkbox.focus();
    }
  }
  updateModel(event) {
    let newModelValue;
    if (!this.binary) {
      if (this.checked())
        newModelValue = this.model.filter((val) => !ObjectUtils.equals(val, this.value));
      else
        newModelValue = this.model ? [...this.model, this.value] : [this.value];
      this.onModelChange(newModelValue);
      this.model = newModelValue;
      if (this.formControl) {
        this.formControl.setValue(newModelValue);
      }
    } else {
      newModelValue = this.checked() ? this.falseValue : this.trueValue;
      this.model = newModelValue;
      this.onModelChange(newModelValue);
    }
    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event
    });
  }
  handleChange(event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    this.onModelTouched();
  }
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  writeValue(model) {
    this.model = model;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  checked() {
    return this.binary ? this.model === this.trueValue : ObjectUtils.contains(this.value, this.model);
  }
  static ɵfac = function Checkbox_Factory(t) {
    return new (t || _Checkbox)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Checkbox,
    selectors: [["p-checkbox"]],
    contentQueries: function Checkbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Checkbox_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      name: "name",
      disabled: "disabled",
      binary: "binary",
      label: "label",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      tabindex: "tabindex",
      inputId: "inputId",
      style: "style",
      styleClass: "styleClass",
      labelStyleClass: "labelStyleClass",
      formControl: "formControl",
      checkboxIcon: "checkboxIcon",
      readonly: "readonly",
      required: "required",
      trueValue: "trueValue",
      falseValue: "falseValue"
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR])],
    decls: 7,
    vars: 35,
    consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "value", "checked", "disabled", "readonly", "change", "focus", "blur"], ["input", ""], [1, "p-checkbox-box", 3, "ngClass", "click"], [4, "ngIf"], [3, "class", "ngClass", "click", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], ["class", "p-checkbox-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"], [3, "ngClass", "click"]],
    template: function Checkbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r11 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "input", 2, 3);
        ɵɵlistener("change", function Checkbox_Template_input_change_2_listener($event) {
          return ctx.handleChange($event);
        })("focus", function Checkbox_Template_input_focus_2_listener($event) {
          return ctx.onInputFocus($event);
        })("blur", function Checkbox_Template_input_blur_2_listener($event) {
          return ctx.onInputBlur($event);
        });
        ɵɵelementEnd()();
        ɵɵelementStart(4, "div", 4);
        ɵɵlistener("click", function Checkbox_Template_div_click_4_listener($event) {
          ɵɵrestoreView(_r11);
          const _r0 = ɵɵreference(3);
          return ɵɵresetView(ctx.onClick($event, _r0, true));
        });
        ɵɵtemplate(5, Checkbox_ng_container_5_Template, 3, 2, "ng-container", 5);
        ɵɵelementEnd()();
        ɵɵtemplate(6, Checkbox_label_6_Template, 2, 10, "label", 6);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction3(27, _c2, ctx.checked(), ctx.disabled, ctx.focused));
        ɵɵattribute("data-pc-name", "checkbox")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "hiddenInputWrapper")("data-p-hidden-accessible", true);
        ɵɵadvance();
        ɵɵproperty("value", ctx.value)("checked", ctx.checked())("disabled", ctx.disabled)("readonly", ctx.readonly);
        ɵɵattribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("required", ctx.required)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-checked", ctx.checked())("data-pc-section", "hiddenInput");
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction3(31, _c3, ctx.checked(), ctx.disabled, ctx.focused));
        ɵɵattribute("data-p-highlight", ctx.checked())("data-p-disabled", ctx.disabled)("data-p-focused", ctx.focused)("data-pc-section", "input");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.checked());
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.label);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, CheckIcon],
    styles: ["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkbox, [{
    type: Component,
    args: [{
      selector: "p-checkbox",
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{ 'p-checkbox p-component': true, 'p-checkbox-checked': checked(), 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused }"
            [class]="styleClass"
            [attr.data-pc-name]="'checkbox'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    [value]="value"
                    [attr.name]="name"
                    [checked]="checked()"
                    [attr.tabindex]="tabindex"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [attr.required]="required"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-checked]="checked()"
                    (change)="handleChange($event)"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [attr.data-pc-section]="'hiddenInput'"
                />
            </div>
            <div
                class="p-checkbox-box"
                [ngClass]="{ 'p-highlight': checked(), 'p-disabled': disabled, 'p-focus': focused }"
                (click)="onClick($event, input, true)"
                [attr.data-p-highlight]="checked()"
                [attr.data-p-disabled]="disabled"
                [attr.data-p-focused]="focused"
                [attr.data-pc-section]="'input'"
            >
                <ng-container *ngIf="checked()">
                    <ng-container *ngIf="!checkboxIconTemplate">
                        <span *ngIf="checkboxIcon" class="p-checkbox-icon" [ngClass]="checkboxIcon" [attr.data-pc-section]="'icon'"></span>
                        <CheckIcon *ngIf="!checkboxIcon" [styleClass]="'p-checkbox-icon'" [attr.data-pc-section]="'icon'" />
                    </ng-container>
                    <span *ngIf="checkboxIconTemplate" class="p-checkbox-icon" [attr.data-pc-section]="'icon'">
                        <ng-template *ngTemplateOutlet="checkboxIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
        </div>
        <label
            (click)="onClick($event, input, true)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-checkbox-label': true, 'p-checkbox-label-active': checked(), 'p-disabled': disabled, 'p-checkbox-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            [attr.data-pc-section]="'label'"
        >
            {{ label }}</label
        >
    `,
      providers: [CHECKBOX_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    value: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    binary: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    labelStyleClass: [{
      type: Input
    }],
    formControl: [{
      type: Input
    }],
    checkboxIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CheckboxModule = class _CheckboxModule {
  static ɵfac = function CheckboxModule_Factory(t) {
    return new (t || _CheckboxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CheckboxModule,
    declarations: [Checkbox],
    imports: [CommonModule, CheckIcon],
    exports: [Checkbox, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, CheckIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CheckIcon],
      exports: [Checkbox, SharedModule],
      declarations: [Checkbox]
    }]
  }], null, null);
})();
export {
  CHECKBOX_VALUE_ACCESSOR,
  Checkbox,
  CheckboxModule
};
//# sourceMappingURL=primeng_checkbox.js.map
