import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import { clearSession, getUser } from './api/api';
export default function App(){const [user,setUser]=useState(getUser);const [page,setPage]=useState('dashboard');const [menuOpen,setMenuOpen]=useState(false);function logout(){clearSession();setUser(null);setPage('dashboard');setMenuOpen(false);}if(!user)return <AuthPage onLogin={data=>{setUser({id:data.id,name:data.name,email:data.email,role:data.role});setPage('dashboard');}}/>;return <div className="layout"><Sidebar user={user} page={page} setPage={setPage} onLogout={logout} open={menuOpen} onClose={()=>setMenuOpen(false)}/><Dashboard user={user} page={page} setPage={setPage} onMenu={()=>setMenuOpen(true)}/></div>}
