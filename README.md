# User Identity

This is the Angular frontend application for managing user identity details. It connects to a backend API to fetch, display, and update user information using reactive forms and HTTP services.

---

## Features

- Retrieve user identity by ID (`GET`)
- Update user identity fields (`PATCH`)
- Uses Angular Reactive Forms and HttpClient
- Automatically updates `LastUpdated` timestamp
- Inline error messages for form validation
- Tailwind CSS for styling

---

## Quick Start

### 1. Clone or Download : https://github.com/JaysonCustodio/FE-UserIdentity.git
### 2. npm install
### 3. ng serve

```bash
git clone https://github.com/JaysonCustodio/FE-UserIdentity.git
cd FE-UserIdentity

Project Structure

FE-UserIdentity
src/
 └── app/
      ├── user/         
      ├── services/     
      └── app.module.ts  
