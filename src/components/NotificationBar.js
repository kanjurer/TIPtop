import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  LinkOverlay,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

export default () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton aria-label="Search database" icon={<BellIcon />} m={2} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader><b>Notifications</b></PopoverHeader>
        <PopoverBody>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <LinkOverlay href="#">
              <Box> Your Study pomodoro has been scheduled for Friday.</Box>
            </LinkOverlay>
            <Box>Your Hackathon has been scheduled for tomorrow.</Box>
            <Box>Your hackathon prize of 2500$ will be arriving in 2 weeks.</Box>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
