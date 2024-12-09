import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home"
import { ClientsList } from "../pages/ClientsList"
import { NewClient } from "../pages/NewClient"
import { NewEntry } from "../pages/NewEntry"
import { Profile } from "../pages/Profile"
import { ClientDebts } from "../pages/ClientDebts"

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ClientsList" element={<ClientsList />}/>
      <Route path="/NewClient" element={<NewClient />}/>
      <Route path="/NewEntry" element={<NewEntry />}/>
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/ClientDebts" element={<ClientDebts />}/>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}