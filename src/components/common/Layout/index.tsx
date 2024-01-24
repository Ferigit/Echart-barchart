import React from 'react';
import Footer from 'components/common/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="layout">
    <main className="content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
