/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the appComponent', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.debugElement.componentInstance;
    expect(appComponent).toBeTruthy();
  }));

  it(`should have a title 'Music search app!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.debugElement.componentInstance;
    expect(appComponent.title).toEqual('Music search app!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Music search app!');
  }));
});
