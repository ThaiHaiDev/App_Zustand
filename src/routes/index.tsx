import { Route, Routes } from 'react-router-dom';
import Album from '../components/Album/Album';
import Couter from '../components/Counter/Couter';
import TodoListPage from '../pages/TodoListPage/TodoListPage';

const SetupRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoListPage />} />
            <Route path="/couter" element={<Couter />} />
            <Route path="/callapi" element={<Album />} />
        </Routes>
    );
};

export default SetupRouter;