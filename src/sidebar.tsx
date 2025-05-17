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
import RecommendationIcon from "../src/assets/icons/recommend 1.png"
import ProfileIcon from "../src/assets/icons/profile.png"


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
              <img width={"50px"} height={"50px"} src={RecommendationIcon} alt="not found" />
              <Text
                style={{ color: "black" }}
                fontSize="15px"
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
            <NavLink to="/" style={{ textDecoration: "none", width: "100%" }}>
              <Flex align="center" gap="2">
                <img width={"50px"} height={"50px"} src={ProfileIcon} alt="not found" />
                <Text
                  style={{ color: "black" }}
                  fontSize="15px"
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
                  width="50px"
                  height="50px"
                >
                  <path
                    fill="#673AB7"
                    d="M13 3a9 9 0 00-9 9H2l3.89 4.89.07.14L10 12H7a7 7 0 117 7 6.9 6.9 0 01-4.24-1.42l-1.42 1.42A9 9 0 1013 3zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"
                  />
                </svg>
                <Text
                  style={{ color: "black" }}
                  fontSize="15px"
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
