export type User = {
    name: string;
    isAdmin: boolean;
    isLogin: boolean;
}

export type Course = {
    title: string,
    thumbnail?: string,
    phase?: number,
    index?: number
}