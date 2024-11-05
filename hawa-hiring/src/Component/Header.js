import React from 'react';
import { AppBar, Toolbar, Container, Typography, Link } from '@mui/material';

function App() {
  return (
    <header id="header" className="widget-header navbar-header">

      {/* AppBar serves as the header */}
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Container maxWidth="lg">
            <div className="logo-holder">
              <Link href="https://www.hawapurecare.com.au/" target="_blank" className="navbar-brand">
                <img
                  src="/hawa.png"
                  alt="Hawa Pure Care"
                  className="img-responsive"
                  style={{ maxHeight: '150px', width: 'auto' }}
                />
              </Link>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </header>
  );
}
export default App;