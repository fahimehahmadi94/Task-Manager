const Column = (props: any) => {
    return (
        <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            {props.columnName}
        </div>
    );
}


export default Column;

