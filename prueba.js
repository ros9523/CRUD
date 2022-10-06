const todoUsers=[
    {
        id:'932f73f3-4e23-4a0e-9ca9-648083871852',
        title:"Read 20 minutes Eloquent",
        is_completed:false,
    },
    {
        id:'1c190d14-848c-4965-b8d6-f42273fda2f8',
        title:"Do workout 1 hours from Monday to friday", 
        is_completed:false,
    },
    {
        id:'fe00c6b9-041e-4a59-84e3-204eb1f72923',
        title:"Read 10 minutes your are too good to be this bad daily",
        is_completed:false,
    }

];

const getTodoUsersById= (id)=>{
    const data =todoUsers.find(todo=>todo.id===id)
    return data
}


console.log(getTodoUsersById('fe00c6b9-041e-4a59-84e3-204eb1f72923'))