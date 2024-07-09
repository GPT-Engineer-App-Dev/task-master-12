import { Button } from "@/components/ui/button";

const TodoItem = ({ task, onDelete, onEdit }) => {
  return (
    <li className="flex items-center justify-between bg-white p-2 rounded shadow">
      <span>{task.text}</span>
      <div className="space-x-2">
        <Button variant="outline" size="sm" onClick={() => onEdit(task)}>
          Edit
        </Button>
        <Button variant="destructive" size="sm" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;