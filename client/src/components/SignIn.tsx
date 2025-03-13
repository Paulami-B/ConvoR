import InputBox from './InputBox'
import PasswordInputBox from './PasswordBox'
import AuthButton from './AuthButton'

export default function SignIn() {
  return (
    <div className='h-full my-6'>
        <div className='py-2'>
            <InputBox name="email" type="email" label="Email" />
        </div>
        <div className="py-2">
            <PasswordInputBox name="password" label="Password" />
         </div>
        <AuthButton label='Sign In' />
    </div>
  )
}
