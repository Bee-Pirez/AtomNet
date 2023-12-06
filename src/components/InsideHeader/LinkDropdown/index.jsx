// linkdropdown.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import { DropdownContainer, DropdownButton, DropdownList, DropdownItem, ArrowIcon } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const LinkDropdown = ({ items, firstLinkLabel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {firstLinkLabel} <ArrowIcon isOpen={isOpen}><FontAwesomeIcon icon={faAngleDown} /></ArrowIcon>
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {items.map((item, index) => (
            <DropdownItem key={index}>
              <Link to={item.link}>{item.label}</Link>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default LinkDropdown;
