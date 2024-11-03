/*
1. User successfully logs in
2. After successful login, backend API will send JWT token, workspace ID list, unorganized task list from the DB
3. Using the workspace ID list, fetch the project objects that the currently logged in user has access to -> this dataload will also send the tasks that the user has access to
4. Render the tasks on the UI
*/
