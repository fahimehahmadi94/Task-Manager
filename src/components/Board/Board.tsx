import { useEffect, useState } from "react";
import Column from "../Column/Column";
import { BoardInterface } from "../../models/interfaces/Board.interface";
import axios from "axios";
import SkeletonBoard from "./SkeletonBoard";

const Board = () => {
    const [data, setData] = useState<BoardInterface[]>([]);

    useEffect(() => {
        axios.get("https://task-manager-d6149-default-rtdb.firebaseio.com/getAllTask.json")
            .then((res) => {
                const fetchedData = res.data ? res.data.data : [];
                setData(fetchedData);
            })
            .catch((err) => {
                console.log("Error:", err);
                setData([]);
            });
    }, []);

    return (
        <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data && data.length > 0 ? (
                data.map((d, i) => (
                    <Column key={i} columnName={d.title} />
                ))
            ) : (
                <>
                    <SkeletonBoard />
                </>
            )}
        </div>
    );
};

export default Board;
