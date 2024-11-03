MegaBlog - A Blogging Platform

MegaBlog is a feature-rich blogging application built using React and integrated with Appwrite for authentication. It allows users to create, edit, and view blog posts. This platform is ideal for individuals or teams looking to share ideas and content in a structured blog format.

Features

User Authentication: Secure login and registration with Appwrite.

Create and Edit Posts: Users can add, edit, and delete posts.

Rich Text Editor: Enhanced post formatting capabilities for better user experience.

Tech Stack

Frontend: React, Tailwind CSS

Backend: Appwrite (for user authentication)

Build Tool: Vite


Setup and Installation

1. Clone the Repository

git clone https://github.com/18-sumit/MegaBlog.git
cd MegaBlog


2. Install Dependencies

npm install


3. Configure Environment Variables

Create a .env file in the root directory and populate it using .env.sample for guidance. Ensure you have the Appwrite credentials set up for authentication.


4. Run the Application

npm run dev

Your app will be available at http://localhost:3000.



Project Structure

src/components: Contains reusable components like buttons, input fields, and layout components.

src/pages: Includes pages such as Home, Login, Signup, AddPost, and EditPost.

src/store: Contains the Redux slices for managing application state.

public/: Holds static assets.


Usage

Create an Account: Register as a new user.

Write and Publish Posts: Use the editor to write your content and publish it.

Edit Existing Posts: Update content or delete posts as needed.

