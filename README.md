# Prisma Frontend

## Overview

This project is a modern and responsive frontend for the Prisma application. It includes a sidebar, content area, and prompt area, all designed to be visually appealing and fully responsive across all devices.

---

## Features

### 1. **Sidebar**
- A collapsible sidebar that can be toggled open or closed.
- Includes a logo and buttons for navigation (`Profile` and `Recommendation`).
- Smooth animations for opening and closing.
- Fully responsive:
  - Adjusts layout dynamically based on screen size.
  - Compact width when closed.

### 2. **Content Area**
- Displays the main content of the application.
- Includes a title (`Prism`), a description, and additional text.
- Fully responsive:
  - Centers content with space on both sides.
  - Adjusts font sizes and layout for smaller screens.
  - Dynamically adjusts layout based on the sidebar state.

### 3. **Prompt Area**
- A floating input area at the bottom of the screen, similar to ChatGPT's UI.
- Includes an input field and a submit button.
- Fully responsive:
  - Stacks input and button vertically on smaller screens.
  - Dynamically adjusts position to avoid being covered by the sidebar.

---

## Technologies Used

- **React**: For building the user interface.
- **Material-UI (MUI)**: For styling components and using modern icons.
- **CSS**: For additional custom styling and responsiveness.

---

## File Structure

### Components
- **`Sidebar.jsx`**: Handles the collapsible sidebar functionality.
- **`ContentArea.jsx`**: Displays the main content of the application.
- **`PromptArea.jsx`**: Provides a floating input area for user interaction.

### Styles
- **Material-UI (MUI)**: Used for styling and responsiveness.
- **Custom CSS**: Used for additional styling and layout adjustments.

---

## Responsive Design

### General Approach
- Used Material-UI's `Box`, `Container`, and `Typography` components for layout and styling.
- Added responsive properties like `flexDirection`, `padding`, and `fontSize` to adjust styles for smaller screens.
- Ensured all components are usable and visually appealing on devices of all sizes.

### Specific Adjustments
- **Sidebar**:
  - Dynamically adjusts width and layout based on the open/close state.
  - Compact width when closed to maximize screen space.
- **Content Area**:
  - Centers content with a maximum width for readability.
  - Adjusts font sizes, spacing, and layout for smaller screens.
  - Dynamically adjusts margin to avoid being overlapped by the sidebar.
- **Prompt Area**:
  - Floating at the bottom of the screen.
  - Dynamically adjusts position to avoid being covered by the sidebar.
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
5. Open the application in your browser at `http://localhost:5173`.

---

## Future Improvements

- Add more navigation options to the sidebar.
- Integrate backend APIs for dynamic content.
- Enhance accessibility for better usability.
- Add animations for smoother transitions.

---

## Contributors

- **Meraj Ali** - Frontend Development and Design

---


