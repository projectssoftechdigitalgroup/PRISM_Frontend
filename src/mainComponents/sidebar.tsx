import { Box, Button, Flex, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { Tooltip } from "../components/ui/tooltip";
import { NewChatIcon, SidebarIcon } from "../icons/sidebar-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import RecommendationIcon from "../assets/icons/recommend 1.png";
import ProfileIcon from "../assets/icons/profile.png";
import { CiSearch } from "react-icons/ci";

import { useSidebarContext } from "../sidebar-context";

export function Sidebar() {
  const { sideBarVisible, toggleSidebar } = useSidebarContext();
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false); // State to toggle search input
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSearchToggle = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
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
      "Can You Draft me formal Email for a Cli...",
      "Can You Draft me formal Email for a Cli...",
      "Can You Draft me formal Email for a Cli...",
      "Can You Draft me formal Email for a Cli...",
      "Can You Draft me formal Email for a Cli...",
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
      w={!sideBarVisible ? "0" : { base: "100%", sm: "260px" }} // Full width on mobile screens
      position={{ base: "absolute", sm: "relative" }} // Position absolute for mobile
      top="0"
      left="0"
      minH="100%" // Make height dynamic based on content
      overflow="hidden"
      transition="width 0.3s"
      boxShadow="md"
      borderRight="0.8px solid "
      borderColor="gray.300"
      zIndex="10" // Ensure it appears above other elements
    >
      <Stack h="full" px="4" py="3" color="black">
        <Flex justify="space-between" align="center" mb="4" gap="2">
          <Tooltip
            content="Close sidebar"
            positioning={{ placement: "right" }}
            showArrow
          >
            <IconButton
            marginEnd={"30%"}
              variant="ghost"
              onClick={toggleSidebar}
              _hover={{ bg: "#E4E4E7" }}
            >
              <SidebarIcon fontSize="2xl" color="black" />
            </IconButton>
          </Tooltip>
          <Tooltip content="search" showArrow>
            <Flex align="center" gap="2">
              <IconButton
                variant="ghost"
                _hover={{ bg: "#E4E4E7" }}
                onClick={handleSearchToggle} // Toggle search input visibility
              >
                <CiSearch fontSize="2xl" color="black" />
              </IconButton>
            </Flex>
          </Tooltip>
          <Tooltip content="New chat" showArrow>
            <IconButton
              variant="ghost"
              _hover={{ bg: "#E4E4E7" }}
              onClick={() => navigate("/newChat")}
            >
              <NewChatIcon fontWeight="bold" fontSize="2xl" color="black" />
            </IconButton>
          </Tooltip>
       
        </Flex>
        <Flex
          align="center"
          bg="white"
          borderRadius="md"
          boxShadow="sm"
          px="3"
          py="2"
          mb="4"
          style={{ display: searchVisible ? "flex" : "none" }} // Show only when searchVisible is true
        >
          <CiSearch fontSize="1.5rem" color="gray" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Trigger search on Enter key
            style={{
              border: "none",
              outline: "none",
              marginLeft: "10px",
              flex: 1,
              fontSize: "1rem",
              backgroundColor: "#f9f9f9", // Light background color for placeholder
            }}
          />
        </Flex>
        <Stack px="2" gap="2" flex="1">          {/* Recommendations Tab */}
          <HStack
            _hover={{
              bg: "gray.200",
              textDecor: "none",
            }}
            px="2"
            py="1.5"
            borderRadius="md"
            w="100%"
            whiteSpace="nowrap"
            onClick={() => navigate("/recommendations")}
            cursor="pointer"
          >
            <Flex align="center" gap="2">
              <Box minWidth="30px">
                <img
                  width={"30px"}
                  height={"30px"}
                  src={RecommendationIcon}
                  alt="recommendations icon"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Text
                style={{ color: "black" }}
                fontSize="14px"
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
            py="1.5"
            borderRadius="md"
            w="100%"
            whiteSpace="nowrap"
          >
            <NavLink to="/middlesection" style={{ textDecoration: "none", width: "100%" }}>
              <Flex align="center" gap="2">
                <Box minWidth="30px">
                  <img
                    width={"30px"}
                    height={"30px"}
                    src={ProfileIcon}
                    alt="profile icon"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Text
                  style={{ color: "black" }}
                  fontSize="14px"
                  fontWeight="medium"
                >
                  Profile
                </Text>
              </Flex>
            </NavLink>
          </HStack>          {/* History Tab */}
          <div>
            <HStack
              _hover={{ bg: "gray.200" }}
              onClick={toggleDropdown}
              px="2"
              py="1.5"
              borderRadius="md"
              w="100%"
              whiteSpace="nowrap"
              cursor="pointer"
              mb="1"
            >
              <Flex align="center" gap="2" width="100%">
                <Box minWidth="30px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                    height="30px"
                  >
                    <path
                      fill="#673AB7"
                      d="M13 3a9 9 0 00-9 9H2l3.89 4.89.07.14L10 12H7a7 7 0 117 7 6.9 6.9 0 01-4.24-1.42l-1.42 1.42A9 9 0 1013 3zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"
                    />
                  </svg>
                </Box>
                <Text
                  style={{ color: "black" }}
                  fontSize="14px"
                  fontWeight="medium"
                >
                  History
                </Text>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: "16px",
                    transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  ⌄
                </span>
              </Flex>
            </HStack>            <div
              style={{
                maxHeight: showDropdown ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                paddingLeft: "10px",
              }}
            >
              {Object.entries(historyData).map(([section, items]) => (
                <div key={section} style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#666",
                      marginBottom: "6px",
                      paddingLeft: "4px",
                    }}
                  >
                    {section}
                  </div>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => navigate("/history")}
                      style={{
                        fontSize: "12px",
                        padding: "6px 8px",
                        borderRadius: "4px",
                        marginBottom: "2px",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "lightgray")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          index === 0 && section === "Today"
                            ? "#eee"
                            : "transparent")
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>             <Button
            onClick={handleLogout}
            bg="linear-gradient(135deg, #B5BCFF, #E041B1)"
            color="white"
            _hover={{ bg: "#a100cc" }}
            size="sm"
            borderRadius="md"
            fontSize="14px"
            py="1.5"
            mt="2"
          >
            Logout
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
