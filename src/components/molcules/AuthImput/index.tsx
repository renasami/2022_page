import { Form, Input } from "antd"
import { Rule } from "antd/lib/form";
import {Dispatch, FC, useEffect, useState} from "react"


type Props = {
    state: string,
    setState: Dispatch<React.SetStateAction<string>>,
    message: string,
    label:string,
    hide: boolean,
}

const AuthImput:FC<Props> = ({
    state,
    setState,
    message,
    label,
    hide
}) => {
    const [rules, setRules] = useState<Rule[]>([{ required: true, message:message }]);
    const onChange = (e:any) => {
        setState(e.target.value)
    }
    
    useEffect(() => {
        if (label === "Password") {
            setRules([...rules,{
                min: 6,
                message: '6文字以上で入力してください',
                validateTrigger: 'submit',
            }])
        } else if (label === "Email"){
            setRules([...rules,{
                pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                message: 'メールアドレスを追加してください。',
                validateTrigger: 'submit',
            }])
        }
    },[])

    return (
        <Form.Item
              label={label}
              name={label}
              rules={rules}
            >
            { hide ?
            <Input.Password value={state} onChange={onChange}/>
            :
             <Input value={state} onChange={onChange}/> 
             }
        </Form.Item>
    )
}

export default AuthImput