import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/core';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setActive] = useState('false');
  const btnRef = React.useRef();

  const toggleClose = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Button ref={ btnRef } variantColor="teal" onClick={ toggleClose }>
        Open
      </Button>
      {isActive ? onOpen() : onClose()}
      <Drawer
        isOpen={ isOpen }
        placement="right"
        onClose={ onClose }
        finalFocusRef={ btnRef }
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Link to="/login">
              Login
            </Link>
            <Link to="/products">
              Products
            </Link>
            <Link to="/register">
              Register
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={ 3 } onClick={ onClose }>
              Cancel
            </Button>
            <Button color="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>

  );
};
export default Home;
