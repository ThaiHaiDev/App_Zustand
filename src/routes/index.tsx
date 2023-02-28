import { Route, Routes } from 'react-router-dom';
import Album from '../components/Album/Album';
import Couter from '../components/Counter/Couter';
import TodoList from '../components/TodoList/TodoList';

const SetupRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/couter" element={<Couter />} />
            <Route path="/callapi" element={<Album />} />
        </Routes>
    );
};

export default SetupRouter;