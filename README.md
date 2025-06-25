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



