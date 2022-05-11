import * as React from 'react';

import { Routes, Route } from 'react-router-dom';
import { ContentArea } from '../layout';

const DashboardPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "dashboard" */
      'src/pages/dashboard'
    ),
);

const ContactsPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "contacts" */
      'src/pages/contacts'
    ),
);

export const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ContentArea />}>
        <Route index element={<DashboardPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
