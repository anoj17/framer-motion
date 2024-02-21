import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface iappData {
  username: string,
  password: string,
  email: string
}

let renderCount = 0;

function App() {

  const form = useForm<any>()
  
  const { register, control, handleSubmit, formState } = form

  const { errors } = formState


  const submitData = (data: iappData) => {
    console.log("data are:", data)
  }

  renderCount++
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full h-[100vh] bg-black'>
        <form className='flex flex-col text-white py-20 space-y-7 justify-center items-center'
          onSubmit={handleSubmit(submitData)}
          noValidate
        >
          <h1 className="text-white text-bold text-2xl">Form Data: ({renderCount / 2})</h1>
          <div className='flex flex-col'>
            <label htmlFor="username">UserName:</label>
            <input type="text" id="username" {...register("username",
              {
                required: {
                  value: true,
                  message: "fill the username"
                }
              }
            )}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
            <p className="text-red-600 text-[.8rem] font-semibold">{errors.username?.message}</p>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email", {
              pattern: {
                value: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
                message: 'invalide email'
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (fieldValue !== "admin@gmail.com" || 'enter another email')
                },
                notBlackListed: (fieldValue) => {
                  return (!fieldValue.endsWith("baddomain.com") || "doesn't support this type of email")
                }
              }
            })}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
            <p className="text-red-600 text-[.8rem] font-semibold">{errors.email?.message}</p>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register("password", {
              required: {
                value: true,
                message: "fill the password"
              }
            })}
              className='focus:outline-none pl-3 py-1 bg-gray-700 rounded-lg w-[300px] '
            />
            <p className="text-red-600 text-[.8rem] font-semibold">{errors.password?.message}</p>
          </div>
          <div>
            <button className='px-10 py-2 transition transform duration-300 ease-in-out rounded-r-full text-white font-semibold  rounded-bl-full bg-green-600 hover:rounded-full'>Submit</button>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </>
  )
}

export default App
