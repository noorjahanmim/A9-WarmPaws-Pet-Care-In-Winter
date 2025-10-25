# WarmPaws – Pet Care in Winter 🐾

A cozy winter companion platform designed for pet owners to keep their furry friends warm, safe, and healthy during the cold season. Users can explore local pet care services, winter pet clothing, grooming options, and expert tips — all in one friendly interface.

---

## 📝 Project Overview

WarmPaws is a **Single Page Application (SPA)** built using **React.js**, **Tailwind CSS**, and **Firebase Authentication**.  
It helps pet owners find winter care services for their pets and manage user authentication seamlessly.

Key highlights:

- **Winter Care Services**: Browse services with images, price, rating, and details.
- **User Authentication**: Login, Signup, Google Social login, Forgot password.
- **Profile Management**: Update user profile with name & photo.
- **Responsive Design**: Works smoothly on mobile, tablet, and desktop.
- **Interactive UI**: Hero sliders using **Swiper.js** and toast notifications with **react-hot-toast**.

---

## 📂 Features

### Navbar
- Logo
- Navigation links: Home, Services, My Profile
- Dynamic buttons:
  - Login / Signup (when logged out)
  - User avatar with hover displayName & Logout (when logged in)

### Footer
- Contact info
- Social links (Facebook, Twitter, YouTube)
- Privacy policy link

### Home Page
- Hero section: Warm winter-themed Swiper slider showcasing cozy pets
- Popular Winter Care Services: Cards populated from JSON
  - Service Name
  - Rating
  - Price
  - “View Details” button
- Extra Sections:
  - Winter Care Tips for Pets (static/fake JSON)
  - Meet Our Expert Vets (static info)

### Services Page
- Lists all winter care services from JSON data
- Each card shows:
  - Image, Service Name, Rating, Price
  - View Details button

### Service Details Page
- Protected Route: Requires login
- Shows full service info (from JSON)
- Book Service form with Name, Email, and Book Now button
- Toast notification on booking

### Authentication
- Login Page:
  - Email, Password, Forgot Password
  - Google login
  - Redirects after login
- Signup Page:
  - Name, Email, Photo-URL, Password
  - Google login
  - Password validation: min 6 characters, include uppercase & lowercase
- Forgot Password:
  - Enter email → redirect to Gmail for reset

### My Profile Page
- Shows current user info:
  - Name, Email, Photo
- Update Profile button to edit Name & Photo

---

## 🛠 Technologies Used

- **React.js** – SPA framework
- **Tailwind CSS** – Styling & responsive design
- **Firebase Auth** – Authentication (Email & Google)
- **react-hot-toast** – Toast notifications
- **Swiper.js** – Hero sliders
- **DaisyUI** – UI components

Other libraries:
- `react-icons` – Icons
- `react-router-dom` – Routing
- `AOS` – Subtle animations

---

## 📂 JSON Data
All services are stored in a **services.json** file with the following structure:

```json
[
  {
    "serviceId": 1,
    "serviceName": "Winter Coat Fitting for Dogs",
    "providerName": "PawCare Studio",
    "providerEmail": "info@pawcare.com",
    "price": 25,
    "rating": 4.9,
    "slotsAvailable": 4,
    "description": "Custom coat fitting and warm outfit options to keep your dog comfortable in the cold.",
    "image": "https://i.postimg.cc/example1.png",
    "category": "Clothing"
  },
  {
    "serviceId": 2,
    "serviceName": "Winter Grooming & Paw Treatment",
    "providerName": "CozyPets Grooming",
    "providerEmail": "hello@cozypets.com",
    "price": 30,
    "rating": 4.8,
    "slotsAvailable": 3,
    "description": "Professional grooming with moisturizing paw balm and winter-safe shampoo.",
    "image": "https://i.postimg.cc/example2.png",
    "category": "Grooming"
  }
]

