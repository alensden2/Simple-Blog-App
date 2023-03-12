import React, { useContext } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toast } from '@src/components';
import { ToastContext } from '@src/context';
import { Landing, SignIn, SignUp, Pets } from './pages';

const RoutesComp = () => {
  const { toast } = useContext(ToastContext);

  return (
    <BrowserRouter>
      <Toast toast={toast} />
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="pets" element={<Pets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
