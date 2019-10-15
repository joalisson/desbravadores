import React from 'react';

interface IIcon {
  name: string;
}

const Icon: React.FC<IIcon> = ({ name }) => (
  <span className="material-icons">{name}</span>
)

export default Icon;