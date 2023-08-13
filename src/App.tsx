import {useState} from "react";
import {ThemeProvider} from 'styled-components'
import Header from "./components/Header";
import Global from './components/Global';
import Wrapper from './components/Wrapper';
import Body_header from './components/Body_header';
import Form from "./components/Form";
import DoubleField from "./components/DoubleField";
import Field from "./components/Field";
import Input from "./components/Input";
import Message from "./components/Message";
import Textarea from "./components/Textarea";
import FieldIcon from "./components/FieldIcon";
import MessageIcon from "./components/MessageIcon";

import PERSON_ICON from "./assets/icons/PERSON_ICON.svg";
import EMAIL_ICON from "./assets/icons/EMAIL_ICON.svg";
import PHONE_ICON from "./assets/icons/PHONE_ICON.svg";
import WEBSITE_ICON from "./assets/icons/WEBSITE_ICON.svg";
import MESSAGE_ICON from "./assets/icons/MESSAGE_ICON.svg";

const themes = {
  background: "#0D6EFD",
  active: "#0D6EFD",
  unactive:"#bfbfbf",
  white:"#fff",
}
interface Focus {
  name:boolean,
  email:boolean,
  phone:boolean,
  website:boolean,
  message:boolean,
}
function App() {
  const [cName,sName] = useState<string>();
  const [cEmail,sEmail] = useState<string>();
  const [cPhone,sPhone] = useState<string>();
  const [cWebsite,sWebsite] = useState<string>();

  const [cFocus, setFocus] = useState<Focus>({
    name: false,
    email: false,
    phone: false,
    website: false,
    message: false
  });


  const inputData1 = [
    {
      content:"name",
      img:PERSON_ICON,
      value:cName,
      onChange:(e:any) => sName(e.target.value),
      onFocus:(e:any) => setFocus(prev => ({
        ...prev,
        name: true
      })),
    },
    {
      content:"email",
      img:EMAIL_ICON,
      value:cEmail,
      onChange:(e:any) => sEmail(e.target.value),
    },
  ]
  const inputData2 = [
    {
      content:"phone",
      img:PHONE_ICON,
      value:cPhone,
      onChange:(e:any) => sPhone(e.target.value),
    },
    {
      content:"website",
      img:WEBSITE_ICON,
      value:cWebsite,
      onChange:(e:any) => sWebsite(e.target.value),
    },
  ]
  return (
    <ThemeProvider theme={themes}>
      <Header/>
      <Global/>
      <Wrapper>
        <Body_header>Send us a Message</Body_header>
        <Form action="#">
          <DoubleField>
            {inputData1.map((data:any,idx:number) => (
            <Field key={idx}>
              <Input type="text" placeholder={`Enter your ${data.content}`} value={data.value} onChange={data.onChange} onFocus={data.onFocus}/>
              <FieldIcon src={data.img} alt={`${data.content} icon`}/>
            </Field>
            ))}
          </DoubleField>
          <DoubleField>
            {inputData2.map((data:any,idx:number) => (
             <Field key={idx}>
              <Input type="text" placeholder={`Enter your ${data.content}`} value={data.value} onChange={data.onChange} onFocus={data.onFocus}/>
              <FieldIcon src={data.img} alt={`${data.content} icon`}/>
             </Field>
            ))}
          </DoubleField>
          <Message className="message">
            <Textarea placeholder="Write your message"></Textarea>
            <MessageIcon src={MESSAGE_ICON} alt="message icon"/>
          </Message>
          <div className="button-area">
            <button type="submit">Send message</button>
            <span>Sending your message....</span>
          </div>
        </Form>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
