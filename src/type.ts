export type User = {
    name: string;
    isAdmin: boolean;
    isLogin: boolean;
}

export type Courses = {
    title: string;
    phase: string;
    index: number;
    dir: string;
    lectures:Lecture[]
}

export type Lecture = {
    title: string,
    thumbnail?: string,
    index: number
}
