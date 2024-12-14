# Pharmacy Prescription Quotation System
## 1. Backend

This project is a **Spring Boot** backend application for managing prescriptions, drugs, quotations, and actions like accepting/rejecting quotations between pharmacies and users. It includes APIs for user authentication, drug management, prescription handling, quotation creation, and user actions.

---

## **Technologies Used**

- **Backend**: Spring Boot (Java)
- **Database**: MySQL
- **Version Control**: Git & GitHub
- **IDE**: IntelliJ IDEA / VS Code
- **Testing Tools**: Postman (API testing)

---

## **Project Setup**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Set up the database:
   - Create a MySQL database named `pharmacy_quotation_db`.
   - Update the database configuration in `application.properties`:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/pharmacy_quotation_db
     spring.datasource.username=<your-db-username>
     spring.datasource.password=<your-db-password>

     spring.jpa.hibernate.ddl-auto=update
     spring.jpa.show-sql=true
     ```

3. Build and run the application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. Access the application:
   - Base URL: `http://localhost:8080/api`

5. user login
   - email -> user12@example.com
   - password -> user12
6. pharmacist login
   - email -> admin@example.com
   - password -> password123 

---

## **Database Tables**

### 1. Users Table
```sql
CREATE TABLE Users (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address TEXT,
    contact_no VARCHAR(15) NOT NULL,
    dob DATE,
    user_type ENUM('User', 'Pharmacy') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Drugs Table
```sql
CREATE TABLE Drugs (
    drug_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    drug_name VARCHAR(255) NOT NULL UNIQUE,
    price_per_unit DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at VARCHAR(255)
);
```

### 3. Prescriptions Table
```sql
CREATE TABLE Prescriptions (
    prescription_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    note TEXT,
    delivery_address TEXT NOT NULL,
    status ENUM('Pending', 'Quoted', 'Accepted', 'Rejected') DEFAULT 'Pending',
    created_at VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
```

### 4. Prescription_Images Table
```sql
CREATE TABLE Prescription_Images (
    image_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    prescription_id BIGINT NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    created_at VARCHAR(255),
    FOREIGN KEY (prescription_id) REFERENCES Prescriptions(prescription_id) ON DELETE CASCADE
);
```

### 5. Quotations Table
```sql
CREATE TABLE Quotations (
    quotation_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    prescription_id BIGINT NOT NULL,
    pharmacy_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    status ENUM('Pending', 'Accepted', 'Rejected') DEFAULT 'Pending',
    created_at VARCHAR(255),
    FOREIGN KEY (prescription_id) REFERENCES Prescriptions(prescription_id) ON DELETE CASCADE,
    FOREIGN KEY (pharmacy_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
```

### 6. Quotation_Details Table
```sql
CREATE TABLE Quotation_Details (
    detail_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    quotation_id BIGINT NOT NULL,
    drug_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (quotation_id) REFERENCES Quotations(quotation_id) ON DELETE CASCADE,
    FOREIGN KEY (drug_id) REFERENCES Drugs(drug_id) ON DELETE CASCADE
);
```

### 7. Quotation_Actions Table
```sql
CREATE TABLE Quotation_Actions (
    action_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    quotation_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    action ENUM('Accepted', 'Rejected') NOT NULL,
    action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (quotation_id) REFERENCES Quotations(quotation_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
```

---

## **API Endpoints**

### **Base URL**
```
/api
```

### **Authentication APIs**
| Endpoint                     | Method | Description                |
|------------------------------|--------|----------------------------|
| `/auth/user/register`        | POST   | Register a new user        |
| `/auth/user/login`           | POST   | Login for user             |
| `/auth/admin/register`       | POST   | Register a new admin       |
| `/auth/admin/login`          | POST   | Login for admin            |
| `/test`                      | GET    | Test API                   |

### **Drug APIs**
| Endpoint                     | Method | Description                |
|------------------------------|--------|----------------------------|
| `/drug/addDrug`              | POST   | Add a new drug             |
| `/drug/getAllDrugs`          | GET    | Retrieve all drugs         |
| `/drug/getDrugById/{id}`     | GET    | Get a drug by ID           |

### **Prescription APIs**
| Endpoint                                | Method | Description                        |
|-----------------------------------------|--------|------------------------------------|
| `/prescriptions/addPrescription`        | POST   | Add a new prescription             |
| `/prescriptions/getAllPrescriptions`    | GET    | Get all prescriptions              |
| `/prescriptions/by-user/{userId}`       | GET    | Get prescriptions by user ID       |

### **Quotation APIs**
| Endpoint                                | Method | Description                        |
|-----------------------------------------|--------|------------------------------------|
| `/createQuotation`                      | POST   | Create a quotation                 |
| `/getUserQuotations`                    | GET    | Get quotations for current user    |
| `/getUserQuotations/{userId}`           | GET    | Get quotations by user ID          |
| `/performActionOnQuotation`             | POST   | Accept or reject a quotation       |

---

## **How It Works**
1. **User Registration & Login**
   - Users and pharmacies register and authenticate via JWT.

2. **Drug Management**
   - Pharmacies can add and retrieve drugs.

3. **Prescription Handling**
   - Users submit prescriptions with notes and delivery addresses.
   - Prescription images can be uploaded (up to 5 images).
   - User can view uploaded prescriptions (by user id)
   - Pharmacies can view all prescriptions

4. **Quotation Creation**
   - Pharmacies create quotations for prescriptions.
   - Multiple drugs with quantities and prices can be added using the `Quotation_Details` table.

5. **User Actions on Quotations**
   - Users can view quotations
   - Users can accept or reject quotations, and the status is updated.

---
## 2. frontend

## Overview
This project is a **Prescription Management System** with separate user roles:
1. **User**: Can upload and manage their prescriptions.
2. **Pharmacy**: Can manage prescriptions, create quotations, and register additional pharmacists.

Both **Users** and **Pharmacies** share a single **Login** page, but they have separate dashboards and permissions.

---

## Features
### 1. Authentication
- Single **Login Page** for Users and Pharmacies.
- Separate **Registration Pages**:
  - Users can register using `/auth/register`.
  - Pharmacies can only register new pharmacists **after logging in** on the pharmacy dashboard.
- Role-based routing:
  - Users access the **User Dashboard**.
  - Pharmacies access the **Pharmacy Dashboard**.

### 2. Prescription Management (Users)
- Upload new prescriptions.
- View and manage uploaded prescriptions.
- accept or reject quotatons

### 3. Pharmacy Management (Pharmacies)
- View uploaded prescriptions.
- Create quotations for prescriptions.
- Register new pharmacists.

---

## Project Setup
Follow these steps to set up and run the project locally:

### 1. Prerequisites
Make sure you have the following installed:
- Node.js (v14+)
- NPM (v6+)

### 2. Clone the Repository
```bash
git clone <repository_url>
cd <project_folder>
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm start
```
This command starts the development server and opens the application at `http://localhost:3000`.

---

## Project Structure
```plaintext
src/
|-- Redux/                # Redux store and auth slice
|-- Views/                # Component pages
|   |-- Auth/             # Login and Registration pages
|   |   |-- Login.js      # Login Page (Users & Pharmacies)
|   |   |-- Register.js   # User Registration Page
|   |   |-- RegisterPharmacist.js   # Pharmacist Registration Page (Pharmacy Dashboard Only)
|   |-- User/             # User Dashboard & Views
|   |   |-- UserDashboard.js
|   |   |-- Myprescrptions.js
|   |-- Pharmacy/         # Pharmacy Dashboard & Views
|   |   |-- Dashboard.js
|-- Layouts/              # Shared Layout Components
|   |-- AuthLayout.js     # Layout for Auth pages
|   |-- UserLayout.js     # Layout for User dashboard
|   |-- PharmacistLayout.js # Layout for Pharmacy dashboard
|-- Router/               # Centralized Router Management
|-- index.js
```

---

## Routing URLs
Here are the URLs and their corresponding pages:

### Public Routes
| URL                      | Description              | Access       |
|--------------------------|--------------------------|--------------|
| `/`                      | Landing Page             | Public       |
| `/auth/sign-in`          | Login Page               | Public       |
| `/auth/register`         | User Registration Page   | Public       |

### User Routes (After Login)
| URL                      | Description              | Access       |
|--------------------------|--------------------------|--------------|
| `/`                      | User Dashboard           | User         |
| `/user`                  | User Dashboard           | User         |
| `/user/my-prescriptions` | View User Prescriptions  | User         |

### Pharmacy Routes (After Login)
| URL                      | Description              | Access       |
|--------------------------|--------------------------|--------------|
| `/`                      | Pharmacy Dashboard       | Pharmacy     |
| `/pharmacy`              | Pharmacy Dashboard       | Pharmacy     |
| `/pharmacy/register`     | Register New Pharmacist  | Pharmacy     |

---

## How Authentication and Routing Work
1. The **Router Component** checks if a user is logged in (`user` state) and their role:
   - If the role is `User`, the **User Dashboard** routes are loaded.
   - If the role is `Pharmacy`, the **Pharmacy Dashboard** routes are loaded.
   - If no user is logged in, the **Authentication Routes** (login and register) are loaded.

2. **Redux** is used to manage user state and authentication status.

3. **Toast Notifications** display success and error messages.

## Technologies Used
- **React.js**: Frontend framework
- **Redux**: State management
- **React-Router**: Routing
- **React-Toastify**: Notifications








