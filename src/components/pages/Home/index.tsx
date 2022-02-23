import {FC} from "react"
import BasicTemplate from "../../templates/BasicTemplate"
import { Navigate } from "react-router";
import { useAuthContext } from "../../../context";
import "./style.css"
const Home:FC = () => {

    const { user } = useAuthContext();
    if(!user) return <Navigate to="/login" />
    return (
        <>
            <BasicTemplate>
                <div>
            <h2>概要</h2>
            <hr/>
            <p>HTML+JavaScriptとFastAPIで、APIベースのチャットアプリ作成に取り組んでもらいます。<br/>
            Stage3からは、vueやdatabaseを使ってアプリの完成度を上げていきます。</p>
            <p>確認はしていますが、バグあったらslack等でご報告ください</p>
            <p>2/26〜2/28の3日間の15:00-17:00に三年生がZoomで待機していますので、質問のある方はお気軽にどうぞ。</p>
            <p>3月も1週目の土日にやる予定です</p>
            <p><strong>stage3に関しては数日公開が遅くなります。ごめんなさい。</strong></p>
            <h2>提出</h2>
            <hr></hr>
            <p>提出方式:？？？(要検討)<br/>
            提出期限:3/6 23:59<br/>
            提出内容:ステージ2までが必須課題です。期限までに提出してください。<br/>
            ステージ3からは発展課題という扱いで提出は自由ですが、春休みが終わるまで取り組んでもらえると嬉しいです。
            </p>
            <h2>注意</h2>
            <hr></hr>
            <p>この教材は全部3年生が自作したものです。<b>内容やコードの書き方はできるだけ正確性を重視していますが、あくまでも個人の意見です。</b></p>
            <p>取り組む際、<b>ソースコードを完全に理解する必要はありません。今回はWebアプリ制作に慣れてもらうことが目的です。</b><br/>
            動くものを完成することが大事です。<b>DONE IS BETTER THAN PERFECT ってザッカーバーグも言ってます。</b><br/>
            理解を深めたい場合はそれぞれの作者、バックエンド@chin_sei、フロントエンド@ren asami、CSS@Ami Kudoにお気軽にお聞きください。</p>
            <h2>その他</h2>
            <hr></hr>
            <p>このサイトのコードは<span><a href="https://github.com/renasami/2022_page">こちら</a></span>にあります</p>
            <p>react,typescript,ant design,etc... で作っております</p>
            <p>アプリのコードは<span><a href="https://github.com/renasami/spring_training_2022">こちら</a></span>にあります</p>
            <p>頑張ってください。テキストでの質問はいつでも受け付けています!</p>
            {/* <p>sei もしくは 阿左見 まで!!!</p> */}
            </div>
            </BasicTemplate>
        </>
    )
}

export default Home