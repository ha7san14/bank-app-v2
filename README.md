# DevBank: Bank App
## Overview
Devbank is a modern online banking platform designed for seamless user experiences. It supports two user roles: Admin and Customer. Admins can create new users, edit or delete existing users, and oversee customer accounts and transactions. Customers can perform essential banking functions such as fund transfers, transaction tracking, viewing their profile, and changing their password. The platform ensures secure access and interactions through JWT (JSON Web Token)-based authentication and authorization.

## Video Demo

https://github.com/user-attachments/assets/bb0e205e-fec3-4a8e-9df2-4b4e2affdc2a


## Features
### Admin Functionalities:
* Login: Authenticate as an admin using credentials. <br/>
* Create a new user: Add a new customer user along with the account number. <br/>
* Update Customer Profile: Edit any customer's personal information. <br/>
* Delete an Account: Remove a customer account. <br/>
* View All Accounts: View details of all users. <br/>
* View Transactions of Users: Access the transaction history of all users. <br/>
* Logout: Securely log out from the admin panel. <br/>
### Customer Functionalities:
* Login: Authenticate using credentials. <br/>
* View Profile: View your personal information and change your password. <br/>
* View Balance: Check your account balance. <br/>
* View Transaction History: View the transaction history of your account. <br/>
* Fund Transfer: Transfer funds between accounts. <br/>
* Logout: Securely log out from the application. <br/>

## Technology Stack
### Frontend:

* React.js with Tailwind css. <br/>
* Axios for API calls. <br/>
* React Router DOM for routing. <br/>
### Backend:

* Java Spring Boot (REST API). <br/>
* Spring Security for JWT-based authentication and authorization. <br/>
### Database:

* MySQL.
### Security:


* JWT Authentication: The application employs JSON Web Tokens (JWT) to authenticate users. Upon logging in, the backend generates a JWT, which is securely stored on the frontend (e.g., in localStorage). This token is included in subsequent server requests to verify user identity. <br/>
* Role-based Access Control: There are two roles: Admin and Customer. Specific routes and functionalities are protected based on the user’s role. <br/>

## Screenshots

|  Customer Signup                              |  Customer Login                               |
|-----------------------------------------|-----------------------------------------|
| ![User_Signup](https://github.com/user-attachments/assets/5e4c2dd0-1cbc-464a-92dc-ec7fe0e9216f) | ![User_Login](https://github.com/user-attachments/assets/b929779f-993d-402f-87bd-855a0652aa65) |

|  Customer Dashboard                              |  Customer Fund Transfer                               |
|-----------------------------------------|-----------------------------------------|
| ![User_Dashboard](https://github.com/user-attachments/assets/60fc8b83-47e6-4fad-9d86-241fd1e7535d) | ![User_FundTransfer](https://github.com/user-attachments/assets/5b05ee17-a1fe-456b-84de-ddbb714dfa3e) |

|  Customer Transactions History                              |  Customer Profile                               |
|-----------------------------------------|-----------------------------------------|
| ![User_Transactions](https://github.com/user-attachments/assets/31d4bf5b-81a5-4761-8925-073f5c2e1a7e) | ![User_Profile](https://github.com/user-attachments/assets/59a7d03a-9651-4965-bf83-82d610d0fec4) |

|  Admin Login                              |  Admin Dashbboard                               |
|-----------------------------------------|-----------------------------------------|
| ![Admin_Login](https://github.com/user-attachments/assets/36a36913-4d36-490f-8ac5-a832efcdbc1b) | ![Admin_Dashboard](https://github.com/user-attachments/assets/59389e47-4165-48c7-a0bc-1b7aaaad65f8) |

|  Admin Search                              |  Admin Edit Customer Profile                               |
|-----------------------------------------|-----------------------------------------|
| ![Admin_Search](https://github.com/user-attachments/assets/b5a64c59-7c1b-45f3-b974-8aa7b0384139) | ![Admin_Edit_User_Profile](https://github.com/user-attachments/assets/495999d2-6742-44b0-bf58-69e3e210bb04) |
