import { User } from "../types";

export interface EventBusEvents {
    'auth:login': { user: User }
    'auth:logout': null
    'auth:request_user_info': null
}
