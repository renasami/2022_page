import { FC } from "react"
import CourseCard from "../../molcules/CourseCard"
import BasicTemplate from "../../templates/BasicTemplate"

const Courese:FC = () => {
    return (
        <>
            <BasicTemplate>
            <h1>Courese</h1>
            <CourseCard/>
            </BasicTemplate>
        </>
    )
}

export default Courese