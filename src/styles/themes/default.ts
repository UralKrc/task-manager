const theme = {
  colors: {
    primary: '#3498db',
    text: '#2c3e50',
    error: '#e74c3c',
    success: '#2ecc71',
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
      backgroundColor: '#e74c3c',
      color: '#fff',
      hoverBackgroundColor: '#e74c3c',
    },
  },
  borders: {
    default: '1px solid #bdc3c7',
    radius: '0.5rem',
  },
  input: {
    border: '1px solid #3498db',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    margin: '0.25rem 0',
    focusBorder: '2px solid #2ecc71',
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
