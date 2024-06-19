import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
})
export class SkillsSectionComponent {
  show = true;
  hide = false;
  skills = this.show;
  experience = !this.show;
  certificates = !this.show;

  skillsClick(event: MouseEvent): void {
    this.experience = this.hide;
    this.certificates = this.hide;
    this.skills = this.show;
  }
  experienceClick(event: MouseEvent): void {
    this.experience = this.show;
    this.certificates = this.hide;
    this.skills = this.hide;
  }
  certificatesClick(event: MouseEvent): void {
    this.experience = this.hide;
    this.certificates = this.show;
    this.skills = this.hide;
  }
  getSkills(): boolean {
    return this.skills;
  }
  getExperince(): boolean {
    return this.experience;
  }
  getCertificates(): boolean {
    return this.certificates;
  }
}
