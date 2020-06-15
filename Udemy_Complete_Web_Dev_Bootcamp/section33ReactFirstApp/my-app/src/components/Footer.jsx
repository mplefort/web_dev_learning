import React from 'react';

function Footer() {
  const date = new Date();

  return (
    <footer>
      <p>Copywrite &copy; {date.getFullYear()} </p>
    </footer>
  );
}

export default Footer;
