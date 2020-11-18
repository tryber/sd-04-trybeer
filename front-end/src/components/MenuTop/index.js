import React from 'react';
import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import MenuLinks from './MenuLinks';

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column">
      <Flex bg="black" color="white" justify="space-between">
        <Center w="100px">
          <IconButton variant="outline" border="0px" onClick={ onOpen } icon={ <HamburgerIcon /> } data-testid="top-hamburguer" />
        </Center>
        <Center w="100px">
          <Text>Trybeer</Text>
        </Center>
        <Center w="100px" />
      </Flex>
      <Flex id="modalContainer">
        <Drawer
          isOpen={ isOpen }
          placement="left"
          onClose={ onClose }
          class="side-menu-container"
          getContainer={ () => document.getElementById('modalContainer') }
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <MenuLinks menuType="admin" />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={ 3 } onClick={ onClose }>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>

  );
};
export default Menu;
