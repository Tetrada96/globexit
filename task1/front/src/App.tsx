
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { UserCard } from './components/UserCard/UserCard';
import searchIcon from './assets/search.svg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ModalInfo } from './components/ModalInfo/ModalInfo';

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

  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  const onClickCard = (user: IUser) => {
    setOpen(true);
    setCurrentUser(user)
  }

  const onModalClose = () => setOpen(false);

  return (
    <>
      <div className='wrapper'>

      <div className='search'>
        <img className='search-icon' src={searchIcon} />
        <input className='input' onChange={onChange}></input>
      </div>
        <div className='container'>
          {users.length === 0 ? <div>Список пуст</div> : users.map(user => {
            return <UserCard key={user.address} onClick={onClickCard} user={user} />
          })}
        </div>
      </div>
      <Modal
        open={open}
        onClose={onModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='box' >
          <ModalInfo user={currentUser} onClose={onModalClose} />
        </Box>
      </Modal>
    </>
  )
}

export default App
