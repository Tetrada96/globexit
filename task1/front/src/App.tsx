
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { UserCard } from './components/UserCard.tsx/UserCard';
import searchIcon from './assets/search.svg';

export interface IUser {
  name: string;
  phone: string,
  email: string,
  address: string,
  position_name: string,
  department: string,
  hire_date: string
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    axios.get(`http://localhost:3000?term=${event.target.value}`).then(res => setUsers(res.data))
  }

  useEffect(() => {
    axios.get('http://localhost:3000').then(res => setUsers(res.data))
  }, [])

  return (
    <>
      <div className='wrapper'>

      <div className='search'>
        <img className='search-icon' src={searchIcon} />
        <input className='input' onChange={onChange}></input>
      </div>
        <div className='container'>
          {users.length === 0 ? <div>Список пуст</div> : users.map(user => {
            return <UserCard key={user.email} user={user} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
