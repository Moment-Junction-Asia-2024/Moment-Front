import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';



const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const LayerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const LayerButton = styled.button`
  padding: 8px;
  background-color: ${props => props.active ? '#885EE1' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : 'black'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const SearchInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CalendarDay = styled.div`
  text-align: center;
  padding: 5px;
  background-color: ${props =>
    props.isSelected ? '#885EE1' :
        props.inRange ? '#e8eaed' : 'transparent'
};
  color: ${props =>
    props.isSelected ? 'white' :
        props.isCurrentMonth ? 'black' : '#ccc'
};
  border-radius: ${props =>
    props.isSelected ? '50%' : '0'
};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props =>
    props.isSelected ? '#885EE1' : '#f1f3f4'
};
  }
`;

export const ImageFilterPopup = ({ isOpen, onClose }) => {
    const [activeLayers, setActiveLayers] = useState(['Road']);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const toggleLayer = (layer) => {
        setActiveLayers(prev =>
            prev.includes(layer) ? prev.filter(l => l !== layer) : [...prev, layer]
        );
    };

    const changeMonth = (increment) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + increment);
            return newDate;
        });
    };

    const handleDateClick = (date) => {
        if (!startDate || (startDate && endDate)) {
            setStartDate(date);
            setEndDate(null);
        } else if (date < startDate) {
            setEndDate(startDate);
            setStartDate(date);
        } else {
            setEndDate(date);
        }
    };

    const isDateInRange = (date) => {
        return startDate && endDate && date > startDate && date < endDate;
    };

    const isDateSelected = (date) => {
        return (startDate && date.getTime() === startDate.getTime()) ||
            (endDate && date.getTime() === endDate.getTime());
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<CalendarDay key={`empty-${i}`} />);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            days.push(
                <CalendarDay
                    key={day}
                    isSelected={isDateSelected(date)}
                    inRange={isDateInRange(date)}
                    isCurrentMonth={true}
                    onClick={() => handleDateClick(date)}
                >
                    {day}
                </CalendarDay>
            );
        }

        return days;
    };

    if (!isOpen) return null;

    return (
        <PopupOverlay onClick={onClose}>
            <PopupContent onClick={e => e.stopPropagation()}>
                <Title>Layers</Title>
                <Section>
                    <LayerGrid>
                        {['CCTV', 'Disaster', 'Road', 'Maintenance', 'Traffic'].map(layer => (
                            <LayerButton
                                key={layer}
                                active={activeLayers.includes(layer)}
                                onClick={() => toggleLayer(layer)}
                            >
                                {layer}
                            </LayerButton>
                        ))}
                    </LayerGrid>
                </Section>
                <Section>
                    <SectionTitle>Time</SectionTitle>
                    <CalendarHeader>
                        <ChevronLeft onClick={() => changeMonth(-1)} />
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                        <ChevronRight onClick={() => changeMonth(1)} />
                    </CalendarHeader>
                    <CalendarGrid>
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                            <CalendarDay key={day}>{day}</CalendarDay>
                        ))}
                        {renderCalendar()}
                    </CalendarGrid>
                    {/*{startDate && (*/}
                    {/*    <div>*/}
                    {/*        Selected: {startDate.toDateString()}*/}
                    {/*        {endDate && ` - ${endDate.toDateString()}`}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </Section>
                <Section>
                    <SectionTitle>Area</SectionTitle>
                    <SearchInput placeholder="Search area" />
                </Section>
            </PopupContent>
        </PopupOverlay>
    );
};