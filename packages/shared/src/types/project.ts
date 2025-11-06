import { User } from "./user"

export type UserRole = 'admin' | 'developer' | 'artist' | 'tester'

export interface ProjectMember {
    projectId: string
    userId: string
    user: User
    role: UserRole
    joinedAt: string
}

export type TaskStatus = 'todo' | 'in_progress' | 'need_testing' | 'in_testing' | 'done'
export type TaskPriority = 'low' | 'medium' | 'high'

export interface Task {
    id: string
    title: string
    description: string
    status: TaskStatus
    priority: TaskPriority
    projectId: string
    creatorId: number
    assigneeId: number
    dueDate: string
    createdAt: string
    updatedAt: string
}

export interface Project {
    id: string
    title: string
    description: string
    image?: string
    ownerId: number
    isPublic: boolean
    createdAt: string
    members: ProjectMember[]
}
