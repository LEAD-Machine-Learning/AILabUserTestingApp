import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  questions: any[] = [
    {
      "id": 1,
      "title": "Do you find the app easy to use?",
      "type": "checkbox"

    },
    {
      "id": 2,
      "title": "Do you understand how AI is integrated in the application?",
      "type": "checkbox"
    }, {
      "id": 3,
      "title": "Would you use the application often?",
      "type": "checkbox"

    }, {
      "id": 4,
      "title": "What was the best/worst thing about the app?",
      "type": "text"

    }, {
      "id": 5,
      "title": "Do you have any other feedback?",
      "type": "text"

    },
  ]


  title = 'usertesting';
}
