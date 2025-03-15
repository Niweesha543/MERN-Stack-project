import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/admin" element={<Dashboard />} />
        </Routes>
        </>
    );
};

export default AppRoutes;
