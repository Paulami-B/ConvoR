import InputBox from './InputBox'
import PasswordInputBox from './PasswordBox'
import AuthButton from './AuthButton'

export default function SignUp() {
  return (
    <div>
        <InputBox name="name" type="text" label="Name" />
        <InputBox name="email" type="email" label="Email" />
        <PasswordInputBox name="password" label="Password" />
        <PasswordInputBox name="confirmPassword" label="Confirm Password"/>
        <AuthButton label='Sign Up' />
    </div>
  )
}
