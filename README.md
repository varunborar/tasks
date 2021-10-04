# tasks

## Add request

For adding the tasks, POST the request to the following url <br/>
`http://localhost:7700/task/add`

Body of the task can include description and completed attributes, For example,
```
{
    "description": "Hello this is a test task",
    "completed": false
}
```

## Update request

For marking a task as complete, PUT the request to the following url <br/>
`http://localhost:7700/task/complete/<id>`

Where <id> is the id of task that is completed.

## Delete request

For deleting a task from the list, DELETE the request to the following url <br/>
`http://localhost:7700/task/delete/<id>`

Where <id> is the id of task that should be deleted.

## Get request

To get all the tasks that are not yet completed, GET the request to the following url <br/>
`http://localhost:7700/task`
