import React, {useState} from 'react';
import styled from 'styled-components';
import { Search } from 'lucide-react';
import HeaderComponent from "./Header";

const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 1080px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${props => props.active ? '#000' : '#666'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  padding: 5px 0;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  font-size: 16px;
  width: 100%;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 15px 10px;
  border-bottom: 1px solid #e0e0e0;
  color: #666;
  font-weight: normal;
`;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

const TableCell = styled.td`
  padding: 15px 10px;
`;

const StatusBadge = styled.span`
  background-color: ${props => {
    switch(props.status) {
        case 'Active': return '#e8f5e9';
        case 'On hold': return '#fff3e0';
        case 'Resolved': return '#e0e0e0';
        default: return '#f5f5f5';
    }
}};
  color: ${props => {
    switch(props.status) {
        case 'Active': return '#4caf50';
        case 'On hold': return '#ff9800';
        case 'Resolved': return '#757575';
        default: return '#9e9e9e';
    }
}};
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
`;

const IncidentList = () => {
    const initialIncidents = [
        { id: 1, name: 'Power outage in downtown', team: 'PowerGrid', status: 'Active', created: '10:00 PM, 2/3/22' },
        { id: 2, name: 'Flooding on 5th and Main', team: 'CityWorks', status: 'Active', created: '9:30 PM, 2/3/22' },
        { id: 3, name: 'Traffic lights out on 1st Ave', team: 'TransitTech', status: 'On hold', created: '8:45 PM, 2/3/22' },
        { id: 4, name: 'Gas leak on 3rd St', team: 'FireRescue', status: 'Active', created: '7:15 PM, 2/3/22' },
        { id: 5, name: 'Elevator malfunction at City Hall', team: 'FacilitiesFix', status: 'Resolved', created: '6:20 PM, 2/3/22' },
    ];

    const [incidents, setIncidents] = useState(initialIncidents);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filterIncidents = (filter) => {
        setActiveFilter(filter);
        if (filter === 'All') {
            setIncidents(initialIncidents);
        } else {
            const filteredIncidents = initialIncidents.filter(incident => incident.status === filter);
            setIncidents(filteredIncidents);
        }
    };

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const searchedIncidents = initialIncidents.filter(incident =>
            incident.name.toLowerCase().includes(term) ||
            incident.team.toLowerCase().includes(term)
        );
        setIncidents(searchedIncidents);
    };

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Container>
                <Title>Incidents</Title>
                <FilterBar>
                    {['All', 'Active', 'Resolved', 'On hold', 'Dismissed', 'Unassigned'].map(filter => (
                        <FilterButton
                            key={filter}
                            active={activeFilter === filter}
                            onClick={() => filterIncidents(filter)}
                        >
                            {filter}
                        </FilterButton>
                    ))}
                </FilterBar>
                <SearchBar>
                    <Search size={20} color="#666" />
                    <SearchInput
                        placeholder="Search by incident"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </SearchBar>
                <Table>
                    <thead>
                    <tr>
                        <TableHeader>Incident</TableHeader>
                        <TableHeader>Team</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Created</TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    {incidents.map(incident => (
                        <TableRow key={incident.id}>
                            <TableCell>{incident.name}</TableCell>
                            <TableCell>{incident.team}</TableCell>
                            <TableCell>
                                <StatusBadge status={incident.status}>{incident.status}</StatusBadge>
                            </TableCell>
                            <TableCell>{incident.created}</TableCell>
                        </TableRow>
                    ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default IncidentList;