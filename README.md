#  Real-Time Collaborative document editor


COMPANY: CODTECH IT SOLUTIONS

NAME: VERMA ALOKKUMAR AMARDAYAL

INTERN ID: CT06DF1774

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 6 WEEKS

MENTOR: NEELA SANTOSH



This is a full-stack **Real-Time Collaborative Document Editor** built using **Node.js**, **Express**, **MongoDB**, **Socket.IO**, and **Quill.js**. 
It allows multiple users to edit a shared document simultaneously, with all changes synchronized in real-time and automatically saved to a MongoDB database.

---

## 🌟 Features

- 🧠 Rich text editing with [Quill.js](https://quilljs.com/)
- ⚡ Real-time document collaboration using WebSockets via [Socket.IO](https://socket.io/)
- 💾 Auto-save feature every few seconds
- 📄 RESTful API to create, retrieve, and update documents
- 🗃️ MongoDB integration using Mongoose
- 🔒 Environment variables with `dotenv`
- 🔧 Clean separation of client and server codebases

---

## 🧰 Tech Stack

### Frontend:
- HTML5, CSS, JavaScript
- [Quill.js](https://quilljs.com/)
- Socket.IO Client

### Backend:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/))
- [Socket.IO](https://socket.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally
- (Optional) [MongoDB Compass](https://www.mongodb.com/try/download/compass) for GUI
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or `live-server` globally installed

---


🧪 How to Use

1. Start your MongoDB server:
   - Enter mongod in your system command prompt
2. Run the backend:
   - cd server
   - node index.js
3. Create a document (via Postman or MongoDB Compass):
   - POST http://localhost:5000/api/documents
   - {
  "title": "My First Doc",
  "content": {}
  }
4. opy the _id from the response, and update client/editor.js:
   - const docId = "your-document-id";
5. Run frontend:
   - cd client
   - live-server
6. Open in two browser tabs — edits will sync in real-time!


## 📸 Screenshots


![Image](https://github.com/user-attachments/assets/07c214fe-7aeb-4d5e-b3af-55ca65d2438c)
![Image](https://github.com/user-attachments/assets/9b486164-6928-469c-bf65-9e65f44e5c31)
![Image](https://github.com/user-attachments/assets/7588abef-977d-44dc-ba92-c356dbdb5086)
![Image](https://github.com/user-attachments/assets/b5e6e1a6-e716-49c4-84d7-829df259ef33)
![Image](https://github.com/user-attachments/assets/d0b34ce2-ae05-4eab-ad62-3c81353c0031)
![Image](https://github.com/user-attachments/assets/06086911-f635-41f2-8c90-7bf20a16a854)
![Image](https://github.com/user-attachments/assets/569277da-90f6-4763-9b2b-bfb22f4aa57a)
![Image](https://github.com/user-attachments/assets/365a6057-0442-44ca-a692-c94f4c020f93)
![Image](https://github.com/user-attachments/assets/256b697f-7a84-4247-9d95-3c864ea059cb)
![Image](https://github.com/user-attachments/assets/c99619e0-4f1f-4ef2-9b5d-1b44de1c60ce)
![Image](https://github.com/user-attachments/assets/9e4b7a4a-d38c-4bf0-aadb-4544f8f2cb54)


