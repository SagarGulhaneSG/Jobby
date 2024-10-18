import Home from './components/home/home';
import Jobs from './components/jobs/jobs';
import Login from './components/login/login';
import NotFound from './components/notfound/notFound';
import { Route,Router,Routes } from 'react-router-dom';
import './App.css'
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import DetailedJobView from './components/detailedJobView/detailedJobView';

const App =()=>{

  return(
    <Routes>
      <Route path='/' element={<ProtectedRoute Component={Home}/>} ></Route>
      <Route path='/jobs' element={<ProtectedRoute  Component={Jobs}/>} ></Route>
      <Route path='/jobs/:id' element={<ProtectedRoute  Component={DetailedJobView}/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/*' element={<NotFound/>} ></Route>
    </Routes>
  )
}

export default App
