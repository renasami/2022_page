import {FC} from "react"
import BasicTemplate from "../../templates/BasicTemplate"
const Home:FC = () => {

    return (
        <>
            <BasicTemplate>
            <h1>宮治研春の勉強会</h1>
            <p>このサイトで全てのテキストとデモアプリへのアクセスが可能になっています</p>
            <p>質問期間(zoom)は現状未定です</p>
            <p>このサイトのコードは<span><a href="https://github.com/renasami/2022_page">こちら</a></span>にあります</p>
            <p>react,typescript,ant design,etc... で作っております</p>
            <p>アプリのコードは<span><a href="https://github.com/renasami/spring_training_2022">こちら</a></span>にあります</p>
            <p>頑張ってください。テキストでの質問はいつでも受け付けています!</p>
            {/* <p>sei もしくは 阿左見 まで!!!</p> */}
            </BasicTemplate>
        </>
    )
}

export default Home