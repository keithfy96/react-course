import { useEditTask, useDeleteTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {
  const { editTask, isDone } = useEditTask();
  const { deleteTask, isLoading } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={isLoading}
        onClick={() => deleteTask({ taskId: item.id })}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
