import {Courses ,Lecture} from "../type"

export const courseList:Courses[] = [
    {
        title: "環境構築",
        phase:"0",
        index:4,
        dir:"docker",
        lectures:[
            {
                title: "1/2",
                thumbnail:"",
                index:0
            },
            {
                title: "2/2",
                thumbnail:"",
                index:1
            }
        ]
    },
    {
        title: "stage1",
        phase:"0",
        index:2,
        dir:"1",
        lectures:[
            {
                title: "1/2",
                thumbnail:"",
                index:0
            },
            {
                title: "2/2",
                thumbnail:"",
                index:1
            },
        ]
    },
    {
        title: "stage2",
        phase:"1",
        index:3,
        dir:"2",
        lectures:[
            {
                title: "1/3",
                thumbnail:"",
                index:0
            },
            {
                title: "2/3",
                thumbnail:"",
                index:1
            },
            {
                title: "3/3",
                thumbnail:"",
                index:2
            }
        ]
    },
    {
        title: "stage3 フロント",
        phase:"1",
        index:5,
        dir:"step3-f",
        lectures:[
            {
                title: "1/5",
                thumbnail:"",
                index:0
            },
            {
                title: "2/5",
                thumbnail:"",
                index:1
            },
            {
                title: "3/5",
                thumbnail:"",
                index:2
            },
            {
                title: "4/5",
                thumbnail:"",
                index:3
            },
            {
                title: "5/5",
                thumbnail:"",
                index:4
            },
        ]
    },
    {
        title: "stage3 バックエンド",
        phase:"1",
        index:3,
        dir:"step3-b",
        lectures:[
            {
                title: "1/4",
                thumbnail:"",
                index:0
            },
            {
                title: "2/4",
                thumbnail:"",
                index:1
            },
            {
                title: "3/4",
                thumbnail:"",
                index:2
            },
            {
                title: "4/4",
                thumbnail:"",
                index:3
            }
        ]
    },
]
