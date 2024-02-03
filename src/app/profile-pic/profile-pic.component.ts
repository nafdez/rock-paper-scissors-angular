import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent {
  aiProfilePics: string[] = [
    'assets/images/ai-profile-pic/Luke.png',
    'assets/images/ai-profile-pic/Matthew.png',
    'assets/images/ai-profile-pic/Liam.png',
    'assets/images/ai-profile-pic/Gabriel.png',
    'assets/images/ai-profile-pic/Aiden.png',
    'assets/images/ai-profile-pic/Victoria.png',
    'assets/images/ai-profile-pic/Carter.png',
    'assets/images/ai-profile-pic/Caleb.png',
    'assets/images/ai-profile-pic/Emma.png',
    'assets/images/ai-profile-pic/Caden.png',
    'assets/images/ai-profile-pic/Oliver.png',
    'assets/images/ai-profile-pic/Aria.png',
    'assets/images/ai-profile-pic/Nathan.png',
    'assets/images/ai-profile-pic/Evelyn.png',
    'assets/images/ai-profile-pic/Elijah.png',
    'assets/images/ai-profile-pic/Scarlett.png',
    'assets/images/ai-profile-pic/Zoe.png',
    'assets/images/ai-profile-pic/Chloe.png',
    'assets/images/ai-profile-pic/Jackson.png',
    'assets/images/ai-profile-pic/Harper.png',
    'assets/images/ai-profile-pic/Olivia.png',
    'assets/images/ai-profile-pic/Mia.png',
    'assets/images/ai-profile-pic/Sophia.png',
    'assets/images/ai-profile-pic/Grace.png',
    'assets/images/ai-profile-pic/James.png',
    'assets/images/ai-profile-pic/Abigail.png',
    'assets/images/ai-profile-pic/Benjamin.png',
    'assets/images/ai-profile-pic/Lucas.png',
    'assets/images/ai-profile-pic/Henry.png',
    'assets/images/ai-profile-pic/Isaac.png',
    'assets/images/ai-profile-pic/Emily.png',
    'assets/images/ai-profile-pic/Mason.png',
    'assets/images/ai-profile-pic/Dylan.png',
    'assets/images/ai-profile-pic/Sebastian.png',
    'assets/images/ai-profile-pic/Amelia.png',
    'assets/images/ai-profile-pic/Ava.png',
    'assets/images/ai-profile-pic/Owen.png',
    'assets/images/ai-profile-pic/Noah.png',
    'assets/images/ai-profile-pic/Alexander.png',
    'assets/images/ai-profile-pic/Lily.png',
    'assets/images/ai-profile-pic/Ethan.png',
    'assets/images/ai-profile-pic/Samuel.png',
    'assets/images/ai-profile-pic/Daniel.png',
    'assets/images/ai-profile-pic/William.png',
    'assets/images/ai-profile-pic/Isabella.png',
  ];
  aiProfilePic: string = 'assets/images/ai-profile-pic/William.png'; // By default
  aiName: string = 'William'
  @Input() isAi: boolean = true;

  ngOnInit() {
    this.randomAiPic();
    this.aiName = this.getAiName(this.aiProfilePic);
  }

  randomAiPic() {
    const randomIndex = Math.floor(Math.random() * this.aiProfilePics.length);
    this.aiProfilePic = this.aiProfilePics[randomIndex];
  }

  getAiName(imgPath: string): string {
    const nombreConExtension = imgPath.split('/').pop(); // Obtiene el nombre con extensión
    if (nombreConExtension) {
      return nombreConExtension.split('.').slice(0, -1).join('.'); // Elimina la extensión
    } else {
      return '';
    }
  }
}
