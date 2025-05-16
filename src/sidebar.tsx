import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Tooltip } from "./components/ui/tooltip";
import {
  NewChatIcon,
  SidebarIcon,
} from "./icons/sidebar-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

// import { useSidebarContext } from "./sidebar-context";

export function Sidebar() {
  // const { sideBarVisible, toggleSidebar } = useSidebarContext();
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const historyData = {
    Today: ["Inspiring movies Recommendations", "Help Me Write a Nice Email"],
    "Previous 7 days": ["How to Sound More Professional?"],
    "Previous 30 days": [
      "What Does This Contract Mean?",
      "Can You Check My Message?",
      "Can You Draft me formal Email for a Cli...",
      "Can You Draft me formal Email for a Cli...",
      "Can You Draft me formal Email for a Cli...",
      "Can You Draft me formal Email for a Cli...",
      "Can You Draft me formal Email for a Cli...",
      "Can You Draft me formal Email for a Cli...",
    ],
  };

  // const handleHistoryClick = (item:any) => {
  //   console.log(`Clicked on: ${item}`);
  // };

  return (
    <Box
      bg="#F0F2F6"
      // w={!sideBarVisible ? "0" : "260px"}
      overflow="hidden"
      transition="width 0.3s"
      boxShadow="md"
      borderRight="0.8px solid "
      borderColor="gray.300"
    >
      <Stack h="full" px="4" py="3" color="black">
        <Flex justify="space-between" align="center" mb="4">
          <Tooltip
            content="Close sidebar"
            positioning={{ placement: "right" }}
            showArrow
          >
            <IconButton
              variant="ghost"
              // onClick={toggleSidebar}
              _hover={{ bg: "#E4E4E7" }} // Updated hover effect color
            >
              <SidebarIcon fontSize="2xl" color="black" />
            </IconButton>
          </Tooltip>
          <Tooltip content="New chat" showArrow>
            <IconButton
              variant="ghost"
              _hover={{ bg: "#E4E4E7" }} // Updated hover effect color
              onClick={() => navigate("/")}
            >
              <NewChatIcon fontSize="2xl" color="black" />
            </IconButton>
          </Tooltip>
        </Flex>
        <Stack px="2" gap="2" flex="1">

          
          {/* Recommendations Tab */}
          <HStack
            _hover={{
              bg: "gray.200",
              textDecor: "none",
            }}
            px="2"
            py="2"
            borderRadius="md"
            w="100%"
            whiteSpace="nowrap"
            onClick={() => navigate("/recommendations")}
          >
            <Flex align="center" gap="2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M2 21h4V9H2v12zM22 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32a1 1 0 00-.29-.7L13 2 7.59 7.41A2 2 0 007 8.83V19a2 2 0 002 2h8c.82 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V10z" />
              </svg>
              <Text
                style={{ color: "black" }}
                fontSize="sm"
                fontWeight="medium"
              >
                Recommendations
              </Text>
            </Flex>
          </HStack>

          {/* Profile Tab */}
          <HStack
            _hover={{
              bg: "gray.200",
              textDecor: "none",
            }}
            px="2"
            py="2"
            borderRadius="md"
            w="100%"
            whiteSpace="nowrap"
          >
            <NavLink to="#" style={{ textDecoration: "none", width: "100%" }}>
              <Flex align="center" gap="2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="20"
                  height="20"
                >
                  <circle cx="32" cy="16" r="12" fill="#90CAF9" />
                  <path
                    d="M16 58v-6a10 10 0 0110-10h12a10 10 0 0110 10v6H16z"
                    fill="#1976D2"
                  />
                  <path d="M28 36h8l2 6h-12l2-6z" fill="#BBDEFB" />
                </svg>
                <Text
                  style={{ color: "black" }}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  Profile
                </Text>
              </Flex>
            </NavLink>
          </HStack>

          {/* History Tab */}
          <div>
            {/* Header */}
            <Box
            _hover={{ bg: "#E4E4E7" }}
              onClick={toggleDropdown}
              style={{
                padding: "5px 5px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              >
              <Flex align="center" gap="2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#673AB7"
                    d="M13 3a9 9 0 00-9 9H2l3.89 4.89.07.14L10 12H7a7 7 0 117 7 6.9 6.9 0 01-4.24-1.42l-1.42 1.42A9 9 0 1013 3zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"
                  />
                </svg>
                <Text
                  style={{ color: "black" }}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  History
                </Text>
              </Flex>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "18px",
                  transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                ⌄
              </span>
            </Box>

            {/* History Dropdown */}
            <div
              style={{
                maxHeight: showDropdown ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              {Object.entries(historyData).map(([section, items]) => (
                <div key={section} style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      color: "#666",
                      marginBottom: "10px",
                    }}
                  >
                    {section}
                  </div>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      // onClick={() => handleHistoryClick(item)}
                      onClick={() =>navigate("/history")}
                      style={{
                        fontSize: "13px",
                        padding: "8px 10px",
                        borderRadius: "6px",
                        marginBottom: "4px",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "lightgray")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          index === 0 && section === "Today" ? "#eee" : "transparent")
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
