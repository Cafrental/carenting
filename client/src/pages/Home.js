import CarCards from '../components/CarCards';
import FrontPage from '../components/FrontPage';
import AddCarForm from '../components/AddCarForm';


const App = () => {
  return (
    <div className='w-full font-MinionProMedium'>
      <FrontPage/>
      <AddCarForm/>
      <CarCards/>
    </div>
  )
}

export default App