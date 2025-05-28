# 🎟️ Event Booking API

A simple RESTful API built with Node.js, Express, and PostgreSQL for managing events and bookings. Users can register, log in, browse events, and book available seats. Admin users can create and manage events.

## 🔧 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT Authentication
- dotenv for environment configuration


## 📁 Project Structure

event-booking-api/
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env
├── app.js
├── server.js
└── README.md

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/adelie/event-booking-api.git
cd event-booking-api
2. Install dependencies

npm install
3. Configure environment variables
Create a .env file in the root folder:

PORT=3000
DATABASE_URL=postgres://<username>:<password>@localhost:5432/eventdb
JWT_SECRET=your_secret_key
Replace <username> and <password> with your actual PostgreSQL credentials.

4. Start the server
bash
Copy
Edit
npm run dev
🔐 Authentication
Users can register and log in.

Authenticated users receive a JWT token.

Admins can create events.

📦 API Endpoints
🔑 Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a user
POST	/api/auth/login	Login and get token

📅 Events
Method	Endpoint	Description
GET	/api/events	Get all events
POST	/api/events	Create event (admin only)

📌 Bookings
Method	Endpoint	Description
POST	/api/bookings/:eventId	Book a seat in an event

🧪 Sample Request with Token
Make sure to include the token in your request header like this:

Authorization: Bearer <your_token>
🧑‍💻 Admin Access
To create an admin, you can manually insert a user in your DB with the role set to "admin" or modify the registration controller for development purposes.
