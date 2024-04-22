import type { NextPage } from 'next';
import { TodoList } from '../components/TodoList';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Gerenciador de Tarefas</h1>
      <TodoList />
    </div>
  );
};

export default Home;
