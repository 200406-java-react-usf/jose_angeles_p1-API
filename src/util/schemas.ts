// schema for User
export interface UserSchema {
    ers_user_id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
}

// schema for Reimbursements
export interface ReimbursementSchema {
    reimb_id: number,
    amount: number;
    submitted: Date;
    resolved: Date;
    description: string;
    author: string;
    resolver: number;
    status: string;
    type: string;
}