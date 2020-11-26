import React from 'react';
import PropTypes from 'prop-types';
import '../styleMenu.css';

import AdminElementsMenu from './AdminElementsMenu';

function AdminTopMenu({ title }) {
  return (
    <header className="header-content">
      <div className="header-title">
        <h2 data-testid="top-title">{`${title}`}</h2>
      </div>
      <AdminElementsMenu />
    </header>
  );
}

AdminTopMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AdminTopMenu;
