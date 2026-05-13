import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [NgFor, NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactMethods = [
    {
      label: 'Email',
      value: 'cheykimrithdev@example.com',
      icon: 'fas fa-envelope',
      color: 'text-blue-500',
    },
    {
      label: 'Telegram',
      value: 'https://t.me/cheykimrith',
      icon: 'fab fa-telegram-plane',
      color: 'text-blue-500',
    },
    {
      label: 'Phone',
      value: '095 24 85 29',
      icon: 'fas fa-phone',
      color: 'text-green-500',
    },
    {
      label: 'Location',
      value: 'Phnom Penh, Cambodia, Stung Meanchey',
      icon: 'fas fa-map-marker-alt',
      color: 'text-red-500',
    },
    {
      label: 'LinkedIn',
      value: 'Not Available', // Changed from link to text
      icon: 'fab fa-linkedin',
      color: 'text-gray-400', // Gray color for the icon
      disabled: true, // Flag to handle the style
    },
  ];
}
