import styled from 'styled-components';
import { Check, ExclamationCircle, Remove } from '~/icons';

export const SuccessIcon = styled(Check).attrs({ width: 18, height: 18 })`
  margin-right: 8px;
`;

export const InfoIcon = styled(ExclamationCircle).attrs({ width: 18, height: 18 })`
  margin-right: 8px;
`;

export const ErrorIcon = styled(Remove).attrs({ width: 18, height: 18 })`
  margin-right: 8px;
`;

export const Notifications = styled.div`
  position: fixed;
  padding-top: 50px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  pointer-events: none;
`;

export const NotificationContainer = styled.div`
  width: 460px;
  padding: 8px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${({ theme }) => theme.palette.base.main};
  border-radius: 4px;
  margin-bottom: 10px;
  color: rgb(199, 27, 25);

  animation-duration: 0.3s;
  animation-name: appear;
  @media (max-width: 480px) {
    width: 280px;
  }
  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  pointer-events: auto;
`;
