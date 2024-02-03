import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.css'],
})
export class HealthBarComponent implements OnInit {
  @Input() health: number = 5;
  filledHeart: String = 'assets/images/heart-filled.png';
  voidHeart: String = 'assets/images/heart-void.png';

  @HostBinding('style.--target-time')
  private targetTime: string = '1s';

  ngOnInit(): void {
    this.calculateTargetTime();
  }

  async calculateTargetTime() {
    while (true) {
      this.targetTime = this.health / 5 + 's';
       await this.sleep(100);
    }
  }

  sleep(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
}
