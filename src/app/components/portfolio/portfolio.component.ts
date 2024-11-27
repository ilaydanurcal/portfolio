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
      title: 'CRM Uygulaması',
      description:
        'Kullanıcı dostu bir CRM platformu tasarımı ve geliştirilmesi.',
      generalDetail:
        'Karmaşık iş süreçlerini basitleştirmek ve kullanıcı odaklı çözümler geliştirmek için çalıştım.',
      details: [
        'Angular kullanarak dinamik bileşenler geliştirdim.',
        'Kullanıcı etkileşimini artırmak için performans optimizasyonları yaptım.',
        'Veri görselleştirme ve yönetim araçlarını entegre ettim.',
      ],
    },
    {
      title: 'Yapay Zeka Projesi (UI Geliştirme)',
      description:
        'Yapay zeka tabanlı bir platform için kullanıcı arayüzü geliştirilmesi.',
      generalDetail:
        'Kullanıcıların verimli bir şekilde AI tabanlı çözümlere erişimini kolaylaştırmayı hedefledim.',
      details: [
        'Doküman yükleme ve AI tabanlı yanıt sistemi için arayüz geliştirdim.',
        'Responsive ve modern bir tasarım sağlamak için PrimeNG ve SCSS kullandım.',
        'Karmaşık veri akışlarını yönetmek için kullanıcı dostu bileşenler geliştirdim.',
      ],
    },
    {
      title: 'İnsan Kaynakları Projesi',
      description:
        'Çalışan yönetimi ve görev atama için UI tasarımı ve geliştirilmesi.',
      generalDetail:
        'Ekiplerin görevlerini etkili bir şekilde yönetebileceği sezgisel bir sistem oluşturmayı amaçladım.',
      details: [
        'Dinamik tablo yapısı ve veri görselleştirme araçları geliştirdim.',
        'Mobil uyumlu tasarımlar ve sezgisel arayüzler oluşturdum.',
        'Bildirim ve görev atama işlevselliğini UI bileşenleriyle optimize ettim.',
      ],
    },
  ];

  projects = [
    {
      name: 'CRM Uygulaması',
      subtitle: 'Angular ile geliştirilmiş',
      description:
        'Kullanıcı dostu bir CRM platformu. Dinamik ve sezgisel bileşenlerle zenginleştirilmiştir.',
      image: 'https://picsum.photos/seed/project1/400/300',
    },
    {
      name: 'Yapay Zeka Projesi',
      subtitle: 'PrimeNG ve SCSS ile tasarlanmış',
      description:
        'Kullanıcıların doküman yükleyip, AI tabanlı hızlı yanıt almasını sağlayan bir sistem.',
      image: 'https://picsum.photos/seed/project2/400/300',
    },
    {
      name: 'İnsan Kaynakları Projesi',
      subtitle: 'Mobil uyumlu ve modern',
      description:
        'Görev atama, bildirim ve çalışan yönetimi için tasarlanmış bir UI projesi.',
      image: 'https://picsum.photos/seed/project3/400/300',
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
