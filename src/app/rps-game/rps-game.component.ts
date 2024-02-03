import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rps-game',
  templateUrl: './rps-game.component.html',
  styleUrls: ['./rps-game.component.css'],
})
export class RpsGameComponent {
  rpsImages: string[] = [
    'assets/images/rock.png',
    'assets/images/paper.png',
    'assets/images/scissors.png',
  ];

  aiPick: number = 0;
  uPick: number = 0;

  aiImagePick: string = '';
  uImagePick: string = '';
  msg: string = '';
  aiHealth: number = 5;
  userHealth: number = 5;

  gameFinished: boolean = false;
  btnDisabled: boolean = false;

  constructor(private renderer: Renderer2) {}

  userPick(pick: number) {
    this.uPick = pick;
    this.aiPick = Math.floor(Math.random() * 3);
    this.aiImagePick = this.rpsImages[this.aiPick];
    this.uImagePick = this.rpsImages[this.uPick];

    let aiHTMLPic: HTMLElement = document.getElementById('pickAi') as HTMLElement;
    this.animatePick(aiHTMLPic);
    let userHTMLPic: HTMLElement = document.getElementById('pickU') as HTMLElement;
    this.animatePick(userHTMLPic);

    switch (this.aiPick) {
      case 0:
        this.whoWon(0, 1);
        break;
      case 1:
        this.whoWon(1, 2);
        break;
      case 2:
        this.whoWon(2, 0);
        break;
    }
  }

  whoWon(drawCondition: number, winCondition: number) {
    if (this.uPick == drawCondition) {
      this.msg = 'Draw!';
    } else if (this.uPick == winCondition) {
      this.msg = 'Player wins!';
      this.aiHealth--;
    } else {
      this.msg = 'AI wins!';
      this.userHealth--;
    }

    this.checkIfGameFinished();
  }

  async checkIfGameFinished() {
    // Delay to show the user how last game went instead of just popping
    if (this.aiHealth == 0) {
      this.btnDisabled = true;
      await this.sleep(1500);
      this.msg = 'Congratulations! You won the game!';
      this.gameFinished = true;
    } else if (this.userHealth == 0) {
      this.btnDisabled = true;
      await this.sleep(1500);
      this.msg = 'Oh no! AI won :(';
      this.gameFinished = true;
    }
  }

  sleep(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  onRestartClick() {
    this.aiHealth = 5;
    this.userHealth = 5;
    this.aiImagePick = '';
    this.uImagePick = '';
    this.msg = '';
    this.btnDisabled = false;
    this.gameFinished = false;
  }

  animatePick(toAnimate: HTMLElement) {
    this.renderer.setStyle(toAnimate, 'display', 'block');
    toAnimate.animate([
      { transform: 'scale(1)', filter: 'drop-shadow(0 0 4px red)' },
      { transform: 'scale(1.15)', filter: 'drop-shadow(0 0 4px red)' },
      { transform: 'scale(1)', filter: 'drop-shadow(0 0 4px red)' }
    ],
    {
      duration: 500,
      iterations: 1,
    }
    );
  }
}

