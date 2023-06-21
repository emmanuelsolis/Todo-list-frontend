export interface Todo {
    id: string;
    descript:string
    completed : boolean;
}

export interface TodoState {
    todoCount: number;
    todos: Todo[],
    completed: number;
    pending: number;

}