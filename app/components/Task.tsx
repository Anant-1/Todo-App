
"use client";

import { ITask } from '@/types/tasks'
import React, { FormEventHandler, useEffect, useState } from 'react'
import {FiEdit, FiTrash2} from "react-icons/fi"
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Modal from './Modal';
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
    task: ITask;
}
const Task: React.FC<TaskProps> = ({task}) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
    const [isComplete, setIsComplete] = useState<boolean>(task.status);
    useEffect(()=>{
        console.log(isComplete);
    },[isComplete])
    const handleSubmitEditTodo:FormEventHandler<HTMLFormElement> = async(e) =>{
        e.preventDefault();
        await editTodo({
            id:task.id,
            text: taskToEdit,
            status: task.status

        });
        setOpenModalEdit(false);
        router.refresh();
    }
    
    const handleDeleteTask= async(id:string) =>{
        await deleteTodo(id);
        setOpenModalEdit(false);
        router.refresh();
    }
    const toggleComplete = async () => { 
        setIsComplete(!isComplete);
        task.status = !task.status;
        await editTodo({
            id: task.id,
            text: task.text,
            status: task.status,
          })
          router.refresh();
      };

  return (
        <tr key={task.id} className='hover'>
            <td className='w-full'>{task.text}</td>
            
            <td className='flex gap-5'>
                <FiEdit 
                onClick={()=> setOpenModalEdit(true)}
                cursor="pointer" className="text-blue-500" size={25}/>
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className="font-bold text-lg">Edit Task</h3>
                        <div className="modal-action">
                            <input 
                            value={taskToEdit}
                            onChange={e=>setTaskToEdit(e.target.value)}
                            type="text" placeholder="Type here" className="input input-bordered w-full" />
                            <button type="submit" className="btn btn-active btn-neutral">Submit</button>
                        </div>
                    </form>
                </Modal>
                <FiTrash2 
                onClick={()=> setOpenModalDeleted(true)}
                cursor="pointer" className="text-red-500" size={25}/>
                <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalEdit}>
                    <h3>Are you sure, you want to delete this task?</h3>
                    <div className='modal-action'>
                        <button
                        onClick={()=> handleDeleteTask(task.id)}
                        className='btn'
                        >Yes</button>
                    </div>
                </Modal>
            </td>
            <td> <input onClick={toggleComplete} type="checkbox" checked={isComplete? true:false} className="checkbox checkbox-primary"/></td>
        </tr>
  )
}

export default Task
