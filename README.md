# Contact Manager

The Contact Manager is a web application developed using the React framework. It allows users to organize and store their contacts efficiently. The application implements essential features such as adding, deleting, editing, and searching contacts to provide a comprehensive contact management solution.

## Features

- **Add Contact**: Users can add new contacts by providing their name, email, and phone number. The application validates the input to ensure the data is entered correctly.
- **Delete Contact**: Users can delete contacts from the list. A confirmation dialog is displayed to prevent accidental deletions.
Edit Contact**: Users can edit existing contacts by updating their name, email, or phone number. The changes are instantly reflected in the contact list.
- **Search Contact**: The application provides a search functionality that allows users to find specific contacts based on their name, email, or phone number. The search results are displayed in real-time as the user types.
- **Context API**: The application leverages React's Context API to efficiently manage and share contact data across different components. This ensures that all components have access to the most up-to-date contact information.
- **Axios**: Axios, a popular HTTP client, is used to interact with the backend server for seamless CRUD operations. It enables the application to send requests to the server to create, read, update, and delete contacts.

## Installation

To run the Contact Manager application locally, follow these steps:

### 1. Clone the repository:
```
git clone https://github.com/kishanlalchoudhary/Contact-Manager.git
```
### 2. Navigate to the project directory:
```
cd contact-manager
```
### 3. Install the dependencies:
```
npm install
```
### 4. Start the development server:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Technologies Used
- React
- React Router
- Context API
- Axios
- HTML5
- CSS3
- Semantic UI
