import {Courses ,Lecture} from "../type"

export const courseList:Courses[] = [
    {
        title: "環境構築",
        phase:"0",
        index:4,
        dir:"docker",
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
    {
        title: "レクチャー1",
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
        title: "レクチャー2",
        phase:"1",
        index:2,
        dir:"2",
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
]
