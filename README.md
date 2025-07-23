# EyegoTask

A responsive dashboard built with Next.js, React, Tailwind CSS, Redux Toolkit, and Firebase Authentication.

## Features

- User authentication (Firebase Email/Password)
- Protected dashboard routes
- Dynamic data table with sorting, filtering, and pagination
- Chart visualizations (using Chart.js)
- Global state management with Redux Toolkit
- Mobile-friendly design with Tailwind CSS

## Demo

- [Link youtube video](https://youtu.be/nPIYz0eIVE0)]


## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd EyegoTask
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Firebase:**

   - Update `src/lib/firebase.js` with your Firebase project credentials if needed.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Implementation Approach

- **Authentication:**

  - Used Firebase Authentication for secure login and signup.
  - Auth state is synced globally using Redux Toolkit and a custom `AuthListener` client component.
  - Dashboard routes are protected by checking the Redux user state.

- **State Management:**

  - Redux Toolkit manages global authentication state.
  - The Redux Provider is wrapped in a client component (`Providers.js`) to comply with Next.js App Router best practices.

- **Dashboard Table:**

  - Built with React and Tailwind CSS.
  - Supports sorting, filtering, and pagination on dummy data (can be connected to a real API).

- **Charts:**

  - Implemented with `react-chartjs-2` and `chart.js` for visualizing sales and customer data.

- **Responsiveness:**
  - All UI components use Tailwind CSS utility classes for a mobile-friendly experience.

---

## Folder Structure

```
EyegoTask/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── dashboard/
│   │   │   ├── charts/
│   │   │   ├── table/
│   │   ├── login/
│   │   ├── signup/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── AuthListener.js
│   │   ├── Providers.js
│   ├── store/
│   │   ├── authSlice.js
│   │   ├── store.js
│   ├── lib/
│   │   ├── firebase.js
├── public/
├── package.json
├── README.md
```

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)
