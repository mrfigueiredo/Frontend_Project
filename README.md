# frontend-Project

Requirements:
NodeJs: @20.12.1
React: @18.2.0

For start, the project as created using:

- Vite: https://vitejs.dev/
  -npm create vite@4.1.0

- Chakra-UI: https://chakra-ui.com/
  -npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

  - I tried to combine an MVC and a Component-Based Architecture. For this project, it could be used with a Redux architecture, but would be increasing the complexity to much for those applications.
  - Focused on the Single Responsability Principle (SRP).
  - Use of JSX for more readable and expressive code.
  - The use Props (short for properties) are inputs to a React component. They allow you to pass data from a parent component to a child component, to follow the SRP.
  - The use of States to represent the data that a component owns and can change over time. State is managed differently in functional components (using Hooks) and class components.
    -Following the principle of lifting state up: move the shared state up to the closest common ancestor of the components that need it.
