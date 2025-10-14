//api instance
const authUrl = '/auth'
export const registerUrl = authUrl + '/register'
export const loginUrl = authUrl + '/login'
export const logoutUrl = authUrl + '/logout'
export const refreshUrl = authUrl + '/refresh'
export const forgotPasswordUrl = authUrl + '/forgot-password'
export const resetPasswordUrl = authUrl + '/reset-password'
export const getMeUrl = authUrl + '/me'

export const usersUrl = '/users'
export const userUrl = (userId: number) => `${usersUrl}/${userId}`

export const projectsUrl = '/projects'
export const projectUrl = (projectId: string) => `${projectsUrl}/${projectId}`

export const projectMembersUrl = (projectId: string) => `${projectUrl(projectId)}/members`
export const projectMemberUrl = (projectId: string, memberId: number) => `${projectMembersUrl(projectId)}/${memberId}`

export const projecTasksUrl = (projectId: string) => `${projectUrl(projectId)}/tasks`
export const projectTaskUrl = (projectId: string, taskId: string) => `${projecTasksUrl(projectId)}/${taskId}`
