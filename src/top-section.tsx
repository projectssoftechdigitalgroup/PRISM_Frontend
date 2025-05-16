import { Flex, IconButton } from '@chakra-ui/react';
import { ChatGPTMenu } from './ChatGPTMenu';
// import { Avatar } from './components/ui/avatar';
import { Tooltip } from './components/ui/tooltip';
import { NewChatIcon, SidebarIcon } from './icons/sidebar-icons';
import { useSidebarContext } from './sidebar-context';

export function TopSection() {
  const { sideBarVisible, toggleSidebar } = useSidebarContext();
  return (
    <Flex
      justify='space-between'
      align='center'
      p='3'
      bg='gray.50'
      color='gray.800'
      boxShadow='sm'
    >
      {!sideBarVisible && (
        <Flex gap='2'>
          <Tooltip
            content='Close sidebar'
            positioning={{ placement: 'right' }}
            showArrow
          >
            <IconButton variant='ghost' onClick={toggleSidebar} _hover={{ bg: '#E4E4E7' }}>
              <SidebarIcon fontSize='2xl' color='gray.800' />
            </IconButton>
          </Tooltip>

          <Tooltip content='New chat' showArrow>
            <IconButton variant='ghost' _hover={{ bg: '#E4E4E7' }}>
              <NewChatIcon fontSize='2xl' color='gray.800' />
            </IconButton>
          </Tooltip>
          <ChatGPTMenu />
        </Flex>
      )}
      {sideBarVisible && <ChatGPTMenu />}
    </Flex>
  );
}
