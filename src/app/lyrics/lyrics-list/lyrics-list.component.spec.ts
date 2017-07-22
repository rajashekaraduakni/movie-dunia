import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsListComponent } from './lyrics-list.component';

describe('LyricsListComponent', () => {
  let component: LyricsListComponent;
  let fixture: ComponentFixture<LyricsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
