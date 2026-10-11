# DeviceAuth Frontend (React + CSS)

## Requirements
- Node.js LTS and npm
- DeviceAuth Java backend running on `http://localhost:8080`

## Run
```powershell
npm install
npm run dev
```
Open `http://localhost:5173`.

Optional: copy `.env.example` to `.env` and adjust `VITE_API_BASE_URL`.

## Features
- Professional responsive cybersecurity UI
- User registration and sign-in
- User device registration and status view
- Device authentication action
- Admin device approval/blocking and audit activity
- Shared API helper, loading/error feedback, search and status badges

## Notes
- Frontend route visibility is not an authorization boundary. The backend must enforce roles and device ownership.
- Token storage in sessionStorage is a demonstration choice; assess HttpOnly secure cookies and XSS/CSRF controls before production use.
- Registration only creates USER accounts. Create an administrator through a controlled local database operation as described in the backend README.
