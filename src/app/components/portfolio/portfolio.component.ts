import { Component, OnInit, OnDestroy } from '@angular/core';

interface Project {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  formData = {
    name: '',
    email: '',
    message: '',
  };
  showErrors: boolean = false;
  experiences = [
    {
      title: 'Akım Metal R&D',
      subtitle: 'Front-End Developer',
      date: '09/2023 - present',
      description:
        'Implemented and maintained responsive web applications using Angular, ensuring seamless user experiences across devices. Developed and optimized reusable UI components, improving consistency and efficiency in the development process. Enhanced application performance by implementing best practices in frontend development and optimizing code structure.',
    },
  ];

  projects: Project[] = [
    {
      name: 'MateBot - CRM Application',
      description:
        'This project was developed to optimize and simplify business processes for enterprises. It offers dynamic and intuitive components.',
      image: 'assets/11.svg',
      tags: ['Angular', 'PrimeNG'],
    },
    {
      name: 'MateBot Promotional Website',
      description:
        'Designed to highlight the features and benefits of the platform, the promotional website provides businesses with a clear overview of how they can improve productivity and efficiency.',
      image: 'assets/webtanitim.png',
      tags: ['Angular', 'PrimeNG'],
    },
    {
      name: 'AI Project',
      description:
        'Allows users to upload documents and receive accurate and fast responses to their questions with AI support.',
      image: 'assets/docs.png',
      tags: ['Angular', 'PrimeNG'],
    },
    {
      name: 'Human Resources Project',
      description:
        'Developed to optimize employee management, task assignment processes, and notification functionality.',
      image: 'assets/ik.png',
      tags: ['Angular', 'PrimeNG'],
    },
  ];

  currentProject: number = 0;
  autoSlideInterval: any;

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

  ngOnInit(): void {
    this.startAutoSlide();
  }

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

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextProject(): void {
    this.currentProject = (this.currentProject + 1) % this.projects.length;
  }

  prevProject(): void {
    this.currentProject =
      (this.currentProject - 1 + this.projects.length) % this.projects.length;
  }

  setProject(index: number): void {
    this.currentProject = index;
    this.resetAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextProject();
    }, 5000); // Her 5 saniyede bir sonraki projeye geçer
  }

  resetAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.startAutoSlide();
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Data:', this.formData);

      // Reset form after successful submission
      form.reset();
      this.showErrors = false;
    } else {
      this.showErrors = true; // Gösterilecek hata mesajları için flag ayarı
    }
  }

  checkForErrors(form: any): void {
    if (!form.valid) {
      this.showErrors = true; // Form geçersizse hata mesajlarını göster
    }
  }
}
