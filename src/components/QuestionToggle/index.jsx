// QuestionToggle.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DropdownContainer, DropdownTitle, DropdownContent } from './styled';

const QuestionToggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownTitle onClick={toggleDropdown}>
        {title} <FontAwesomeIcon icon={faChevronDown} />
      </DropdownTitle>
      <DropdownContent isOpen={isOpen}>
        {children}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default QuestionToggle;
