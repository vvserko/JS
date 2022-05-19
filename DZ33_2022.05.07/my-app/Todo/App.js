import {React,  Fragment, useState } from 'react';
import Tr from './Tr'



export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [status, setStatus] = useState(false);
  const [del, setDel] = useState('')
  

  function taskChange(event) {
      setTask(event.target.value);
    
    
  }

  function changeStatus(){
    setStatus(true)
  }
  function changeDel(){
    setDel(del)
  }


  function formSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, task]);
    setStatus(true);
  }

  return (
    <Fragment>
      <form onSubmit={formSubmit} class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
        <div class="col-12">
          <div class="form-outline">
            <input onChange={taskChange} type="text" id="form1" class="form-control" />
            <label class="form-label" for="form1">Enter a task here</label>
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Save</button>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-warning">Get tasks</button>
        </div>
      </form>
      <table class="table mb-4">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map( (t,i) => <Tr  key={i}  task={t} status={status} num={i} onStatus={changeStatus} del = {del} onDel={changeDel}/>)}
        </tbody>
      </table>

    </Fragment>
  );
}

