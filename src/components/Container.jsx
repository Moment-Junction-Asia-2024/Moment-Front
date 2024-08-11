import styled from "styled-components";
import {MessageSquare, Car, MapPin, BarChart2, Menu, X, Trees} from 'lucide-react';
import {useState} from "react";
import React from 'react'

const Contain = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 20px;
  //padding-top: 0;
  position: relative;
`;


const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${props => props.isOpen ? '300px' : '0'};
`;

const ContentArea = styled.div`
  padding: 20px;
`;

const SidebarContainer = styled.div`
  position: fixed;
  left: ${props => props.isOpen ? '0' : '-300px'};
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
  //box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out;
  z-index: 1000;
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const ToggleButton = styled.button`
  position: fixed;
  left: ${props => props.isOpen ? '235px' : '10px'};
  top: 10px;
  z-index: 1001;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: left 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
  cursor: pointer;
  div{
    overflow: hidden;
    white-space: nowrap;          /* 텍스트가 줄바꿈 없이 한 줄로 유지되도록 합니다 */
    text-overflow: ellipsis;
    width: 200px;

  }
  &:hover {
    background-color: #e9ecef;
  }
`;

const MenuItemChat = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  //background-color: #f8f9fa;
  border-radius: 5px;
  cursor: pointer;
  div{
    color: #885EE1;
    overflow: hidden;
    white-space: nowrap;          /* 텍스트가 줄바꿈 없이 한 줄로 유지되도록 합니다 */
    text-overflow: ellipsis;
    width: 200px;
  }
  &:hover {
    //font-weight: bold;
  }
`;


const MenuIcon = styled.span`
  margin-right: 10px;
`;


export default function  Container({children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const menuItems = [
        { icon: <Car size={20} />, text: "Real-time parking availability" },
        { icon: <MapPin size={20} />, text: "Average rent in San Francisco" },
        { icon: <BarChart2 size={20} />, text: "Crime rate comparison LA vs NYC" },
        { icon: <Trees size={20} />, text: "Public parks in Chicago" },
    ];
    return (
        <PageContainer isOpen={isOpen}>
            <ToggleButton onClick={toggleSidebar} isOpen={isOpen}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </ToggleButton>
            <SidebarContainer isOpen={isOpen}>
                <SidebarContent>
                    {
                        <MenuItemChat key={'dd'}>
                            <MenuIcon><MessageSquare size={20} color={'#885EE1'}/></MenuIcon>
                            <div style={{marginBottom: '5px'}}>
                                New chat
                            </div>
                        </MenuItemChat>
                    }
                    {menuItems.map((item, index) => (
                        <MenuItem key={index}>
                            <MenuIcon>{item.icon}</MenuIcon>
                            <div>
                                {item.text}
                            </div>
                        </MenuItem>
                    ))}
                </SidebarContent>
            </SidebarContainer>
            <ContentArea>
                <Contain>
                    {children}
                </Contain>
            </ContentArea>
        </PageContainer>
    )
}