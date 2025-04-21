# Prisma Frontend

## Overview

This project is a modern and responsive frontend for the Prisma application. It includes a sidebar, content area, and prompt area, all designed to be visually appealing and fully responsive across all devices.

---

## Features

### 1. **Sidebar**
- A collapsible sidebar that can be toggled open or closed.
- Includes a logo and buttons for navigation (`Profile` and `Interview Agent`).
- Smooth animations for opening and closing.
- Fully responsive:
  - Adjusts to a horizontal layout on smaller screens.
  - Compact width when closed.

### 2. **Content Area**
- Displays the main content of the application.
- Includes a title (`Prism`), a description, and additional text.
- Fully responsive:
  - Centers content with space on both sides.
  - Adjusts font sizes and layout for smaller screens.

### 3. **Prompt Area**
- A floating input area at the bottom of the screen, similar to ChatGPT's UI.
- Includes an input field and a submit button.
- Fully responsive:
  - Stacks input and button vertically on smaller screens.
  - Smooth animations and modern design.

---

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling components with a focus on responsiveness and modern design.
- **Bootstrap**: For layout and utility classes to enhance responsiveness.
- **Font Awesome**: For icons used in the content area.

---

## File Structure

### Components
- **`Sidebar.jsx`**: Handles the collapsible sidebar functionality.
- **`ContentArea.jsx`**: Displays the main content of the application.
- **`PromptArea.jsx`**: Provides a floating input area for user interaction.

### Styles
- **`Sidebar.css`**: Styles for the sidebar, including responsiveness.
- **`ContentArea.css`**: Styles for the content area, including typography and layout.
- **`PromptArea.css`**: Styles for the floating prompt area, including animations and responsiveness.

---

## Responsive Design

### General Approach
- Used `flexbox` for layout alignment and spacing.
- Added media queries to adjust styles for smaller screens.
- Ensured all components are usable and visually appealing on devices of all sizes.

### Specific Adjustments
- **Sidebar**:
  - Horizontal layout on smaller screens.
  - Compact width when closed.
- **Content Area**:
  - Centered content with a maximum width for readability.
  - Adjusted font sizes and spacing for smaller screens.
- **Prompt Area**:
  - Floating at the bottom of the screen.
  - Stacks input and button vertically on smaller screens.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd prism-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.

---

## Future Improvements

- Add more navigation options to the sidebar.
- Integrate backend APIs for dynamic content.
- Enhance accessibility for better usability.

---

## Contributors

- **Meraj Ali** - Frontend Development and Design

---


