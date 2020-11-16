import React from 'react';
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
} from '@chakra-ui/react';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variantColor="teal" onClick={ onOpen }>
        Open
      </Button>
      <Drawer
        isOpen={ isOpen }
        placement="right"
        onClose={ onClose }
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
