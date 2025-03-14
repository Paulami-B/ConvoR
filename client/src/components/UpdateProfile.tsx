import { useCallback, useState } from "react";
import InputBox from "./InputBox";
import PasswordInputBox from "./PasswordBox";

export default function UpdateProfile() {
  const [values, setValues] = useState({
    name: '',
    about: '',
    npassword: '',
    cpassword: ''
  });

  const [imageURL, setImageURL] = useState<string>('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const changeAvatar = () => {
    setImageURL(`https://avatar.iran.liara.run/public/${Math.round(Math.random()*100)}`);
  }

  const handleInputChangeFile = (input: HTMLInputElement) => {
    return async(e: Event) => {
      e.preventDefault();
      const file = input.files?.item(0);
      if(file){
        setImageURL(URL.createObjectURL(file));
      }
    }
  }

  const handleImageChange = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    const handlerfn = handleInputChangeFile(input);

    input.addEventListener("change", handlerfn);
    input.click();
  }, [handleInputChangeFile]);

  return (
    <div className="w-96 my-3">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Profile</h2>
      <div className="flex justify-between items-center">
        <img src={imageURL} 
        className="rounded-full w-25 h-25 border-4 border-orange-500" />
        <div className="flex gap-3">
          <button className="cursor-pointer border-3 border-orange-500 hover:bg-orange-500 h-fit p-2 rounded-lg font-bold hover:text-white"
          onClick={handleImageChange}>
            Upload Image
          </button>
          <button className="cursor-pointer border-3 border-purple-500 hover:bg-purple-500 h-fit p-2 rounded-lg font-bold hover:text-white"
          onClick={changeAvatar}>
            Set Avatar
          </button>
        </div>
      </div>
      <div className="mt-8">
        <InputBox name="name" type="text" label="Name" handleChange = {handleChange} />
        <InputBox name="about" type="text" label="About" handleChange = {handleChange} />
        <PasswordInputBox name="npassword" label="New Password" handleChange = {handleChange} />
        <PasswordInputBox name="cpassword" label="Current Password" handleChange = {handleChange} />
        <div className="flex justify-between mt-7">
          <button className="cursor-pointer border-3 border-red-500 hover:bg-red-500 h-fit p-2 rounded-lg font-bold hover:text-white">Delete Account</button>
          <button className="cursor-pointer border-3 border-green-500 hover:bg-green-500 h-fit p-2 rounded-lg font-bold hover:text-white">Save Changes</button>
        </div>
      </div>
    </div>
  )
}
