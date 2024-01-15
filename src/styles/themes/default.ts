// theme.ts

const theme = {
  colors: {
    primary: '#3498db', // Blue
    secondary: '#2ecc71', // Green
    accent: '#e74c3c', // Red
    background: '#ecf0f1', // Light Gray
    text: '#2c3e50', // Dark Gray
    error: '#e74c3c', // Red (for error)
    success: '#2ecc71', // Green (for success)
    black: '#000000',
    white: '#ffffff',
  },
  buttons: {
    padding: '1rem 2rem',
    primary: {
      backgroundColor: '#3498db',
      color: '#fff',
      hoverBackgroundColor: '#2980b9',
    },
    secondary: {
      backgroundColor: '#2ecc71',
      color: '#fff',
      hoverBackgroundColor: '#27ae60',
    },
  },
  borders: {
    default: '1px solid #bdc3c7',
    radius: '0.5rem',
  },
  input: {
    border: '1px solid #3498db',
    borderRadius: '4px',
    padding: '0.5rem',
    margin: '0.25rem 0',
    focusBorder: '2px solid #3498db',
    focusBoxShadow: '0 0 5px rgba(52, 152, 219, 0.7)',
    height: '32px',
  },
  error: {
    color: '#e74c3c',
    border: '1px solid #e74c3c',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    margin: '0.25rem 0',
    fontSize: '0.825rem',
    backgroundColor: '#f8d7da',
  },
  success: {
    color: '#2ecc71',
    border: '1px solid #2ecc71',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    margin: '0.25rem 0',
    fontSize: '0.825rem',
    backgroundColor: '#c9e6cb',
  },
};

export default theme;
