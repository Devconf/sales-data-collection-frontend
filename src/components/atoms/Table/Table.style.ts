import styled from 'styled-components';

export const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
`;

export const Tr = styled.tr`
  &:last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export const Th = styled.th`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgDivider};
  text-align: left;
  &:last-child {
    border-right: 0;
  }
`;

export const Td = styled.td`
  margin: 0;
  padding: 1rem 0.5rem 1rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgDivider};

  &:last-child {
    border-right: 0;
  }
`;
