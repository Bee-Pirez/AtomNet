import React from 'react';
import { ContainerLabel } from "./styled";

export function Input({ name, prefix, type }) {
  return (
    <ContainerLabel>
      {name}
      <input type={type} placeholder={prefix} />
    </ContainerLabel>
  );
}
