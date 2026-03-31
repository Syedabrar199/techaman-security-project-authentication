# Techaman 3-Tier Security Implementation

This project demonstrates a secure enterprise-grade authentication flow using **Angular**, **Spring Boot**, and **Keycloak**.

##  Architecture Overview
- **Frontend (Angular)**: Modern standalone architecture that handles OIDC login redirects.
- **Backend (Spring Boot)**: Acts as an OAuth2 Resource Server that validates JWT tokens.
- **IAM (Keycloak)**: Manages users and issues secure tokens via Docker.

##  Accomplishments
- Fixed **CORS issues** to allow secure cross-origin communication between Port 4200 and 8081.
- Implemented an **Angular Interceptor** to automatically attach Bearer tokens to API requests.
- Configured a **private endpoint** that only displays data after Keycloak verification.

##  How to Run Locally
1. **Infrastructure**: Run `docker-compose up -d` to start Keycloak.
2. **Security Setup**: Import the `realm-export.json` into your Keycloak Admin Console.
3. **Services**: 
   - Start the Backend (Port 8081).
   - Run `npm install` and `ng serve` in the Frontend (Port 4200).
4. **Test**: Log in via the redirect and click "Call Private Spring Boot API."
