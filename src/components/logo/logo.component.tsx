import { useNavigate } from 'react-router-dom';
import { LogoContainer, LogoIcon, LogoText } from './logo.styles';

export const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <LogoContainer onClick={handleClick}>
      <LogoIcon />
      <LogoText>Browser Notes</LogoText>
    </LogoContainer>
  );
};
