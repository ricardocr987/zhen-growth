import { FC } from 'react';
import { AppLayout } from './components/Layout';


export const Providers: FC = ({ children }) => {
  return (
    <AppLayout>{children}</AppLayout>
  );
};
