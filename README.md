User Identity Management - Frontend
This is the Angular frontend application for managing user identity details. It connects to a backend API to fetch, display, and update user information using reactive forms and HTTP services.

Features
Display user details in a clean UI

Edit and update user information with validation

Loading spinner during API calls

Inline error messages for form validation

Uses Angular Reactive Forms and HttpClient

Tailwind CSS for styling

Technologies Used
Angular 16+

RxJS

Tailwind CSS

TypeScript

Getting Started
Prerequisites
Node.js (v16+ recommended)

npm or yarn

Angular CLI (npm install -g @angular/cli)

Installation
Clone the repo or download the frontend folder.

Navigate to the project directory in the terminal.

Install dependencies:

bash
npm install
Running the Application
Start the Angular development server:

bash
ng serve
Open your browser and go to:

Edit
http://localhost:4200
The app will automatically reload if you change any source files.

Project Structure
src/
 └── app/
      ├── user/          # User component, service, and types
      ├── services/      # General services (if any)
      └── app.module.ts  # Angular module imports


Configuration
Update the API endpoint URL in user.service.ts if your backend URL differs.

Usage
The app fetches user data on load.

Edit user details using the form.

Save changes to update user info via the API.

Inline validation prevents submitting invalid data.

Displays loading indicators and error messages.
