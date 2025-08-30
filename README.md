# SpotMyShop 🛍️

SpotMyShop is a local business directory web app where shop owners can register their stores, and customers can explore shops easily.  
The platform allows shop owners to create business profiles, add sections/subsections, and list products (without prices).  

---

## 🚀 Features

### 🔑 Authentication
- Login / Sign-up using:
  - **Phone number**
  - **Email**
- Separate login/signup pages for:
  - **Customers**
  - **Shop Owners**

### 🛒 Shop Owner Features
- Create and manage **business profiles**
- Add shop details:
  - Shop name, type, address, location
  - Owner details and contact info
- Create **sections & subsections** to organize products
- Add products under subsections (without prices)

### 👥 Customer Features
- Create and manage personal profiles
- Browse shops by categories & location
- Search for shops and products
- Explore shop details

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Node.js, Express.js, Prisma ORM  
- **Database:** MongoDB (via MongoDB Atlas)  
- **Authentication:** NextAuth.js  

---

## 📂 Project Structure


---

## ⚡ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/SpotMyShop.git
cd SpotMyShop


DATABASE_URL="your-mongodb-connection-string"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"

npx prisma db push

npm run dev

npx prisma db seed


