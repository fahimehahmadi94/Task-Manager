const Column = (props: any) => {

    return (
        <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            <div className="flex flex-col justify-between">
                <span className="capitalize text-red-600">
                    {props.columnName}
                </span>
                <span>tasks</span>
                <span>date</span></div>
        </div>
    );
}


export default Column;

