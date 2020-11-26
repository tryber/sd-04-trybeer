import React from 'react';
import Buttons from '../buttons';
import '../styleMenu.css';

function AdminElementsMenu() {
  return (
    <div className="admin-side-bar-container">
      {Buttons('pedidos', '/admin/orders', 'side-menu-item-orders')}
      {Buttons('perfil', '/admin/profile', 'side-menu-item-profile')}
      {Buttons('Sair', '/login', 'side-menu-item-logout')}
    </div>
  );
}
export default AdminElementsMenu;
