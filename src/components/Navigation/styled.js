import styled from 'styled-components';
import Link from '@components/ui/Link';

export const NavBox = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  background: ${({ theme }) => theme.color.main};
  ${Link} {
    padding: 0 10px;
  }
`;

export const Logo = styled.img`
  width: 80px;
  margin-right: 20px;
`;
