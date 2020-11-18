import React from 'react';
import LinkBtn from './LinkBtn';

const MenuLinks = (props) => {
  const { menuType } = props;

  return (
    <div>
      {menuType === 'client' ? (
        <>
          <LinkBtn route="/login">
            Produtos
          </LinkBtn>
          <LinkBtn route="/login">
            Meus pedidos
          </LinkBtn>
          <LinkBtn route="/login">
            Meu Perfil
          </LinkBtn>
          <LinkBtn route="/login">
            Meu Perfil
          </LinkBtn>
        </>
      ) : (
        <LinkBtn
          route="/register"
        >
          Register
        </LinkBtn>
      )}
    </div>
  );
};

export default MenuLinks;
