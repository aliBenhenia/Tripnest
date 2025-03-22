# Trivalo App

Trivalo is a modern web application built using **Next.js**. It offers a seamless user experience with high performance, scalability, and an intuitive UI.

## 🚀 Features

- ⚡ **Next.js 14** - Fast and optimized React framework
- 🎨 **Tailwind CSS** - Beautiful and responsive design
- 🔥 **Redux Toolkit** - Efficient state management
- 📡 **Axios** - API handling with ease
- 🔐 **Authentication** - Secure login & registration
- 🎮 **Game Features** - Interactive trivia and challenges
- 📊 **Dashboard** - User stats and achievements
- 📱 **Mobile-Friendly** - Fully responsive design

## 🛠 Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **State Management:** Redux Toolkit
- **API Requests:** Axios
- **Authentication:** JWT / OAuth
- **Database:** PostgreSQL / MongoDB
- **Deployment:** Vercel / Docker

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/trivalo.git
   cd trivalo

## Running on Other Devices on Same Network

To access the application from other devices on your network:

1. Find your computer's IP address:
   ```
   ipconfig                # Windows
   ifconfig | grep inet    # Mac/Linux
   ```

2. Create or update `.env.local` in the front-end directory:
   ```
   NEXT_PUBLIC_API_URL=http://YOUR_IP_ADDRESS:3001
   ```
   Replace `YOUR_IP_ADDRESS` with your computer's IP address (e.g., 192.168.1.100)

3. Start the backend server on all network interfaces:
   ```
   cd back-end
   npm run dev
   ```

4. Start the frontend on all network interfaces:
   ```
   cd front-end
   npm run dev -- -H 0.0.0.0
   ```

5. Access the application from other devices using:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```

## Troubleshooting

- Make sure your firewall allows connections on ports 3000 and 3001
- If using Windows, you might need to create an inbound rule in Windows Firewall
- Some networks block device-to-device communication; try using a different network if issues persist
