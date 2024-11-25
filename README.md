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

|  Admin and Customer Login                              |  Admin Dashbboard                               |
|-----------------------------------------|-----------------------------------------|
| ![Admin Customer_Login](https://github.com/user-attachments/assets/d26609d4-b580-46c3-8b83-6bd0a31f30e5)| ![Admin_Dashboard](https://github.com/user-attachments/assets/607c92a8-63c4-40b3-a10f-87fd30dc1a60) |

|  Admin Create New User Account                            |  Admin Edit User Account                               |
|-----------------------------------------|-----------------------------------------|
| ![Admin_Create](https://github.com/user-attachments/assets/b3feec84-6efd-4d9b-af8e-d1d06e94254b) | ![Admin_Edit_User_Profile](https://github.com/user-attachments/assets/13ad22aa-0445-459a-b0c2-1da2930b7a23) |

|  Admin Delete User Account                              |  Admin Manage User Balance                              |
|-----------------------------------------|-----------------------------------------|
| ![Admin_Delete](https://github.com/user-attachments/assets/71368844-fcd7-4289-bc0a-f68cf401afe9) | ![Admin_Manage_User_Balance](https://github.com/user-attachments/assets/b5511167-1c9f-43a4-8067-1f28ae8e6abc) |

|  Admin Edit User Balance                               |  Admin Manage Transactions                              |
|-----------------------------------------|-----------------------------------------|
| ![Admin_Edit_User_Balance](https://github.com/user-attachments/assets/a1fd1561-1435-49e2-95ac-3c2caf461f58) | ![Admin_Manage_Transactions](https://github.com/user-attachments/assets/27766b75-3220-4c57-96ac-520a696c92ae) |

|  Filter Date Feature                              |  User Profile                              |
|-----------------------------------------|-----------------------------------------|
| ![Filter_Date](https://github.com/user-attachments/assets/8a377a81-9a15-45ea-a17d-a6cfee76bdd8) | ![User_Profile](https://github.com/user-attachments/assets/013d5f24-8aff-4b77-9608-a7754f85b9d3) |

|  User Change Password                             |  User Transactions History                                |
|-----------------------------------------|-----------------------------------------|
| ![User_Change_Password ](https://github.com/user-attachments/assets/911302ad-8056-43e7-8f1e-95578953168a) | ![User_Transaction](https://github.com/user-attachments/assets/752a31c0-6247-45bb-acc8-80495caaf50a) |

|  User Funds Transfer                             |                       
|-----------------------------------------|
| ![User_Funds_Transfer](https://github.com/user-attachments/assets/d483bddc-f918-406e-9f1a-4e1ef1e341f6) |

