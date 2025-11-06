import TodoForm from "./components/forms/TodoForm";
import NavBar from "./components/NavBar";
import TodoTable from "./components/tables/TodoTable";

function App() {


  
  return (
    <>
      <NavBar />
      <section className="flex bg-[#d1e6ff] h-screen w-screen ">
        <div className="flex-1">
          <TodoForm />
        </div>
        <div className="min-w-[70%]">
          <TodoTable />
        </div>
      </section>
    </>
  );
}

export default App;