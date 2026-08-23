import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-right-aside',
  imports: [],
  templateUrl: './right-aside.html',
  styleUrl: './right-aside.css',
})
export class RightAside {
  currentWidth = input<number>(0);
  isLogin = input<boolean>(false);
  showLeftAside = model(window.innerWidth < 600);
  showRightAside = model(window.innerWidth < 600);

  toggleShowRightAside() {
    this.showRightAside.update(value => !value);
  }

  //notifications
  notifications = [
    { id: 1, user_name: "Maria Santos", user_image: "/image.jpg", message: "Posted a new community announcement", date_time: "2026-08-18 : 8:30 am" },
    { id: 2, user_name: "Juan Dela Cruz", user_image: "/image.jpg", message: "Submitted a new resident concern", date_time: "2026-08-18 : 9:15 am" },
    { id: 3, user_name: "Randy Flores", user_image: "/image.jpg", message: "Replied to your resident concern", date_time: "2026-08-18 : 10:42 am" },
    { id: 4, user_name: "Ana Reyes", user_image: "/image.jpg", message: "Posted a new SK announcement", date_time: "2026-08-18 : 11:20 am" },
    { id: 5, user_name: "Mark Garcia", user_image: "/image.jpg", message: "You have a new message", date_time: "2026-08-18 : 12:05 pm" },
    { id: 6, user_name: "Sofia Mendoza", user_image: "/image.jpg", message: "Updated an official announcement", date_time: "2026-08-18 : 1:18 pm" },
    { id: 7, user_name: "Carlo Ramirez", user_image: "/image.jpg", message: "Submitted a new resident concern", date_time: "2026-08-18 : 2:34 pm" },
    { id: 8, user_name: "Liza Cruz", user_image: "/image.jpg", message: "Posted a new community update", date_time: "2026-08-18 : 3:10 pm" },
    { id: 9, user_name: "Kevin Torres", user_image: "/image.jpg", message: "Replied to your message", date_time: "2026-08-18 : 4:25 pm" },
    { id: 10, user_name: "Angela Flores", user_image: "/image.jpg", message: "Posted a new announcement", date_time: "2026-08-18 : 5:02 pm" },
    { id: 11, user_name: "Daniel Santos", user_image: "/image.jpg", message: "Submitted a resident concern", date_time: "2026-08-17 : 8:45 am" },
    { id: 12, user_name: "Nicole Reyes", user_image: "/image.jpg", message: "You have a new notification", date_time: "2026-08-17 : 9:30 am" },
    { id: 13, user_name: "Paolo Garcia", user_image: "/image.jpg", message: "Posted a new SK announcement", date_time: "2026-08-17 : 10:15 am" },
    { id: 14, user_name: "Grace Mendoza", user_image: "/image.jpg", message: "Updated a community announcement", date_time: "2026-08-17 : 11:40 am" },
    { id: 15, user_name: "Ryan Flores", user_image: "/image.jpg", message: "Replied to your resident concern", date_time: "2026-08-17 : 1:05 pm" },
    { id: 16, user_name: "Ella Ramirez", user_image: "/image.jpg", message: "Posted a new community update", date_time: "2026-08-17 : 2:22 pm" },
    { id: 17, user_name: "Miguel Cruz", user_image: "/image.jpg", message: "Submitted a new concern", date_time: "2026-08-17 : 3:18 pm" },
    { id: 18, user_name: "Patricia Torres", user_image: "/image.jpg", message: "You have a new message", date_time: "2026-08-17 : 4:40 pm" },
    { id: 19, user_name: "Joshua Santos", user_image: "/image.jpg", message: "Posted a new announcement", date_time: "2026-08-16 : 8:12 am" },
    { id: 20, user_name: "Camille Reyes", user_image: "/image.jpg", message: "Updated an official announcement", date_time: "2026-08-16 : 9:48 am" },
    { id: 21, user_name: "Nathan Garcia", user_image: "/image.jpg", message: "Submitted a resident concern", date_time: "2026-08-16 : 11:05 am" },
    { id: 22, user_name: "Bea Mendoza", user_image: "/image.jpg", message: "Replied to your concern", date_time: "2026-08-16 : 1:30 pm" },
    { id: 23, user_name: "Adrian Flores", user_image: "/image.jpg", message: "Posted a new SK announcement", date_time: "2026-08-16 : 2:45 pm" },
    { id: 24, user_name: "Jasmine Ramirez", user_image: "/image.jpg", message: "You have a new notification", date_time: "2026-08-15 : 9:20 am" },
    { id: 25, user_name: "Christian Cruz", user_image: "/image.jpg", message: "Posted a new community update", date_time: "2026-08-15 : 10:35 am" },
    { id: 26, user_name: "Mia Torres", user_image: "/image.jpg", message: "Submitted a new resident concern", date_time: "2026-08-15 : 12:10 pm" },
    { id: 27, user_name: "Gabriel Santos", user_image: "/image.jpg", message: "Replied to your resident concern", date_time: "2026-08-14 : 3:25 pm" },
    { id: 28, user_name: "Isabella Reyes", user_image: "/image.jpg", message: "Posted a new official announcement", date_time: "2026-08-14 : 5:15 pm" }
  ];
}
