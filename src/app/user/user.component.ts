import { UserService } from '../user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserIdentity } from '../types/user';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userForm!: FormGroup;
  user: UserIdentity | null = null;

  isLoading = false;
  showSuccess = false;
  showError = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [null],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userId: [''],
      sourceSystem: [''],
      isActive: [false],
      lastUpdated: ['']
    });

    // Load user data
    this.userService.getUserIdentityById('1').subscribe(user => {
      this.user = user;
      this.userForm.patchValue(user);
    });
  }


  onSubmit() {
    if (this.userForm.valid) {
      this.isLoading = true;
      this.showError = false;  

      const formValue = this.userForm.value;
      const updates: Partial<Record<keyof UserIdentity, any>> = {
        fullName: formValue.fullName,
        email: formValue.email,
        sourceSystem: formValue.sourceSystem,
        isActive: formValue.isActive
      };
      const userId = formValue.id;

      this.userService.updateUserIdentity(userId, updates).subscribe({
        next: (updatedUser) => {
          this.isLoading = false;
          this.showSuccess = true;
          this.userForm.patchValue(updatedUser);
          this.user = updatedUser;

          timer(3000).subscribe(() => this.showSuccess = false);
        },
        error: (err) => {
          this.isLoading = false;
          this.showError = true;
          this.errorMessage = err?.message || 'Failed to update user. Please try again.';

          // Auto-hide error after 5 seconds
          timer(5000).subscribe(() => this.showError = false);
        }
      });
    }
  }
}
