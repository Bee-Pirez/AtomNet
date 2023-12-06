import React, { useState } from 'react';
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
            <DropdownItem key={index} href={item.link}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default LinkDropdown;