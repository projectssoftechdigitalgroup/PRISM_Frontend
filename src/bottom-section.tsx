import { Box, Center } from "@chakra-ui/react";

export function BottomSection() {
  return (
    <Box pb="4" bg="gray.50" borderTop="1px solid" borderColor="gray.200">
      <Center fontSize="xs" color="gray.600" py="2">
        Can make mistakes. Check important info.
      </Center>
    </Box>
  );
}
