import Board from "../components/Board/Board";

const Dashboard = () => {
    return (
        <div className="h-screen bg-indigo-950 p-3">
            <h1 className="text-center text-gray-100 text-xl">
                Task Management
            </h1>
            <div className="h-5/6 mt-3 ">
               <Board/>
            </div>
        </div>
    );
}

export default Dashboard;
