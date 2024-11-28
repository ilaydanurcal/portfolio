import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  experiences = [
    {
      title: 'Akım Metal AR-GE',
      subtitle: 'Front-End Developer',
      date: '09/2023 - present',
      description:
        'Implemented and maintained responsive web applications using Angular, ensuring seamless user experiences across devices.Developed and optimized reusable UI components, improving consistency and efficiency in the development process.Enhanced application performance by implementing best practices in frontend development and optimizing code structure.',
    },
  ];

  projects = [
    {
      name: 'MateBot - CRM Application',
      description:
        'This project was developed to optimize and simplify business processes for enterprises. It offers dynamic and intuitive components.',
      image: 'https://picsum.photos/seed/project1/400/300',
      tags: ['Angular', 'PrimeNG'],
    },
    {
      name: 'MateBot Promotional Website',
      description:
        'Designed to highlight the features and benefits of the platform, the promotional website provides businesses with a clear overview of how they can improve productivity and efficiency.',
      image: 'https://picsum.photos/seed/project3/400/300',
      tags: ['HTML', 'CSS', 'TypeScript'],
    },
    {
      name: 'AI Project',
      description:
        'Allows users to upload documents and receive accurate and fast responses to their questions with AI support.',
      image: 'https://picsum.photos/seed/project2/400/300',
      tags: ['Angular', 'PrimeNG'],
    },
    {
      name: 'Human Resources Project',
      description:
        'Developed to optimize employee management, task assignment processes, and notification functionality.',
      image: 'https://picsum.photos/seed/project3/400/300',
      tags: ['Angular', 'PrimeNG'],
    },
  ];

  skills = [
    'Angular',
    'TypeScript',
    'RxJS',
    'HTML5',
    'CSS3',
    'SCSS',
    'JavaScript',
    'Git',
  ];

  navigateTo(platform: string): void {
    const urls: { [key: string]: string } = {
      github: 'https://github.com/ilaydanurcal',
      email: 'mailto:ilaydacal6@gmail.com',
      linkedin: 'https://linkedin.com/in/ilayda-nur-cal',
    };

    const url = urls[platform];
    if (url) {
      window.open(url, '_blank');
    }
  }
}
