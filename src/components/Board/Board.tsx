import Column from "../Column/Column";

const Board = () => {
    const columns = ["Todo", "Doing", "Done"];
    return (
        <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {columns.map(column => (
                <Column columnName={column} />
            ))}
        </div>
    );
}

export default Board;