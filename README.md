# DirectivesDeepDive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

-------------Angular tutorial from Udemy with Maximilian-----------------
-------------Angular 8 The Complete Guide-----------------

1. Created a new Angular project with command nr new directives-deep-dive.
2. Copied and pasted "src" folder from Exercise files.
3. Created a basic directive manually. Refere to basic-highlight.directive.ts
Note: Not a good idea to directlt access the DOM element.
4. Created a better directive (through command: ng g d better-highlight) by using Renderer. Refer to better-highlight.directive.ts.
Note: This is a better approach to access the DOM element by using Renderer. 
5. @HostListner(): With this we can listen to Host Events like mouse hover.
    @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'magenta');
  }
6. @HostBinding(): Similar to Renderer @HostBinding is also a better approach.
7. (7.10) What actually happens in structural directive 
The following div gets converted
    <div *ngIf="!onlyOdd">
          <li>  </li>
    </div>
    to (behind the screen)
    <ng-template [ngIf]="!onlyOdd">
        <div>
            <li> </li>
        </div>
    <ng-template>
8. Custom Structural Directive: Because structural directives like *ngIf and *ngFor gets converted to 
<ng-template [ngIf]=""> </ng-template>, 
so, when creating custom structural directive we need access to "Template" (TemplateRef) and "View" (ViewContainerRef)
    e.g. constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
9. ngSwitch: Render an element on a condition.