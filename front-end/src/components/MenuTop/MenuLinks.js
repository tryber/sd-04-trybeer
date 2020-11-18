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
            Produtos
          </LinkBtn>
          <LinkBtn route="/login">
            Produtos
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
