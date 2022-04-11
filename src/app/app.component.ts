import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  flops = {
    a: "Waterworld - 1995",
    b: "TMNT: Out of the Shadows - 2016",
    c: "Dudley Do-Right - 1999",
    d: "TommorrowLand - 2015"
  }
  selectedTitle: string = "";
  SelectedIndex: number = -1
  
  voteClicked(event: Event, index:number) {
    // console.log('voteClicked', (event.target as HTMLInputElement).value);
    this.selectedTitle = (<HTMLInputElement>event.target).value;

    if (this.isSelected(index)) {
      this.SelectedIndex = -1;
      this.selectedTitle = "";
    } else {
      this.SelectedIndex = index;
    }
  }

  getButtonText(index:number) {
    if (this.isSelected(index)) {
      return "Unvote";
    } else {
      return "Vote";
    }
  }

  anySelected() {
    return this.SelectedIndex != -1;
  }

  isSelected(index:number) {
    return this.SelectedIndex === index;
  }
  
}
