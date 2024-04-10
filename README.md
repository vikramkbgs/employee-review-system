# Employee Performance Review System

This is a web application for managing employee performance reviews. It allows administrators to add, remove, update, and view employees, as well as manage performance reviews. Employees can view their assigned performance reviews and submit feedback.

## Folder Structure
```

📂 assets/
├── 📂 image/
│ ├── 🖼️ feedbackCover.jpeg
│ └── 🖼️ manager.png

📂 config/
├── 📄 middleware.js
├── 📄 mongoose.js
└── 📄 passport_local.js

📂 controllers/
├── 📄 adminController.js
├── 📄 employeeController.js
└── 📄 userController.js

📂 models/
├── 📄 feedback.js
└── 📄 User.js

📂 node_modules/

📂 routes/
├── 📄 admin.js
├── 📄 employee.js
├── 📄 index.js
└── 📄 user.js

📂 views/
├── 📄 _header.ejs
├── 📄 addEmployee.ejs
├── 📄 admin.ejs
├── 📄 employee.ejs
├── 📄 layout.ejs
├── 📄 signIn.ejs
├── 📄 signUp.ejs
└── 📄 updateForm.ejs

📄 index.js
📄 package-lock.json
📄 package.json
📄 README.md
```

## Getting Started

### Prerequisites

Before running the application, you need to have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/employee-performance-review.git
   cd employee-performance-review
   npm install


### Usage
- Sign in as an admin to access admin functionalities.
- Sign in as an employee to view assigned performance reviews and submit feedback.
- Follow the on-screen instructions to navigate through the application.
